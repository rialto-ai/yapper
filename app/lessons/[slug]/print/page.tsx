"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Printer, ChevronLeft } from "lucide-react";
import { getLessonBySlug } from "@/lib/lessons-data";
import PrintSheet from "@/components/print-sheet";

export default function LessonPrintPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-24">
        <h1 className="text-2xl font-semibold text-fg">Lesson not found</h1>
        <p className="mt-2 text-fg-muted">
          The lesson you are looking for does not exist.
        </p>
        <Link href="/watch" className="btn-secondary mt-6">
          <ChevronLeft className="h-4 w-4" />
          Back to all lessons
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Embedded print styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            color: black;
            background: white;
            font-size: 12pt;
            line-height: 1.6;
          }
          @page {
            margin: 1in 0.75in;
          }
          .print-paper {
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-bg">
        {/* Screen toolbar */}
        <div className="no-print sticky top-0 z-10 border-b border-border bg-bg">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
            <span className="text-sm font-medium text-fg">Print Preview</span>
            <div className="flex items-center gap-3">
              <Link
                href={`/lessons/${slug}`}
                className="inline-flex items-center gap-1 text-sm text-fg-secondary transition-colors hover:text-fg"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to lesson
              </Link>
              <button
                onClick={() => window.print()}
                className="btn-accent px-4 py-2 text-sm"
              >
                <Printer className="h-4 w-4" />
                Print or Save as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Print sheet container */}
        <div className="mx-auto max-w-3xl px-4 py-8">
          <div className="print-paper card shadow-lg">
            <PrintSheet lesson={lesson} />
          </div>
        </div>
      </div>
    </>
  );
}
