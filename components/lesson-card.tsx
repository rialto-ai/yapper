"use client";

import { Check, Download, Share2, Printer } from "lucide-react";

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  verseRef: string;
  completed?: boolean;
  onToggleComplete?: () => void;
  locale: string;
}

export default function LessonCard({
  number,
  title,
  description,
  verseRef,
  completed = false,
  onToggleComplete,
  locale,
}: LessonCardProps) {
  function handleShare() {
    const url = `${window.location.origin}/${locale}/learn/lesson-${number}`;
    if (navigator.share) {
      navigator.share({ title, text: description, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).catch(() => {});
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <article
      className="rounded-lg border border-stone-200 bg-white p-6 transition-shadow hover:shadow-sm"
      aria-label={`Lesson ${number}: ${title}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Lesson number badge */}
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
            {number}
          </span>
          <div>
            <h3 className="text-base font-semibold leading-snug text-black">
              {title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-500">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Verse reference */}
      <p className="mt-3 pl-11 text-xs font-medium tracking-wide text-stone-400 uppercase">
        {verseRef}
      </p>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
        {/* Mark as completed */}
        <button
          onClick={onToggleComplete}
          className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
            completed
              ? "border-stone-300 bg-stone-100 text-stone-700"
              : "border-stone-200 bg-white text-stone-500 hover:border-stone-300 hover:text-stone-700"
          }`}
          aria-pressed={completed}
          aria-label={completed ? "Completed" : "Mark as completed"}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded border ${
              completed
                ? "border-stone-500 bg-stone-700 text-white"
                : "border-stone-300"
            }`}
          >
            {completed && <Check className="h-3 w-3" strokeWidth={2.5} />}
          </span>
          {completed ? "Completed" : "Mark as completed"}
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Download */}
        <button
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
          aria-label={`Download lesson ${number}`}
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download</span>
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
          aria-label={`Share lesson ${number}`}
        >
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Share</span>
        </button>

        {/* Print */}
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
          aria-label={`Print lesson ${number}`}
        >
          <Printer className="h-4 w-4" />
          <span className="hidden sm:inline">Print</span>
        </button>
      </div>
    </article>
  );
}
