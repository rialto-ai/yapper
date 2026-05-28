import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Christian Music Group is an Australian-based, full-service Christian label and publisher partnering with artists to carry Jesus music to the world.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Christian label and publisher, based in Sydney."
        intro="We exist to win the world for Christ through Christian art — partnering with artists to release, distribute, and steward music that carries the hope and light of Jesus."
      />

      <section>
        <Container className="grid gap-16 py-20 md:grid-cols-3 md:py-28">
          <div className="md:col-span-1">
            <div className="eyebrow">Our story</div>
          </div>
          <div className="prose-body md:col-span-2 max-w-2xl text-[16px]">
            <p>
              Christian Music Group is an Australian-based, full-service
              Christian Label and Publisher.
            </p>
            <p>
              Christian Music Group is a dedicated Christian music company,
              fully committed to winning the world for Christ through Christian
              art — we do this by partnering with artists to distribute and
              promote Jesus music, a vehicle carrying the hope and light of the
              world.
            </p>
            <p>
              We believe the Arts and Entertainment, and Media, make up two of
              the Seven Mountain Mandate, and on these rest an enormous
              opportunity to influence our world for Christ.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20 md:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/about"
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-border-strong"
            >
              <div className="eyebrow">CMG · Label offer</div>
              <h3 className="mt-3 text-2xl font-medium tracking-tight">
                Christian Music Group
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-subtle">
                A full-service label home for Christian artists — releases,
                publishing, marketing, and long-term artist development.
              </p>
            </Link>
            <Link
              href="/distribution"
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-border-strong"
            >
              <div className="eyebrow">CMD · Distribution offer</div>
              <h3 className="mt-3 text-2xl font-medium tracking-tight">
                Christian Music Distribution
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-subtle">
                Powered by Wings Access — premium distribution for Christian
                &amp; Gospel artists. You keep 100% of your royalties.
              </p>
              <div className="mt-6 text-[13.5px] text-foreground">
                Learn more →
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
