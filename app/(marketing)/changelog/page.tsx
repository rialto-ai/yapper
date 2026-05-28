import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, ShieldCheck, Zap } from "lucide-react";

const releases = [
  {
    version: "1.4.0",
    date: "May 22, 2026",
    tag: "Major",
    icon: Sparkles,
    title: "Church Adoption Score 2.0",
    body: "Redesigned scoring engine now incorporates worship leader engagement signal from 12 new church planning platforms. Score breakdown is now editable per song with rationale notes for theological review status.",
    items: [
      "New congregational suitability sub-score",
      "Worship leader engagement now weighted 2x",
      "Per-song theological review rationale field",
      "Score history visible on every song page",
    ],
  },
  {
    version: "1.3.8",
    date: "May 14, 2026",
    tag: "Improvement",
    icon: Zap,
    title: "Royalty statement performance",
    body: "Quarterly statement generation is now 4.2x faster. Statements with 50+ participants now render in under 6 seconds. Backfilled historical statements for all Enterprise tier customers.",
    items: [
      "4.2x faster statement render",
      "Improved multi-currency conversion",
      "Statement PDFs now under 800KB",
    ],
  },
  {
    version: "1.3.7",
    date: "May 6, 2026",
    tag: "Fix",
    icon: Wrench,
    title: "YouTube Content ID claim sync",
    body: "Fixed an issue where Content ID claim revenue could lag up to 48 hours behind YouTube&apos;s reporting. Claim status now syncs within 15 minutes of YouTube confirming the claim.",
    items: [
      "Reduced claim revenue lag from 48h to 15min",
      "Better handling of disputed claim transitions",
    ],
  },
  {
    version: "1.3.5",
    date: "April 29, 2026",
    tag: "Major",
    icon: Sparkles,
    title: "Partner Portal white-label v2",
    body: "Refreshed the Partner Portal experience. Sub-labels can now configure their own branding, approval workflows, and territory permissions independently of the parent partner.",
    items: [
      "Sub-label custom branding",
      "Per-sub-label approval workflows",
      "Territory permission inheritance",
      "Dedicated sub-label statement views",
    ],
  },
  {
    version: "1.3.2",
    date: "April 17, 2026",
    tag: "Improvement",
    icon: ShieldCheck,
    title: "Tax document collection",
    body: "Streamlined the tax document collection flow for international payees. Selah now supports W-8BEN, W-8BEN-E, W-9, AU TFN declarations, and equivalents in 28 territories.",
    items: [
      "Auto-detect required tax form per country",
      "In-app signing for most documents",
      "Bulk reminders for missing tax info",
    ],
  },
  {
    version: "1.3.0",
    date: "April 1, 2026",
    tag: "Major",
    icon: Sparkles,
    title: "AI Release Strategist",
    body: "Launched the AI Release Strategist. Generate strategic release plans based on song metadata, artist stage, service tier, and primary objective. Includes positioning, audience profile, DSP strategy, and recommended actions.",
    items: [
      "Generate full strategy in under 2 seconds",
      "Recommendations grounded in your catalog history",
      "Risk flags for incomplete rights or assets",
    ],
  },
  {
    version: "1.2.4",
    date: "March 19, 2026",
    tag: "Improvement",
    icon: Zap,
    title: "Catalog bulk metadata editing",
    body: "Edit Christian metadata fields across multiple tracks at once. Useful for retroactively adding scripture references or worship themes to legacy catalog.",
    items: [
      "Multi-select up to 500 tracks",
      "Bulk update with diff preview",
      "Undo within 24 hours",
    ],
  },
];

const tagColor: Record<string, string> = {
  Major: "bg-accent-soft text-accent",
  Improvement: "bg-positive-soft text-positive",
  Fix: "bg-warning-soft text-warning",
};

export default function ChangelogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-soft/40 via-white to-white pointer-events-none" />
        <div className="relative max-w-[920px] mx-auto px-8 pt-20 pb-12 text-center">
          <p className="label-eyebrow mb-3">Changelog</p>
          <h1 className="text-[44px] font-bold tracking-tight leading-[1.1] mb-5">
            What we&apos;re shipping.
          </h1>
          <p className="text-[17px] text-subtle max-w-[600px] mx-auto">
            Every release, every fix, every improvement. Subscribe via{" "}
            <Link href="/docs/api" className="text-accent font-medium underline-offset-2 hover:underline">
              RSS
            </Link>{" "}
            or check back weekly.
          </p>
        </div>
      </section>

      <section className="max-w-[820px] mx-auto px-8 pb-20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/30 via-border to-border" />
          {releases.map((r) => (
            <article key={r.version} className="relative pl-14 pb-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-white to-accent-soft/40 border border-accent/15 flex items-center justify-center shadow-sm">
                <r.icon size={16} className="text-accent" strokeWidth={1.8} />
              </div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-[13px] font-semibold text-foreground">v{r.version}</span>
                <span className="text-[12px] text-muted">·</span>
                <span className="text-[12px] text-muted">{r.date}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColor[r.tag]}`}>
                  {r.tag}
                </span>
              </div>
              <h2 className="text-[22px] font-bold tracking-tight mb-3">{r.title}</h2>
              <p
                className="text-[14px] text-subtle leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
              <ul className="space-y-1.5">
                {r.items.map((item) => (
                  <li key={item} className="text-[13px] text-subtle flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="card p-6 flex items-center justify-between">
          <div>
            <p className="text-[14px] font-semibold mb-1">Want to see what&apos;s coming?</p>
            <p className="text-[13px] text-subtle">Our public roadmap lives in the documentation.</p>
          </div>
          <Link
            href="/docs"
            className="btn-secondary inline-flex items-center gap-2 text-[13px] !py-2 !px-4"
          >
            View roadmap
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
