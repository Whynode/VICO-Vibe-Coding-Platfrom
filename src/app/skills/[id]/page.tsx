"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Info, Code } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SKILLS_DATA } from "@/lib/data/library-data";
import { 
  ItemDetailLayout, 
  DetailSection, 
  MarkdownContent, 
  ActionButtons 
} from "@/components/library/ItemDetail";

export default function SkillDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const skill = SKILLS_DATA.find((s) => s.id === id);
  if (!skill) return notFound();

  return (
    <>
      <Header />
      <main className="bg-surface-1 min-h-screen">
        <ItemDetailLayout item={skill} backPath="/skills" backLabel="Skills">
          <div className="space-y-12">
            <DetailSection title="Overview" icon={Info}>
              <MarkdownContent content={skill.overview} />
            </DetailSection>

            <DetailSection title="Implementation" icon={Code}>
              <div className="space-y-6">
                <ActionButtons 
                  content={skill.implementation} 
                  filename={`${skill.id}-skill.md`} 
                />
                <MarkdownContent content={skill.implementation} />
              </div>
            </DetailSection>
          </div>
        </ItemDetailLayout>
      </main>
      <Footer />
    </>
  );
}
