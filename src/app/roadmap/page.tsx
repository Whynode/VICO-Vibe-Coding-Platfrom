"use client";

import { TechLayout } from "@/components/layout/TechLayout";
import { cn } from "@/lib/utils";
import { 
  Zap, 
  Box, 
  Map, 
  History, 
  Target, 
  Milestone, 
  TrendingUp,
  Circle
} from "lucide-react";
import { useLanguage } from "@/components/providers";

export default function RoadmapPage() {
  const { t } = useLanguage();
  const TOC = [
    { id: "now", label: "Now - Phase 1" },
    { id: "next", label: "Next - Phase 2" },
    { id: "later", label: "Later - Phase 3" },
  ];

  const ROADMAP = [
    {
      id: "now",
      phase: "Phase 1",
      time: "Now / Q2 2026",
      title: "Foundation & MVP",
      description: "Establishing the core AI-driven workspace and initial generator features.",
      status: "Active",
      glow: true,
      progress: 65,
      items: [
        "PRD Generator — AI-powered chat to structured PRD",
        "Landing Page & Static Pages",
        "Markdown Export",
        "Prompt Copy Feature",
      ]
    },
    {
      id: "next",
      phase: "Phase 2",
      time: "Q3 2026",
      title: "Authentication & Persistence",
      description: "Enabling user profiles, cloud storage, and personal dashboard features.",
      status: "Planned",
      glow: false,
      progress: 0,
      items: [
        "NextAuth.js integration (GitHub, Google)",
        "Neon PostgreSQL + Drizzle ORM",
        "Save PRD history per user",
        "User dashboard",
      ]
    },
    {
      id: "later",
      phase: "Phase 3",
      time: "Q4 2026 — 2027",
      title: "Ecosystem Expansion",
      description: "Scaling the VICO network with custom skills and third-party integrations.",
      status: "Future",
      glow: false,
      progress: 0,
      items: [
        "Skill Builder Module",
        "Prompt Library",
        "MCP Manager",
      ]
    }
  ];

  return (
    <TechLayout toc={TOC}>
      <div className="space-y-12">
        <header className="mb-16">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4">
            Roadmap
          </h1>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl leading-relaxed">
            Full transparency on our current development cycle and long-term vision. 
            Track milestones as we build the future of AI-augmented software engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {ROADMAP.map((phase) => (
            <section 
              key={phase.id} 
              id={phase.id}
              className={cn(
                "relative bg-[#0a0a0a] border rounded-2xl p-8 lg:p-10 transition-all",
                phase.glow 
                  ? "border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.03)]" 
                  : "border-white/10"
              )}
            >
              {phase.glow && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none" />
              )}
              
              <div className="relative z-10 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">{phase.phase}</span>
                      <div className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest",
                        phase.glow ? "bg-white text-black" : "bg-white/5 text-gray-500"
                      )}>
                        {phase.status}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{phase.title}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">{phase.time}</div>
                    {phase.progress > 0 && (
                      <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden ml-auto">
                        <div 
                          className="h-full bg-white/40 transition-all duration-1000" 
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
                  {phase.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-black/40 border border-white/5 rounded-lg p-4 group hover:border-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-surface-2 border border-white/5 flex items-center justify-center">
                        <Circle className={cn(
                          "w-3 h-3 transition-colors",
                          phase.glow && idx < 2 ? "text-white fill-white" : "text-gray-700"
                        )} />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Timeline Connector */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-12 border-l border-dashed border-white/10 hidden lg:block" />
            </section>
          ))}
        </div>

        <div className="pt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-2 border border-white/10 rounded-lg text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
            <Milestone className="w-4 h-4" /> End of Current Roadmap Cycle
          </div>
        </div>
      </div>
    </TechLayout>
  );
}
