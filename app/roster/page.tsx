import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Roster",
  description:
    "Artists and writers signed to Christian Music Group — an Australian Christian label and publisher.",
};

const artists = [
  { name: "Artist Name", role: "Artist" },
  { name: "Artist Name", role: "Artist" },
  { name: "Artist Name", role: "Artist" },
  { name: "Artist Name", role: "Artist" },
  { name: "Artist Name", role: "Artist" },
  { name: "Artist Name", role: "Artist" },
];

const writers = [
  { name: "Writer Name", role: "Songwriter" },
  { name: "Writer Name", role: "Songwriter" },
  { name: "Writer Name", role: "Songwriter" },
  { name: "Writer Name", role: "Songwriter" },
];

export default function RosterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roster"
        title="Artists & writers."
        intro="A growing family of Christian artists and songwriters carrying the hope of Jesus through their craft."
      />

      <section>
        <Container className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Artists
            </h2>
            <div className="text-[13px] text-muted">{artists.length} signed</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {artists.map((a, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div
                  className="aspect-[4/5] bg-surface-2"
                  aria-hidden="true"
                />
                <div className="p-5">
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    {a.role}
                  </div>
                  <div className="mt-1.5 text-[15.5px] font-medium tracking-tight">
                    {a.name}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Writers
            </h2>
            <div className="text-[13px] text-muted">{writers.length} signed</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {writers.map((w, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div
                  className="aspect-square bg-surface-2"
                  aria-hidden="true"
                />
                <div className="p-4">
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                    {w.role}
                  </div>
                  <div className="mt-1.5 text-[14.5px] font-medium tracking-tight">
                    {w.name}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
