export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  topicId: string;
  subjectId: string;
  title: string;
  slug: string;
  description: string;
  duration: number;
  order: number;
  scripture?: string;
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CatechismQuestion {
  number: number;
  question: string;
  answer: string;
  scripture: string[];
  topic: string;
}

export interface Student {
  id: string;
  name: string;
  age: number;
  stage: "Grammar" | "Logic" | "Rhetoric";
  avatarColor: string;
}

export interface LessonProgress {
  lessonId: string;
  studentId: string;
  videoWatched: boolean;
  quizScore: number | null;
  quizTotal: number | null;
  completedAt: string | null;
}

export interface CatechismProgress {
  questionNumber: number;
  studentId: string;
  mastered: boolean;
  lastReviewed: string | null;
  timesReviewed: number;
}
