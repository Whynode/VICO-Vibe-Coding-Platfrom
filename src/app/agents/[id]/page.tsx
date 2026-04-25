"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Info, Code } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AGENTS_DATA } from "@/lib/data/library-data";
import { 
  ItemDetailLayout, 
  DetailSection, 
  MarkdownContent, 
  ActionButtons 
} from "@/components/library/ItemDetail";

export default function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const agent = AGENTS_DATA.find((a) => a.id === id);
  if (!agent) return notFound();

  return (
    <>
      <Header />
      <main className="bg-surface-1 min-h-screen">
        <ItemDetailLayout item={agent} backPath="/agents" backLabel="Agents">
          <div className="space-y-12">
            <DetailSection title="Overview" icon={Info}>
              <MarkdownContent content={agent.overview} />
            </DetailSection>

            <DetailSection title="Implementation" icon={Code}>
              <div className="space-y-6">
                <ActionButtons 
                  content={agent.implementation} 
                  filename={`${agent.id}-agent.md`} 
                />
                <MarkdownContent content={agent.implementation} />
              </div>
            </DetailSection>
          </div>
        </ItemDetailLayout>
      </main>
      <Footer />
    </>
  );
}
