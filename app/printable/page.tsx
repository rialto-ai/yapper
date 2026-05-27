"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Printer, Download, Share2, Copy, FileText, QrCode } from "lucide-react";

const LESSON_SHEETS = [
  {
    id: 1,
    title: "Full Gospel Overview",
    description:
      "A complete overview of the Gospel message: God's holiness, man's sin, Christ's death and resurrection, and the call to repent and believe.",
  },
  {
    id: 2,
    title: "God is Holy",
    description:
      "Teaching sheet on the holiness and righteousness of God, with key scriptures and discussion prompts.",
  },
  {
    id: 3,
    title: "Man is Sinful",
    description:
      "A lesson on the sinfulness of humanity and our inability to save ourselves before a holy God.",
  },
  {
    id: 4,
    title: "Judgment is Real",
    description:
      "Teaching on the reality of God's judgment, the certainty of death, and the need for a Savior.",
  },
  {
    id: 5,
    title: "Christ: God and Man",
    description:
      "A lesson on the person of Jesus Christ—fully God and fully man—and why this matters for the Gospel.",
  },
  {
    id: 6,
    title: "Christ Died for Sinners",
    description:
      "Teaching on the substitutionary death of Christ on the cross and what it accomplished for sinners.",
  },
  {
    id: 7,
    title: "Christ Rose from the Dead",
    description:
      "A lesson on the bodily resurrection of Jesus Christ and its significance for salvation.",
  },
  {
    id: 8,
    title: "Repent and Believe",
    description:
      "Teaching on the call to repentance and faith, and what it means to trust in Christ alone for salvation.",
  },
];

export default function PrintablePage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  function handlePrint() {
    window.print();
  }

  function handleDownload(title: string) {
    alert(`PDF download for "${title}" will be available soon.`);
  }

  function handleShare(title: string) {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title, text: `${title} - The Gospel in Sign`, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).catch(() => {});
    }
  }

  function handleCopy(sheet: (typeof LESSON_SHEETS)[number]) {
    const text = `${sheet.title}\n\n${sheet.description}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(sheet.id);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {});
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Title Section */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Printable Teaching Sheets
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              Download and print Gospel teaching materials for churches, families,
              and missionaries.
            </p>
          </div>
        </section>

        {/* Lesson Sheets Grid */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {LESSON_SHEETS.map((sheet) => (
                <article
                  key={sheet.id}
                  className="card flex flex-col gap-4"
                  aria-label={`Lesson ${sheet.id}: ${sheet.title}`}
                >
                  {/* Icon and title */}
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <FileText className="h-5 w-5 text-stone-700" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-black">
                        {sheet.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone-500">
                        {sheet.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                      aria-label={`Print ${sheet.title}`}
                    >
                      <Printer className="h-4 w-4" />
                      <span className="hidden sm:inline">Print</span>
                    </button>
                    <button
                      onClick={() => handleDownload(sheet.title)}
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                      aria-label={`Download PDF for ${sheet.title}`}
                    >
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">PDF</span>
                    </button>
                    <button
                      onClick={() => handleShare(sheet.title)}
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                      aria-label={`Share ${sheet.title}`}
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                    <button
                      onClick={() => handleCopy(sheet)}
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-700"
                      aria-label={`Copy text summary for ${sheet.title}`}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {copiedId === sheet.id ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Print Preview Section */}
        <section className="border-t border-stone-100 bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="no-print text-center">
              <h2 className="section-heading">Print Preview</h2>
              <p className="section-subheading mx-auto">
                Below is a sample of what a printed teaching sheet looks like.
              </p>
            </div>

            {/* Simulated printed sheet */}
            <div className="mt-12 rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-12 print:border-none print:shadow-none print:p-0">
              {/* Sheet header */}
              <div className="border-b border-stone-200 pb-6">
                <p className="text-xs font-medium tracking-widest text-stone-400 uppercase">
                  The Gospel in Sign &mdash; Teaching Sheet
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                  Full Gospel Overview
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  Lesson 1 of 8
                </p>
              </div>

              {/* Explanation */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                  Explanation
                </h4>
                <p className="mt-2 text-base leading-relaxed text-stone-700">
                  The Gospel is the good news that God saves sinners through the
                  life, death, and resurrection of Jesus Christ. God is holy and
                  cannot tolerate sin. All people have sinned and stand guilty
                  before God. But God, in His mercy, sent His Son Jesus Christ to
                  die on the cross as a substitute for sinners. Christ rose from
                  the dead on the third day, conquering sin and death. God now
                  commands all people everywhere to repent of their sin and
                  believe in Jesus Christ for the forgiveness of sins and eternal
                  life.
                </p>
              </div>

              {/* Scripture */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                  Key Scripture
                </h4>
                <blockquote className="mt-2 border-l-4 border-stone-300 pl-4">
                  <p className="text-base leading-relaxed text-stone-700 italic">
                    &ldquo;For God so loved the world, that he gave his only Son,
                    that whoever believes in him should not perish but have
                    eternal life.&rdquo;
                  </p>
                  <cite className="mt-1 block text-sm font-medium not-italic text-stone-500">
                    John 3:16
                  </cite>
                </blockquote>
              </div>

              {/* Teaching Outline */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                  Teaching Outline
                </h4>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-base leading-relaxed text-stone-700">
                  <li>God is holy and created all things.</li>
                  <li>Man has sinned and is separated from God.</li>
                  <li>God&apos;s judgment is real and certain.</li>
                  <li>Christ is God and became man.</li>
                  <li>Christ died on the cross for sinners.</li>
                  <li>Christ rose from the dead.</li>
                  <li>God commands all to repent and believe.</li>
                </ol>
              </div>

              {/* Discussion Questions */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                  Discussion Questions
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-relaxed text-stone-700">
                  <li>What does it mean that God is holy?</li>
                  <li>Why can&apos;t we save ourselves?</li>
                  <li>What did Jesus do for sinners on the cross?</li>
                  <li>What does it mean to repent and believe?</li>
                </ul>
              </div>

              {/* Prayer Prompt */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                  Prayer Prompt
                </h4>
                <p className="mt-2 text-base leading-relaxed text-stone-700">
                  Ask God to open your heart to understand the Gospel. Pray that
                  He would give you the gift of repentance and faith in Jesus
                  Christ.
                </p>
              </div>

              {/* QR Code and Notes */}
              <div className="mt-8 flex flex-col gap-6 border-t border-stone-200 pt-6 sm:flex-row sm:items-start sm:justify-between">
                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-stone-100 border border-stone-200">
                    <div className="text-center">
                      <QrCode className="mx-auto h-8 w-8 text-stone-400" />
                      <p className="mt-1 text-xs text-stone-400">QR Code</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-400">
                    Scan for online version
                  </p>
                </div>

                {/* Notes */}
                <div className="flex-1 sm:max-w-sm">
                  <h4 className="text-sm font-semibold tracking-wide text-stone-700 uppercase">
                    Notes
                  </h4>
                  <div className="mt-2 space-y-3">
                    <div className="border-b border-stone-200" />
                    <div className="border-b border-stone-200" />
                    <div className="border-b border-stone-200" />
                    <div className="border-b border-stone-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
