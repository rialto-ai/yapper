"use client";

import { useState, useMemo, useCallback } from "react";
import {
  CheckCircle2,
  BookOpen,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  FlipHorizontal,
} from "lucide-react";
import { AppShell } from "@/components/shell";
import { catechismQuestions } from "@/lib/education-data";
import {
  getActiveStudentId,
  getCatechismProgress,
  getCatechismQuestionProgress,
  markCatechismReviewed,
} from "@/lib/progress";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "study" | "review";

function ProgressSummary({
  mastered,
  total,
}: {
  mastered: number;
  total: number;
}) {
  const pct = total > 0 ? (mastered / total) * 100 : 0;

  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-foreground">
          {mastered} of {total} mastered
        </span>
        <span className="text-xs text-muted">{Math.round(pct)}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-positive"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StudyCard({
  q,
  studentId,
  onUpdate,
}: {
  q: (typeof catechismQuestions)[0];
  studentId: string;
  onUpdate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const progress = getCatechismQuestionProgress(q.number, studentId);
  const isMastered = progress?.mastered ?? false;

  const handleMark = useCallback(
    (mastered: boolean) => {
      markCatechismReviewed(q.number, studentId, mastered);
      onUpdate();
    },
    [q.number, studentId, onUpdate]
  );

  return (
    <div
      className={cn(
        "rounded-xl border bg-card transition-all",
        isMastered ? "border-positive/30" : "border-border"
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left"
      >
        <span
          className={cn(
            "flex items-center justify-center size-8 rounded-full text-xs font-bold flex-shrink-0 mt-0.5",
            isMastered
              ? "bg-positive/10 text-positive"
              : "bg-surface text-muted"
          )}
        >
          {isMastered ? (
            <CheckCircle2 className="size-4" />
          ) : (
            q.number
          )}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground leading-relaxed">
            Q{q.number}. {q.question}
          </h3>
          <span className="inline-block mt-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface text-muted">
            {q.topic}
          </span>
        </div>

        {expanded ? (
          <ChevronUp className="size-4 text-muted flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="size-4 text-muted flex-shrink-0 mt-1" />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-4">
              <div className="pl-11">
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  {q.answer}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {q.scripture.map((ref) => (
                    <span
                      key={ref}
                      className="inline-flex items-center gap-1 text-xs bg-surface text-muted px-2 py-1 rounded-md"
                    >
                      <BookOpen className="size-3" />
                      {ref}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => handleMark(true)}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                      isMastered
                        ? "bg-positive/10 text-positive"
                        : "bg-card border border-positive/40 text-positive hover:bg-positive/10"
                    )}
                  >
                    <CheckCircle2 className="size-3.5" />
                    {isMastered ? "Mastered" : "I Know This"}
                  </button>
                  <button
                    onClick={() => handleMark(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted hover:bg-surface transition-colors"
                  >
                    <RotateCcw className="size-3.5" />
                    Need More Practice
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReviewMode({
  studentId,
  onUpdate,
  onExit,
}: {
  studentId: string;
  onUpdate: () => void;
  onExit: () => void;
}) {
  const unmasteredQuestions = useMemo(() => {
    return catechismQuestions.filter((q) => {
      const prog = getCatechismQuestionProgress(q.number, studentId);
      return !prog?.mastered;
    });
  }, [studentId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(unmasteredQuestions.length === 0);

  const handleResponse = useCallback(
    (mastered: boolean) => {
      const q = unmasteredQuestions[currentIndex];
      if (!q) return;
      markCatechismReviewed(q.number, studentId, mastered);
      onUpdate();
      setFlipped(false);

      if (currentIndex < unmasteredQuestions.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    },
    [currentIndex, unmasteredQuestions, studentId, onUpdate]
  );

  if (finished) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-16 text-center space-y-4"
      >
        <div className="size-16 rounded-full bg-positive/20 text-positive flex items-center justify-center">
          <Sparkles className="size-8" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {unmasteredQuestions.length === 0
            ? "All Questions Mastered!"
            : "Review Complete!"}
        </h3>
        <p className="text-sm text-muted max-w-sm">
          {unmasteredQuestions.length === 0
            ? "You have mastered all 21 questions of the Westminster Shorter Catechism."
            : "You have reviewed all remaining questions. Keep practicing to master them all."}
        </p>
        <button
          onClick={onExit}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Back to Study
        </button>
      </motion.div>
    );
  }

  const q = unmasteredQuestions[currentIndex];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted">
          Card {currentIndex + 1} of {unmasteredQuestions.length}
        </span>
        <div className="flex gap-1">
          {unmasteredQuestions.map((_, i) => (
            <div
              key={i}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === currentIndex
                  ? "bg-accent"
                  : i < currentIndex
                    ? "bg-positive"
                    : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      <div
        onClick={() => setFlipped(!flipped)}
        className="relative min-h-[260px] sm:min-h-[300px] rounded-xl border border-border bg-card cursor-pointer select-none overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={flipped ? "back" : "front"}
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center p-6 sm:p-10 h-full min-h-[260px] sm:min-h-[300px] text-center"
          >
            {!flipped ? (
              <>
                <span className="text-xs font-medium text-muted mb-4">
                  Question {q.number}
                </span>
                <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed max-w-lg">
                  {q.question}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-xs text-muted">
                  <FlipHorizontal className="size-3.5" />
                  Tap to reveal answer
                </span>
              </>
            ) : (
              <>
                <span className="text-xs font-medium text-positive mb-4">
                  Answer
                </span>
                <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-lg">
                  {q.answer}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {q.scripture.map((ref) => (
                    <span
                      key={ref}
                      className="text-xs bg-surface text-muted px-2 py-0.5 rounded-md"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {flipped && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3"
        >
          <button
            onClick={() => handleResponse(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-positive/10 text-positive text-sm font-medium hover:bg-positive/20 transition-colors"
          >
            <CheckCircle2 className="size-4" />
            Got It
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-surface transition-colors"
          >
            <RotateCcw className="size-4" />
            Still Learning
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default function CatechismPage() {
  const [mode, setMode] = useState<Mode>("study");
  const [updateKey, setUpdateKey] = useState(0);
  const studentId = getActiveStudentId();

  const masteredCount = useMemo(() => {
    const progress = getCatechismProgress();
    return progress.filter(
      (p) => p.studentId === studentId && p.mastered
    ).length;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId, updateKey]);

  const triggerUpdate = useCallback(() => {
    setUpdateKey((k) => k + 1);
  }, []);

  return (
    <AppShell
      title="Westminster Shorter Catechism"
      crumbs={[{ label: "Catechism" }]}
    >
      <div className="max-w-3xl space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Westminster Shorter Catechism
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Study and memorize the foundational questions and answers of the
            Reformed faith.
          </p>
        </div>

        <ProgressSummary
          mastered={masteredCount}
          total={catechismQuestions.length}
        />

        <div className="flex items-center gap-1 p-1 rounded-lg bg-surface w-fit">
          <button
            onClick={() => setMode("study")}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
              mode === "study"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            )}
          >
            Study
          </button>
          <button
            onClick={() => setMode("review")}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
              mode === "review"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            )}
          >
            Review
          </button>
        </div>

        {mode === "study" ? (
          <div className="grid gap-3">
            {catechismQuestions.map((q) => (
              <StudyCard
                key={`${q.number}-${updateKey}`}
                q={q}
                studentId={studentId}
                onUpdate={triggerUpdate}
              />
            ))}
          </div>
        ) : (
          <ReviewMode
            key={updateKey}
            studentId={studentId}
            onUpdate={triggerUpdate}
            onExit={() => setMode("study")}
          />
        )}
      </div>
    </AppShell>
  );
}
