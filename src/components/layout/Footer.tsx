"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useLanguage } from "@/components/providers";

export function Footer() {
  const { t } = useLanguage();

  const FOOTER_LINKS = {
    resources: [
      { label: t("footer.link.documentation"), href: "/docs" },
      { label: t("footer.link.roadmap"), href: "/roadmap" },
      { label: t("footer.link.changelog"), href: "/changelog" },
    ],
    company: [
      { label: t("footer.link.about"), href: "/about" },
      { label: t("footer.link.blog"), href: "/blog" },
    ],
    social: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  };

  return (
    <footer className="w-full py-12 bg-black border-t border-white/10 transition-colors duration-300">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-2">
          <div className="font-display font-bold text-lg text-white mb-4">
            VICO
          </div>
          <p className="text-gray-400 text-xs tracking-tight max-w-xs leading-relaxed">
            {t("footer.description")}
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">
            {t("footer.links.resources")}
          </h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.resources.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">
            {t("footer.links.company")}
          </h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-4">
            Social
          </h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.social.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-white/10 px-8 max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">
          © 2026 VICO by Arya. {t("footer.rights")}
        </span>
        <div className="flex space-x-6">
          <Languages className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </footer>
  );
}
