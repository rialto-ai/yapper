"use client";

import { useState } from "react";
import { Sparkles, GitBranch } from "lucide-react";
import { discoveryPaths, resolveItem } from "@/lib/demo/data";
import { ContentRow } from "@/components/demo/content-card";
import { cn } from "@/lib/utils";

export function RedemptiveDiscoveryGraph({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [activeId, setActiveId] = useState(discoveryPaths[0].id);
  const path = discoveryPaths.find((p) => p.id === activeId) ?? discoveryPaths[0];
  const items = path.itemIds.map(resolveItem).filter(Boolean);

  return (
    <div>
      {/* Path selector */}
      <div className="flex flex-wrap gap-2">
        {discoveryPaths.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
              p.id === activeId
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border-strong bg-card text-subtle hover:border-gold hover:text-foreground"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Center node */}
      <div className="mt-6 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white">
          <GitBranch size={15} className="text-gold-soft" />
          {path.kind === "passage" ? "Passage" : "Theme"}: {path.selection}
        </span>
        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-subtle">
          {path.explanation}
        </p>
        <span className="mt-3 h-6 w-px bg-border-strong" aria-hidden="true" />
      </div>

      {/* Connected items */}
      <div
        className={cn(
          "grid gap-2.5",
          compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {items.map((item) => (
          <ContentRow key={item!.id} item={item!} />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-gold/30 bg-gold/[0.06] px-4 py-3">
        <Sparkles size={16} className="shrink-0 text-gold" />
        <p className="text-[13px] font-medium text-foreground">
          AI is the infrastructure layer, not the spiritual authority.
        </p>
      </div>
    </div>
  );
}
