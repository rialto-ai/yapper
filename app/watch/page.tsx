"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { LESSONS, SIGNING_TRACKS, type Lesson } from "@/lib/lessons-data";
import { Play, Printer, Share2, Search, Filter } from "lucide-react";

const TRACK_FILTERS = [
  { id: "all", name: "All" },
  ...SIGNING_TRACKS.map((t) => ({ id: t.id, name: t.name })),
];

function trackSlug(signingTrack: string): string {
  return signingTrack.toLowerCase().replace(/\s+/g, "-");
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  const [shareToast, setShareToast] = useState(false);

  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}/lessons/${lesson.slug}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: lesson.title,
          text: lesson.summary,
          url,
        });
        return;
      } catch {
        // User cancelled or share failed
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    } catch {
      // Clipboard not available
    }
  }, [lesson.slug, lesson.title, lesson.summary]);

  return (
    <article className="card flex flex-col transition-shadow hover:shadow-md">
      {/* Thumbnail placeholder */}
      <div className="relative flex aspect-video items-center justify-center rounded-lg bg-stone-100">
        <Play className="h-10 w-10 text-stone-400" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col gap-3">
        <Link
          href={`/lessons/${lesson.slug}`}
          className="text-lg font-semibold leading-snug tracking-tight text-stone-900 hover:underline"
        >
          {lesson.title}
        </Link>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
            {lesson.signingTrack}
          </span>
          <span className="inline-flex items-center rounded-full bg-warm-100 px-2.5 py-0.5 text-xs font-medium text-warm-700">
            {lesson.writtenLanguage}
          </span>
          <span className="inline-flex items-center rounded-full border border-stone-200 px-2.5 py-0.5 text-xs font-medium text-stone-500">
            {lesson.topic}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
          <Link
            href={`/lessons/${lesson.slug}`}
            className="btn-primary py-2 text-sm"
          >
            <Play className="h-3.5 w-3.5" />
            Watch
          </Link>
          <Link
            href={`/lessons/${lesson.slug}/print`}
            className="btn-ghost py-2 text-sm"
          >
            <Printer className="h-3.5 w-3.5" />
            Print
          </Link>
          <div className="relative inline-block">
            <button onClick={handleShare} className="btn-ghost py-2 text-sm">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
            {shareToast && (
              <div
                role="status"
                aria-live="polite"
                className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg"
              >
                Link copied
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WatchPage() {
  const [activeTrack, setActiveTrack] = useState("all");
  const [searchText, setSearchText] = useState("");

  const filteredLessons = useMemo(() => {
    return LESSONS.filter((lesson) => {
      const matchesTrack =
        activeTrack === "all" || trackSlug(lesson.signingTrack) === activeTrack;
      const matchesSearch =
        searchText.trim() === "" ||
        lesson.title.toLowerCase().includes(searchText.toLowerCase());
      return matchesTrack && matchesSearch;
    });
  }, [activeTrack, searchText]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Watch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              Signed Gospel lessons, Scripture videos, and teaching resources.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="border-b border-stone-100 px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Track tabs */}
              <div className="flex flex-wrap items-center gap-2" role="tablist">
                <Filter className="hidden h-4 w-4 text-stone-400 sm:block" />
                {TRACK_FILTERS.map((track) => (
                  <button
                    key={track.id}
                    role="tab"
                    aria-selected={activeTrack === track.id}
                    onClick={() => setActiveTrack(track.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeTrack === track.id
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                    }`}
                  >
                    {track.name}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search lessons..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full rounded-lg border border-stone-200 bg-white py-2 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lesson grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {filteredLessons.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLessons.map((lesson) => (
                  <LessonCard key={lesson.lessonId} lesson={lesson} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-stone-500">
                  No lessons found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveTrack("all");
                    setSearchText("");
                  }}
                  className="btn-ghost mt-4"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom note */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-medium text-stone-700">
              More signed language tracks and lessons coming soon.
            </p>
            <p className="mt-2 text-sm text-stone-400">
              International Sign can help in some global settings, but it is not
              a replacement for local sign languages.
            </p>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
