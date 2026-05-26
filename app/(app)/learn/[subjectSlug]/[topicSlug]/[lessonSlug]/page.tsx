"use client";

import { use, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { getLesson, getTopic } from "@/lib/education-data";
import {
  getActiveStudentId,
  getLessonProgress,
  markVideoWatched,
  saveQuizResult,
} from "@/lib/progress";
import { VideoPlayer } from "@/components/video-player";
import { QuizEngine } from "@/components/quiz-engine";
import { cn } from "@/lib/utils";

export default function LessonPage({
  params,
}: {
  params: Promise<{
    subjectSlug: string;
    topicSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { subjectSlug, topicSlug, lessonSlug } = use(params);
  const result = getLesson(subjectSlug, topicSlug, lessonSlug);
  const topicResult = getTopic(subjectSlug, topicSlug);

  const studentId = getActiveStudentId();

  const [videoWatched, setVideoWatched] = useState(() => {
    if (!result) return false;
    const prog = getLessonProgress(result.lesson.id, studentId);
    return prog?.videoWatched ?? false;
  });

  const [quizSaved, setQuizSaved] = useState(false);

  const progress = useMemo(() => {
    if (!result) return undefined;
    return getLessonProgress(result.lesson.id, studentId);
  }, [result, studentId]);

  const previousScore = useMemo(() => {
    if (!progress || progress.quizScore === null || progress.quizTotal === null)
      return null;
    return { score: progress.quizScore, total: progress.quizTotal };
  }, [progress]);

  const adjacentLessons = useMemo(() => {
    if (!topicResult) return { prev: null, next: null };
    const sorted = topicResult.topic.lessons
      .slice()
      .sort((a, b) => a.order - b.order);
    const currentIdx = sorted.findIndex((l) => l.slug === lessonSlug);
    return {
      prev: currentIdx > 0 ? sorted[currentIdx - 1] : null,
      next: currentIdx < sorted.length - 1 ? sorted[currentIdx + 1] : null,
    };
  }, [topicResult, lessonSlug]);

  const handleMarkWatched = useCallback(() => {
    if (!result) return;
    markVideoWatched(result.lesson.id, studentId);
    setVideoWatched(true);
  }, [result, studentId]);

  const handleQuizComplete = useCallback(
    (score: number, total: number) => {
      if (!result) return;
      saveQuizResult(result.lesson.id, studentId, score, total);
      setQuizSaved(true);
    },
    [result, studentId]
  );

  if (!result) {
    return (
      <AppShell
        title="Lesson Not Found"
        crumbs={[
          { label: "Learn", href: "/learn" },
          { label: "Not Found" },
        ]}
      >
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted text-sm mb-4">
            The lesson you are looking for does not exist.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to Subjects
          </Link>
        </div>
      </AppShell>
    );
  }

  const { subject, topic, lesson } = result;

  return (
    <AppShell
      title={lesson.title}
      crumbs={[
        { label: "Learn", href: "/learn" },
        { label: subject.name, href: `/learn/${subjectSlug}` },
        { label: topic.name, href: `/learn/${subjectSlug}/${topicSlug}` },
        { label: lesson.title },
      ]}
    >
      <div className="max-w-3xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">
            {lesson.title}
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {lesson.description}
          </p>
        </div>

        <VideoPlayer
          title={lesson.title}
          duration={lesson.duration}
          scripture={lesson.scripture}
          watched={videoWatched}
          onMarkWatched={handleMarkWatched}
        />

        {lesson.quiz.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-5">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="size-5 text-accent" />
              <h3 className="text-base font-semibold text-foreground">
                Check Your Understanding
              </h3>
            </div>

            {!videoWatched && (
              <p className="text-xs text-muted -mt-2">
                We recommend watching the lesson before taking the quiz.
              </p>
            )}

            <QuizEngine
              questions={lesson.quiz}
              onComplete={handleQuizComplete}
              previousScore={previousScore}
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          {adjacentLessons.prev ? (
            <Link
              href={`/learn/${subjectSlug}/${topicSlug}/${adjacentLessons.prev.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-4" />
              <span className="hidden sm:inline">{adjacentLessons.prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <Link
              href={`/learn/${subjectSlug}/${topicSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-4" />
              Back to Topic
            </Link>
          )}

          {adjacentLessons.next ? (
            <Link
              href={`/learn/${subjectSlug}/${topicSlug}/${adjacentLessons.next.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <span className="hidden sm:inline">{adjacentLessons.next.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="size-4" />
            </Link>
          ) : (
            <Link
              href={`/learn/${subjectSlug}/${topicSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              All Lessons
              <ChevronRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </AppShell>
  );
}
