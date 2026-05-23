"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "size-8 grid place-items-center rounded-md border border-border",
        "bg-card text-muted hover:text-foreground hover:border-border-strong transition-colors",
        "ring-focus",
      )}
      aria-label="Toggle theme"
    >
      {/* Render both to avoid hydration mismatch, hide via class */}
      <Sun className={cn("size-4 absolute", mounted && isDark ? "opacity-0" : "opacity-100", "transition-opacity")} />
      <Moon className={cn("size-4 absolute", mounted && isDark ? "opacity-100" : "opacity-0", "transition-opacity")} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
