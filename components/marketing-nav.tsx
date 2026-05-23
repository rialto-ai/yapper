"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Product",       href: "#product" },
  { label: "Pricing",       href: "#pricing" },
  { label: "Customers",     href: "#customers" },
  { label: "Changelog",     href: "#" },
  { label: "Docs",          href: "#" },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f, { passive: true });
    f();
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-[1180px] mx-auto px-6 h-[64px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={22} />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link href="/sign-in" className="text-[13px] text-foreground hover:text-accent transition-colors px-3 py-1.5">
            Sign in
          </Link>
          <Link href="/sign-up" className="btn-primary h-9 px-3.5 text-[13px] flex items-center">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
