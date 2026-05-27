"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Globe, ChevronDown, Cross } from "lucide-react";

interface HeaderProps {
  locale: string;
  translations: Record<string, string>;
}

const NAV_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/learn", labelKey: "learn" },
  { href: "/sign-language", labelKey: "signLanguage" },
  { href: "/scripture", labelKey: "scripture" },
  { href: "/printable", labelKey: "printable" },
  { href: "/teach", labelKey: "teach" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Espanol" },
  { code: "fr", label: "Francais" },
  { code: "pt", label: "Portugues" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिन्दी" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "tl", label: "Tagalog" },
];

const DEFAULT_LABELS: Record<string, string> = {
  home: "Home",
  learn: "Learn",
  signLanguage: "Sign Language",
  scripture: "Scripture",
  printable: "Printable",
  teach: "Teach",
  about: "About",
  contact: "Contact",
};

export default function Header({ locale, translations }: HeaderProps) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const t = (key: string) => translations?.[key] || DEFAULT_LABELS[key] || key;

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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleLanguageChange(code: string) {
    setLangOpen(false);
    document.cookie = `locale=${code};path=/;max-age=31536000`;
    const url = new URL(window.location.href);
    url.searchParams.set("locale", code);
    router.push(url.pathname + url.search);
  }

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
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

        {/* Desktop navigation */}
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
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Right side: language selector + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-black"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <ul
                role="listbox"
                aria-label="Language options"
                className="absolute right-0 mt-1 w-44 rounded-lg border border-stone-200 bg-white py-1 shadow-lg"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={lang.code === locale}>
                    <button
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex w-full items-center px-4 py-2 text-left text-sm transition-colors hover:bg-stone-50 ${
                        lang.code === locale
                          ? "font-medium text-black"
                          : "text-stone-600"
                      }`}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-black lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
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

      {/* Mobile navigation */}
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
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
