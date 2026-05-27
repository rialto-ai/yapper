"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Play,
  Printer,
  Download,
  Link2,
  Share2,
  BookOpen,
  ChevronLeft,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getLessonBySlug, type Lesson } from "@/lib/lessons-data";

export default function LessonPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const lesson = getLessonBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-24">
          <h1 className="text-2xl font-semibold text-stone-900">
            Lesson not found
          </h1>
          <p className="mt-2 text-stone-500">
            The lesson you are looking for does not exist.
          </p>
          <Link
            href="/watch"
            className="btn-secondary mt-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to all lessons
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: lesson!.title,
        text: `${lesson!.title} — The Gospel in Sign`,
        url: window.location.href,
      });
    } else {
      handleCopyLink();
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Video section */}
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm">
              <Play className="h-7 w-7 text-stone-600" fill="currentColor" />
            </div>
            <p className="mt-3 text-sm font-medium text-stone-500">
              Video coming soon
            </p>
          </div>

          {/* Title and labels */}
          <div className="mt-6">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {lesson.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                Signing track: {lesson.signingTrack}
              </span>
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                Written language: {lesson.writtenLanguage}
              </span>
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                Source: {lesson.sourceName}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-stone-200 pb-6">
            <Link
              href={`/lessons/${lesson.slug}/print`}
              className="btn-ghost"
            >
              <Printer className="h-4 w-4" />
              Print Sheet
            </Link>
            <button
              onClick={() => window.print()}
              className="btn-ghost"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button
              onClick={handleCopyLink}
              className="btn-ghost"
            >
              <Link2 className="h-4 w-4" />
              {copied ? "Copied!" : "Copy Link"}
            </button>
            <button
              onClick={handleShare}
              className="btn-ghost"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <Link
              href={`/lessons/${lesson.slug}/print`}
              className="btn-primary"
            >
              <BookOpen className="h-4 w-4" />
              Teach This Lesson
            </Link>
          </div>
        </div>

        {/* Main content sections */}
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Section 1: Gospel Explanation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Gospel Explanation
            </h2>
            <div className="mt-4 text-base leading-relaxed text-stone-700">
              {lesson.summary.split("\n").map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Section 2: Bible Passages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Bible Passages
            </h2>
            <div className="mt-4 space-y-4">
              {lesson.biblePassage.map((passage, i) => (
                <blockquote
                  key={i}
                  className="rounded-r-lg border-l-4 border-stone-300 bg-stone-50 py-3 pl-4 pr-4 text-base leading-relaxed text-stone-700"
                >
                  {passage}
                </blockquote>
              ))}
            </div>
          </section>

          {/* Section 3: Transcript */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Transcript
            </h2>
            <div className="mt-4 text-base leading-relaxed text-stone-700">
              {lesson.transcript.split("\n").map((paragraph, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Section 4: Teaching Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Teaching Notes
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-stone-700">
              {lesson.teachingOutline.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg bg-stone-50 p-5">
              <p className="text-sm font-medium text-stone-500">
                Reflection Question
              </p>
              <p className="mt-1 text-base leading-relaxed text-stone-700">
                {lesson.reflectionQuestion}
              </p>
            </div>
          </section>

          {/* Section 5: Discussion */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Discussion
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-stone-700">
              {lesson.discussionQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg border border-stone-200 bg-white p-5 italic text-stone-600">
              <p className="text-sm font-medium not-italic text-stone-500">
                Prayer Prompt
              </p>
              <p className="mt-1 text-base leading-relaxed">
                {lesson.prayerPrompt}
              </p>
            </div>
          </section>

          {/* Bottom navigation */}
          <div className="border-t border-stone-200 pt-8">
            <Link
              href="/watch"
              className="btn-ghost"
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
