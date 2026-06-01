import type { Metadata } from "next";
import { ContentPage, Section, Bullets } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Rejoice approaches privacy: family-safe by default, minimal data, and no exploitation of spiritual or personal vulnerability.",
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy"
      intro="Rejoice is being built to be family-safe by default. This summary describes the privacy principles guiding the platform ahead of launch."
      updated="June 2026"
    >
      <Section heading="Our approach">
        <p>
          We aim to collect as little personal information as possible and to be
          clear about what we collect and why. Listening should feel calm and
          trustworthy, not surveilled. We do not sell personal data, and we do
          not exploit spiritual or personal vulnerability for engagement or
          profit.
        </p>
      </Section>

      <Section heading="Information we expect to handle">
        <Bullets
          items={[
            "Account details you provide, such as your name and email address.",
            "Household and family profile settings you choose to create.",
            "Listening and follows used to power recommendations and your library.",
            "Basic technical and device information needed to deliver audio reliably.",
          ]}
        />
      </Section>

      <Section heading="How we use information">
        <Bullets
          items={[
            "To provide the service: playback, library, follows, and discovery.",
            "To improve recommendations shaped by formation, not addiction.",
            "To keep accounts and families safe and secure.",
            "To communicate with you about the service and the launch.",
          ]}
        />
      </Section>

      <Section heading="Children and families">
        <p>
          Family-safe environments, household profiles, and kids mode are core
          to Rejoice. Children&rsquo;s experiences are held to the strictest
          standard, and sponsorships that reach them are governed by our{" "}
          <a className="font-medium text-accent hover:underline" href="/sponsorship-standards">
            Sponsorship Standards
          </a>
          .
        </p>
      </Section>

      <Section heading="Your choices">
        <p>
          When Rejoice launches, you will be able to access, correct, and delete
          your information, and manage communications. Until then, you can reach
          us with any questions at{" "}
          <a className="font-medium text-accent hover:underline" href="mailto:hello@rejoice.org">
            hello@rejoice.org
          </a>
          .
        </p>
      </Section>
    </ContentPage>
  );
}
