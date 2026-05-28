"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { LogoMark } from "./logo";

const links = [
  { label: "Product", href: "/#solutions" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export function MarketingNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[64px] border-b border-border flex items-center justify-between px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark size={32} />
          <span className="text-[17px] font-semibold tracking-tight">Selah</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : l.href.startsWith("/#")
                ? false
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                  active ? "text-accent bg-accent-soft" : "text-subtle hover:text-foreground hover:bg-surface"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <Link href="/overview" className="text-[13px] font-medium text-subtle hover:text-foreground px-2">
          Login
        </Link>
        <Link
          href="/overview"
          className="btn-primary flex items-center gap-2 !py-2 !px-4 text-[13px]"
        >
          Join Selah
          <ArrowRight size={13} />
        </Link>
      </div>
    </nav>
  );
}
