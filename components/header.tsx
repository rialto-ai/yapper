"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Artists", href: "#artists" },
  { label: "Discovery", href: "#discovery" },
  { label: "Research", href: "#research" },
  { label: "Integrity", href: "#integrity" },
  { label: "Global", href: "#global" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-6 sm:px-8">
        <Wordmark showBadge />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-[14px] font-medium text-subtle transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a href="#partners" className="btn-secondary !py-2 !text-[14px]">
            For Partners
          </a>
          <a href="#waitlist" className="btn-primary !py-2 !text-[14px]">
            Join the Waitlist
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-content flex-col px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-3 text-[15px] font-medium text-subtle"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Join the Waitlist
              </a>
              <a
                href="#partners"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                For Partners
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
