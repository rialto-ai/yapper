"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Subjects", href: "#subjects" },
  { label: "Pricing",  href: "#pricing" },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo size={22} />
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-2">
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
          <Link
            href="/sign-in"
            className="text-[13px] text-foreground hover:text-accent transition-colors px-3 py-1.5"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
          >
            Get Started <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden size-9 grid place-items-center rounded-md border border-border text-foreground"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[14px] text-foreground py-2"
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="text-[14px] text-foreground py-2"
            >
              Sign In
            </Link>
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Link
                href="/sign-up"
                onClick={() => setOpen(false)}
                className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
              >
                Get Started <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
