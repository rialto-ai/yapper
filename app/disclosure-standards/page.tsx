import type { Metadata } from "next";
import { ContentPage, Section, Bullets } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Disclosure Standards",
  description:
    "Rejoice's human-artistry and AI-use disclosure standards: how we label human-created, AI-assisted, synthetic, translated, sampled, and public-domain works.",
};

const labels: { name: string; desc: string }[] = [
  {
    name: "Human-created",
    desc: "Written, performed, and produced by people. Welcomed and elevated.",
  },
  {
    name: "AI-assisted",
    desc: "Human work where AI tools assisted with production, mastering, or arrangement. Disclosed clearly.",
  },
  {
    name: "Synthetic vocals",
    desc: "Vocals generated or substantially synthesised by AI must be labelled as such.",
  },
  {
    name: "Synthetic persona",
    desc: "Any non-human artist identity must be labelled. It may never be presented as a human worshipper.",
  },
  {
    name: "Translation",
    desc: "Translated or dubbed works are identified, with the source noted where possible.",
  },
  {
    name: "Sampled",
    desc: "Works built on samples or interpolations of other recordings are identified.",
  },
  {
    name: "Public domain",
    desc: "Public-domain recordings and texts are marked so listeners understand their origin.",
  },
];

export default function DisclosureStandardsPage() {
  return (
    <ContentPage
      eyebrow="Standards"
      title="Disclosure Standards"
      intro="Christian listeners deserve clarity about what they are hearing. Rejoice is building standards that distinguish human-created work, AI-assisted human work, synthetic content, translations, samples, and public-domain recordings."
      updated="June 2026"
    >
      <Section heading="Why disclosure matters">
        <p>
          Worship and Christian music are not merely sonic outputs. They are
          acts of praise, lament, confession, memory, doctrine, longing, and
          testimony before God. Listeners have a right to know whether a work
          was created by a person, assisted by AI, or generated synthetically.
        </p>
        <p>
          AI is the infrastructure layer, not the spiritual authority.
          Technology helps us organise, search, and surface Christian audio — it
          does not replace the human artistry, witness, and authority at the
          heart of worship.
        </p>
      </Section>

      <Section heading="Disclosure labels">
        <div className="not-prose space-y-3">
          {labels.map((l) => (
            <div
              key={l.name}
              className="card flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="shrink-0 text-[14px] font-semibold text-accent sm:w-40">
                {l.name}
              </span>
              <span className="text-[14.5px] leading-relaxed text-subtle">
                {l.desc}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="What we require">
        <Bullets
          items={[
            "AI-assisted work should be clearly disclosed.",
            "Synthetic vocals and synthetic personas must be labelled.",
            "Disclosures should be accurate, visible, and not buried.",
            "Creators are responsible for the accuracy of their disclosures.",
          ]}
        />
      </Section>

      <Section heading="What we prohibit">
        <Bullets
          items={[
            "Deceptive artist biographies, testimonies, church affiliations, or identities.",
            "Synthetic worship leaders presented as human worshippers.",
            "Fake spiritual authority or fabricated ministry credentials.",
            "Passing off AI-generated or synthetic work as human-created.",
          ]}
        />
      </Section>

      <Section heading="How standards evolve">
        <p>
          Disclosure is an active area of our research and development. These
          standards will continue to mature with input from artists, churches,
          ministries, theologians, and technologists as the category — and the
          technology — develops.
        </p>
      </Section>
    </ContentPage>
  );
}
