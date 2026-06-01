import type { Metadata } from "next";
import { ContentPage, Section, Bullets } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Sponsorship Standards",
  description:
    "How Rejoice governs family-safe sponsorship and donor underwriting to keep the free tier trusted, calm, and accountable.",
};

export default function SponsorshipStandardsPage() {
  return (
    <ContentPage
      eyebrow="Standards"
      title="Sponsorship Standards"
      intro="Rejoice offers a free tier supported by carefully governed sponsorships and philanthropy. These standards exist so that support never compromises trust, formation, or family safety."
      updated="June 2026"
    >
      <Section heading="Our commitment">
        <p>
          Sponsorship helps keep Christian audio accessible to families,
          churches, and listeners who could not otherwise afford it. We treat
          that responsibility seriously. Sponsorship and donor underwriting are
          governed, disclosed, and held to a higher standard than conventional
          advertising.
        </p>
      </Section>

      <Section heading="Principles">
        <Bullets
          items={[
            "Family-safe by default. Anything that reaches a household profile or kids mode is held to the strictest standard.",
            "Calm, not manipulative. No dark patterns, no exploitative targeting, no engagement-maximising tactics.",
            "Disclosed. Sponsored placements are clearly labelled as such.",
            "Mission-aligned. Sponsorship supports the mission; it does not shape theology, recommendations, or editorial trust.",
            "Governed. Sponsors are reviewed and approved against these standards, not accepted automatically.",
          ]}
        />
      </Section>

      <Section heading="What we welcome">
        <Bullets
          items={[
            "Ministries, churches, publishers, and Christian organisations underwriting free access.",
            "Foundations and donors supporting global access, accessibility, and translation.",
            "Mission-aligned partners whose presence is appropriate for families.",
          ]}
        />
      </Section>

      <Section heading="What we prohibit">
        <Bullets
          items={[
            "Content unsuitable for families, children, or a worship context.",
            "Deceptive, predatory, or exploitative financial offers.",
            "Sponsorship that attempts to influence recommendations, search results, or theological trust.",
            "Targeting that profiles children or exploits spiritual vulnerability.",
            "Anything presented as endorsement by Rejoice without a genuine, disclosed relationship.",
          ]}
        />
      </Section>

      <Section heading="Separation from editorial trust">
        <p>
          There is a clear wall between sponsorship and discovery. Sponsors
          cannot buy theological credibility, placement in Scripture-aware
          recommendations, or the appearance of endorsement. Discovery is
          shaped by Scripture, theology, and context — never by who is paying.
        </p>
      </Section>

      <Section heading="Governance">
        <p>
          Sponsorships are reviewed against these standards before approval and
          may be paused or removed if they fall short. As Rejoice operates on a
          nonprofit / noncommercial basis, surplus is reinvested into the
          mission rather than distributed to shareholders.
        </p>
      </Section>
    </ContentPage>
  );
}
