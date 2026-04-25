"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-surface-1 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-headline font-bold tracking-tight text-white">
                Contact Us
              </h1>
              <p className="text-gray-400 text-lg">
                Have a question or want to collaborate? Reach out to us.
              </p>
              <div className="w-20 h-1 bg-white/20 rounded mx-auto" />
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-2 border border-white/10 rounded-lg py-3 px-4 text-sm focus:border-white/30 transition-all outline-none text-white placeholder-gray-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-surface-2 border border-white/10 rounded-lg py-3 px-4 text-sm focus:border-white/30 transition-all outline-none text-white placeholder-gray-600"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-2 border border-white/10 rounded-lg py-3 px-4 text-sm focus:border-white/30 transition-all outline-none min-h-[160px] resize-none text-white placeholder-gray-600"
                  placeholder="Tell us what you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-3.5 rounded-lg font-semibold text-[14px] hover:bg-gray-200 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Or email us directly at{" "}
                <a
                  href="mailto:hello@vico.dev"
                  className="text-white font-semibold hover:underline"
                >
                  hello@vico.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
