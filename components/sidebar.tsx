"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Disc3,
  Rocket,
  Scale,
  DollarSign,
  Megaphone,
  FileText,
  Youtube,
  BarChart3,
  Sparkles,
  Building2,
  Globe,
  Settings,
} from "lucide-react";

const nav = [
  { label: "Overview", href: "/overview", icon: LayoutDashboard },
  { label: "Roster", href: "/roster", icon: Users },
  { label: "Catalog", href: "/catalog", icon: Disc3 },
  { label: "Releases", href: "/releases", icon: Rocket },
  { label: "Rights", href: "/rights", icon: Scale },
  { label: "Royalties", href: "/royalties", icon: DollarSign },
  { label: "Campaigns", href: "/campaigns", icon: Megaphone },
  { label: "Publishing", href: "/publishing", icon: FileText },
  { label: "YouTube", href: "/youtube", icon: Youtube },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "AI Strategist", href: "/ai-strategist", icon: Sparkles },
  { label: "Label Services", href: "/label-services", icon: Building2 },
  { label: "Partner Portal", href: "/partner-portal", icon: Globe },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[240px] border-r border-border bg-white flex flex-col z-30">
      <div className="h-[56px] flex items-center px-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight leading-none">Selah</span>
            <span className="text-[10px] text-muted leading-none mt-0.5">by Christian Music Group</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <div className="space-y-0.5">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-foreground text-white"
                    : "text-subtle hover:text-foreground hover:bg-surface"
                }`}
              >
                <item.icon size={16} strokeWidth={1.8} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2 px-2.5 py-1.5">
          <div className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center text-[11px] font-medium text-muted">
            CM
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium leading-tight">CMG Admin</span>
            <span className="text-[11px] text-muted leading-tight">Demo Environment</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
