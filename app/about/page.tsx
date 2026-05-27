"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { useLocale } from "@/lib/locale-context";

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
  const { t } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              About The Gospel in Sign
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Gospel in Sign exists to make the Gospel of Jesus Christ clear and
              accessible through signed video, Scripture, written teaching, and
              printable resources.
            </p>
          </div>
        </section>

        {/* Sign Language Note */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">Sign Language</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Sign languages are distinct languages with their own grammar,
              culture, and context. International Sign can be useful in some
              global settings, but it is not a universal replacement for local
              sign languages. Our goal is to share faithful signed Gospel
              resources in partnership with trusted ministries, Deaf Christians,
              interpreters, and theological reviewers.
            </p>
          </div>
        </section>

        {/* Doctrinal Statement */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">What We Believe</h2>
            <p className="mt-3 text-lg text-stone-500">
              Our doctrinal convictions, rooted in Scripture.
            </p>

            <ol className="mt-10 space-y-6">
              {DOCTRINAL_POINTS.map((statement, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-base leading-relaxed text-stone-700">
                    {statement}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Partners */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">Partners</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              We work in partnership with trusted ministries, Deaf Christians,
              interpreters, and theological reviewers to share faithful signed
              Gospel resources.
            </p>
          </div>
        </section>

        {/* Bottom */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-stone-700">
              All content is offered freely for the glory of God.
            </p>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
