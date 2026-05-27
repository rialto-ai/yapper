"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import ScriptureCard from "@/components/scripture-card";
import VideoPlaceholder from "@/components/video-placeholder";
import ShareButton from "@/components/share-button";
import { useLocale } from "@/lib/locale-context";
import {
  Flame,
  Heart,
  Scale,
  Crown,
  Cross,
  Sun,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Check,
  Download,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Lesson keys & icons                                               */
/* ------------------------------------------------------------------ */

const LESSON_KEYS = [
  "godIsHoly",
  "manIsSinful",
  "judgmentIsReal",
  "christIsGodAndMan",
  "christDiedForSinners",
  "christRose",
  "repentAndBelieve",
] as const;

const LESSON_ICONS: Record<(typeof LESSON_KEYS)[number], LucideIcon> = {
  godIsHoly: Flame,
  manIsSinful: Heart,
  judgmentIsReal: Scale,
  christIsGodAndMan: Crown,
  christDiedForSinners: Cross,
  christRose: Sun,
  repentAndBelieve: RotateCcw,
};

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default function LearnPage() {
  const { t } = useLocale();
  const [expandedLesson, setExpandedLesson] = useState<number | null>(1);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(
    () => new Set(),
  );

  function toggleExpand(lessonNumber: number) {
    setExpandedLesson((prev) =>
      prev === lessonNumber ? null : lessonNumber,
    );
  }

  function toggleComplete(lessonNumber: number) {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(lessonNumber)) {
        next.delete(lessonNumber);
      } else {
        next.add(lessonNumber);
      }
      return next;
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Title Section */}
        <section className="animate-fade-in px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-stone-900">
              <BookOpen className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              {t.learn.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
              {t.learn.subtitle}
            </p>
          </div>
        </section>

        {/* Gospel Pathway */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Timeline */}
            <div className="relative">
              {LESSON_KEYS.map((key, index) => {
                const lessonNumber = index + 1;
                const lesson = t.learn.lessons[key];
                const isExpanded = expandedLesson === lessonNumber;
                const isCompleted = completedLessons.has(lessonNumber);
                const isLast = index === LESSON_KEYS.length - 1;
                const Icon = LESSON_ICONS[key];

                return (
                  <div key={lessonNumber} className="relative pb-12 last:pb-0">
                    {/* Vertical connector line */}
                    {!isLast && (
                      <div
                        className="absolute left-5 top-12 bottom-0 w-px bg-stone-200"
                        aria-hidden="true"
                      />
                    )}

                    {/* Lesson header (always visible) */}
                    <button
                      onClick={() => toggleExpand(lessonNumber)}
                      className="group flex w-full items-center gap-4 text-left"
                      aria-expanded={isExpanded}
                      aria-controls={`lesson-${lessonNumber}-content`}
                    >
                      {/* Number badge */}
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                          isCompleted
                            ? "border-stone-700 bg-stone-700 text-white"
                            : isExpanded
                              ? "border-stone-900 bg-stone-900 text-white"
                              : "border-stone-300 bg-white text-stone-500 group-hover:border-stone-400"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-4 w-4" strokeWidth={2.5} />
                        ) : (
                          lessonNumber
                        )}
                      </span>

                      {/* Title + icon */}
                      <div className="flex flex-1 items-center gap-2">
                        <Icon
                          className="h-5 w-5 shrink-0 text-stone-400"
                          strokeWidth={1.5}
                        />
                        <h2 className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-black">
                          {lesson.title}
                        </h2>
                        {isCompleted && (
                          <span className="ml-2 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Expand / collapse chevron */}
                      <span className="shrink-0 text-stone-400 transition-colors group-hover:text-stone-600">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div
                        id={`lesson-${lessonNumber}-content`}
                        className="animate-fade-in ml-14 mt-6 space-y-6"
                      >
                        {/* Explanation */}
                        <p className="text-base leading-relaxed text-stone-600">
                          {lesson.explanation}
                        </p>

                        {/* Scripture card */}
                        <ScriptureCard
                          verse={lesson.verse}
                          reference={lesson.verseRef}
                        />

                        {/* Video placeholder */}
                        <VideoPlaceholder
                          title={`Lesson ${lessonNumber}: ${lesson.title}`}
                          duration="5-8 min"
                          language="ASL"
                        />

                        {/* Reflection question */}
                        <div className="rounded-lg border border-stone-200 bg-stone-50 px-6 py-5">
                          <p className="mb-1 text-xs font-semibold tracking-wide text-stone-400 uppercase">
                            Reflection
                          </p>
                          <p className="font-serif text-base italic leading-relaxed text-stone-700">
                            {lesson.reflection}
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-5">
                          {/* Mark as completed */}
                          <button
                            onClick={() => toggleComplete(lessonNumber)}
                            className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                              isCompleted
                                ? "border-stone-400 bg-stone-100 text-stone-800"
                                : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-800"
                            }`}
                            aria-pressed={isCompleted}
                          >
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded border ${
                                isCompleted
                                  ? "border-stone-600 bg-stone-700 text-white"
                                  : "border-stone-300"
                              }`}
                            >
                              {isCompleted && (
                                <Check className="h-3 w-3" strokeWidth={2.5} />
                              )}
                            </span>
                            {isCompleted
                              ? "Completed"
                              : t.learn.markComplete}
                          </button>

                          {/* Download this lesson */}
                          <button className="btn-ghost">
                            <Download className="h-4 w-4" />
                            {t.learn.downloadLesson}
                          </button>

                          {/* Share this lesson */}
                          <ShareButton
                            title={`Lesson ${lessonNumber}: ${lesson.title}`}
                            text={lesson.explanation}
                            url={
                              typeof window !== "undefined"
                                ? `${window.location.origin}/learn#lesson-${lessonNumber}`
                                : `/learn#lesson-${lessonNumber}`
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="border-t border-stone-100 bg-stone-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              The Gospel
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-500">
              The Gospel is the good news that God saves sinners through the
              life, death, and resurrection of Jesus Christ.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="btn-primary">
                <Download className="h-4 w-4" />
                Download All Lessons
              </button>

              <ShareButton
                title={t.learn.title}
                text={t.learn.subtitle}
                url={
                  typeof window !== "undefined"
                    ? `${window.location.origin}/learn`
                    : "/learn"
                }
              />

              <Link href="/teach" className="btn-ghost">
                <BookOpen className="h-4 w-4" />
                Teach the Gospel
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FeedbackSection />
      <Footer />
    </div>
  );
}
