"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { PROMPTS_DATA } from "@/lib/data/library-data";
import { useLanguage } from "@/components/providers";

export default function PromptsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-black min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <LibraryGrid
            items={PROMPTS_DATA}
            basePath="/prompts"
            title={t("products.prompts")}
            subtitle={t("products.prompts.desc")}
            icon="book"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
