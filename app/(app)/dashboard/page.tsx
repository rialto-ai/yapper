"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  BookOpen,
  Trophy,
  Flame,
  GraduationCap,
  ArrowRight,
  ScrollText,
  BookOpen as BookOpenIcon,
  Landmark,
  Microscope,
  Calculator,
  Languages,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { cn } from "@/lib/utils";
import {
  getStudents,
  getActiveStudentId,
  getStudentProgress,
} from "@/lib/progress";
import { subjects, getAllLessons, countLessons } from "@/lib/education-data";
import type { Student, LessonProgress } from "@/lib/types";

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen: BookOpenIcon,
  Landmark,
  Microscope,
  Calculator,
  Languages,
};

const COLOR_MAP: Record<string, string> = {
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatShortDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function DashboardPage() {
  const [student, setStudent] = useState<Student | null>(null);
  const [progress, setProgress] = useState<LessonProgress[]>([]);

  const loadData = useCallback(() => {
    const students = getStudents();
    const activeId = getActiveStudentId();
    const active = students.find((s) => s.id === activeId) ?? students[0];
    if (active) {
      setStudent(active);
      setProgress(getStudentProgress(active.id));
    }
  }, []);

  useEffect(() => {
    loadData();
    const handler = () => loadData();
    window.addEventListener("student-changed", handler);
    return () => window.removeEventListener("student-changed", handler);
  }, [loadData]);

  if (!student) return null;

  const allLessons = getAllLessons();
  const completed = progress.filter((p) => p.completedAt !== null);

  const totalCompleted = completed.length;

  const quizEntries = completed.filter(
    (p) => p.quizScore !== null && p.quizTotal !== null && p.quizTotal > 0
  );
  const avgScore =
    quizEntries.length > 0
      ? Math.round(
          quizEntries.reduce(
            (sum, p) => sum + (p.quizScore! / p.quizTotal!) * 100,
            0
          ) / quizEntries.length
        )
      : 0;

  const subjectsStarted = new Set(
    completed
      .map((p) => {
        const lesson = allLessons.find((l) => l.id === p.lessonId);
        return lesson?.subjectId;
      })
      .filter(Boolean)
  ).size;

  const recentActivity = [...completed]
    .sort(
      (a, b) =>
        new Date(b.completedAt!).getTime() - new Date(a.completedAt!).getTime()
    )
    .slice(0, 5)
    .map((p) => {
      const lesson = allLessons.find((l) => l.id === p.lessonId);
      return { ...p, lesson };
    })
    .filter((p) => p.lesson);

  const stats = [
    {
      label: "Lessons Completed",
      value: totalCompleted,
      icon: BookOpen,
      color: "text-accent",
    },
    {
      label: "Average Quiz Score",
      value: quizEntries.length > 0 ? `${avgScore}%` : "--",
      icon: Trophy,
      color: "text-gold",
    },
    {
      label: "Subjects Started",
      value: subjectsStarted,
      icon: GraduationCap,
      color: "text-positive",
    },
    {
      label: "Study Streak",
      value: "0 days",
      icon: Flame,
      color: "text-warning",
    },
  ];

  return (
    <AppShell title="Dashboard">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">
          Welcome back
        </h2>
        <div className="flex items-center gap-3">
          <p className="text-[13.5px] text-muted">{formatDate(new Date())}</p>
          <span className="text-[13px] text-muted">·</span>
          <div className="flex items-center gap-1.5">
            <span
              className="size-5 rounded-full flex items-center justify-center text-white text-[9px] font-semibold"
              style={{ backgroundColor: student.avatarColor }}
            >
              {student.name[0]}
            </span>
            <span className="text-[13px] text-foreground font-medium">
              {student.name}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <s.icon className={cn("size-4", s.color)} />
              <span className="text-[12px] text-muted">{s.label}</span>
            </div>
            <p className="text-2xl font-semibold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-[15px] font-semibold text-foreground mb-3">
          Subject Progress
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjects.map((subject) => {
            const total = countLessons(subject);
            const subjectLessons = allLessons.filter(
              (l) => l.subjectId === subject.id
            );
            const done = subjectLessons.filter((l) =>
              completed.some((p) => p.lessonId === l.id)
            ).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const Icon = ICON_MAP[subject.icon] ?? BookOpen;
            const colorClasses = COLOR_MAP[subject.color] ?? COLOR_MAP.indigo;

            return (
              <Link
                key={subject.id}
                href={`/learn/${subject.slug}`}
                className="bg-card border border-border rounded-lg p-4 hover:border-border-strong transition-colors group"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className={cn(
                      "size-8 rounded-md flex items-center justify-center",
                      colorClasses
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <span className="text-[13.5px] font-medium text-foreground group-hover:text-accent transition-colors">
                    {subject.name}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-[12px] text-muted">
                    {done} of {total} lessons completed
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {recentActivity.length > 0 && (
        <div>
          <h3 className="text-[15px] font-semibold text-foreground mb-3">
            Recent Activity
          </h3>
          <div className="bg-card border border-border rounded-lg divide-y divide-border">
            {recentActivity.map((item) => {
              const subject = subjects.find(
                (s) => s.id === item.lesson!.subjectId
              );
              return (
                <div
                  key={item.lessonId}
                  className="px-4 py-3 flex items-center gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-foreground truncate">
                      {item.lesson!.title}
                    </p>
                    <p className="text-[12px] text-muted">
                      {subject?.name}
                    </p>
                  </div>
                  {item.quizScore !== null && item.quizTotal !== null && (
                    <span className="text-[12px] text-muted shrink-0">
                      {item.quizScore}/{item.quizTotal}
                    </span>
                  )}
                  <span className="text-[12px] text-muted shrink-0">
                    {formatShortDate(item.completedAt!)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/learn"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors",
            "bg-accent text-accent-foreground hover:bg-accent-hover"
          )}
        >
          Continue Learning
          <ArrowRight className="size-3.5" />
        </Link>
        <Link
          href="/catechism"
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors",
            "bg-card border border-border text-foreground hover:bg-surface"
          )}
        >
          <ScrollText className="size-3.5" />
          Practice Catechism
        </Link>
      </div>
    </AppShell>
  );
}
