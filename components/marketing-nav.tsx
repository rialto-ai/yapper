"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Show, UserButton } from "@clerk/nextjs";
import { ArrowRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import { hasClerk } from "@/lib/auth";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Intelligence", href: "#intelligence" },
  { label: "Builders",     href: "#builders" },
  { label: "Launches",     href: "#launches" },
  { label: "Network",      href: "#network" },
  { label: "Capital",      href: "#capital" },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo size={22} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-2">
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
          {hasClerk() ? (
            <>
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  className="text-[13px] text-foreground hover:text-accent transition-colors px-3 py-1.5"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
                >
                  Join Early Access <ArrowRight className="size-3.5" />
                </Link>
              </Show>
              <Show when="signed-in">
                <Link
                  href="/app"
                  className="btn-primary h-9 px-3.5 text-[13px] flex items-center"
                >
                  Open dashboard
                </Link>
                <UserButton />
              </Show>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-[13px] text-foreground hover:text-accent transition-colors px-3 py-1.5"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
              >
                Join Early Access <ArrowRight className="size-3.5" />
              </Link>
            </>
          )}
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
            <div className="flex items-center justify-between pt-1">
              <ThemeToggle />
              <Link
                href="/sign-up"
                onClick={() => setOpen(false)}
                className="btn-primary h-9 px-3.5 text-[13px] flex items-center gap-1.5"
              >
                Join Early Access <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
