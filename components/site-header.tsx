"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[15px] font-medium tracking-tight"
            aria-label={`${site.name} home`}
          >
            <Logo className="h-5 w-5" />
            <span>{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13.5px] text-subtle transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          className={cn(
            "md:hidden grid overflow-hidden transition-[grid-template-rows] duration-200",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0">
            <nav
              className="flex flex-col gap-1 pb-4 pt-1"
              aria-label="Mobile primary"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-[14px] text-subtle hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M7 9h10" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
