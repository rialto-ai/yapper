import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Christian Music Group — artist enquiries, press, sync licensing, and partnerships. Sydney, Australia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        intro="Artist enquiries, sync licensing, press, or partnerships — we'd love to hear from you."
      />
      <section>
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="eyebrow">General enquiries</div>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-2xl font-medium tracking-tight hover:underline"
              >
                {site.email}
              </a>
              <div className="mt-10 eyebrow">Mailing address</div>
              <address className="mt-4 not-italic text-[16px] leading-relaxed text-subtle">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
                <br />
                {site.address.country}
              </address>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="eyebrow">Working with us</div>
              <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-subtle">
                <li>
                  <span className="font-medium text-foreground">
                    Artist enquiries —
                  </span>{" "}
                  for label and publishing opportunities.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Distribution —
                  </span>{" "}
                  for AU$99/year Christian &amp; Gospel music distribution via
                  Christian Music Distribution.
                </li>
                <li>
                  <span className="font-medium text-foreground">Press —</span>{" "}
                  media, interviews, and press list requests.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Sync &amp; licensing —
                  </span>{" "}
                  film, TV, and brand placements.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
