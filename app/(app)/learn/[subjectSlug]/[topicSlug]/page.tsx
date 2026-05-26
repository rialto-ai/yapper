"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { getTopic } from "@/lib/education-data";
import { getActiveStudentId, getLessonProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { Lesson, LessonProgress } from "@/lib/types";

function LessonCard({
  lesson,
  subjectSlug,
  topicSlug,
  progress,
}: {
  lesson: Lesson;
  subjectSlug: string;
  topicSlug: string;
  progress: LessonProgress | undefined;
}) {
  const isCompleted = !!progress?.completedAt;
  const hasQuizScore =
    progress?.quizScore !== null && progress?.quizScore !== undefined;

  return (
    <Link
      href={`/learn/${subjectSlug}/${topicSlug}/${lesson.slug}`}
      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 hover:border-strong hover:shadow-sm transition-all"
    >
      <div
        className={cn(
          "flex items-center justify-center size-9 rounded-full border text-sm font-semibold flex-shrink-0 mt-0.5",
          isCompleted
            ? "border-positive bg-positive/10 text-positive"
            : "border-border bg-surface text-muted"
        )}
      >
        {isCompleted ? (
          <CheckCircle2 className="size-4" />
        ) : (
          lesson.order
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-foreground mb-0.5 group-hover:text-accent transition-colors">
          {lesson.title}
        </h3>
        <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-2.5">
          {lesson.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" />
            {lesson.duration} min
          </span>
          {lesson.scripture && (
            <span className="inline-flex items-center gap-1">
              <BookOpen className="size-3" />
              {lesson.scripture}
            </span>
          )}
          {hasQuizScore && (
            <span className="inline-flex items-center gap-1 text-positive">
              <Award className="size-3" />
              {progress!.quizScore}/{progress!.quizTotal}
            </span>
          )}
        </div>
      </div>

      <ChevronRight className="size-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1.5" />
    </Link>
  );
}

export default function TopicPage({
  params,
}: {
  params: Promise<{ subjectSlug: string; topicSlug: string }>;
}) {
  const { subjectSlug, topicSlug } = use(params);
  const result = getTopic(subjectSlug, topicSlug);

  const studentId = getActiveStudentId();
  const progressMap = useMemo(() => {
    if (!result) return {};
    const map: Record<string, LessonProgress | undefined> = {};
    for (const lesson of result.topic.lessons) {
      map[lesson.id] = getLessonProgress(lesson.id, studentId);
    }
    return map;
  }, [result, studentId]);

  if (!result) {
    return (
      <AppShell
        title="Topic Not Found"
        crumbs={[
          { label: "Learn", href: "/learn" },
          { label: "Not Found" },
        ]}
      >
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted text-sm mb-4">
            The topic you are looking for does not exist.
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

  const { subject, topic } = result;
  const completedCount = topic.lessons.filter(
    (l) => progressMap[l.id]?.completedAt
  ).length;

  return (
    <AppShell
      title={topic.name}
      crumbs={[
        { label: "Learn", href: "/learn" },
        { label: subject.name, href: `/learn/${subjectSlug}` },
        { label: topic.name },
      ]}
    >
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-foreground mb-1">
          {topic.name}
        </h2>
        <p className="text-sm text-muted leading-relaxed">
          {topic.description}
        </p>
        <p className="text-xs text-muted mt-2">
          {completedCount} of {topic.lessons.length} lessons completed
        </p>
      </div>

      <div className="grid gap-3">
        {topic.lessons
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              subjectSlug={subjectSlug}
              topicSlug={topicSlug}
              progress={progressMap[lesson.id]}
            />
          ))}
      </div>
    </AppShell>
  );
}
