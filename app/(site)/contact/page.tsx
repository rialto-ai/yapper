import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

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
          <div className="grid gap-16 md:grid-cols-5">
            <div className="md:col-span-2 space-y-10">
              <div>
                <div className="eyebrow">General enquiries</div>
                <p className="mt-3 text-[16px] leading-relaxed text-subtle">
                  Use the form to reach our team. We respond to all enquiries
                  personally.
                </p>
              </div>

              <div>
                <div className="eyebrow">Mailing address</div>
                <address className="mt-3 not-italic text-[15.5px] leading-relaxed text-subtle">
                  {site.legal.entity}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                  <br />
                  {site.address.country}
                </address>
              </div>

              <div>
                <div className="eyebrow">Working with us</div>
                <ul className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-subtle">
                  <li>
                    <span className="font-medium text-foreground">
                      Artist enquiries —
                    </span>{" "}
                    label and publishing opportunities.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">
                      Distribution —
                    </span>{" "}
                    AU$99/year Christian &amp; Gospel music distribution.
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

            <div className="md:col-span-3">
              <div className="eyebrow">Send us a message</div>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
