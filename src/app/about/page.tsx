"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/components/providers";

export default function AboutPage() {
  const { t } = useLanguage();

  const TENETS = [
    {
      title: t("about.tenets.1.title"),
      desc: t("about.tenets.1.desc"),
    },
    {
      title: t("about.tenets.2.title"),
      desc: t("about.tenets.2.desc"),
    },
    {
      title: t("about.tenets.3.title"),
      desc: t("about.tenets.3.desc"),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-white selection:text-black">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 lg:pt-48 pb-24">
        {/* Hero Header */}
        <header className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]">
            {t("about.title")}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 font-sans leading-relaxed max-w-2xl">
            {t("about.lead")}
          </p>
        </header>

        {/* The Story */}
        <section className="mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <p className="text-lg lg:text-xl text-gray-300 font-sans leading-relaxed">
            {t("about.story_1")}
          </p>
        </section>

        {/* The Core Tenets */}
        <section className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-16" />
          
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {TENETS.map((tenet, idx) => (
              <div key={idx} className="group border-l border-white/10 pl-8 transition-colors hover:border-white/30">
                <h2 className="text-xl font-display font-bold text-white mb-4 tracking-tight">
                  {tenet.title}
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed">
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Thought */}
        <footer className="mt-32 pt-16 border-t border-white/5 animate-in fade-in duration-1000 delay-500">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-gray-600">
            VICO — Built for Engineers, by Dreamers.
          </p>
        </footer>
      </div>

      <Footer />
    </main>
  );
}
