"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { AGENTS_DATA } from "@/lib/data/library-data";
import { useLanguage } from "@/components/providers";

export default function AgentsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-black min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <LibraryGrid
            items={AGENTS_DATA}
            basePath="/agents"
            title={t("products.agents")}
            subtitle={t("products.agents.desc")}
            icon="bot"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
