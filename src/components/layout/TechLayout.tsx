"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Search,
  ChevronRight,
  MessageSquare,
  Mic,
  Send,
  BookOpen,
  Box,
  Map,
  History,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  X,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/providers";
import type { TechLayoutProps } from "@/types";

export function TechLayout({ children, activeSection, toc }: TechLayoutProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [chatOpen, setChatOpen] = useState(false);
  const [query, setQuery] = useState("");

  const NAV_CENTER = [
    { href: "/", label: t("nav.home") },
    { href: "/prd-generator", label: t("nav.prd_generator") },
    { href: "/agents", label: t("nav.products") },
    { href: "/docs", label: t("nav.docs") },
    { href: "/roadmap", label: t("nav.roadmap") },
    { href: "/changelog", label: t("nav.changelog") },
    { href: "/pricing", label: t("nav.pricing") },
  ];

  const SIDEBAR_GROUPS = [
    {
      title: "Get Started",
      items: [
        { href: "/docs", label: "Quick Start", icon: "play" },
      ],
    },
    {
      title: "Products",
      items: [
        { href: "/agents", label: "Agent Intelligence", icon: "bot" },
        { href: "/skills", label: "Skill Builder", icon: "bolt" },
        { href: "/prompts", label: "Prompt Library", icon: "book" },
      ],
    },
    {
      title: "Server MCP",
      items: [
        { href: "/mcp-library", label: "MCP Manager", icon: "puzzle" },
      ],
    },
    {
      title: "Foundation",
      items: [
        { href: "/docs#installation", label: "Installation", icon: "terminal" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-surface-1 text-gray-400 font-sans selection:bg-white/10 selection:text-white">
      {/* Top Header (Tier 1) */}
      <header className="fixed top-0 w-full z-130 bg-[#0a0a0a] border-b border-white/5 h-[72px]">
        <div className="max-w-7xl mx-auto h-full relative flex items-center justify-between px-8 lg:px-12 lg:pl-72">
          <div className="relative z-10 flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.webp" 
                alt="VICO" 
                width={120} 
                height={32} 
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6 z-0">
            {NAV_CENTER.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-medium transition-colors hover:text-white",
                  pathname.startsWith(item.href) ? "text-white" : "text-gray-500"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-4 text-[13px] font-medium">
            <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">Support</Link>
            <button className="bg-white/5 border border-white/10 text-gray-500 px-4 py-1.5 rounded-lg cursor-not-allowed text-xs">Coming Soon</button>
          </div>
        </div>
      </header>


      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Left */}
        <aside className="hidden lg:block w-72 h-[calc(100vh-72px)] sticky top-[72px] border-r border-white/5 px-6 py-10 overflow-y-auto no-scrollbar">
          <div className="space-y-10">
            {SIDEBAR_GROUPS.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">{group.title}</h4>
                <nav className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-sans transition-all group",
                            isActive 
                              ? "bg-white/5 text-white border border-white/10" 
                              : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                          )}
                        >
                        <span className="flex items-center gap-2.5">
                          {item.label}
                        </span>
                        {isActive && <div className="w-1 h-1 bg-white rounded-full" />}
                        {!isActive && <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
            
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-8 lg:px-16 pt-24 pb-32">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>

        {/* Sidebar Right (TOC) */}
        <aside className="hidden xl:block w-64 h-[calc(100vh-72px)] sticky top-[72px] px-8 py-10 overflow-y-auto no-scrollbar">
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full" /> On this page
            </h4>
            <nav className="space-y-3">
              {toc ? toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-[13px] text-gray-500 hover:text-white transition-colors leading-relaxed"
                >
                  {item.label}
                </a>
              )) : (
                <>
                  <a href="#" className="block text-[13px] text-white font-medium">Get Started</a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-white transition-colors pl-3">Pre requirements</a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-white transition-colors pl-3 border-l border-white/5">Setup</a>
                  <a href="#" className="block text-[13px] text-gray-600 hover:text-white transition-colors pl-6">Step 1: Installation</a>
                  <a href="#" className="block text-[13px] text-gray-600 hover:text-white transition-colors pl-6">Step 2: Create agent</a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-white transition-colors">FAQs</a>
                </>
              )}
            </nav>
            <div className="pt-8 border-t border-white/5">
              <Link href="#" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors group">
                <HelpCircle className="w-3.5 h-3.5" />
                Need help?
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating AI Chat (Bottom Right) */}
      <div className={cn(
        "fixed bottom-8 right-8 z-120 transition-all duration-300",
        chatOpen ? "w-96" : "w-14 h-14"
      )}>
        {chatOpen ? (
          <div className="bg-surface-2 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">V</span>
                </div>
                <span className="text-white font-bold text-sm tracking-tight">Ask VICO Docs</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <XIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-[13px] text-gray-400 leading-relaxed max-w-[85%]">
                Hello! I can help you navigate VICO's documentation or explain specific features. What would you like to know?
              </div>
            </div>
            <div className="p-4 bg-black/40">
              <div className="relative flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Find what you need..."
                  className="bg-transparent border-none outline-none text-[13px] text-gray-300 flex-1 placeholder:text-gray-600"
                />
                <div className="flex items-center gap-2">
                  <button className="text-gray-600 hover:text-white transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="bg-white text-black p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageSquare className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
