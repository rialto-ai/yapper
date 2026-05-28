import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const metadata: Metadata = {
  title: "Roster",
  description:
    "The Christian Music Group roster — artists and writers carrying the hope of Jesus through music.",
};

const artistSlots = [0, 1, 2, 3, 4, 5];
const writerSlots = [0, 1, 2, 3];

export default function RosterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roster"
        title="Artists & writers."
        intro="A growing family of Christian artists and songwriters. Our first signings will be announced soon — get in touch to join."
      />

      <section>
        <Container className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Artists</div>
              <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                Announcing soon.
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden text-[13.5px] text-subtle hover:text-foreground md:inline"
            >
              Artist enquiries →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {artistSlots.map((i) => (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <PhotoPlaceholder label="Artist photo" aspect="aspect-[4/5]" />
                <div className="p-5">
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    Artist
                  </div>
                  <div className="mt-1.5 text-[15.5px] font-medium tracking-tight">
                    Announcing soon
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Writers</div>
              <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                Songwriters &amp; publishing.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {writerSlots.map((i) => (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <PhotoPlaceholder label="Writer photo" aspect="aspect-square" />
                <div className="p-4">
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    Songwriter
                  </div>
                  <div className="mt-1.5 text-[14.5px] font-medium tracking-tight">
                    Announcing soon
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-8 border-t border-border pt-16 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="eyebrow">Join the roster</div>
              <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
                Are you a Christian artist?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-subtle">
                CMG is now accepting submissions from artists and writers for
                its inaugural roster. We'd love to hear what God is doing
                through your music.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Artist enquiries
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
