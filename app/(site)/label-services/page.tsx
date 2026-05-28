import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Label Services",
  description:
    "Christian Music Group label services — powered by Wings Access. Distribution, rights, royalties, and release support for Christian artists.",
};

export default function LabelServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Label Services"
        title="Label services, powered by Wings Access."
        intro="Christian Music Group offers a full suite of label services for Christian artists — distribution, rights, royalties, releases, and marketing — through our Wings Access platform."
      />

      <section>
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="eyebrow">Get started</div>
            </div>
            <div className="md:col-span-2 max-w-2xl">
              <p className="text-[16px] leading-relaxed text-subtle">
                Wings Access is our purpose-built platform for Christian
                artists, labels, and rights holders. Sign in or learn more to
                access your dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.external.labelServices}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Open Wings Access ↗
                </a>
                <a href="/contact" className="btn-secondary">
                  Talk to our team
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
