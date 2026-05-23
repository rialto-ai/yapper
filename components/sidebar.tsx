"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Trophy,
  Network,
  Users,
  TrendingUp,
  GitBranch,
  Bell,
  Bookmark,
  Settings,
  Command,
} from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const NAV: { label: string; icon: React.ElementType; href: string; badge?: string }[] = [
  { label: "Dashboard",      icon: LayoutDashboard, href: "/" },
  { label: "Leaderboards",   icon: Trophy,          href: "/leaderboards" },
  { label: "Narratives",     icon: Network,         href: "/narratives", badge: "23" },
  { label: "Accounts",       icon: Users,           href: "/accounts" },
  { label: "Trends",         icon: TrendingUp,      href: "/trends" },
  { label: "Graph Explorer", icon: GitBranch,       href: "/narratives" },
  { label: "Alerts",         icon: Bell,            href: "/alerts", badge: "4" },
  { label: "Saved Lists",    icon: Bookmark,        href: "/saved" },
  { label: "Settings",       icon: Settings,        href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="hidden lg:flex w-[232px] shrink-0 flex-col border-r border-border bg-card">
      <div className="px-5 h-[64px] flex items-center border-b border-border">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={22} />
        </Link>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-colors",
                active
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground hover:bg-surface",
              )}
            >
              <item.icon className={cn("size-4 shrink-0", active ? "text-accent" : "text-subtle group-hover:text-foreground")} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className={cn(
                  "text-[10.5px] font-mono px-1.5 py-0.5 rounded",
                  active ? "bg-accent/10 text-accent" : "bg-surface-2 text-muted",
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-border">
        <div className="flex items-center justify-between px-2.5 py-2 rounded-md bg-surface text-[12px] text-muted">
          <div className="flex items-center gap-1.5">
            <Command className="size-3" />
            <span>Search</span>
          </div>
          <span className="text-[10px] font-mono border border-border bg-card px-1.5 py-px rounded">⌘K</span>
        </div>
      </div>
    </aside>
  );
}
