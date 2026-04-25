import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Newspaper } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "Apa Itu Vibe Coding? Panduan Lengkap untuk Pemula",
    date: "April 15, 2026",
    excerpt:
      "Vibe coding adalah paradigma baru pengembangan software yang mengandalkan AI untuk menulis kode. Pelajari bagaimana memulainya.",
    tag: "Tutorial",
  },
  {
    title: "5 Tips Menulis PRD yang Efektif untuk AI Coding Tools",
    date: "April 12, 2026",
    excerpt:
      "PRD yang baik adalah fondasi proyek yang sukses. Berikut 5 tips agar PRD Anda mudah dipahami oleh Cursor, Copilot, dan tools AI lainnya.",
    tag: "Best Practice",
  },
  {
    title: "Mengapa Prompt Engineering Penting dalam Vibe Coding",
    date: "April 8, 2026",
    excerpt:
      "Prompt engineering bukan hanya soal menulis instruksi — ini adalah skill kritis yang menentukan kualitas output AI Anda.",
    tag: "Insight",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 space-y-4">
            <h1 className="text-5xl font-display font-bold tracking-tight text-white">
              Blog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Insights, tutorials, and best practices for AI-assisted product
              development.
            </p>
            <div className="w-20 h-px bg-white/20 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group border border-white/5 rounded-xl overflow-hidden bg-black hover:border-white/20 transition-all shadow-lg"
              >
                <div className="h-48 bg-white/5 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot opacity-20" />
                  <Newspaper className="w-12 h-12 text-white/20 relative z-10" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-2 py-0.5 bg-white/10 text-gray-300 rounded-sm font-bold">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
