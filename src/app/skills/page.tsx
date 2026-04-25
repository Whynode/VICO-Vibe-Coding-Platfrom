"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { SKILLS_DATA } from "@/lib/data/library-data";
import { useLanguage } from "@/components/providers";

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-black min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <LibraryGrid
            items={SKILLS_DATA}
            basePath="/skills"
            title={t("products.skills")}
            subtitle={t("products.skills.desc")}
            icon="bolt"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
