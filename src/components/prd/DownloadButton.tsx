"use client";

import { usePRDStore } from "@/stores/prd-store";
import { formatPRDToMarkdown } from "@/lib/formatters/markdown";
import { useLanguage } from "@/components/providers";
import type { DownloadButtonProps } from "@/types";
import type { PRD } from "@/lib/schemas/prd-schema";
import { Download } from "lucide-react";

export function DownloadButton({ prd: prdProp }: DownloadButtonProps) {
  const prdFromStore = usePRDStore((state) => state.prd);
  const { t } = useLanguage();

  // Prefer explicit prop; fall back to Zustand store
  const prd: PRD | null | undefined = prdProp ?? prdFromStore;

  const handleDownload = () => {
    if (!prd) return;

    const markdown = formatPRDToMarkdown(prd);
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${prd.overview.name.toLowerCase().replace(/\s+/g, "-")}-prd.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!prd}
      className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-white/5"
    >
      <Download size={18} />
      <span>{t("prd.preview.btn.download")}</span>
    </button>
  );
}