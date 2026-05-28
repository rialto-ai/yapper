"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Rocket,
  Disc3,
  Scale,
  Church,
  Megaphone,
  Youtube,
  BarChart3,
  Sparkles,
  Building2,
  Settings,
} from "lucide-react";
import { LogoMark } from "./logo";

const nav = [
  { label: "Dashboard", href: "/overview", icon: LayoutDashboard },
  { label: "Releases", href: "/releases", icon: Rocket },
  { label: "Catalogue", href: "/catalog", icon: Disc3 },
  { label: "Rights", href: "/rights", icon: Scale },
  { label: "Worship", href: "/worship", icon: Church },
  { label: "Campaigns", href: "/campaigns", icon: Megaphone },
  { label: "YouTube", href: "/youtube", icon: Youtube },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Enterprise", href: "/enterprise", icon: Building2 },
  { label: "Intelligence", href: "/ai-strategist", icon: Sparkles },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[240px] border-r border-border bg-white flex flex-col z-30">
      <div className="h-[56px] flex items-center px-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark size={28} />
          <span className="text-[16px] font-semibold tracking-tight">Selah</span>
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
                className={`group flex items-center gap-2.5 px-2.5 py-[7px] rounded-md text-[13px] font-medium transition-all ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-subtle hover:text-foreground hover:bg-surface"
                }`}
              >
                <item.icon
                  size={16}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={active ? "text-accent" : "text-muted group-hover:text-foreground"}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2 px-2.5 py-1.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-[11px] font-semibold text-white">
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
