"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Search, Bot, Bolt, Book, Puzzle, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCategories, filterItems } from "@/lib/data/library-data";
import { useLanguage } from "@/components/providers";
import type { LibraryItem, LibraryGridProps, LibraryCardProps } from "@/types";

const ICON_MAP = {
  bot: Bot,
  bolt: Bolt,
  book: Book,
  puzzle: Puzzle,
};

export function LibraryGrid<T extends LibraryItem>({
  items,
  basePath,
  title,
  subtitle,
  icon,
}: LibraryGridProps<T>) {
  let displayItems = [...items];
  if (displayItems.length > 0 && displayItems.length < 16) {
    const original = [...displayItems];
    while (displayItems.length < 16) {
      const idx = displayItems.length % original.length;
      displayItems.push({ ...original[idx], id: `${original[idx].id}-${displayItems.length}` });
    }
  } else if (displayItems.length > 16) {
    displayItems = displayItems.slice(0, 16);
  }

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = getCategories(displayItems);
  const filtered = filterItems(displayItems, query, category);
  const { t } = useLanguage();

  const IconComponent = ICON_MAP[icon] || Bot;

  return (
    <div className="space-y-12">
      {/* Hero Banner with Background */}
      <div className="relative w-full min-h-[320px] rounded-2xl overflow-hidden flex flex-col justify-center items-start text-left px-8 lg:px-16 border border-white/5 bg-black">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-dot opacity-20 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] -z-10" />

        {/* Icon */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-white/70 mb-8 relative z-10 shadow-2xl">
          <IconComponent size={32} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl lg:text-6xl font-display font-bold tracking-tight mb-4 text-left relative z-10">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-xl text-left leading-relaxed relative z-10">
          {subtitle}
        </p>
      </div>

      {/* Side-by-Side Toolbar (Search + Categories) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-4">
        {/* Integrated Search Input */}
        <div className="relative w-full lg:max-w-sm bg-[#0a0a0a] border border-white/5 rounded-xl flex items-center px-4 py-2.5 gap-3 focus-within:border-white/20 transition-all">
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-gray-300 text-sm flex-1 bg-transparent outline-none placeholder:text-gray-500"
          />
          <div className="w-px h-5 bg-white/10 mx-1 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <Download className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400 font-mono text-xs">
              {displayItems.reduce((sum, item) => sum + item.popularity, 0) >= 1000
                ? `${(displayItems.reduce((sum, item) => sum + item.popularity, 0) / 100).toFixed(1)}k`
                : `${displayItems.reduce((sum, item) => sum + item.popularity, 0)}`}
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                category === cat
                  ? "border border-white/10 bg-white text-black shadow-lg shadow-white/5"
                  : "border border-white/5 bg-[#0a0a0a] text-gray-500 hover:text-gray-300 hover:border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count - Pushed to end on desktop */}
        <div className="lg:ml-auto">
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-white">{filtered.length}</span>{" "}
            of {displayItems.length}
          </p>
        </div>
      </div>

      <div className="space-y-6">

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-32 space-y-4">
          <SearchX className="w-12 h-12 text-white/10 mx-auto" />
          <p className="text-gray-500 text-sm font-medium">
            No results found. Try a different search or category.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <LibraryCard key={item.id} item={item} basePath={basePath} />
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <button disabled className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/5 bg-transparent text-gray-600 opacity-50 cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/5 bg-[#0a0a0a] text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              Next
            </button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}


function LibraryCard({ item, basePath }: LibraryCardProps) {
  const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Bot;

  return (
    <Link
      href={`${basePath}/${item.id}`}
      className="group flex flex-col h-full bg-[#0a0a0a] rounded-xl p-8 cursor-pointer border border-white/5 hover:border-white/20 transition-all hover:bg-[#0c0c0c]"
    >
      {/* Top row: icon + popularity */}
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
          <IconComponent size={24} strokeWidth={1.5} className="text-white/70 group-hover:text-white transition-colors" />
        </div>
        <div className="flex items-center gap-1.5">
          <Download className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm font-mono">{item.popularity}k</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-[18px] text-white mb-3 transition-colors leading-tight tracking-tight">
        {item.title}
      </h3>

      {/* Description (2-line clamp) */}
      <p className="text-[13px] text-gray-400 leading-[1.7] line-clamp-2 mb-5">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-1 bg-[#171717] border border-white/10 text-gray-300 rounded font-semibold tracking-wide transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: author + date */}
      <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-500 transition-colors">
        <span>by {item.author}</span>
        <span>{item.updatedAt}</span>
      </div>
    </Link>
  );
}
