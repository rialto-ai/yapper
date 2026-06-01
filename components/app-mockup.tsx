import { Search, Play, Heart, Home, Compass, Library, BookOpen } from "lucide-react";
import { Waveform } from "@/components/waveform";

function Phone({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[270px] rounded-[28px] border border-border-strong bg-card p-2 shadow-[0_24px_60px_-30px_rgba(26,47,78,0.45)]">
        <div className="overflow-hidden rounded-[22px] bg-background ring-1 ring-border">
          <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-medium text-muted">
            <span>9:41</span>
            <span className="h-1 w-10 rounded-full bg-border-strong" />
            <span>Rejoice</span>
          </div>
          <div className="px-3 pb-3 pt-2">{children}</div>
          <div className="flex items-center justify-around border-t border-border px-3 py-2.5 text-muted">
            <Home size={16} className="text-accent" />
            <Compass size={16} />
            <Library size={16} />
            <BookOpen size={16} />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[12px] font-medium uppercase tracking-wider text-muted">
        {label}
      </p>
    </div>
  );
}

function Row({
  title,
  meta,
  tone = "stone",
}: {
  title: string;
  meta: string;
  tone?: "stone" | "blue";
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-[10px] border border-border bg-card p-2">
      <span
        className={
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md " +
          (tone === "blue" ? "bg-accent text-accent-foreground" : "bg-surface-2 text-accent")
        }
      >
        <Play size={12} fill="currentColor" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-semibold leading-tight">{title}</p>
        <p className="truncate text-[10px] text-muted">{meta}</p>
      </div>
      <Heart size={12} className="shrink-0 text-muted" />
    </div>
  );
}

export function AppMockup() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {/* Home */}
      <Phone label="Home">
        <div className="rounded-[14px] bg-gradient-to-br from-accent to-[#24416b] p-3 text-accent-foreground">
          <p className="text-[10px] uppercase tracking-wider text-white/70">Now Playing</p>
          <p className="mt-1 text-[13px] font-semibold leading-tight">Be Thou My Vision</p>
          <p className="text-[10px] text-white/70">City Light Worship</p>
          <div className="mt-3 h-7">
            <Waveform count={28} color="rgba(255,255,255,0.9)" />
          </div>
        </div>
        <p className="mt-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Made for your household
        </p>
        <div className="space-y-2">
          <Row title="Morning Psalms" meta="Scripture · 24 min" />
          <Row title="Advent Lament" meta="Worship · Playlist" tone="blue" />
          <Row title="The Gospel of John" meta="Audiobook · 2h" />
        </div>
      </Phone>

      {/* Artist Page */}
      <Phone label="Artist Page">
        <div className="rounded-[14px] bg-surface-2 p-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[14px] font-semibold text-accent-foreground">
              CL
            </span>
            <div>
              <p className="text-[12px] font-semibold leading-tight">City Light Worship</p>
              <p className="text-[10px] text-muted">Verified · Human artistry</p>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md bg-accent px-2.5 py-1 text-[10px] font-semibold text-accent-foreground">
              Follow
            </span>
            <span className="rounded-md border border-border-strong bg-card px-2.5 py-1 text-[10px] font-semibold">
              Support
            </span>
          </div>
        </div>
        <p className="mt-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Releases
        </p>
        <div className="space-y-2">
          <Row title="Songs of Ascent" meta="Album · 12 songs" />
          <Row title="Worship Night Live" meta="Event recording" tone="blue" />
          <Row title="Liturgy of Hope" meta="EP · 5 songs" />
        </div>
      </Phone>

      {/* Discovery Search */}
      <Phone label="Discovery Search">
        <div className="flex items-center gap-2 rounded-[10px] border border-border-strong bg-card px-2.5 py-2">
          <Search size={13} className="text-muted" />
          <span className="text-[11px] text-subtle">themes of lament & hope</span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {["Lament", "Advent", "Psalms", "Mission", "Joy"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2 py-0.5 text-[9.5px] font-medium text-subtle"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Across formats
        </p>
        <div className="space-y-2">
          <Row title="Psalm 42 — As the Deer" meta="Scripture → Song" tone="blue" />
          <Row title="Hope in Suffering" meta="Sermon · 31 min" />
          <Row title="A Grief Observed" meta="Audiobook" />
        </div>
      </Phone>
    </div>
  );
}
