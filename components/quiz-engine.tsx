"use client";

import { useState, useCallback } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Save,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface QuizEngineProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
  previousScore?: { score: number; total: number } | null;
}

export function QuizEngine({
  questions,
  onComplete,
  previousScore,
}: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  );
  const [revealed, setRevealed] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [saved, setSaved] = useState(false);

  const question = questions[currentIndex];
  const isCorrect = selectedIndex === question?.correctIndex;

  const score = answers.reduce<number>((acc, ans, i) => {
    return acc + (ans === questions[i].correctIndex ? 1 : 0);
  }, 0);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (revealed) return;
      setSelectedIndex(optionIndex);
      setRevealed(true);
      setAnswers((prev) => {
        const next = [...prev];
        next[currentIndex] = optionIndex;
        return next;
      });
    },
    [revealed, currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setRevealed(false);
    } else {
      setQuizComplete(true);
    }
  }, [currentIndex, questions.length]);

  const handleRetake = useCallback(() => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers(new Array(questions.length).fill(null));
    setRevealed(false);
    setQuizComplete(false);
    setSaved(false);
  }, [questions.length]);

  const handleSave = useCallback(() => {
    onComplete(score, questions.length);
    setSaved(true);
  }, [onComplete, score, questions.length]);

  if (questions.length === 0) {
    return (
      <div className="text-center py-8 text-muted text-sm">
        No quiz questions available for this lesson.
      </div>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPerfect = score === questions.length;

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 py-8"
      >
        <div
          className={cn(
            "inline-flex items-center justify-center size-20 rounded-full",
            isPerfect
              ? "bg-positive/20 text-positive"
              : percentage >= 60
                ? "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
                : "bg-negative/20 text-negative"
          )}
        >
          <Trophy className="size-10" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {isPerfect
              ? "Perfect Score!"
              : percentage >= 80
                ? "Great Job!"
                : percentage >= 60
                  ? "Good Effort!"
                  : "Keep Studying!"}
          </h3>
          <p className="text-3xl font-bold text-foreground mt-2">
            {score} out of {questions.length}
          </p>
          <p className="text-sm text-muted mt-1">{percentage}% correct</p>
        </div>

        {previousScore && (
          <p className="text-xs text-muted">
            Previous best: {previousScore.score}/{previousScore.total}
          </p>
        )}

        <div className="flex items-center justify-center gap-3">
          {!saved ? (
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <Save className="size-4" />
              Save Result
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-positive/10 text-positive text-sm font-medium">
              <CheckCircle2 className="size-4" />
              Saved
            </span>
          )}
          <button
            onClick={handleRetake}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-surface transition-colors"
          >
            <RotateCcw className="size-4" />
            Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === currentIndex
                  ? "bg-accent"
                  : answers[i] !== null
                    ? answers[i] === questions[i].correctIndex
                      ? "bg-positive"
                      : "bg-negative"
                    : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-base font-medium text-foreground leading-relaxed">
            {question.question}
          </h4>

          <div className="grid gap-2.5">
            {question.options.map((option, i) => {
              const isSelected = selectedIndex === i;
              const isAnswer = i === question.correctIndex;

              let variant: "default" | "correct" | "wrong" | "missed" =
                "default";
              if (revealed) {
                if (isSelected && isAnswer) variant = "correct";
                else if (isSelected && !isAnswer) variant = "wrong";
                else if (!isSelected && isAnswer) variant = "missed";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={revealed}
                  className={cn(
                    "relative w-full text-left px-4 py-3 rounded-lg border text-sm transition-all",
                    variant === "default" &&
                      "border-border bg-card hover:bg-surface hover:border-strong cursor-pointer",
                    variant === "correct" &&
                      "border-positive bg-positive/10 text-positive",
                    variant === "wrong" &&
                      "border-negative bg-negative/10 text-negative",
                    variant === "missed" &&
                      "border-positive/50 bg-positive/5 text-positive/70",
                    revealed && variant === "default" && "opacity-50"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex-shrink-0 size-6 rounded-full border flex items-center justify-center text-xs font-medium",
                        variant === "default" &&
                          "border-border text-muted",
                        variant === "correct" &&
                          "border-positive bg-positive text-white",
                        variant === "wrong" &&
                          "border-negative bg-negative text-white",
                        variant === "missed" &&
                          "border-positive/50 text-positive/70"
                      )}
                    >
                      {variant === "correct" ? (
                        <CheckCircle2 className="size-4" />
                      ) : variant === "wrong" ? (
                        <XCircle className="size-4" />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden"
            >
              <div
                className={cn(
                  "p-4 rounded-lg text-sm leading-relaxed",
                  isCorrect
                    ? "bg-positive/10 text-positive"
                    : "bg-negative/10 text-negative"
                )}
              >
                <p className="font-medium mb-1">
                  {isCorrect ? "Correct!" : "Not quite."}
                </p>
                <p className="opacity-90">{question.explanation}</p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  {currentIndex < questions.length - 1
                    ? "Next Question"
                    : "See Results"}
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
