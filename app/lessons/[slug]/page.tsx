"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Play, BookOpen } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VideoPlayer from "@/components/video-player";
import LessonActions from "@/components/lesson-actions";
import { getLessonBySlug, type Lesson } from "@/lib/lessons-data";

export default function LessonPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col bg-bg">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-24">
          <BookOpen className="h-12 w-12 text-fg-muted" />
          <h1 className="mt-4 text-2xl font-semibold text-fg">
            Lesson not found
          </h1>
          <p className="mt-2 text-fg-muted">
            The lesson you are looking for does not exist.
          </p>
          <Link href="/watch" className="btn-secondary mt-6">
            <ChevronLeft className="h-4 w-4" />
            Back to all lessons
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/watch"
            className="inline-flex items-center gap-1 text-sm text-fg-secondary transition-colors hover:text-fg"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Watch
          </Link>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="pill-track">{lesson.track}</span>
            <span className="pill-topic">{lesson.topic}</span>
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl font-semibold text-fg sm:text-4xl">
            {lesson.title}
          </h1>

          {/* Metadata row */}
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-fg-muted">
            {lesson.biblePassage && (
              <>
                <span>{lesson.biblePassage}</span>
                <span>&middot;</span>
              </>
            )}
            <span>{lesson.sourceName}</span>
            {lesson.permissionStatus && (
              <>
                <span>&middot;</span>
                <span>{lesson.permissionStatus}</span>
              </>
            )}
          </div>

          {/* Video section */}
          <div className="mt-8">
            <VideoPlayer lesson={lesson} />
          </div>

          {/* Actions row */}
          <div className="no-print mt-6">
            <LessonActions slug={lesson.slug} sourceUrl={lesson.sourceUrl || undefined} />
          </div>
        </div>

        {/* Content sections */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section 1: Gospel Explanation */}
            <section>
              <h2 className="text-xl font-semibold text-fg">
                Gospel Explanation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-secondary">
                {lesson.summary}
              </p>
            </section>

            {/* Section 2: Scripture */}
            {lesson.scriptureText.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-fg">Scripture</h2>
                <div className="mt-4 space-y-4">
                  {lesson.scriptureText.map((text, i) => {
                    const parts = text.split(" -- ");
                    const reference = parts.length > 1 ? parts[0] : null;
                    const verse = parts.length > 1 ? parts.slice(1).join(" -- ") : text;

                    return (
                      <blockquote
                        key={i}
                        className="border-l-4 border-accent bg-surface/50 py-3 pl-4 pr-4"
                      >
                        {reference && (
                          <p className="font-medium text-fg">{reference}</p>
                        )}
                        <p className="mt-1 italic text-fg-secondary">{verse}</p>
                      </blockquote>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Section 3: Teaching Notes */}
            {lesson.teachingOutline.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-fg">
                  Teaching Notes
                </h2>
                <ol className="mt-4 space-y-3">
                  {lesson.teachingOutline.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
                        {i + 1}
                      </span>
                      <span className="text-base leading-relaxed text-fg-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Section 4: Discussion Questions */}
            {lesson.discussionQuestions.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-fg">
                  Discussion Questions
                </h2>
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-fg-secondary">
                  {lesson.discussionQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Section 5: Prayer */}
            {lesson.prayerPrompt && (
              <section>
                <h2 className="text-xl font-semibold text-fg">Prayer</h2>
                <div className="card mt-4 bg-surface">
                  <p className="italic text-fg-secondary leading-relaxed">
                    {lesson.prayerPrompt}
                  </p>
                </div>
              </section>
            )}

            {/* Section 6: Transcript */}
            <section>
              <h2 className="text-xl font-semibold text-fg">Transcript</h2>
              {lesson.transcript && lesson.transcript.trim() !== "" ? (
                <p className="mt-4 text-base leading-relaxed text-fg-secondary">
                  {lesson.transcript}
                </p>
              ) : (
                <p className="mt-4 italic text-fg-muted">
                  Transcript coming soon.
                </p>
              )}
            </section>
          </div>

          {/* Bottom navigation */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/watch"
              className="inline-flex items-center gap-1 text-sm text-fg-secondary transition-colors hover:text-fg"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to all lessons
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
