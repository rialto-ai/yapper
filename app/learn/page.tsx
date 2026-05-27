"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScriptureCard from "@/components/scripture-card";
import VideoPlaceholder from "@/components/video-placeholder";
import ShareButton from "@/components/share-button";
import {
  Flame,
  Heart,
  Scale,
  Crown,
  Cross,
  Sun,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Check,
  Download,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Lesson data                                                       */
/* ------------------------------------------------------------------ */

interface Lesson {
  number: number;
  title: string;
  icon: LucideIcon;
  explanation: string;
  verse: string;
  reference: string;
  reflection: string;
}

const LESSONS: Lesson[] = [
  {
    number: 1,
    title: "God is Holy",
    icon: Flame,
    explanation:
      "God is infinitely holy, righteous, and just. He is the Creator of all things and the sovereign ruler of the universe. His holiness is not merely that He is separate from sin, but that He is the standard of all that is good, true, and right. No impurity can exist in His presence.",
    verse:
      "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!",
    reference: "Isaiah 6:3",
    reflection:
      "Do you understand that God is perfectly holy and that His holiness demands perfect righteousness from all people?",
  },
  {
    number: 2,
    title: "Man is Sinful",
    icon: Heart,
    explanation:
      "Every human being has sinned against God. We have not merely made mistakes; we have willfully rebelled against our Creator. Our sin is not measured by human standards but by God’s perfect law. In thought, word, and deed, every person stands guilty before the holy God.",
    verse:
      "For all have sinned and fall short of the glory of God.",
    reference: "Romans 3:23",
    reflection:
      "Have you recognized that you are a sinner who has broken God’s law and stands guilty before Him?",
  },
  {
    number: 3,
    title: "Judgment is Real",
    icon: Scale,
    explanation:
      "Because God is just, He cannot overlook sin. Every sin will be judged. The wages of sin is death, both physical and spiritual, an eternal separation from God. No person can earn their way to God or pay for their own sin. Apart from Christ, every person faces the righteous judgment of God.",
    verse:
      "It is appointed for man to die once, and after that comes judgment.",
    reference: "Hebrews 9:27",
    reflection:
      "Do you understand that God’s justice requires the punishment of sin, and that no person can save themselves?",
  },
  {
    number: 4,
    title: "Christ is Fully God and Fully Man",
    icon: Crown,
    explanation:
      "Jesus Christ is the eternal Son of God who took on human flesh. He is not a created being; He is God Himself, the second person of the Trinity. He was born of the virgin Mary, lived a perfectly sinless life, and perfectly fulfilled the law of God on behalf of sinners.",
    verse:
      "In the beginning was the Word, and the Word was with God, and the Word was God… And the Word became flesh and dwelt among us.",
    reference: "John 1:1, 14",
    reflection:
      "Do you believe that Jesus Christ is truly God and truly man, the only one qualified to save sinners?",
  },
  {
    number: 5,
    title: "Christ Died for Sinners",
    icon: Cross,
    explanation:
      "On the cross, Jesus Christ bore the full wrath of God against sin. He did not die as a mere example or martyr. He died as a substitute, taking the punishment that sinners deserve. His death satisfied the justice of God and provided the only way of salvation for all who believe.",
    verse:
      "But God shows his love for us in that while we were still sinners, Christ died for us.",
    reference: "Romans 5:8",
    reflection:
      "Do you understand that Christ’s death on the cross was a substitutionary sacrifice for sinners?",
  },
  {
    number: 6,
    title: "Christ Rose from the Dead",
    icon: Sun,
    explanation:
      "On the third day, God raised Jesus Christ bodily from the dead. The resurrection is not a metaphor; it is a historical event that proves Christ’s victory over sin, death, and the grave. Because He lives, all who trust in Him will also be raised to eternal life.",
    verse:
      "He was buried… he was raised on the third day in accordance with the Scriptures.",
    reference: "1 Corinthians 15:4",
    reflection:
      "Do you believe that Jesus Christ physically rose from the dead and that He is alive today?",
  },
  {
    number: 7,
    title: "Repent and Believe",
    icon: RotateCcw,
    explanation:
      "God commands all people everywhere to repent of their sins and place their faith in Jesus Christ alone for salvation. Repentance is a turning from sin. Faith is a turning to Christ. This is not mere intellectual agreement but a wholehearted trust in the person and work of Jesus Christ as Lord and Savior.",
    verse:
      "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.",
    reference: "Mark 1:15",
    reflection:
      "Will you turn from your sin and trust in Jesus Christ alone for the forgiveness of your sins and eternal life?",
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default function LearnPage() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(1);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(
    () => new Set(),
  );

  function toggleExpand(lessonNumber: number) {
    setExpandedLesson((prev) =>
      prev === lessonNumber ? null : lessonNumber,
    );
  }

  function toggleComplete(lessonNumber: number) {
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(lessonNumber)) {
        next.delete(lessonNumber);
      } else {
        next.add(lessonNumber);
      }
      return next;
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Page Title Section */}
        <section className="animate-fade-in px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-stone-900">
              <BookOpen className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Learn the Gospel
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
              A clear, biblical pathway through the Gospel of Jesus Christ in
              seven lessons.
            </p>
          </div>
        </section>

        {/* Gospel Pathway */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Timeline */}
            <div className="relative">
              {LESSONS.map((lesson, index) => {
                const isExpanded = expandedLesson === lesson.number;
                const isCompleted = completedLessons.has(lesson.number);
                const isLast = index === LESSONS.length - 1;
                const Icon = lesson.icon;

                return (
                  <div key={lesson.number} className="relative pb-12 last:pb-0">
                    {/* Vertical connector line */}
                    {!isLast && (
                      <div
                        className="absolute left-5 top-12 bottom-0 w-px bg-stone-200"
                        aria-hidden="true"
                      />
                    )}

                    {/* Lesson header (always visible) */}
                    <button
                      onClick={() => toggleExpand(lesson.number)}
                      className="group flex w-full items-center gap-4 text-left"
                      aria-expanded={isExpanded}
                      aria-controls={`lesson-${lesson.number}-content`}
                    >
                      {/* Number badge */}
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                          isCompleted
                            ? "border-stone-700 bg-stone-700 text-white"
                            : isExpanded
                              ? "border-stone-900 bg-stone-900 text-white"
                              : "border-stone-300 bg-white text-stone-500 group-hover:border-stone-400"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-4 w-4" strokeWidth={2.5} />
                        ) : (
                          lesson.number
                        )}
                      </span>

                      {/* Title + icon */}
                      <div className="flex flex-1 items-center gap-2">
                        <Icon
                          className="h-5 w-5 shrink-0 text-stone-400"
                          strokeWidth={1.5}
                        />
                        <h2 className="text-lg font-semibold tracking-tight text-stone-900 group-hover:text-black">
                          {lesson.title}
                        </h2>
                        {isCompleted && (
                          <span className="ml-2 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Expand / collapse chevron */}
                      <span className="shrink-0 text-stone-400 transition-colors group-hover:text-stone-600">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div
                        id={`lesson-${lesson.number}-content`}
                        className="animate-fade-in ml-14 mt-6 space-y-6"
                      >
                        {/* Explanation */}
                        <p className="text-base leading-relaxed text-stone-600">
                          {lesson.explanation}
                        </p>

                        {/* Scripture card */}
                        <ScriptureCard
                          verse={lesson.verse}
                          reference={lesson.reference}
                        />

                        {/* Video placeholder */}
                        <VideoPlaceholder
                          title={`Lesson ${lesson.number}: ${lesson.title}`}
                          duration="5-8 min"
                          language="ASL"
                        />

                        {/* Reflection question */}
                        <div className="rounded-lg border border-stone-200 bg-stone-50 px-6 py-5">
                          <p className="mb-1 text-xs font-semibold tracking-wide text-stone-400 uppercase">
                            Reflection
                          </p>
                          <p className="font-serif text-base italic leading-relaxed text-stone-700">
                            {lesson.reflection}
                          </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-5">
                          {/* Mark as completed */}
                          <button
                            onClick={() => toggleComplete(lesson.number)}
                            className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                              isCompleted
                                ? "border-stone-400 bg-stone-100 text-stone-800"
                                : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-800"
                            }`}
                            aria-pressed={isCompleted}
                          >
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded border ${
                                isCompleted
                                  ? "border-stone-600 bg-stone-700 text-white"
                                  : "border-stone-300"
                              }`}
                            >
                              {isCompleted && (
                                <Check className="h-3 w-3" strokeWidth={2.5} />
                              )}
                            </span>
                            {isCompleted
                              ? "Completed"
                              : "Mark as Completed"}
                          </button>

                          {/* Download this lesson */}
                          <button className="btn-ghost">
                            <Download className="h-4 w-4" />
                            Download this Lesson
                          </button>

                          {/* Share this lesson */}
                          <ShareButton
                            title={`Lesson ${lesson.number}: ${lesson.title}`}
                            text={lesson.explanation}
                            url={
                              typeof window !== "undefined"
                                ? `${window.location.origin}/learn#lesson-${lesson.number}`
                                : `/learn#lesson-${lesson.number}`
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="border-t border-stone-100 bg-stone-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              The Gospel
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-500">
              The Gospel is the good news that God saves sinners through the
              life, death, and resurrection of Jesus Christ.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="btn-primary">
                <Download className="h-4 w-4" />
                Download All Lessons
              </button>

              <ShareButton
                title="Learn the Gospel"
                text="A clear, biblical pathway through the Gospel of Jesus Christ in seven lessons."
                url={
                  typeof window !== "undefined"
                    ? `${window.location.origin}/learn`
                    : "/learn"
                }
              />

              <Link href="/teach" className="btn-ghost">
                <BookOpen className="h-4 w-4" />
                Teach the Gospel
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
