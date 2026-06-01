import { BadgeCheck, Calendar, Music2, Mic2, BookOpen } from "lucide-react";

const releases = [
  { icon: Music2, label: "Songs of Ascent", meta: "Album · 12 songs" },
  { icon: Mic2, label: "On Worship & Lament", meta: "Podcast · Ep. 14" },
  { icon: BookOpen, label: "The Praying Life", meta: "Audiobook · 6h 12m" },
];

const dates = [
  { city: "Nashville", venue: "Ryman Worship Night", date: "Oct 12" },
  { city: "Sydney", venue: "Hillsong Centre", date: "Nov 03" },
];

export function ArtistPageMockup() {
  return (
    <div className="card overflow-hidden">
      {/* Banner */}
      <div className="relative h-28 bg-gradient-to-r from-accent via-[#24416b] to-[#3a5c8a] sm:h-32">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div className="px-6 pb-6">
        {/* Identity */}
        <div className="-mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-card bg-surface-2 text-[24px] font-semibold text-accent shadow-sm">
              PP
            </span>
            <div className="pb-1">
              <div className="flex items-center gap-1.5">
                <h3 className="text-[19px] font-semibold tracking-tight">The Psalms Project</h3>
                <BadgeCheck size={17} className="text-accent" />
              </div>
              <p className="text-[13px] text-muted">
                Worship collective · Human artistry disclosed
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="btn-primary !py-2 !text-[13px]">Follow</span>
            <span className="btn-secondary !py-2 !text-[13px]">Support</span>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          {/* Releases */}
          <div>
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Releases
            </p>
            <div className="space-y-2">
              {releases.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-accent">
                    <r.icon size={16} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-medium">{r.label}</p>
                    <p className="truncate text-[12px] text-muted">{r.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tour dates */}
          <div>
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Worship nights
            </p>
            <div className="space-y-2">
              {dates.map((d) => (
                <div
                  key={d.city}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/[0.06] text-accent">
                    <Calendar size={15} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium">{d.city}</p>
                    <p className="truncate text-[12px] text-muted">{d.venue}</p>
                  </div>
                  <span className="shrink-0 text-[12px] font-semibold text-accent">{d.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Psalms", "Lament", "Advent", "Liturgy"].map((t) => (
                <span key={t} className="chip !py-1 !text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
