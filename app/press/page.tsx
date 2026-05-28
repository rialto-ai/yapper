import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Christian Music Group — latest news, announcements, and press from our artists, releases, and label.",
};

const news: { date: string; title: string; excerpt: string }[] = [
  // Populate with real press items as they become available.
];

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="Christian Music Group — Latest News"
        intro="Announcements from our artists, releases, partnerships, and the wider Christian Music Group family."
      />

      <section>
        <Container className="py-20 md:py-28">
          {news.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
              <div className="eyebrow">Coming soon</div>
              <h2 className="mt-3 text-2xl font-medium tracking-tight">
                Press releases will appear here.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-subtle">
                For media enquiries or to be added to our press list, please get
                in touch.
              </p>
              <a
                href="/contact"
                className="btn-secondary mt-6 inline-flex"
              >
                Press enquiries
              </a>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {news.map((item, i) => (
                <li key={i} className="py-8">
                  <div className="text-[12.5px] uppercase tracking-[0.14em] text-muted">
                    {item.date}
                  </div>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-subtle">
                    {item.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
