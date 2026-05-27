"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import TrackCard from "@/components/track-card";
import { LESSONS } from "@/lib/lessons-data";
import { Play, Printer, ExternalLink } from "lucide-react";

const GOSPEL_POINTS = [
  "God is holy.",
  "Man has sinned.",
  "Judgment is real.",
  "Jesus Christ died for sinners.",
  "Jesus rose again.",
  "God commands all people to repent and believe the Gospel.",
  "Salvation is by grace alone, through faith alone, in Christ alone.",
];

const SIGNING_TRACKS = [
  {
    name: "Visual Vernacular",
    description:
      "A global Deaf storytelling format that can help communicate the Gospel visually across some language barriers.",
    href: "/watch?track=visual-vernacular",
    featured: true,
  },
  {
    name: "American Sign Language",
    description:
      "Signed Gospel and Scripture resources in American Sign Language.",
    href: "/watch?track=asl",
  },
  {
    name: "Auslan",
    description:
      "Signed Gospel and Scripture resources for Australian Deaf communities.",
    href: "/watch?track=auslan",
  },
  {
    name: "More Coming Soon",
    description:
      "Additional signed language tracks will be added as reviewed resources become available.",
    href: null,
  },
];

export default function HomePage() {
  const featuredLesson = LESSONS[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="animate-fade-in px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[44px] font-semibold leading-[1.1] tracking-tight text-fg sm:text-[56px] lg:text-[64px]">
              The Gospel of Jesus Christ, taught clearly in sign language.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
              Simple signed Gospel lessons, Scripture videos, printable sheets,
              and teaching resources for Deaf communities, churches, families,
              and missionaries.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/watch" className="btn-accent">
                <Play className="h-4 w-4" />
                Start Watching
              </Link>
              <a
                href="https://www.jesusfilm.org/watch/evangelism.html/rescue-project-gospel-in-visual-vernacular/portuguese-brazil.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Open Featured Video
              </a>
            </div>
          </div>
        </section>

        {/* Sign language note */}
        <section className="mt-0 px-4 pb-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="font-medium text-fg-secondary">
              Signed Gospel lessons in Visual Vernacular, ASL, Auslan, and
              selected local sign languages.
            </p>
            <p className="mt-2 text-sm text-fg-muted">
              Visual Vernacular may help in some cross-cultural Deaf contexts,
              but it is not a replacement for local sign languages. Sign
              languages are distinct languages with their own grammar, culture,
              and context.
            </p>
          </div>
        </section>

        {/* Gospel Summary */}
        <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              The Gospel
            </h2>
            <ol className="mt-12 space-y-5">
              {GOSPEL_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-fg-secondary">
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Signing Tracks */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Choose a signing track
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNING_TRACKS.map((track) => (
                <TrackCard
                  key={track.name}
                  name={track.name}
                  description={track.description}
                  href={track.href}
                  featured={track.featured}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Lesson */}
        {featuredLesson && (
          <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Featured Lesson
              </h2>
              <div className="mt-12 overflow-hidden rounded-xl border border-border bg-white">
                {/* Thumbnail */}
                <div className="relative flex aspect-video items-center justify-center bg-fg/5">
                  <Play className="h-14 w-14 text-fg-muted/40" />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="pill-track">Visual Vernacular</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                    {featuredLesson.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fg-secondary">
                    {featuredLesson.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/lessons/${featuredLesson.slug}`}
                      className="btn-accent"
                    >
                      <Play className="h-4 w-4" />
                      View Lesson
                    </Link>
                    {featuredLesson.sourceUrl && (
                      <a
                        href={featuredLesson.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open Signed Video
                      </a>
                    )}
                    <Link
                      href={`/lessons/${featuredLesson.slug}/print`}
                      className="btn-secondary"
                    >
                      <Printer className="h-4 w-4" />
                      Print Sheet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dark CTA */}
        <section className="bg-fg px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Begin watching now
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Free signed Gospel resources for Deaf communities, churches,
              families, and missionaries.
            </p>
            <Link
              href="/watch"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium text-fg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-fg"
            >
              <Play className="h-4 w-4" />
              Start Watching
            </Link>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
