"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "zh", label: "Chinese (Simplified)", native: "简体中文" },
  { code: "zh-hk", label: "Chinese (Traditional)", native: "繁體中文" },
  { code: "id", label: "Indonesian", native: "Bahasa Indonesia" },
  { code: "tl", label: "Tagalog", native: "Tagalog" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "th", label: "Thai", native: "ภาษาไทย" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-md text-[12.5px] font-medium text-subtle hover:text-foreground hover:bg-surface transition-colors ${
          compact ? "px-2 py-1.5" : "px-2.5 py-1.5"
        }`}
      >
        <Globe size={13} strokeWidth={1.8} />
        <span>{compact ? active.code.toUpperCase() : active.native}</span>
        <ChevronDown size={11} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1 w-[220px] bg-white border border-border rounded-lg shadow-xl shadow-foreground/5 py-1 z-50 max-h-[360px] overflow-y-auto">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setActive(l);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-left text-[13px] transition-colors ${
                active.code === l.code
                  ? "bg-accent-soft text-accent font-medium"
                  : "text-subtle hover:bg-surface hover:text-foreground"
              }`}
            >
              <span>{l.native}</span>
              <span className="text-[11px] text-muted">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
