"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VideoPlaceholder from "@/components/video-placeholder";
import {
  SIGN_LANGUAGES,
  SIGN_LANGUAGE_LESSONS,
  TOPICS,
  DIFFICULTIES,
} from "@/lib/sign-languages";
import { Filter, Download, Share2, Clock, Globe } from "lucide-react";

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner:
    "bg-green-50 text-green-700 border border-green-200",
  intermediate:
    "bg-amber-50 text-amber-700 border border-amber-200",
  advanced:
    "bg-red-50 text-red-700 border border-red-200",
};

function getSignLanguageName(code: string): string {
  const lang = SIGN_LANGUAGES.find((l) => l.code === code);
  return lang ? lang.name : code.toUpperCase();
}

export default function SignLanguagePage() {
  const [languageFilter, setLanguageFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filteredLessons = SIGN_LANGUAGE_LESSONS.filter((lesson) => {
    if (languageFilter !== "all" && lesson.signLanguage !== languageFilter)
      return false;
    if (topicFilter !== "all" && lesson.topic !== topicFilter) return false;
    if (difficultyFilter !== "all" && lesson.difficulty !== difficultyFilter)
      return false;
    return true;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Title Section */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Sign Language Lessons
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              Learn the Gospel through video lessons in multiple sign languages.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-stone-600">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </div>

              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                aria-label="Filter by sign language"
              >
                <option value="all">All Languages</option>
                {SIGN_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                aria-label="Filter by topic"
              >
                <option value="all">All Topics</option>
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>

              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                aria-label="Filter by difficulty"
              >
                <option value="all">All Levels</option>
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm text-stone-500">
              Showing {filteredLessons.length} lesson
              {filteredLessons.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* Lesson Grid */}
        <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredLessons.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLessons.map((lesson) => (
                  <div key={lesson.id} className="card flex flex-col gap-4">
                    <VideoPlaceholder
                      title={lesson.title}
                      duration={lesson.duration}
                    />

                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-stone-900">
                        {lesson.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-stone-500">
                        <Globe className="h-4 w-4 shrink-0" />
                        <span>{getSignLanguageName(lesson.signLanguage)}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-stone-500">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span>{lesson.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-stone-400">
                        <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5">
                          {lesson.language}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs text-stone-600">
                          {lesson.topic}
                        </span>
                        <span
                          className={`rounded-md px-2 py-0.5 text-xs ${DIFFICULTY_COLORS[lesson.difficulty]}`}
                        >
                          {lesson.difficulty.charAt(0).toUpperCase() +
                            lesson.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-2">
                        <button className="btn-ghost text-xs">
                          <Download className="h-3.5 w-3.5" />
                          Download PDF
                        </button>
                        <button className="btn-ghost text-xs">
                          <Share2 className="h-3.5 w-3.5" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-stone-500">
                  No lessons match your current filters. Try adjusting the
                  filters above.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Section */}
        <section className="border-t border-stone-100 bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg font-medium text-stone-700">
              More sign languages coming soon.
            </p>
            <p className="mt-3 text-stone-500">
              Don&apos;t see your sign language?{" "}
              <Link
                href="/contact"
                className="font-medium text-stone-900 underline underline-offset-4 transition-colors hover:text-stone-700"
              >
                Contact us to request your sign language
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
