import Link from "next/link";
import { Container } from "@/components/container";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComingReleases />
      <Divisions />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow">
              {site.short} · Sydney, Australia · Now launching
            </div>
            <h1 className="mt-5 text-5xl font-medium tracking-tight md:text-7xl">
              Christian Music Group
            </h1>
            <p className="mt-6 text-2xl text-subtle md:text-3xl">
              {site.tagline}
            </p>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-subtle">
              An Australian-based, full-service Christian label and publisher —
              partnering with artists to carry the hope of Jesus through music.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About CMG
              </Link>
              <Link href="/distribution" className="btn-secondary">
                Christian Music Distribution
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <PhotoPlaceholder
              label="Hero image"
              aspect="aspect-[4/5]"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ComingReleases() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">First releases</div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              New music — launching soon.
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-subtle">
              Our first wave of releases is on the way. Sign up for press
              announcements or get in touch about joining the roster.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-[13.5px] text-subtle hover:text-foreground"
          >
            Get in touch →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["01", "02", "03"].map((n) => (
            <article
              key={n}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <PhotoPlaceholder label="Cover art" aspect="aspect-square" />
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <div className="text-[13px] text-muted">TBA</div>
                  <div className="mt-1 text-[15px] font-medium">
                    Announcing soon
                  </div>
                </div>
                <div className="text-[12px] tracking-widest text-muted">
                  {n}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Divisions() {
  const items = [
    {
      tag: "CMG · Label",
      title: "Christian Music Group",
      desc: "Full-service label and publisher partnering with Christian artists to release, promote, and steward their music.",
      href: "/about",
      cta: "About CMG",
    },
    {
      tag: "CMD · Distribution",
      title: "Christian Music Distribution",
      desc: "Distribute your music to the world's leading stores. Keep 100% of your royalties. Built by Christians, for Christian and Gospel artists.",
      href: "/distribution",
      cta: "How it works",
    },
  ];
  return (
    <section className="border-t border-border bg-surface">
      <Container className="py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="eyebrow">Two divisions, one mission</div>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Winning the world for Christ through Christian art.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-border-strong"
            >
              <div>
                <div className="eyebrow">{it.tag}</div>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-subtle">
                  {it.desc}
                </p>
              </div>
              <div className="mt-8 text-[13.5px] text-foreground">
                {it.cta} →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section>
      <Container className="py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-border pt-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Working with us.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-subtle">
              Artist enquiries, sync licensing, press, or partnerships — we'd
              love to hear from you.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
