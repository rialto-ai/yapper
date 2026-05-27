"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LessonCard from "@/components/lesson-card";
import FilterPills from "@/components/filter-pills";
import { filterLessons } from "@/lib/lessons-data";
import { Search } from "lucide-react";

function WatchContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track") || "all";

  const [activeTrack, setActiveTrack] = useState(initialTrack);
  const [searchText, setSearchText] = useState("");

  const filteredLessons = useMemo(() => {
    return filterLessons(activeTrack, searchText);
  }, [activeTrack, searchText]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Title */}
        <section className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-semibold text-fg sm:text-4xl">
              Watch Signed Gospel Lessons
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-fg-muted">
              Choose a signed lesson, read the Gospel explanation, print a
              teaching sheet, and share it with someone else.
            </p>
          </div>
        </section>

        {/* Filter + Search */}
        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-4">
            <FilterPills active={activeTrack} onChange={setActiveTrack} />
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>
        </section>

        {/* Lesson grid */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {filteredLessons.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLessons.map((lesson) => (
                  <LessonCard key={lesson.lessonId} lesson={lesson} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-fg-muted">
                  No lessons match your search.
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
        <section className="px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm text-fg-muted">
              More signed language tracks and lessons are coming soon.
            </p>
            <p className="mt-2 text-sm text-fg-muted">
              Visual Vernacular and International Sign may help in some
              cross-cultural Deaf contexts, but they are not replacements for
              local sign languages.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function WatchPage() {
  return (
    <Suspense>
      <WatchContent />
    </Suspense>
  );
}
