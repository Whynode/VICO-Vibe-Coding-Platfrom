import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LearningPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-32 bg-surface-1 transition-colors duration-300 min-h-screen">
        <article className="max-w-4xl mx-auto px-8 lg:px-12 bg-surface-2 rounded-2xl border border-white/10 overflow-hidden my-12">
          {/* Hero Image */}
          <div className="w-full aspect-21/9 bg-[#171717] flex items-center justify-center border-b border-white/10">
             <span className="text-[13px] tracking-[0.2em] uppercase font-bold text-gray-500">[CINEMATIC MEDIA - Later]</span>
          </div>

          <div className="p-12 lg:p-20 space-y-16">
            {/* Overview */}
            <section className="space-y-6 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#171717] px-3.5 py-1.5 rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                  Technical Guide
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.1] tracking-tight">
                Mastering Vibe Coding
              </h1>
              <p className="text-[15px] text-gray-400 leading-[1.8]">
                A comprehensive guide to transitioning from abstract ideation to structured LLM-readable architectures. Understand the paradigms that make VICO the perfect bridge between your vision and AI execution.
              </p>
            </section>

            {/* Step-by-Step Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Define Abstractions", desc: "Start with high-level goals without worrying about the underlying tech stack initially." },
                { title: "Iterative Structuring", desc: "Use the Assistant to drill down into specifics like API schemas and database models." },
                { title: "Generate Context", desc: "Export a structured Markdown file that acts as the perfect system prompt for your AI coder." }
              ].map((step, i) => (
                <div key={i} className="bg-[#171717] rounded-lg p-8 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
                  <span className="text-6xl font-headline font-bold text-white/5 absolute -top-2 -right-2 select-none group-hover:text-white/10 transition-colors">
                    0{i + 1}
                  </span>
                  <div className="relative z-10 space-y-3 mt-6">
                    <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
                    <p className="text-[13px] text-gray-400 leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Detailed Technical Explanation */}
            <section className="space-y-8 prose prose-invert max-w-none prose-headings:font-headline prose-p:text-gray-400 prose-p:leading-[1.8] prose-a:text-white">
              <h2>The Architecture of a Perfect PRD</h2>
              <p>
                When building applications with large language models, the quality of the output is strictly bounded by the quality of the context provided. A standard agile user story often lacks the structural rigor required by an LLM to generate correct code.
              </p>
              <h3>Why Markdown?</h3>
              <p>
                Markdown is the native language of LLMs. By exporting your PRD in a structured Markdown format, complete with code blocks, tables, and hierarchical headings, you provide a semantic map that the AI can easily traverse. VICO automatically formats your brainstormed ideas into this optimal structure.
              </p>
              <div className="bg-[#171717] rounded-lg p-6 my-8 overflow-x-auto border border-white/10">
                <pre className="text-[13px] text-white font-mono leading-[1.6]">
{`# PRD: Authentication Module
## Core Requirements
- JWT-based authentication
- HTTP-only cookies for token storage
- Redis for session invalidation`}
                </pre>
              </div>
              <p>
                As seen in the example above, the clarity of instructions prevents hallucinations and ensures the generated code aligns with security best practices.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
