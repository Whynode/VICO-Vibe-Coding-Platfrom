"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { MessageSquare, Layout, Play, Target } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PROMPTS_DATA } from "@/lib/data/library-data";
import { 
  ItemDetailLayout, 
  DetailSection, 
  MarkdownContent, 
  CodeBlock 
} from "@/components/library/ItemDetail";

export default function PromptDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const prompt = PROMPTS_DATA.find((p) => p.id === id);
  if (!prompt) return notFound();

  return (
    <>
      <Header />
      <main className="bg-surface-1 min-h-screen">
        <ItemDetailLayout item={prompt} backPath="/prompts" backLabel="Prompts">
          <div className="space-y-12">
            <DetailSection title="Prompt String" icon={MessageSquare}>
              <CodeBlock 
                code={prompt.promptString} 
                language="markdown" 
                filename="prompt.txt" 
              />
            </DetailSection>

            <DetailSection title="Instructions" icon={Layout}>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layout className="w-4 h-4 text-gray-500" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500">Format</h4>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed">{prompt.format}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="w-4 h-4 text-gray-500" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500">Usage</h4>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed">{prompt.usage}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-gray-500" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500">Purpose</h4>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed">{prompt.purpose}</p>
                </div>
              </div>
            </DetailSection>
          </div>
        </ItemDetailLayout>
      </main>
      <Footer />
    </>
  );
}
