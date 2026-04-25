"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers";
import type { HeaderProps } from "@/types";
import Image from "next/image";
import {
  Bot,
  Bolt,
  Book,
  Puzzle,
  ChevronDown,
  FileText,
  Map,
  History,
} from "lucide-react";

export function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const docsDropdownRef = useRef<HTMLDivElement>(null);

  const { lang, setLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Glassmorphism on scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setDropdownOpen(false);
    setDocsDropdownOpen(false);
  }, [pathname]);

  const PRODUCTS_ITEMS = [
    {
      href: "/agents",
      label: t("products.agents"),
      icon: Bot,
      desc: t("products.agents.desc"),
    },
    {
      href: "/skills",
      label: t("products.skills"),
      icon: Bolt,
      desc: t("products.skills.desc"),
    },
    {
      href: "/prompts",
      label: t("products.prompts"),
      icon: Book,
      desc: t("products.prompts.desc"),
    },
    {
      href: "/mcp-library",
      label: t("products.mcp"),
      icon: Puzzle,
      desc: t("products.mcp.desc"),
    },
  ];

  const DOCS_ITEMS = [
    {
      href: "/docs",
      label: t("nav.docs"),
      icon: FileText,
      desc: "Panduan lengkap penggunaan VICO",
    },
    {
      href: "/roadmap",
      label: t("nav.roadmap"),
      icon: Map,
      desc: "Rencana pengembangan fitur masa depan",
    },
    {
      href: "/changelog",
      label: t("nav.changelog"),
      icon: History,
      desc: "Catatan pembaruan dan perbaikan sistem",
    },
  ];

  const ALL_NAV_ITEMS = [
    { type: "link", href: "/", label: t("nav.home") },
    { type: "link", href: "/prd-generator", label: t("nav.prd_generator") },
    { type: "dropdown", id: "products", label: t("nav.products"), items: PRODUCTS_ITEMS },
    { type: "dropdown", id: "docs", label: t("nav.docs"), items: DOCS_ITEMS },
    { type: "link", href: "/blog", label: t("nav.blog") },
    { type: "link", href: "/about", label: t("nav.about") },
    { type: "link", href: "/pricing", label: t("nav.pricing") },
  ];

  const isProductsActive = PRODUCTS_ITEMS.some((item) =>
    pathname.startsWith(item.href)
  );

  const isDocsActive = DOCS_ITEMS.some((item) =>
    pathname.startsWith(item.href)
  );

  const isDocs = pathname.startsWith("/docs") || pathname.startsWith("/roadmap") || pathname.startsWith("/changelog");
  const sidebarOffset = isDocs ? "lg:pl-72" : "";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-130 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
        className
      )}
    >
      <nav className={cn(
        "relative flex items-center h-[72px] w-full max-w-[1440px] mx-auto px-8 lg:px-12",
        sidebarOffset
      )}>
        {/* Left Side - Logo */}
        <div className="flex-none w-[15%] flex items-center">
          <Link href="/" className="relative z-10 shrink-0">
            <Image 
              src="/logo.webp" 
              alt="VICO" 
              width={120} 
              height={32} 
              className="h-[32.32px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Middle Nav - 7 Items */}
        <div className="flex-1 hidden lg:flex items-center justify-center gap-6 font-body text-[13.13px] font-medium z-0">
          {ALL_NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href || "#"}
                  className={cn(
                    "transition-colors duration-200 py-1 whitespace-nowrap",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "dropdown") {
              const isProducts = item.id === "products";
              const isOpen = isProducts ? dropdownOpen : docsDropdownOpen;
              const setOpen = isProducts ? setDropdownOpen : setDocsDropdownOpen;
              const active = isProducts ? isProductsActive : isDocsActive;
              const ref = isProducts ? dropdownRef : docsDropdownRef;

              return (
                <div
                  key={item.id}
                  className="relative"
                  ref={ref}
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    onClick={() => setOpen(!isOpen)}
                    className={cn(
                      "flex items-center gap-1 transition-colors duration-200 py-1 whitespace-nowrap",
                      active || isOpen ? "text-white" : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-[14.14px] h-[14.14px] transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80">
                      <div
                        className="bg-[#0a0a0a] rounded-xl py-3 border border-white/5 shadow-2xl"
                        style={{ animation: "fadeInUp 0.15s ease-out" }}
                      >
                        {item.items?.map((sub) => {
                          const isSubActive = pathname.startsWith(sub.href);
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                "flex items-start gap-3.5 px-5 py-3.5 transition-colors",
                                isSubActive ? "bg-white/5" : "hover:bg-white/5"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors",
                                  isSubActive ? "bg-white/10 text-white" : "bg-transparent text-gray-400"
                                )}
                              >
                                <Icon size={18.18} />
                              </div>
                              <div className="space-y-0.5">
                                <p className={cn("text-[14.14px] font-semibold", isSubActive ? "text-white" : "text-gray-300")}>
                                  {sub.label}
                                </p>
                                <p className="text-[11.11px] text-gray-500 leading-snug">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Right Side - Auth & Language */}
        <div className="flex-none w-[15%] flex items-center justify-end gap-6">
          {/* Toggles */}
          <div className="hidden sm:flex items-center gap-2 pr-2 sm:pr-3 border-r border-glass">
            <div className="flex items-center gap-1 text-[12.12px] font-medium text-gray-500">
              <button 
                onClick={() => setLang("EN")}
                className={cn("px-1 transition-colors", lang === "EN" ? "text-white font-bold border-b border-white" : "hover:text-gray-300")}
              >
                EN
              </button>
              <span className="opacity-40">|</span>
              <button 
                onClick={() => setLang("ID")}
                className={cn("px-1 transition-colors", lang === "ID" ? "text-white font-bold border-b border-white" : "hover:text-gray-300")}
              >
                ID
              </button>
            </div>
          </div>

          <Link
            href="/prd-generator"
            className="bg-white text-black font-medium text-[13.13px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            {t("nav.get_started")}
          </Link>
        </div>
      </nav>
    </header>
  );
}