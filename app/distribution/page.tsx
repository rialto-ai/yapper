import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Christian Music Distribution",
  description:
    "Christian Music distributed by Christian hands. Upload to 150+ stores, keep 100% of your royalties — AU$99 per year for unlimited premium distribution.",
};

const benefits = [
  "Upload your music to 150+ music stores worldwide",
  "You own all your music",
  "You keep 100% of your royalties",
  "No lock-in agreements",
  "Dedicated customer service",
  "Join a growing community of Christian & Gospel artists",
  "AU$99 per year for unlimited premium Christian music distribution",
];

const steps = [
  { n: "01", title: "Create your account" },
  { n: "02", title: "Upload your music" },
  { n: "03", title: "Collect your royalties" },
];

export default function DistributionPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="py-24 md:py-36">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Christian Music Distribution, a division of Christian Music Group
            </div>
            <h1 className="mt-6 text-5xl font-medium tracking-tight md:text-7xl">
              Christian Music distributed by Christian hands.
            </h1>
            <p className="mt-8 max-w-2xl text-[16.5px] leading-relaxed text-subtle">
              Christian Music Distribution is a straightforward music
              technology company built specifically by Christians, to deliver
              Christian &amp; Gospel music throughout the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.external.distribution}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Let's get started ↗
              </a>
              <a href="#how-it-works" className="btn-secondary">
                How it works
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="eyebrow">What's the deal</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                Everything included.
              </h2>
            </div>
            <ul className="md:col-span-2 grid gap-1 sm:grid-cols-1">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-b border-border py-4 last:border-b-0"
                >
                  <Check className="mt-1 h-4 w-4 flex-none text-foreground" />
                  <span className="text-[15.5px] leading-relaxed text-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        id="how-it-works"
        className="border-t border-border bg-surface"
      >
        <Container className="py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="eyebrow">The process</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              Three simple steps.
            </h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="text-[12px] tracking-[0.2em] text-muted">
                  STEP {s.n}
                </div>
                <div className="mt-4 text-xl font-medium tracking-tight">
                  {s.title}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <a
              href={site.external.distribution}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Let's get started ↗
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}
