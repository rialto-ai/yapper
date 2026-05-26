"use client";

import type { Student, LessonProgress, CatechismProgress } from "./types";

const STUDENTS_KEY = "paideia_students";
const PROGRESS_KEY = "paideia_progress";
const CATECHISM_KEY = "paideia_catechism";
const ACTIVE_STUDENT_KEY = "paideia_active_student";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

const DEFAULT_STUDENTS: Student[] = [
  {
    id: "student-1",
    name: "Sarah",
    age: 10,
    stage: "Grammar",
    avatarColor: "#4f46e5",
  },
  {
    id: "student-2",
    name: "James",
    age: 14,
    stage: "Logic",
    avatarColor: "#059669",
  },
];

export function getStudents(): Student[] {
  const stored = read<Student[]>(STUDENTS_KEY, []);
  if (stored.length === 0) {
    write(STUDENTS_KEY, DEFAULT_STUDENTS);
    return DEFAULT_STUDENTS;
  }
  return stored;
}

export function addStudent(student: Student) {
  const students = getStudents();
  students.push(student);
  write(STUDENTS_KEY, students);
}

export function removeStudent(id: string) {
  const students = getStudents().filter((s) => s.id !== id);
  write(STUDENTS_KEY, students);
}

export function getActiveStudentId(): string {
  return read<string>(ACTIVE_STUDENT_KEY, "student-1");
}

export function setActiveStudentId(id: string) {
  write(ACTIVE_STUDENT_KEY, id);
}

export function getProgress(): LessonProgress[] {
  return read<LessonProgress[]>(PROGRESS_KEY, []);
}

export function getLessonProgress(
  lessonId: string,
  studentId: string
): LessonProgress | undefined {
  return getProgress().find(
    (p) => p.lessonId === lessonId && p.studentId === studentId
  );
}

export function getStudentProgress(studentId: string): LessonProgress[] {
  return getProgress().filter((p) => p.studentId === studentId);
}

export function markVideoWatched(lessonId: string, studentId: string) {
  const all = getProgress();
  const idx = all.findIndex(
    (p) => p.lessonId === lessonId && p.studentId === studentId
  );
  if (idx >= 0) {
    all[idx].videoWatched = true;
  } else {
    all.push({
      lessonId,
      studentId,
      videoWatched: true,
      quizScore: null,
      quizTotal: null,
      completedAt: null,
    });
  }
  write(PROGRESS_KEY, all);
}

export function saveQuizResult(
  lessonId: string,
  studentId: string,
  score: number,
  total: number
) {
  const all = getProgress();
  const idx = all.findIndex(
    (p) => p.lessonId === lessonId && p.studentId === studentId
  );
  const entry: LessonProgress = {
    lessonId,
    studentId,
    videoWatched: true,
    quizScore: score,
    quizTotal: total,
    completedAt: new Date().toISOString(),
  };
  if (idx >= 0) {
    all[idx] = entry;
  } else {
    all.push(entry);
  }
  write(PROGRESS_KEY, all);
}

export function getCatechismProgress(): CatechismProgress[] {
  return read<CatechismProgress[]>(CATECHISM_KEY, []);
}

export function getCatechismQuestionProgress(
  questionNumber: number,
  studentId: string
): CatechismProgress | undefined {
  return getCatechismProgress().find(
    (p) => p.questionNumber === questionNumber && p.studentId === studentId
  );
}

export function markCatechismReviewed(
  questionNumber: number,
  studentId: string,
  mastered: boolean
) {
  const all = getCatechismProgress();
  const idx = all.findIndex(
    (p) => p.questionNumber === questionNumber && p.studentId === studentId
  );
  if (idx >= 0) {
    all[idx].timesReviewed += 1;
    all[idx].lastReviewed = new Date().toISOString();
    all[idx].mastered = mastered;
  } else {
    all.push({
      questionNumber,
      studentId,
      mastered,
      lastReviewed: new Date().toISOString(),
      timesReviewed: 1,
    });
  }
  write(CATECHISM_KEY, all);
}
