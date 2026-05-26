"use client";

import Link from "next/link";
import {
  BookOpen,
  Landmark,
  Microscope,
  Calculator,
  Languages,
  ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { subjects, countLessons } from "@/lib/education-data";
import { cn } from "@/lib/utils";
import type { Subject } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Landmark,
  Microscope,
  Calculator,
  Languages,
};

const colorMap: Record<
  string,
  { bg: string; icon: string; border: string }
> = {
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-950",
    icon: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-900",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-950",
    icon: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-900",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-950",
    icon: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-900",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-950",
    icon: "text-sky-600 dark:text-sky-400",
    border: "border-sky-200 dark:border-sky-900",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-950",
    icon: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-900",
  },
};

function SubjectCard({ subject }: { subject: Subject }) {
  const Icon = iconMap[subject.icon] ?? BookOpen;
  const colors = colorMap[subject.color] ?? colorMap.indigo;
  const lessonCount = countLessons(subject);
  const topicCount = subject.topics.length;

  return (
    <Link
      href={`/learn/${subject.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-strong hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div
          className={cn(
            "flex items-center justify-center size-11 rounded-lg",
            colors.bg
          )}
        >
          <Icon className={cn("size-5", colors.icon)} />
        </div>
        <ArrowRight className="size-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
      </div>

      <h3 className="text-[15px] font-semibold text-foreground mb-1">
        {subject.name}
      </h3>
      <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-4 flex-1">
        {subject.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-muted">
        <span>{lessonCount} lessons</span>
        <span className="size-1 rounded-full bg-border" />
        <span>{topicCount} topics</span>
      </div>
    </Link>
  );
}

export default function LearnPage() {
  return (
    <AppShell title="Subjects" crumbs={[{ label: "Learn" }]}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </AppShell>
  );
}
