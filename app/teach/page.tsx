"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Presentation,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  BookOpen,
  X,
} from "lucide-react";

const TEACHING_STEPS = [
  {
    number: 1,
    title: "God is Holy",
    explanation:
      "God is perfectly holy, righteous, and just. He is the Creator of all things. His holiness means He is set apart from all sin and evil. No impurity can exist in His presence. He is the standard of all that is good and true.",
    scripture:
      "\"Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!\" — Isaiah 6:3",
    videoTitle: "God is Holy — Sign Language",
  },
  {
    number: 2,
    title: "Man Has Sinned",
    explanation:
      "Every person born into this world has sinned against God. We have all broken His law — in thought, word, and deed. No one is righteous by their own efforts. Sin separates us from God and brings guilt and condemnation upon every human being.",
    scripture:
      "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
    videoTitle: "Man Has Sinned — Sign Language",
  },
  {
    number: 3,
    title: "Judgment is Real",
    explanation:
      "Because God is just, He must punish sin. The Bible tells us that it is appointed for man to die once, and after that comes judgment. The wages of sin is death — both physical and spiritual. Every person will stand before God and give an account.",
    scripture:
      "\"And just as it is appointed for man to die once, and after that comes judgment.\" — Hebrews 9:27",
    videoTitle: "Judgment is Real — Sign Language",
  },
  {
    number: 4,
    title: "Christ: God and Man",
    explanation:
      "Jesus Christ is the eternal Son of God. He is fully God and fully man. He was born of a virgin, lived a sinless life, and perfectly obeyed God’s law in every way. He is the only mediator between God and man — the only one who can bridge the gap our sin has created.",
    scripture:
      "\"For in him the whole fullness of deity dwells bodily.\" — Colossians 2:9",
    videoTitle: "Christ: God and Man — Sign Language",
  },
  {
    number: 5,
    title: "Christ Died for Sinners",
    explanation:
      "On the cross, Jesus Christ bore the punishment that sinners deserve. He took the wrath of God upon Himself as a substitute. He who knew no sin became sin for us, so that in Him we might become the righteousness of God. His death paid the full price for sin.",
    scripture:
      "\"But God shows his love for us in that while we were still sinners, Christ died for us.\" — Romans 5:8",
    videoTitle: "Christ Died for Sinners — Sign Language",
  },
  {
    number: 6,
    title: "Christ Rose from the Dead",
    explanation:
      "On the third day after His death, God raised Jesus Christ from the dead. The resurrection proves that God accepted Christ’s sacrifice, that sin and death have been conquered, and that Jesus is Lord of all. He is alive and reigns forever.",
    scripture:
      "\"God raised him up, loosing the pangs of death, because it was not possible for him to be held by it.\" — Acts 2:24",
    videoTitle: "Christ Rose from the Dead — Sign Language",
  },
  {
    number: 7,
    title: "Repent and Believe",
    explanation:
      "God now commands all people everywhere to repent — to turn from their sin — and to believe in Jesus Christ. Salvation is not earned by good works. It is a free gift of God, received by faith. Trust in Christ alone for the forgiveness of your sins and eternal life.",
    scripture:
      "\"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.\" — Ephesians 2:8–9",
    videoTitle: "Repent and Believe — Sign Language",
  },
];

const TEACHING_RESOURCES = [
  {
    title: "Full Gospel Overview PDF",
    description:
      "A comprehensive one-page summary of the entire Gospel message, suitable for printing and distribution.",
  },
  {
    title: "Teacher Guide",
    description:
      "Detailed instructions for teachers and leaders on how to use these materials effectively.",
  },
  {
    title: "Church Outreach Pack",
    description:
      "A collection of all lessons, discussion guides, and printable materials for church outreach events.",
  },
  {
    title: "Lesson 1: God is Holy",
    description:
      "Individual lesson PDF covering the holiness of God with teaching notes and scripture references.",
  },
  {
    title: "Lesson 2: Man Has Sinned",
    description:
      "Individual lesson PDF covering the sinfulness of man with teaching notes and scripture references.",
  },
  {
    title: "Lesson 3: Judgment is Real",
    description:
      "Individual lesson PDF covering the reality of God’s judgment with teaching notes and scripture references.",
  },
];

export default function TeachPage() {
  const [teachingMode, setTeachingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handlePrevious() {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentStep((prev) =>
      Math.min(TEACHING_STEPS.length - 1, prev + 1)
    );
  }

  function handleDownload(title: string) {
    alert(`PDF download for "${title}" will be available soon.`);
  }

  const step = TEACHING_STEPS[currentStep];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Teaching Mode */}
        {teachingMode ? (
          <section
            className={`${
              expanded
                ? "fixed inset-0 z-50 bg-white"
                : "px-4 py-12 sm:px-6 lg:px-8"
            }`}
          >
            <div
              className={`mx-auto flex h-full flex-col ${
                expanded ? "max-w-full p-8" : "max-w-3xl"
              }`}
            >
              {/* Teaching Mode Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center gap-3">
                  <Presentation
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium text-stone-500">
                    Teaching Mode &mdash; Step {currentStep + 1} of{" "}
                    {TEACHING_STEPS.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                    aria-label={expanded ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {expanded ? (
                      <Minimize className="h-4 w-4" />
                    ) : (
                      <Maximize className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setTeachingMode(false);
                      setExpanded(false);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                    aria-label="Exit teaching mode"
                  >
                    <X className="h-4 w-4" />
                    Exit
                  </button>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-lg font-semibold text-stone-700">
                  {step.number}
                </span>
                <h2
                  className={`mt-6 font-serif font-semibold tracking-tight text-stone-900 ${
                    expanded ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"
                  }`}
                >
                  {step.title}
                </h2>
                <p
                  className={`mx-auto mt-6 max-w-2xl leading-relaxed text-stone-600 ${
                    expanded ? "text-xl sm:text-2xl" : "text-lg"
                  }`}
                >
                  {step.explanation}
                </p>
                <blockquote className="mx-auto mt-8 max-w-xl">
                  <p
                    className={`leading-relaxed text-stone-700 italic ${
                      expanded ? "text-lg" : "text-base"
                    }`}
                  >
                    {step.scripture}
                  </p>
                </blockquote>

                {/* Video Placeholder */}
                <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center rounded-lg border border-stone-200 bg-stone-100 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white">
                    <BookOpen
                      className="h-5 w-5 text-stone-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-stone-500">
                    Video coming soon
                  </p>
                  <p className="mt-1 text-xs text-stone-400">
                    {step.videoTitle}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-transparent"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <div className="flex gap-1.5">
                  {TEACHING_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        i === currentStep ? "bg-stone-900" : "bg-stone-300"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentStep === TEACHING_STEPS.length - 1}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-transparent"
                  aria-label="Next step"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Title Section */}
            <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
                  Teach Others
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
                  Use these tools to teach the Gospel clearly to others.
                </p>
              </div>
            </section>

            {/* Teaching Mode Section */}
            <section className="border-t border-stone-100 bg-warm-50 px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-stone-900">
                  <Presentation
                    className="h-6 w-6 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="mt-6 section-heading">Teaching Mode</h2>
                <p className="section-subheading mx-auto">
                  A distraction-free, step-by-step presentation of the Gospel.
                  Perfect for one-on-one teaching, small groups, or classroom
                  settings.
                </p>
                <button
                  onClick={() => {
                    setTeachingMode(true);
                    setCurrentStep(0);
                  }}
                  className="btn-primary mt-8 text-base"
                >
                  <Presentation className="h-4 w-4" />
                  Start Teaching Mode
                </button>
              </div>

              {/* Step preview cards */}
              <div className="mx-auto mt-12 max-w-5xl">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {TEACHING_STEPS.map((s) => (
                    <button
                      key={s.number}
                      onClick={() => {
                        setTeachingMode(true);
                        setCurrentStep(s.number - 1);
                      }}
                      className="card flex items-start gap-3 text-left transition-shadow hover:shadow-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                        {s.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-black">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-stone-500 line-clamp-2">
                          {s.explanation}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Teaching Resources Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center">
                  <h2 className="section-heading">Teaching Resources</h2>
                  <p className="section-subheading mx-auto">
                    Downloadable materials to help you teach the Gospel
                    effectively.
                  </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {TEACHING_RESOURCES.map((resource) => (
                    <article
                      key={resource.title}
                      className="card flex flex-col gap-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100">
                        <BookOpen
                          className="h-5 w-5 text-stone-700"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-black">
                        {resource.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-stone-500">
                        {resource.description}
                      </p>
                      <div className="mt-auto">
                        <button
                          onClick={() => handleDownload(resource.title)}
                          className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900"
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
