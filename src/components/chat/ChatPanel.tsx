"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Toaster, toast } from "sonner";
import { cn } from "@/lib/utils";
import { usePRDStore } from "@/stores/prd-store";
import { PRDSchema } from "@/lib/schemas/prd-schema";
import type { PRD } from "@/lib/schemas/prd-schema";
import { useLanguage } from "@/components/providers";
import type { ChatPanelProps } from "@/types";
import { Terminal, Send, Paperclip, Wand2 } from "lucide-react";

// ─── Helpers ───────────────────────────────────────────────────────────────

function getTextContent(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

function extractJSON(content: string): unknown {
  try {
    return JSON.parse(content);
  } catch {
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[1].trim());
      } catch {
        // continue to next strategy
      }
    }
    const objMatch = content.match(/\{[\s\S]*\}/);
    if (objMatch) {
      try {
        return JSON.parse(objMatch[0]);
      } catch {
        // no valid JSON found
      }
    }
  }
  return null;
}

function isPRD(value: unknown): value is PRD {
  return PRDSchema.safeParse(value).success;
}

// ─── Component ─────────────────────────────────────────────────────────────

export function ChatPanel({ onGenerate, onStatusChange }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const setPRD = usePRDStore((state) => state.setPRD);
  const { t } = useLanguage();

  const WELCOME_MESSAGE = {
    id: "welcome",
    role: "assistant" as const,
    content: t("prd.chat.welcome"),
    createdAt: new Date(),
  };

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    onFinish: ({ message }: { message: UIMessage }) => {
      const content = getTextContent(message);
      const parsedData = extractJSON(content);
      if (isPRD(parsedData)) {
        const result = PRDSchema.safeParse(parsedData);
        if (result.success) {
          setPRD(result.data);
          onStatusChange?.("completed");
          toast.success(t("prd.chat.success"));
        } else {
          onStatusChange?.("idle");
        }
      } else {
        // AI gave a conversational reply — stay in current status
      }
    },
    onError: (error: Error) => {
      onStatusChange?.("idle");
      toast.error(error.message);
    },
  });

  const displayMessages = [
    WELCOME_MESSAGE,
    ...messages.map((msg: UIMessage) => ({
      id: msg.id,
      role: msg.role as "user" | "assistant",
      content: getTextContent(msg),
      createdAt: new Date(),
    })),
  ];

  const handleSend = () => {
    if (!input.trim() || status === "submitted") return;
    onStatusChange?.("generating");
    sendMessage({ text: input });
    setInput("");
  };

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <div className="flex flex-col h-full bg-black rounded-2xl overflow-hidden border border-white/5">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="p-5 flex items-center justify-between border-b border-white/5 bg-[#0a0a0a]/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
            <Terminal className="text-white w-4 h-4" />
          </div>
          <div>
            <h2 className="text-[13px] font-bold text-white tracking-tight">
              Command Center
            </h2>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span
                className={cn(
                  "w-1 h-1 rounded-full",
                  isLoading ? "bg-white animate-pulse" : "bg-[#10B981]"
                )}
              />
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                {isLoading ? "Analyzing..." : "Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 font-sans text-[14px] leading-relaxed [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
        {displayMessages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex w-full",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "rounded-2xl px-4 py-3 max-w-[88%] transition-all",
                message.role === "user"
                  ? "bg-white text-black font-medium shadow-xl shadow-white/5"
                  : "bg-surface-2 border border-white/5 text-gray-300"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 p-1">
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" />
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="p-5 bg-black border-t border-white/5">
        {/* Contextual Action Chip */}
        <div className="flex justify-center mb-4">
          <button
            onClick={onGenerate}
            className="flex items-center gap-2 px-3 py-1.5 bg-surface-2 hover:bg-white/10 border border-white/10 rounded-full text-[11px] font-bold text-white transition-all hover:scale-105 active:scale-95"
          >
            <Wand2 size={12} className="text-white/60" />
            Finalize PRD Blueprint
          </button>
        </div>

        <div className="relative flex items-end bg-[#0a0a0a] rounded-2xl border border-white/10 focus-within:border-white/30 transition-all p-1.5">
          <button className="p-2.5 text-gray-500 hover:text-white transition-colors">
            <Paperclip size={18} strokeWidth={1.5} />
          </button>
          <textarea
            className="flex-1 bg-transparent resize-none py-2.5 px-1 text-[14px] font-sans text-white placeholder-gray-500 outline-none min-h-[42px] max-h-[150px]"
            placeholder="Describe your vision..."
            value={input}
            rows={1}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button
            className={cn(
              "p-2.5 rounded-xl transition-all",
              input.trim() ? "bg-white text-black" : "text-gray-600 cursor-not-allowed"
            )}
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
          >
            <Send size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}