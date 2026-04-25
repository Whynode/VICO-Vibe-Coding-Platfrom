"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Info, Terminal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MCP_DATA } from "@/lib/data/library-data";
import { 
  ItemDetailLayout, 
  DetailSection, 
  MarkdownContent, 
  ActionButtons 
} from "@/components/library/ItemDetail";

export default function MCPDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const mcp = MCP_DATA.find((m) => m.id === id);
  if (!mcp) return notFound();

  return (
    <>
      <Header />
      <main className="bg-surface-1 min-h-screen">
        <ItemDetailLayout item={mcp} backPath="/mcp-library" backLabel="MCP Servers">
          <div className="space-y-12">
            <DetailSection title="Overview" icon={Info}>
              <MarkdownContent content={mcp.overview ?? ""} />
            </DetailSection>

            <DetailSection title="Server Definition" icon={Terminal}>
              <div className="space-y-6">
                <ActionButtons 
                  content={mcp.implementation ?? ""} 
                  filename={`${mcp.id}-mcp.json`} 
                />
                <MarkdownContent content={mcp.implementation ?? ""} />
              </div>
            </DetailSection>
          </div>
        </ItemDetailLayout>
      </main>
      <Footer />
    </>
  );
}
