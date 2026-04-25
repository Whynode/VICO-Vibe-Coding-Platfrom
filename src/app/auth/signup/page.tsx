"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers";
import { ArrowRight } from "lucide-react";

export default function SignUpPage() {
  const { t } = useLanguage();

  return (
    <div className="h-screen bg-[#000000] bg-grid flex items-center justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="sm:mx-auto sm:w-full">
          <Link href="/" className="flex justify-center text-3xl font-bold tracking-tight text-white font-display">
            VICO
          </Link>
          <h2 className="mt-8 text-center text-3xl font-display font-bold text-white tracking-tight">
            {t("auth.create_account")}
          </h2>
          <p className="mt-2 text-center text-[14px] text-gray-400">
            {t("auth.already_have")}{" "}
            <Link href="/auth/signin" className="font-semibold text-white hover:text-gray-300 transition-colors">
              {t("auth.sign_in")}
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-black border border-white/5 rounded-xl p-10 w-full relative shadow-2xl">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-white/5 border border-white/5 px-4 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-all">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            {t("auth.signup_google")}
          </button>

          <div className="mt-8 mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>
              <div className="relative flex justify-center text-[13px]">
                <span className="bg-black px-4 text-gray-500 font-medium">{t("auth.continue_email")}</span>
              </div>
            </div>
          </div>

          <form className="space-y-5" action="#" method="POST">
            <div>
              <label htmlFor="name" className="sr-only">
                {t("auth.fullname")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-lg border border-white/5 px-4 py-3 placeholder-gray-500 text-white text-[14px] focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all bg-[#050505]"
                placeholder={t("auth.fullname")}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                {t("auth.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-lg border border-white/5 px-4 py-3 placeholder-gray-500 text-white text-[14px] focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all bg-[#050505]"
                placeholder={t("auth.email")}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                {t("auth.create_password")}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-lg border border-white/5 px-4 py-3 placeholder-gray-500 text-white text-[14px] focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all bg-[#050505]"
                placeholder={t("auth.create_password")}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 text-[14px] font-semibold text-black hover:bg-gray-200 transition-all duration-300"
              >
                {t("auth.btn.signup")}
                <ArrowRight size={18} />
              </button>
            </div>
            
            <p className="text-center text-[12px] text-gray-500 mt-4">
              {t("auth.terms")}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
