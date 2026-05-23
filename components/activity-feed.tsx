import { FEED } from "@/lib/mock";
import { Avatar } from "./trending-accounts";
import { cn, formatCompact } from "@/lib/utils";

const VELOCITY_STYLES: Record<string, { label: string; cls: string }> = {
  viral:  { label: "Viral",  cls: "text-accent bg-accent-soft" },
  rising: { label: "Rising", cls: "text-chart-2 bg-chart-2/10" },
  normal: { label: "Live",   cls: "text-muted bg-surface-2" },
};

export function ActivityFeed() {
  return (
    <div className="scrollbar-thin overflow-y-auto max-h-[560px] divide-y divide-border">
      {FEED.map((p) => {
        const v = VELOCITY_STYLES[p.velocity];
        return (
          <article key={p.id} className="px-5 py-4 hover:bg-surface transition-colors">
            <header className="flex items-center gap-2.5 mb-2">
              <Avatar name={p.name} size={28} />
              <span className="text-[13px] font-medium text-foreground">{p.name}</span>
              <span className="text-[12px] text-subtle">{p.handle}</span>
              <span className="text-subtle">·</span>
              <span className="text-[12px] text-subtle">{p.ago}</span>
              <span className="flex-1" />
              <span className={cn("text-[10.5px] font-medium px-2 py-0.5 rounded-full", v.cls)}>
                {v.label}
              </span>
            </header>
            <p className="text-[13.5px] text-foreground leading-relaxed pl-[38px]">{p.text}</p>
            <div className="flex items-center gap-3 mt-2 pl-[38px]">
              <span className="chip">{p.narrative}</span>
              <span className="text-[11.5px] text-muted">
                {formatCompact(p.engagement)} engagements
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
