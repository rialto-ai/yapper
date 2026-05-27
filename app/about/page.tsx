"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { useLocale } from "@/lib/locale-context";

const DOCTRINAL_STATEMENTS = [
  "We believe the Bible is the inspired, inerrant, and sufficient Word of God.",
  "We believe God is holy, righteous, sovereign, and merciful.",
  "We believe all people have sinned and stand guilty before God.",
  "We believe Jesus Christ is the eternal Son of God, fully God and fully man.",
  "We believe Christ died as a substitute for sinners and rose bodily from the dead.",
  "We believe sinners are saved by grace alone, through faith alone, in Christ alone.",
  "We believe true faith is accompanied by repentance and a transformed life.",
  "We believe the Gospel must be proclaimed to all nations and peoples.",
];

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title Section */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              {t.about.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              {t.about.subtitle}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              {t.about.mission}
            </p>
          </div>
        </section>

        {/* Doctrinal Statement Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">{t.about.doctrinalStatement.title}</h2>
            <p className="mt-3 text-lg text-stone-500">
              Our doctrinal convictions, rooted in Scripture.
            </p>

            <ol className="mt-10 space-y-6">
              {t.about.doctrinalStatement.points.map((statement: string, index: number) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-stone-700">
                    {statement}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Additional Section */}
        <section className="border-t border-stone-100 bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Free for Everyone</h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              This platform is built for the glory of God and offered freely. All
              content is available for download, printing, and sharing. Churches,
              missionaries, families, and individuals are encouraged to use these
              materials to teach the Gospel.
            </p>
          </div>
        </section>
      </main>

      <FeedbackSection />
      <Footer />
    </div>
  );
}
