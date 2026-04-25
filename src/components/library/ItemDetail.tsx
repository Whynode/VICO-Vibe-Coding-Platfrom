"use client";

import { useState } from "react";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import { Download, ChevronLeft, Calendar, User, Tag, Info, Code, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  ItemDetailLayoutProps,
  DetailSectionProps,
  ActionButtonsProps,
  CodeBlockProps,
  MarkdownContentProps,
} from "@/types";

export function ItemDetailLayout({ item, backPath, backLabel, children }: ItemDetailLayoutProps) {
  return (
    <>
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8">
          {/* Breadcrumbs */}
          <Link
            href={backPath}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors mb-6 group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to {backLabel}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              {item.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-surface-2 border border-white/10 rounded-lg p-8 lg:p-12 mt-8">
            <div className="prose dark:prose-invert max-w-none 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-gray-400 prose-p:leading-relaxed
              prose-code:text-gray-300 prose-code:bg-black prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-black prose-pre:border prose-pre:border-white/5 prose-pre:rounded-lg
            ">
              {children}
            </div>
          </div>
        </div>

        {/* Right Column - Command Panel */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 flex flex-col gap-6">
            {/* Action Card */}
            <div className="bg-surface-2 border border-white/10 rounded-lg p-6">
              <button
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors mb-6 text-center text-sm shadow-sm"
                onClick={() => toast.success("Resource added to workspace")}
              >
                Use this {backLabel.slice(0, -1)}
              </button>

              {/* Metadata List */}
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Download className="w-4 h-4" />
                    <span>Downloads</span>
                  </div>
                  <span className="text-white font-mono">{item.popularity}k</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Info className="w-4 h-4" />
                    <span>Version</span>
                  </div>
                  <span className="text-white font-mono">v1.2.0</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Last Updated</span>
                  </div>
                  <span className="text-white">{item.updatedAt}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span>Author</span>
                  </div>
                  <span className="text-white">{item.author}</span>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Tag className="w-4 h-4" />
                    <span>Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-xs text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Sub-components ───

export function DetailSection({
  title,
  icon: Icon,
  children,
}: DetailSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-5 h-5 text-gray-400" />
        <h2 className="text-xl font-bold text-white m-0 tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function ActionButtons({
  content,
  filename,
}: ActionButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = filename.endsWith(".json") ? "application/json" : "text/markdown";
    const blob = new Blob([content], { type: ext });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  return (
    <div className="flex items-center gap-3 not-prose">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors shadow-sm"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy Content"}
      </button>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-[#171717] border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-[#222222] transition-colors"
      >
        <Download className="w-4 h-4" />
        Download .md
      </button>
    </div>
  );
}

export function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-white/5 overflow-hidden bg-black my-6 not-prose">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-1 border-b border-white/5">
        <div className="flex items-center gap-2 text-gray-400">
          <Code className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">
            {filename || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 bg-black overflow-x-auto text-sm text-gray-300 leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = "";

  lines.forEach((line, i) => {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <CodeBlock key={`code-${i}`} code={codeBuffer.join("\n")} language={codeLang} />
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = line.replace("```", "").trim() || "text";
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-white mt-10 mb-4 tracking-tight">
          {line.replace("## ", "")}
        </h3>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">
          {line.replace("# ", "")}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-base text-gray-400 ml-4 list-disc leading-relaxed mb-2">
          {renderInlineCode(line.replace("- ", ""))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-4" />);
    } else {
      elements.push(
        <p key={i} className="text-base text-gray-400 leading-relaxed mb-4">
          {renderInlineCode(line)}
        </p>
      );
    }
  });

  return <div>{elements}</div>;
}

function renderInlineCode(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 bg-black rounded text-sm font-mono text-gray-300 border border-white/5"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      if (bp.startsWith("**") && bp.endsWith("**")) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-white">
            {bp.slice(2, -2)}
          </strong>
        );
      }
      return bp;
    });
  });
}
