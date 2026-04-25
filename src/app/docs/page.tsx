"use client";

import { TechLayout } from "@/components/layout/TechLayout";
import { 
  ArrowRight, 
  Terminal, 
  Download, 
  Copy, 
  Check, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Globe,
  Settings,
  Bot,
  Bolt,
  Book,
  Puzzle
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AGENTS_DATA } from "@/lib/data/library-data";

const ICON_MAP = {
  bot: Bot,
  bolt: Bolt,
  book: Book,
  puzzle: Puzzle,
};

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(null), 2000);
  };

  const TOC = [
    { id: "welcome", label: "Welcome to VICO" },
    { id: "quick-start", label: "Quick Start" },
    { id: "agents", label: "Agent Intelligence" },
    { id: "installation", label: "Installation" },
    { id: "faq", label: "FAQs" },
  ];

  return (
    <TechLayout toc={TOC}>
      <div className="space-y-16">
        {/* Media Banner */}
        <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Placeholder Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-20" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
          
          <div className="absolute bottom-10 left-10 z-20 max-w-2xl">
            <div className="flex items-center gap-2 text-white/60 text-xs font-mono mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              LUMINAR SYSTEM ONLINE
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4">
              Welcome to VICO
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Specialized AI assistants for every stage of development. 
              Architect, build, and deploy with the world's most advanced developer agents.
            </p>
          </div>

          <div className="absolute top-4 right-4 z-20 px-2 py-1 bg-black/60 border border-white/10 rounded text-[10px] font-mono text-gray-500">
            [PHOTO_VIDEO_PLACEHOLDER]
          </div>
        </div>

        {/* Quick Start Card */}
        <section id="welcome" className="bg-black border border-white/5 rounded-xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-xl lg:text-2xl font-display font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
              VICO empowers developers to create sophisticated software through a coordinated network of AI agents. 
              Our platform handles everything from product requirements to implementation details, 
              allowing you to focus on high-level architecture and creative problem solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "PRD Generator", icon: Zap, desc: "Transform ideas into technical specs" },
                { title: "Agent Network", icon: Cpu, desc: "Collaborate with specialized AI experts" },
                { title: "Secure Deployment", icon: ShieldCheck, desc: "Enterprise-grade safety by default" },
              ].map((item) => (
                <div key={item.title} className="bg-black/40 border border-white/5 rounded-lg p-5 hover:border-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-white mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Intelligence Section */}
        <section id="agents" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl lg:text-2xl font-display font-bold text-white">Agent Intelligence</h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
              View all agents <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AGENTS_DATA.slice(0, 4).map((agent) => {
              const Icon = ICON_MAP[agent.icon as keyof typeof ICON_MAP] || Bot;
              return (
                <div key={agent.id} className="bg-black border border-white/5 rounded-xl p-8 group hover:border-white/10 transition-all hover:bg-white/1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-display font-bold text-white">{agent.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{agent.category}</p>
                    </div>
                  </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {agent.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-black border border-white/5 rounded-md text-[10px] text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Installation Card */}
        <section id="installation" className="bg-black border border-white/5 rounded-xl p-8 lg:p-12">
          <h2 className="text-xl lg:text-2xl font-display font-bold text-white mb-8">Installation</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
                <Terminal className="w-4 h-4" /> CLI Installation
              </h3>
              <div className="bg-[#050505] rounded-xl border border-white/5 overflow-hidden shadow-2xl">
                <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">Terminal</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleCopy("npm install @vico/sdk -g", "npm")}
                      className="text-[10px] text-gray-600 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      {copied === "npm" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      Copy
                    </button>
                    <button className="text-[10px] text-gray-600 hover:text-white transition-colors flex items-center gap-1.5">
                      <Download className="w-3 h-3" /> Download
                    </button>
                  </div>
                </div>
                <div className="p-4 font-mono text-[13px] text-gray-300">
                  <span className="text-gray-600">$</span> npm install @vico/sdk -g
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" /> Web Setup
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Start building immediately in the browser. No installation required.
                  Log in to your dashboard to access the shared agent network.
                </p>
                <button className="text-xs font-bold text-white px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  Go to Dashboard
                </button>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-600" /> API Keys
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Generate your API keys from the settings panel to authenticate 
                  your local environment with the VICO cloud.
                </p>
                <button className="text-xs font-bold text-white px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  Get API Key
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-8 border-t border-white/5 text-[11px] text-gray-600 font-mono">
          <span>LAST UPDATED: APRIL 19, 2026</span>
          <div className="flex items-center gap-4">
            <button className="hover:text-white transition-colors">HELP CENTER</button>
            <button className="hover:text-white transition-colors">REPORT ISSUE</button>
          </div>
        </div>
      </div>
    </TechLayout>
  );
}
