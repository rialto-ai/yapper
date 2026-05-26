"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  BookOpen,
  ScrollText,
  ChevronDown,
  Menu,
  X,
  Users,
} from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import {
  getStudents,
  getActiveStudentId,
  setActiveStudentId,
} from "@/lib/progress";
import type { Student } from "@/lib/types";

const NAV: { label: string; icon: React.ElementType; href: string }[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Learn", icon: BookOpen, href: "/learn" },
  { label: "Catechism", icon: ScrollText, href: "/catechism" },
];

function StudentSwitcher() {
  const [students, setStudents] = useState<Student[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStudents(getStudents());
    setActiveId(getActiveStudentId());
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const active = students.find((s) => s.id === activeId) ?? students[0];
  if (!active) return null;

  function switchStudent(id: string) {
    setActiveStudentId(id);
    setActiveId(id);
    setOpen(false);
    window.dispatchEvent(new Event("student-changed"));
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px]",
          "hover:bg-surface transition-colors"
        )}
      >
        <span
          className="size-7 rounded-full flex items-center justify-center text-white text-[11px] font-semibold shrink-0"
          style={{ backgroundColor: active.avatarColor }}
        >
          {active.name[0]}
        </span>
        <div className="flex-1 text-left min-w-0">
          <p className="text-foreground font-medium truncate">{active.name}</p>
          <p className="text-[11px] text-muted">{active.stage} Stage</p>
        </div>
        <ChevronDown
          className={cn(
            "size-3.5 text-muted transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute bottom-full left-0 right-0 mb-1 bg-card border border-border rounded-md shadow py-1 z-50">
          {students.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => switchStudent(s.id)}
              className={cn(
                "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-[13px] hover:bg-surface transition-colors",
                s.id === activeId && "bg-accent-soft"
              )}
            >
              <span
                className="size-6 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"
                style={{ backgroundColor: s.avatarColor }}
              >
                {s.name[0]}
              </span>
              <span
                className={cn(
                  "truncate",
                  s.id === activeId ? "text-accent font-medium" : "text-foreground"
                )}
              >
                {s.name}
              </span>
            </button>
          ))}
          <div className="border-t border-border mt-1 pt-1">
            <Link
              href="/dashboard/students"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-2.5 py-1.5 text-[13px] text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              <Users className="size-4" />
              Manage Students
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const sidebarContent = (
    <>
      <div className="px-5 h-[64px] flex items-center border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-2.5">
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
                "group w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors",
                active
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground hover:bg-surface"
              )}
            >
              <item.icon
                className={cn(
                  "size-4 shrink-0",
                  active
                    ? "text-accent"
                    : "text-subtle group-hover:text-foreground"
                )}
              />
              <span className="flex-1 text-left">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-border">
        <StudentSwitcher />
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 size-9 grid place-items-center rounded-md border border-border bg-card text-muted hover:text-foreground transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="size-4" />
      </button>

      <aside className="hidden lg:flex w-[240px] shrink-0 flex-col border-r border-border bg-card">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative w-[280px] flex flex-col bg-card border-r border-border shadow-lg z-10">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 size-8 grid place-items-center rounded-md text-muted hover:text-foreground transition-colors"
              aria-label="Close sidebar"
            >
              <X className="size-4" />
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}

export function SidebarTrigger() {
  return null;
}
