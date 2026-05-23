"use client";

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
import { cn } from "@/lib/utils";

const NAV: { label: string; icon: React.ElementType; active?: boolean; badge?: string }[] = [
  { label: "Dashboard",      icon: LayoutDashboard, active: true },
  { label: "Leaderboards",   icon: Trophy },
  { label: "Narratives",     icon: Network, badge: "23" },
  { label: "Accounts",       icon: Users },
  { label: "Trends",         icon: TrendingUp },
  { label: "Graph Explorer", icon: GitBranch },
  { label: "Alerts",         icon: Bell, badge: "4" },
  { label: "Saved Lists",    icon: Bookmark },
  { label: "Settings",       icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[220px] shrink-0 flex-col border-r hairline bg-ink-950/60">
      <div className="px-5 py-5 border-b hairline flex items-center gap-2.5">
        <div className="relative">
          <div className="size-7 rounded-md bg-gradient-to-br from-cyan-neon/90 to-violet-neon shadow-glow grid place-items-center">
            <span className="text-ink-950 font-bold text-[11px] tracking-tighter">V</span>
          </div>
          <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-cyan-neon glow-dot text-cyan-neon" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold tracking-tight text-white">Venice Signal</span>
          <span className="text-[10px] font-mono text-ink-400 tracking-widest mt-0.5">v0.1.0 · LIVE</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV.map((item) => (
          <button
            key={item.label}
            className={cn(
              "group w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[12.5px] transition-colors",
              item.active
                ? "bg-white/[0.04] text-white border-l-2 border-cyan-neon pl-2"
                : "text-ink-400 hover:text-white hover:bg-white/[0.025] border-l-2 border-transparent",
            )}
          >
            <item.icon className={cn("size-3.5", item.active ? "text-cyan-neon" : "text-ink-400 group-hover:text-white")} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="text-[10px] font-mono text-cyan-neon/80 bg-cyan-neon/10 px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="px-3 py-3 border-t hairline">
        <div className="flex items-center justify-between px-2 py-2 rounded-md bg-white/[0.02] text-[11px] font-mono text-ink-400">
          <div className="flex items-center gap-1.5">
            <Command className="size-3" />
            <span>Search</span>
          </div>
          <span className="text-[10px] border hairline px-1.5 rounded">⌘K</span>
        </div>
      </div>
    </aside>
  );
}
