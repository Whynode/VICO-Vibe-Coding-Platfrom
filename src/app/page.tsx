"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/components/providers";
import { BrainCircuit, FileText, MessagesSquare, Zap, Download, Code2, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

// ─── Intersection Observer Hook ───
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe the container AND all .reveal children
    const children = el.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Page ───
export default function Home() {
  const heroRef = useReveal();
  const trustedRef = useReveal();
  const featuresRef = useReveal();
  const stepsRef = useReveal();
  const testimonialsRef = useReveal();
  const ctaRef = useReveal();
  const { t } = useLanguage();

  const TECH_STACK = [
    {
      name: "Next.js",
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28" className="fill-current"><path d="M12 24C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12-5.372 12-12 12zm0-23.018C5.932.982.981 5.932.981 12c0 6.067 4.951 11.018 11.019 11.018 6.067 0 11.018-4.951 11.018-11.018 0-6.068-4.951-11.018-11.018-11.018zM18.55 15.834c-.605-.848-8.484-11.83-8.484-11.83H6.554v11.83h2.36V7.63l7.634 10.66c.264.368.692.585 1.144.585.801 0 1.452-.65 1.452-1.451 0-.387-.152-.757-.425-1.026zM15.485 6.002h2.359v11.83h-2.359z" /></svg>
      )
    },
    {
      name: "Vercel",
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28" className="fill-current"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg>
      )
    },
    {
      name: "React",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28" className="fill-current text-white"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
      )
    },
    {
      name: "TypeScript",
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28" className="fill-current"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.543 18.25c-3.153 0-5.694-1.28-5.694-4.73 0-2.85 2.127-4.63 5.48-4.63 1.935 0 3.655.578 4.71 1.341l-1.39 2.217c-.902-.578-2.102-1.002-3.232-1.002-1.42 0-2.316.634-2.316 1.706 0 1.055.842 1.488 2.502 2.164 2.57 1.034 4.095 2.27 4.095 4.606 0 3.197-2.35 4.864-5.64 4.864-2.3 0-4.408-.66-5.666-1.528l1.492-2.378c1.077.71 2.766 1.343 4.296 1.343 1.636 0 2.532-.61 2.532-1.765 0-1.127-.723-1.614-2.585-2.356zm-10.96-5.594V23.5H3.635v-10.844h-3.08v-2.548h9.24v2.548H6.708z"/></svg>
      )
    },
    {
      name: "Tailwind CSS",
      svg: (
        <svg viewBox="0 0 24 24" width="28" height="28" className="fill-current"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
      )
    }
  ];

  const FEATURES = [
    {
      icon: BrainCircuit,
      title: t("home.features.1.title"),
      description: t("home.features.1.desc"),
      span: "md:col-span-2",
    },
    {
      icon: FileText,
      title: t("home.features.2.title"),
      description: t("home.features.2.desc"),
      span: "md:col-span-1",
    },
    {
      icon: MessagesSquare,
      title: t("home.features.3.title"),
      description: t("home.features.3.desc"),
      span: "md:col-span-1",
    },
    {
      icon: Zap,
      title: t("home.features.4.title"),
      description: t("home.features.4.desc"),
      span: "md:col-span-1",
    },
    {
      icon: Download,
      title: t("home.features.5.title"),
      description: t("home.features.5.desc"),
      span: "md:col-span-1",
    },
    {
      icon: Code2,
      title: t("home.features.6.title"),
      description: t("home.features.6.desc"),
      span: "md:col-span-3",
    },
  ];

  const STEPS = [
    {
      number: "01",
      title: t("home.steps.1.title"),
      description: t("home.steps.1.desc"),
    },
    {
      number: "02",
      title: t("home.steps.2.title"),
      description: t("home.steps.2.desc"),
    },
    {
      number: "03",
      title: t("home.steps.3.title"),
      description: t("home.steps.3.desc"),
    },
  ];

  return (
    <>
      <Header />
      <main className="relative flex flex-col min-h-screen bg-black overflow-x-hidden transition-colors duration-300">
        {/* ════════════════════════════════════
            HERO SECTION
            ════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative w-full max-w-5xl mx-auto px-8 py-32 lg:py-48 flex flex-col items-center justify-center text-center z-10"
        >
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 -z-10 bg-grid opacity-50 pointer-events-none" />
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-silver blur-[120px] rounded-full -z-10 pointer-events-none hidden lg:block" />

          {/* Hero Content */}
          <div className="flex flex-col items-center reveal max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border-glass px-4 py-1.5 rounded-full mb-8">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                {t("home.hero.badge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1] mb-8">
              {t("home.hero.title_part1")} <br />
              <span className="text-white/40">{t("home.hero.title_part2")}</span>
            </h1>

            {/* Desc */}
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-12">
              {t("home.hero.desc")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/prd-generator"
                className="bg-white text-black font-semibold rounded-lg px-8 py-3.5 hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/5"
              >
                {t("home.hero.cta_primary")}
              </Link>
              <button className="text-white/70 hover:text-white font-medium px-8 py-3.5 transition-colors border-glass bg-black/40 backdrop-blur-md rounded-lg hover:bg-white/5">
                {t("home.hero.cta_secondary")}
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            POWERED BY TECH STACK
            ════════════════════════════════════ */}
        <section ref={trustedRef} className="py-24 overflow-hidden relative">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
          <div className="max-w-7xl mx-auto reveal group">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium mb-12">
              POWERED BY MODERN TECH STACK
            </p>
            {/* Edge Fading Mask */}
            <div
              className="relative flex overflow-hidden w-full"
              style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
            >
              <div className="flex w-max animate-marquee items-center">
                {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-12 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:glow-silver cursor-default"
                  >
                    <div className="text-white">
                      {tech.svg}
                    </div>
                    <span className="font-headline font-bold text-xl tracking-tighter text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            FEATURES GRID
            ════════════════════════════════════ */}
        <section
          ref={featuresRef}
          className="py-24 max-w-7xl mx-auto px-8 lg:px-12"
        >
          <div className="mb-20 max-w-lg reveal">
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">
              {t("home.features.subtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-[-0.02em] text-white leading-tight">
              {t("home.features.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => (
              <article
                key={feature.title}
                className={cn(
                  "reveal group bg-[#0a0a0a] rounded-xl p-8 cursor-default transition-all border border-white/5 hover:border-white/10 hover:bg-[#0c0c0c]",
                  feature.span
                )}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/3 border border-white/5 text-white/70 group-hover:text-white transition-colors">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            HOW IT WORKS
            ════════════════════════════════════ */}
        <section ref={stepsRef} className="py-24">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-center max-w-lg mx-auto mb-20 reveal">
              <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">
                {t("home.steps.subtitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-[-0.02em] text-white">
                {t("home.steps.title")}
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {t("home.steps.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <article
                  key={step.number}
                  className="reveal bg-surface-2 rounded-lg p-10 relative transition-colors border border-white/10 hover:border-white/20"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <span className="text-6xl font-headline font-bold text-gray-800 absolute top-6 right-8 select-none transition-colors">
                    {step.number}
                  </span>
                  <div className="pt-8">
                    <h3 className="text-lg font-headline font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-gray-400 leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            TESTIMONIALS
            ════════════════════════════════════ */}
        <section
          ref={testimonialsRef}
          className="py-24 max-w-7xl mx-auto px-8 lg:px-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 reveal">
              <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">
                {t("home.testimonials.subtitle")}
              </p>
              <h2 className="text-3xl font-headline font-bold text-white mb-6 tracking-[-0.02em]">
                {t("home.testimonials.title")}
              </h2>
              <p className="text-gray-400 text-sm leading-[1.7] mb-8">
                {t("home.testimonials.desc")}
              </p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-500" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-[#0a0a0a] flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div
                className="reveal bg-[#0a0a0a] rounded-xl p-8 relative transition-colors border border-white/5"
                style={{ transitionDelay: "0.05s" }}
              >
                <Quote className="text-gray-900 w-10 h-10 absolute top-6 right-6 transition-colors" />
                <p className="text-gray-400 text-sm italic mb-8 leading-[1.8] relative z-10">
                  {t("home.testimonials.1.text")}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center transition-colors border border-white/10">
                    <span className="text-white font-bold text-xs">SJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Sarah J.
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Product Lead @ TechFlow
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div
                className="reveal bg-[#0a0a0a] rounded-xl p-8 relative transition-colors border border-white/5"
                style={{ transitionDelay: "0.1s" }}
              >
                <Quote className="text-gray-900 w-10 h-10 absolute top-6 right-6 transition-colors" />
                <p className="text-gray-400 text-sm italic mb-8 leading-[1.8] relative z-10">
                  {t("home.testimonials.2.text")}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center transition-colors border border-white/10">
                    <span className="text-white font-bold text-xs">BH</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Budi Hartono
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Solopreneur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CTA SECTION
            ════════════════════════════════════ */}
        <section
          ref={ctaRef}
          className="py-32 max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div
            className="reveal rounded-[2.5rem] p-16 md:p-24 text-center relative overflow-hidden bg-black border border-white/5 bg-dot-white/[0.02]"
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 blur-[100px] -translate-y-1/2 rounded-full" />

            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
                {t("home.cta.title")}
              </h2>
              <p className="text-gray-400 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
                {t("home.cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                <Link
                  href="/prd-generator"
                  className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-lg font-semibold text-[15px] hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/5"
                >
                  {t("home.cta.primary")}
                </Link>
                <button className="w-full sm:w-auto text-gray-400 hover:text-white px-10 py-4 rounded-lg font-semibold text-[15px] transition-all duration-300 border border-white/10 hover:bg-white/5">
                  {t("home.cta.secondary")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}