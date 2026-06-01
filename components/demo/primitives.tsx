"use client";

import { Check, ShieldCheck, Info, Sparkles } from "lucide-react";
import type { Disclosure } from "@/lib/demo/types";
import { cn } from "@/lib/utils";

export function ThemeChip({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  const Comp = onClick ? "button" : "span";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[12.5px] font-medium transition-colors",
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border-strong bg-card text-subtle",
        onClick && !active && "hover:border-gold hover:text-foreground"
      )}
    >
      {label}
    </Comp>
  );
}

export function DisclosureBadge({ disclosure }: { disclosure?: Disclosure }) {
  if (!disclosure) return null;
  const items: { label: string; ok: boolean; icon: typeof Check }[] = [
    {
      label: disclosure.human ? "Human-created" : "Synthetic — labelled",
      ok: disclosure.human,
      icon: disclosure.human ? Check : Info,
    },
    {
      label: `AI-assisted: ${disclosure.aiAssisted}`,
      ok: disclosure.aiAssisted === "No",
      icon: disclosure.aiAssisted === "No" ? Check : Sparkles,
    },
    {
      label: `Synthetic vocals: ${disclosure.syntheticVocals ? "Yes" : "No"}`,
      ok: !disclosure.syntheticVocals,
      icon: disclosure.syntheticVocals ? Info : Check,
    },
    {
      label: disclosure.familySuitable ? "Family suitable" : "Mature themes",
      ok: disclosure.familySuitable,
      icon: disclosure.familySuitable ? Check : Info,
    },
  ];
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <ShieldCheck size={15} className="text-accent" />
        <span className="text-[12px] font-semibold uppercase tracking-wider text-muted">
          Disclosure
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it.label}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium",
              it.ok ? "bg-accent/[0.08] text-accent" : "bg-gold/[0.14] text-gold"
            )}
          >
            <it.icon size={12} strokeWidth={2.2} />
            {it.label}
          </span>
        ))}
      </div>
      {disclosure.note && (
        <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
          {disclosure.note}
        </p>
      )}
      <p className="mt-2 text-[11.5px] text-muted">
        Licensed / sample demo content.
      </p>
    </div>
  );
}

export function DemoNotice({ className }: { className?: string }) {
  return (
    <p className={cn("text-[12px] leading-relaxed text-muted", className)}>
      Demo audio only. No real streaming catalogue is connected.
    </p>
  );
}

export function SectionTitle({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3.5 flex items-end justify-between gap-3">
      <h3 className="text-[17px] font-semibold tracking-tight sm:text-[19px]">
        {children}
      </h3>
      {action}
    </div>
  );
}
