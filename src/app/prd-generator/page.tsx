"use client";

import { useState } from "react";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { PRDPreview } from "@/components/prd/PRDPreview";
import Link from "next/link";
import { useLanguage } from "@/components/providers";
import type { PRDWorkflowStatus } from "@/types";
import { Plus, ArrowLeft, MessageSquare, History } from "lucide-react";

// ─── Static data ────────────────────────────────────────────────────────────

const RECENT_CHATS = [
  { id: 1, title: "Fintech Dashboard", date: "2h ago" },
  { id: 2, title: "E-commerce MVP", date: "1d ago" },
  { id: 3, title: "Luminar Protocol", date: "3d ago" },
] as const;

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PRDGeneratorPage() {
  const { t } = useLanguage();
  const [workflowStatus, setWorkflowStatus] =
    useState<PRDWorkflowStatus>("idle");

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
      {/* Workspace Sidebar */}
      <aside className="w-64 h-full border-r border-white/5 bg-black flex flex-col p-4 shrink-0">
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-medium mb-6"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-black rounded-lg text-[13px] font-bold hover:bg-gray-200 transition-colors mb-2 shadow-lg shadow-white/5">
              <Plus size={16} />
              New Blueprint
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500 mb-3 px-2 flex items-center gap-2">
                <History size={12} />
                Recent Chats
              </h3>
              <nav className="space-y-1">
                {RECENT_CHATS.map((chat) => (
                  <button
                    key={chat.id}
                    className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <MessageSquare
                        size={14}
                        className="shrink-0 opacity-40 group-hover:opacity-100"
                      />
                      <span className="text-[13px] font-medium truncate">
                        {chat.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-600 shrink-0">
                      {chat.date}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-surface-2 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                JD
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-white truncate">
                  John Doe
                </p>
                <p className="text-[10px] text-gray-500 truncate">Free Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Canvas — Split Workspace */}
      <main className="flex-1 flex flex-row h-full">
        {/* Left Panel — Command Center */}
        <div className="w-[38%] h-full border-r border-white/5 bg-black flex flex-col p-6 shrink-0">
          <ChatPanel
            onGenerate={() => setWorkflowStatus("generating")}
            onStatusChange={setWorkflowStatus}
          />
        </div>

        {/* Right Panel — PRD Preview */}
        <div className="flex-1 bg-black border-l border-white/5 overflow-y-auto">
          <div className="max-w-4xl mx-auto min-h-full p-10 lg:p-12">
            <PRDPreview status={workflowStatus} />
          </div>
        </div>
      </main>
    </div>
  );
}