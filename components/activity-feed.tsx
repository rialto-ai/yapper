import { FEED } from "@/lib/mock";
import { cn, formatCompact } from "@/lib/utils";
import { Flame, TrendingUp, MessageCircle } from "lucide-react";

const VELOCITY_STYLES: Record<string, { label: string; cls: string; icon: React.ElementType }> = {
  viral:  { label: "VIRAL",  cls: "text-rose-neon bg-rose-neon/10 border-rose-neon/30",         icon: Flame },
  rising: { label: "RISING", cls: "text-cyan-neon bg-cyan-neon/10 border-cyan-neon/30",         icon: TrendingUp },
  normal: { label: "LIVE",   cls: "text-ink-400 bg-white/[0.03] border-white/10",               icon: MessageCircle },
};

export function ActivityFeed() {
  return (
    <div className="scrollbar-thin overflow-y-auto max-h-[520px] divide-y hairline">
      {FEED.map((p) => {
        const v = VELOCITY_STYLES[p.velocity];
        return (
          <article
            key={p.id}
            className="px-4 py-3 hover:bg-white/[0.02] transition-colors"
          >
            <header className="flex items-center gap-2 mb-1.5">
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-br from-ink-500 to-ink-700 grid place-items-center text-[9px] font-mono text-ink-400 border hairline">
                {p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <span className="text-[12px] font-medium text-white">{p.name}</span>
              <span className="text-[11px] text-ink-400">{p.handle}</span>
              <span className="text-ink-500">·</span>
              <span className="text-[11px] font-mono text-ink-400">{p.ago}</span>
              <span className="flex-1" />
              <span
                className={cn(
                  "flex items-center gap-1 text-[9.5px] font-mono px-1.5 py-0.5 rounded border",
                  v.cls,
                )}
              >
                <v.icon className="size-2.5" />
                {v.label}
              </span>
            </header>
            <p className="text-[12.5px] text-ink-400 leading-relaxed pl-8">{p.text}</p>
            <div className="flex items-center gap-3 mt-2 pl-8">
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-ink-400">
                {p.narrative}
              </span>
              <span className="text-[10.5px] font-mono text-ink-400">
                {formatCompact(p.engagement)} engagements
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
