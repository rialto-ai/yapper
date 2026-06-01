import type { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";
import { ContentPage, Section } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rejoice — artists, churches, ministries, publishers, researchers, and partners who care about the future of Christian audio.",
};

const reasons = [
  "Artists, worship leaders, and creators",
  "Churches, ministries, and publishers",
  "Audiobook and podcast partners",
  "Theologians and researchers",
  "Technologists and builders",
  "Foundations and global city representatives",
];

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Get in touch."
      intro="We are building with artists, churches, ministries, publishers, technologists, theologians, and families who care about the future of Christian audio."
    >
      <div className="not-prose card p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-accent text-accent-foreground">
            <Mail size={20} strokeWidth={1.7} />
          </span>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-muted">
              Email
            </p>
            <a
              href="mailto:hello@rejoice.org"
              className="text-[20px] font-semibold tracking-tight text-foreground hover:text-accent"
            >
              hello@rejoice.org
            </a>
            <p className="mt-2 text-[14.5px] leading-relaxed text-subtle">
              We read every message and aim to respond thoughtfully.
            </p>
          </div>
        </div>
      </div>

      <Section heading="Who we'd love to hear from">
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-10">
        <a href="/#waitlist" className="btn-primary">
          Join the Waitlist
          <ArrowRight size={16} />
        </a>
      </div>
    </ContentPage>
  );
}
