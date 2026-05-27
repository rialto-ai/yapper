"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown, Cross } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { LANGUAGES } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/learn", key: "learn" },
  { href: "/sign-language", key: "signLanguage" },
  { href: "/scripture", key: "scripture" },
  { href: "/printable", key: "printable" },
  { href: "/teach", key: "teach" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLabel = (key: string) =>
    (t.nav as Record<string, string>)[key] ?? key;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const currentLang =
    LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-black no-underline"
          aria-label="The Gospel in Sign - Home"
        >
          <Cross className="h-5 w-5 text-stone-700" strokeWidth={1.5} />
          <span className="text-lg font-semibold tracking-tight text-black">
            The Gospel in Sign
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-black"
            >
              {navLabel(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-black"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">
                {currentLang.nativeName}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <ul
                role="listbox"
                aria-label="Language options"
                className="absolute right-0 mt-1 w-48 rounded-lg border border-stone-200 bg-white py-1 shadow-lg"
              >
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.code}
                    role="option"
                    aria-selected={lang.code === locale}
                  >
                    <button
                      onClick={() => {
                        setLocale(lang.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-stone-50 ${
                        lang.code === locale
                          ? "font-medium text-black"
                          : "text-stone-600"
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-xs text-stone-400">
                        {lang.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-black lg:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-stone-200 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1 px-4 pb-4 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-black"
              >
                {navLabel(link.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
