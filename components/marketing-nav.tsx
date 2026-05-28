"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Product", href: "/#modules" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

export function MarketingNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[64px] border-b border-border flex items-center justify-between px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold tracking-tight leading-none">
              Selah
            </span>
            <span className="text-[10px] text-muted leading-none mt-0.5">
              by Christian Music Group
            </span>
          </div>
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
                  active
                    ? "text-accent bg-accent-soft"
                    : "text-subtle hover:text-foreground hover:bg-surface"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/overview"
          className="text-[13px] font-medium text-subtle hover:text-foreground"
        >
          Sign in
        </Link>
        <Link
          href="/overview"
          className="btn-primary flex items-center gap-2 !py-2 !px-4 text-[13px]"
        >
          Enter Demo
          <ArrowRight size={13} />
        </Link>
      </div>
    </nav>
  );
}
