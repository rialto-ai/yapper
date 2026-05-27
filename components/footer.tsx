"use client";

import Link from "next/link";
import { Cross } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

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

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const navLabel = (key: string) =>
    (t.nav as Record<string, string>)[key] ?? key;

  return (
    <footer
      className="border-t border-stone-200 bg-stone-50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Cross className="h-5 w-5 text-stone-500" strokeWidth={1.5} />
              <span className="text-base font-semibold tracking-tight text-black">
                The Gospel in Sign
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-stone-500">
              {t.common.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-black"
                  >
                    {navLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
            <p className="text-xs text-stone-400">
              &copy; {year} The Gospel in Sign. All rights reserved.
            </p>
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="text-xs font-medium text-stone-500">
                Maintained by Rejoice Foundation
              </p>
              <p className="text-xs italic text-stone-400">
                For the Glory of God through His Son, Jesus Christ
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
