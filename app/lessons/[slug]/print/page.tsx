"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Printer, ChevronLeft, QrCode } from "lucide-react";
import { getLessonBySlug } from "@/lib/lessons-data";

export default function LessonPrintPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24">
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
      </div>
    );
  }

  const lessonUrl = `gospelinsign.org/lessons/${lesson.slug}`;

  return (
    <>
      {/* Print-specific styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-sheet {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          body {
            font-size: 11pt;
            line-height: 1.4;
            color: black !important;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          h1 { font-size: 18pt !important; }
          h2 { font-size: 13pt !important; margin-top: 12pt !important; }
          p, li, blockquote { font-size: 11pt !important; }
          .print-sheet * {
            color: black !important;
          }
          .notes-line {
            border-bottom: 1px solid #999 !important;
          }
          @page {
            margin: 0.75in;
          }
        }
      `}</style>

      <div className="min-h-screen bg-stone-100 print:bg-white">
        {/* Screen-only toolbar */}
        <div className="no-print sticky top-0 z-10 border-b border-stone-200 bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
            <h1 className="text-lg font-semibold text-stone-900">
              Print Preview
            </h1>
            <div className="flex items-center gap-3">
              <Link
                href={`/lessons/${lesson.slug}`}
                className="btn-ghost text-sm"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to lesson
              </Link>
              <button
                onClick={() => window.print()}
                className="btn-primary text-sm"
              >
                <Printer className="h-4 w-4" />
                Print or Save as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Printable sheet */}
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 print:p-0">
          <div className="print-sheet rounded-xl border border-stone-200 bg-white px-10 py-10 shadow-lg print:rounded-none print:border-none print:shadow-none">
            {/* Header */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900">
              {lesson.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-stone-600">
              Signing track: {lesson.signingTrack}
            </p>
            <p className="mt-1 text-xs text-stone-400">
              The Gospel in Sign &mdash; {lessonUrl}
            </p>

            <hr className="my-6 border-stone-200" />

            {/* Gospel Summary */}
            <section>
              <h2 className="text-lg font-semibold text-stone-900">
                Gospel Summary
              </h2>
              <div className="mt-2 text-sm leading-relaxed text-stone-700">
                {lesson.summary.split("\n").map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-3" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Bible Passages */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-stone-900">
                Bible Passages
              </h2>
              <div className="mt-2 space-y-2">
                {lesson.biblePassage.map((passage, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-stone-700"
                  >
                    {passage}
                  </p>
                ))}
              </div>
            </section>

            {/* Teaching Outline */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-stone-900">
                Teaching Outline
              </h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-stone-700">
                {lesson.teachingOutline.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </section>

            {/* Discussion Questions */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-stone-900">
                Discussion Questions
              </h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-stone-700">
                {lesson.discussionQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </section>

            {/* Prayer */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-stone-900">Prayer</h2>
              <p className="mt-2 text-sm italic leading-relaxed text-stone-600">
                {lesson.prayerPrompt}
              </p>
            </section>

            <hr className="my-8 border-stone-200" />

            {/* QR Code placeholder and source */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-[100px] w-[100px] flex-shrink-0 flex-col items-center justify-center rounded border border-stone-200 bg-stone-50">
                  <QrCode className="h-8 w-8 text-stone-400" />
                  <span className="mt-1 text-[10px] text-stone-400">
                    QR Code
                  </span>
                </div>
                <div className="text-xs text-stone-500">
                  <p>Scan to watch this lesson online</p>
                  <p className="mt-3 font-medium text-stone-600">
                    {lesson.sourceName}
                  </p>
                  <p className="mt-0.5 text-stone-400">{lessonUrl}</p>
                </div>
              </div>
            </div>

            {/* Notes section */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-stone-900">Notes</h2>
              <div className="mt-4 space-y-6">
                <div className="notes-line border-b border-stone-300" />
                <div className="notes-line border-b border-stone-300" />
                <div className="notes-line border-b border-stone-300" />
                <div className="notes-line border-b border-stone-300" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
