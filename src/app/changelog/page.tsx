"use client";

import { TechLayout } from "@/components/layout/TechLayout";
import { cn } from "@/lib/utils";
import { 
  Plus, 
  Wrench, 
  Zap, 
  AlertCircle, 
  GitBranch, 
  Hash, 
  Clock 
} from "lucide-react";
import { useLanguage } from "@/components/providers";

export default function ChangelogPage() {
  const { t } = useLanguage();
  const TOC = [
    { id: "v0.1.0", label: "v0.1.0 - Initial Release" },
    { id: "v0.0.1", label: "v0.0.1 - Pre-release" },
  ];

  const RELEASES = [
    {
      version: "0.1.0",
      date: "APRIL 17, 2026",
      tag: "Initial Release",
      summary: "First public deployment of the VICO core workspace and PRD generation engine.",
      categories: [
        {
          type: "New",
          icon: Plus,
          color: "text-white",
          items: [
            "PRD Generator — AI-powered chat interface with real-time feedback",
            "Real-time PRD preview with tabbed navigation (Overview, Techstack, Features, Rules)",
            "Markdown export functionality for all generated documents",
            "Prompt Copy Feature for seamless model handoff",
            "Comprehensive Landing page with modular UI sections"
          ]
        },
        {
          type: "Improved",
          icon: Zap,
          color: "text-white",
          items: [
            "Responsive design architecture for optimal viewing on mobile and tablet viewports",
            "Enhanced glassmorphism tokens for all core UI components"
          ]
        }
      ]
    },
    {
      version: "0.0.1",
      date: "APRIL 10, 2026",
      tag: "Pre-release",
      summary: "Foundation setup and infrastructure deployment.",
      categories: [
        {
          type: "Technical",
          icon: GitBranch,
          color: "text-white",
          items: [
            "Project scaffolding with Next.js 15 (App Router)",
            "Tailwind CSS 4 integration with custom design tokens",
            "Vercel AI SDK implementation for streaming responses",
            "Gemini 3.1 Pro integration as the primary logic engine"
          ]
        }
      ]
    }
  ];

  return (
    <TechLayout toc={TOC}>
      <div className="space-y-12">
        <header className="mb-16">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
            <Hash className="w-3 h-3" /> System Version Log
          </div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4">
            Changelog
          </h1>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl leading-relaxed">
            Detailed record of every deployment, feature addition, and bug fix. 
            Automated from VICO's build system.
          </p>
        </header>

        <div className="space-y-24">
          {RELEASES.map((release) => (
            <section key={release.version} id={`v${release.version}`} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[69px] top-1.5 w-2 h-2 bg-white rounded-full z-10 hidden lg:block shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-display font-bold text-white tracking-tight">v{release.version}</h2>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                      {release.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5" /> {release.date}
                  </div>
                </div>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                  {release.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {release.categories.map((cat, idx) => (
                  <div key={idx} className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 bg-white/5 border-b border-white/5 flex items-center gap-2">
                      <cat.icon className={cn("w-4 h-4", cat.color)} />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                        {cat.type}
                      </span>
                    </div>
                    <ul className="p-5 space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-gray-400 leading-relaxed group">
                          <div className="w-1 h-1 bg-gray-700 rounded-full mt-2 group-hover:bg-white transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Timeline Line (Vertical) */}
        <div className="fixed top-0 bottom-0 left-[295px] w-px bg-white/5 -z-10 hidden lg:block" />
      </div>
    </TechLayout>
  );
}
