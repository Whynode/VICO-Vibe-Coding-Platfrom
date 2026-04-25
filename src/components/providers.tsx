"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import enDict from "../../messages/en.json";
import idDict from "../../messages/id.json";
import type { Language, TranslationKey, LanguageContextType } from "@/types";
import { useRouter } from "next/navigation";

const dictionaries = {
  EN: enDict,
  ID: idDict,
};

// ─── Language Context ─────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

// ─── Provider ─────────────────────────────────────────────────────────────

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("vico_lang") as Language;
    if (stored === "EN" || stored === "ID") setLangState(stored);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("vico_lang", newLang);
    router.refresh();
    window.location.reload();
  };

  const t = (key: TranslationKey): string => {
    const dict = dictionaries[mounted ? lang : "EN"];
    return (dict as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang: mounted ? lang : "EN",
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
