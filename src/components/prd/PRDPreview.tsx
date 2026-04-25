"use client";

import { useState } from "react";
import { usePRDStore } from "@/stores/prd-store";
import { DownloadButton } from "./DownloadButton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useLanguage } from "@/components/providers";
import type { PRDPreviewProps, ArtifactTab, TabIconComponent, TabConfig } from "@/types";
import type { PRD } from "@/lib/schemas/prd-schema";
import {
  FileText,
  Copy,
  Sparkles,
  CheckCircle2,
  Terminal,
  Code2,
  ShieldCheck,
  Box,
} from "lucide-react";

// ─── Mock data shown when workflow reaches "completed" state ────────────────

const MOCK_PRD: PRD = {
  overview: {
    name: "Project Luminar",
    problemStatement:
      "Product development teams struggle with fragmented documentation and slow blueprinting processes, leading to misalignment and technical debt.",
    coreObjective:
      "Automate the transition from conceptual chat to technical documentation using AI-driven structural analysis.",
    targetAudience: "Product Managers, Solo Founders, and Engineering Leads",
    tagline: "From Conversation to Professional Blueprint in Seconds.",
  },
  techstack: {
    frontend: ["Next.js 15", "Tailwind CSS 4", "Lucide React", "Framer Motion"],
    backend: ["Node.js", "Vercel AI SDK", "Zustand"],
    database: ["Neon PostgreSQL", "Drizzle ORM", "Upstash Redis"],
    ai: ["Gemini 3.1 Pro", "Mistral Large"],
    infrastructure: ["Vercel Edge Functions", "Docker"],
  },
  coreFeatures: [
    {
      id: "f1",
      name: "AI Blueprint Engine",
      description:
        "Convert natural language descriptions into structured PRD modules with 95% accuracy.",
      priority: "critical",
      status: "planned",
    },
    {
      id: "f2",
      name: "Versioned History",
      description:
        "Track every change to the blueprint with git-like history and diff views.",
      priority: "high",
      status: "planned",
    },
    {
      id: "f3",
      name: "Techstack Recommendation",
      description:
        "Automated suggestion of optimal libraries and frameworks based on feature complexity.",
      priority: "medium",
      status: "planned",
    },
  ],
  rules: [
    {
      id: "r1",
      category: "Performance",
      content: "All initial page loads must be under 1.5s using Edge caching.",
    },
    {
      id: "r2",
      category: "Security",
      content: "Zero-trust architecture with HTTP-only session management.",
    },
  ],
  version: "1.0.0",
  createdAt: new Date(),
  updatedAt: new Date(),
};

// ─── Tab config ────────────────────────────────────────────────────────────

const TABS: TabConfig[] = [
  { key: "Overview.md", icon: FileText },
  { key: "Tech_Stack.md", icon: Code2 },
  { key: "Architecture.md", icon: Box },
  { key: "AI_Rules.md", icon: ShieldCheck },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function PRDPreview({ status = "idle" }: PRDPreviewProps) {
  const prdFromStore = usePRDStore((state) => state.prd);
  const [activeTab, setActiveTab] = useState<ArtifactTab>("Overview.md");
  const { t } = useLanguage();

  // Use mock when status is "completed" (demo / AI returned plain text).
  // Use store data when the AI returned valid JSON and Zustand was updated.
  const prd: PRD | null =
    status === "completed" && !prdFromStore ? MOCK_PRD : prdFromStore;

  // ── Idle state ─────────────────────────────────────────────────────────
  if (status === "idle" && !prdFromStore) {
    return (
      <div className="h-[calc(100vh-160px)] flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.03]" />
        <div className="relative z-10 text-center space-y-4">
          <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mx-auto mb-6">
            <Terminal className="w-6 h-6 text-white/20" />
          </div>
          <h2 className="font-display font-bold text-lg text-white">
            Artifact Waiting
          </h2>
          <p className="text-gray-500 text-[13px] max-w-xs mx-auto">
            Generated blueprints, architecture diagrams, and tech stacks will
            appear here as you chat.
          </p>
        </div>
      </div>
    );
  }

  // ── Generating state ────────────────────────────────────────────────────
  if (status === "generating") {
    return (
      <div className="h-[calc(100vh-160px)] flex flex-col border border-white/5 rounded-2xl bg-black overflow-hidden">
        <div className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-mono text-gray-500 flex items-center gap-2">
              <Sparkles size={10} className="animate-pulse" />
              Generating Artifact...
            </div>
          </div>
        </div>
        <div className="flex-1 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-dot-white/[0.05] animate-pulse" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 border-t-white animate-spin" />
            <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
              Constructing Blueprint
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!prd) return null;

  // ── Completed / data-ready state ────────────────────────────────────────
  return (
    <div className="flex flex-col border border-white/5 rounded-2xl bg-black overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-500">
      {/* Chrome-style tab bar */}
      <div className="h-11 bg-[#0a0a0a] border-b border-white/5 flex items-center px-2 gap-1 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "h-8 flex items-center gap-2 px-3 rounded-lg text-[12px] font-medium transition-colors shrink-0",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              <Icon
                size={14}
                className={isActive ? "text-white" : "text-gray-500"}
              />
              {tab.key}
              {isActive && <div className="w-1 h-1 rounded-full bg-white" />}
            </button>
          );
        })}
      </div>

      {/* Workspace toolbar */}
      <div className="h-10 bg-black/50 border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={12} className="text-[#10B981]" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
            Auto-saved
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(prd, null, 2));
              toast.success("JSON copied to clipboard");
            }}
            className="text-[11px] text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Copy size={12} />
            Copy Source
          </button>
          <div className="h-3 w-px bg-white/10" />
          {/* Pass current prd so export works even with mockPRD */}
          <DownloadButton prd={prd} />
        </div>
      </div>

      {/* Editor surface */}
      <div className="flex-1 bg-black p-8 lg:p-12 overflow-y-auto max-h-[calc(100vh-280px)]">
        {activeTab === "Overview.md" && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <header className="space-y-4">
              <h1 className="text-3xl font-display font-bold text-white tracking-tight">
                {prd.overview.name}
              </h1>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-500">
                  v{prd.version ?? "1.0.0"}
                </span>
                <span className="px-2 py-0.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded text-[10px] font-mono text-[#10B981]">
                  PROTOTYPE
                </span>
              </div>
            </header>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 border-b border-white/5 pb-2">
                  Executive Summary
                </h2>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  {prd.overview.problemStatement}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
                    Core Objective
                  </h3>
                  <p className="text-gray-400 text-sm italic">
                    &ldquo;{prd.overview.coreObjective}&rdquo;
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
                    Target Segment
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {prd.overview.targetAudience}
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-surface-2 border border-white/5 rounded-2xl p-6 text-center italic">
              <p className="text-white font-medium">
                &ldquo;{prd.overview.tagline}&rdquo;
              </p>
            </section>
          </div>
        )}

        {activeTab !== "Overview.md" && (
          <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 opacity-50">
            <Code2 className="w-12 h-12 text-white/10" />
            <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
              Content pending architectural analysis...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}