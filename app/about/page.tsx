"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DoctrineCard from "@/components/doctrine-card";
import FeedbackSection from "@/components/feedback-section";

const DOCTRINAL_POINTS = [
  "God is holy.",
  "All people have sinned.",
  "Judgment is real.",
  "Jesus Christ is fully God and fully man.",
  "Christ died as a substitute for sinners.",
  "Christ rose bodily from the dead.",
  "Salvation is by grace alone through faith alone in Christ alone.",
  "True faith includes repentance and a changed life.",
  "The Gospel must be proclaimed to all nations and peoples.",
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title */}
        <section className="px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold text-fg sm:text-4xl">
              About Gospel in Sign
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-fg-secondary">
              Gospel in Sign exists to make the Gospel of Jesus Christ clear and
              accessible through signed video, Scripture, written teaching, and
              printable resources.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
              We believe the Bible is the Word of God. We believe God is holy,
              man has sinned, Christ died for sinners, Christ rose bodily from
              the dead, and sinners must repent and believe the Gospel. Salvation
              is by grace alone, through faith alone, in Christ alone, to the
              glory of God alone.
            </p>
          </div>
        </section>

        {/* Sign Language */}
        <section className="mt-12 border-t border-b border-border bg-surface py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-fg">
              About Sign Languages
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
              Sign languages are distinct languages with their own grammar,
              culture, and context. Visual Vernacular and International Sign can
              help in some cross-cultural settings, but they are not replacements
              for local sign languages.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
              Our goal is to share faithful signed Gospel resources in
              partnership with trusted ministries, Deaf Christians, interpreters,
              and theological reviewers.
            </p>
          </div>
        </section>

        {/* Doctrinal Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-fg">What We Believe</h2>
            <div className="mt-8 space-y-4">
              {DOCTRINAL_POINTS.map((statement, index) => (
                <DoctrineCard
                  key={index}
                  number={index + 1}
                  text={statement}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-fg">Our Partners</h2>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
              We work in partnership with trusted ministries, Deaf Christians,
              interpreters, and theological reviewers to ensure that every
              resource shared through this platform is theologically faithful and
              linguistically appropriate.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
              If you are a Deaf Christian, interpreter, pastor, or ministry
              leader who would like to contribute, please{" "}
              <Link
                href="/contact"
                className="font-medium text-fg underline underline-offset-4 hover:text-accent"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
