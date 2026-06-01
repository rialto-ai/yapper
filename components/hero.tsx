import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Waveform } from "@/components/waveform";

const previewRows = [
  { title: "Be Thou My Vision", meta: "Worship · City Light Worship", tag: "Human" },
  { title: "Psalm 27 — The Lord Is My Light", meta: "Scripture · Read aloud", tag: "Scripture" },
  { title: "On Hope & Suffering", meta: "Podcast · Teaching", tag: "Sermon" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      {/* soft global-mesh backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--border-strong))_1px,transparent_0)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <span className="chip mb-6">
            <Sparkles size={13} className="text-gold" />
            Interactive demo available now
          </span>

          <h1 className="text-balance text-[40px] font-semibold leading-[1.05] tracking-tightest sm:text-[58px]">
            A Christian audio platform for followers of Jesus.
          </h1>

          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-subtle sm:text-[19px]">
            Rejoice brings together music, worship, podcasts, audiobooks,
            Scripture, artist pages, and redemptive discovery in one trusted
            platform.
          </p>

          <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-muted">
            Built for families, artists, churches, ministries, publishers, and
            the worldwide Church, Rejoice helps Christians discover faithful
            audio, support creators, and gather around sound that forms the
            soul.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/demo" className="btn-primary">
              Try the Demo
              <ArrowRight size={16} />
            </a>
            <a href="#waitlist" className="btn-secondary">
              Join the Waitlist
            </a>
          </div>

          <p className="mt-5 text-[13px] text-muted">
            Interactive demo available now. App launching Q4 2026.
          </p>
        </div>

        {/* Hero visual — elegant card-based app preview */}
        <div className="animate-rise [animation-delay:120ms]">
          <div className="relative mx-auto max-w-[440px]">
            <div className="card overflow-hidden p-5 shadow-[0_40px_90px_-50px_rgba(26,47,78,0.55)]">
              <div className="rounded-2xl bg-gradient-to-br from-accent to-[#26456f] p-5 text-accent-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/65">
                      Now playing
                    </p>
                    <p className="mt-1 text-[17px] font-semibold leading-tight">
                      Songs of Ascent
                    </p>
                    <p className="text-[12.5px] text-white/70">
                      The Psalms Project
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                    <Play size={18} fill="currentColor" />
                  </span>
                </div>
                <div className="mt-5 h-10">
                  <Waveform count={42} color="rgba(255,255,255,0.92)" />
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {previewRows.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-accent">
                      <Play size={13} fill="currentColor" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13.5px] font-medium">{r.title}</p>
                      <p className="truncate text-[12px] text-muted">{r.meta}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-muted">
                      {r.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* floating discovery chip */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-[0_20px_50px_-30px_rgba(26,47,78,0.5)] sm:block">
              <p className="text-[10.5px] font-semibold uppercase tracking-wider text-gold">
                Redemptive discovery
              </p>
              <p className="mt-1 text-[13px] font-medium">Psalm 42 → As the Deer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
