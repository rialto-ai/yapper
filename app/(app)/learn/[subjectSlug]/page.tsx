"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import {
  BookOpen,
  Landmark,
  Microscope,
  Calculator,
  Languages,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { getSubject } from "@/lib/education-data";
import { getActiveStudentId, getLessonProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Landmark,
  Microscope,
  Calculator,
  Languages,
};

const colorMap: Record<
  string,
  { bg: string; icon: string; accent: string }
> = {
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-950",
    icon: "text-indigo-600 dark:text-indigo-400",
    accent: "bg-indigo-600 dark:bg-indigo-500",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-950",
    icon: "text-amber-600 dark:text-amber-400",
    accent: "bg-amber-600 dark:bg-amber-500",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-950",
    icon: "text-emerald-600 dark:text-emerald-400",
    accent: "bg-emerald-600 dark:bg-emerald-500",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-950",
    icon: "text-sky-600 dark:text-sky-400",
    accent: "bg-sky-600 dark:bg-sky-500",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-950",
    icon: "text-rose-600 dark:text-rose-400",
    accent: "bg-rose-600 dark:bg-rose-500",
  },
};

function TopicCard({
  topic,
  subjectSlug,
  subjectColor,
  completedCount,
}: {
  topic: Topic;
  subjectSlug: string;
  subjectColor: string;
  completedCount: number;
}) {
  const colors = colorMap[subjectColor] ?? colorMap.indigo;
  const totalLessons = topic.lessons.length;
  const allDone = completedCount === totalLessons && totalLessons > 0;
  const progressPct =
    totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  return (
    <Link
      href={`/learn/${subjectSlug}/${topic.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 hover:border-strong hover:shadow-sm transition-all"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[15px] font-semibold text-foreground truncate">
            {topic.name}
          </h3>
          {allDone && (
            <CheckCircle2 className="size-4 text-positive flex-shrink-0" />
          )}
        </div>
        <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-3">
          {topic.description}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-[200px] h-1.5 rounded-full bg-surface overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all", colors.accent)}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-xs text-muted whitespace-nowrap">
            {completedCount}/{totalLessons} lessons
          </span>
        </div>
      </div>

      <ChevronRight className="size-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
    </Link>
  );
}

export default function SubjectPage({
  params,
}: {
  params: Promise<{ subjectSlug: string }>;
}) {
  const { subjectSlug } = use(params);
  const subject = getSubject(subjectSlug);

  const studentId = getActiveStudentId();
  const completedByTopic = useMemo(() => {
    if (!subject) return {};
    const map: Record<string, number> = {};
    for (const topic of subject.topics) {
      let count = 0;
      for (const lesson of topic.lessons) {
        const prog = getLessonProgress(lesson.id, studentId);
        if (prog?.completedAt) count++;
      }
      map[topic.id] = count;
    }
    return map;
  }, [subject, studentId]);

  if (!subject) {
    return (
      <AppShell
        title="Subject Not Found"
        crumbs={[{ label: "Learn", href: "/learn" }, { label: "Not Found" }]}
      >
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted text-sm mb-4">
            The subject you are looking for does not exist.
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

  const Icon = iconMap[subject.icon] ?? BookOpen;
  const colors = colorMap[subject.color] ?? colorMap.indigo;

  return (
    <AppShell
      title={subject.name}
      crumbs={[
        { label: "Learn", href: "/learn" },
        { label: subject.name },
      ]}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={cn(
            "flex items-center justify-center size-10 rounded-lg",
            colors.bg
          )}
        >
          <Icon className={cn("size-5", colors.icon)} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {subject.name}
          </h2>
          <p className="text-xs text-muted">
            {subject.topics.length} topics
          </p>
        </div>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-5">
        {subject.description}
      </p>

      <div className="grid gap-3">
        {subject.topics
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              subjectSlug={subject.slug}
              subjectColor={subject.color}
              completedCount={completedByTopic[topic.id] ?? 0}
            />
          ))}
      </div>
    </AppShell>
  );
}
