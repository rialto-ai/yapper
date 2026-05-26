"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

export type Crumb = { label: string; href?: string };

export function TopBar({
  title,
  crumbs,
}: {
  title?: string;
  crumbs?: Crumb[];
}) {
  return (
    <div className="border-b border-border bg-card">
      <div className="flex items-center gap-3 px-4 sm:px-6 h-[56px]">
        <div className="pl-10 lg:pl-0 flex-1 min-w-0">
          {crumbs && crumbs.length > 0 ? (
            <div className="flex items-center gap-1.5 text-[12.5px] text-muted">
              {crumbs.map((c, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight className="size-3.5 text-subtle shrink-0" />
                  )}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="hover:text-foreground transition-colors truncate"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        i === crumbs.length - 1
                          ? "text-foreground font-medium truncate"
                          : "truncate"
                      }
                    >
                      {c.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : title ? (
            <h1 className="text-[15px] font-semibold text-foreground truncate">
              {title}
            </h1>
          ) : null}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
