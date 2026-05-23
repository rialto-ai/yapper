"use client";

import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

export type Crumb = { label: string; href?: string };

export function TopBar({
  title = "Dashboard",
  crumbs,
  description,
}: {
  title?: string;
  crumbs?: Crumb[];
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-card">
      <div className="flex items-center gap-3 px-6 h-[64px]">
        {crumbs && crumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-[12.5px] text-muted">
            {crumbs.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 text-subtle" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-foreground transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className={i === crumbs.length - 1 ? "text-foreground font-medium" : ""}>
                    {c.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-md border border-border bg-surface w-[280px]">
          <Search className="size-3.5 text-subtle" />
          <input
            className="bg-transparent text-[13px] text-foreground placeholder:text-subtle outline-none flex-1"
            placeholder="Search…"
          />
          <span className="text-[10px] font-mono text-subtle border border-border bg-card px-1.5 py-px rounded">⌘K</span>
        </div>

        <ThemeToggle />
        <UserMenu />
      </div>

      {(title || description) && (
        <div className="px-6 py-5 border-t border-border bg-background">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-[22px] font-semibold tracking-tight text-foreground">{title}</h1>
              {description && (
                <p className="text-[13.5px] text-muted mt-0.5">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-[11.5px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-positive" />
                Live · synced 2s ago
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
