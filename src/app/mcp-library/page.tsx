"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { MCP_DATA } from "@/lib/data/library-data";
import { useLanguage } from "@/components/providers";

export default function MCPPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-black min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <LibraryGrid
            items={MCP_DATA}
            basePath="/mcp-library"
            title={t("products.mcp")}
            subtitle={t("products.mcp.desc")}
            icon="puzzle"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
