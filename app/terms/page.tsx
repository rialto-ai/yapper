import type { Metadata } from "next";
import { ContentPage, Section, Bullets } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The principles that will guide use of the Rejoice platform: respect for human artistry, honest disclosure, and family-safe conduct.",
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms"
      intro="These principles describe how we intend the Rejoice platform to be used. Full terms of service will be published ahead of our Q4 2026 launch."
      updated="June 2026"
    >
      <Section heading="Using Rejoice">
        <p>
          Rejoice is a platform for Christian audio — music, worship, podcasts,
          audiobooks, Scripture, and teaching. You agree to use it lawfully, in
          good faith, and in a way that respects other listeners, creators, and
          the worshipful nature of much of the content.
        </p>
      </Section>

      <Section heading="Creators and content">
        <p>
          Artists, ministries, and publishers retain ownership of their work.
          By publishing on Rejoice, creators confirm they have the rights to
          their content and agree to disclose how it was made in accordance with
          our{" "}
          <a className="font-medium text-accent hover:underline" href="/disclosure-standards">
            Disclosure Standards
          </a>
          .
        </p>
        <Bullets
          items={[
            "Disclose human-created, AI-assisted, synthetic, translated, and sampled work honestly.",
            "Do not impersonate people, churches, or ministries.",
            "Do not present synthetic personas as human worshippers or claim false spiritual authority.",
          ]}
        />
      </Section>

      <Section heading="Acceptable conduct">
        <Bullets
          items={[
            "No deceptive identities, testimonies, or affiliations.",
            "No unlawful, harmful, or family-unsafe content.",
            "No attempts to manipulate discovery, search, or recommendations.",
            "No infringement of others' intellectual property.",
          ]}
        />
      </Section>

      <Section heading="Memberships and support">
        <p>
          Rejoice intends to offer free access alongside paid memberships and
          creator support. Pricing, billing, and refund terms will be set out in
          full at launch. Rejoice operates on a nonprofit / noncommercial basis,
          with surplus reinvested into the mission.
        </p>
      </Section>

      <Section heading="Changes">
        <p>
          We will update these terms as the platform develops and will publish
          the complete agreement before launch. Questions can be sent to{" "}
          <a className="font-medium text-accent hover:underline" href="mailto:hello@rejoice.org">
            hello@rejoice.org
          </a>
          .
        </p>
      </Section>
    </ContentPage>
  );
}
