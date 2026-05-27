"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { useLocale } from "@/lib/locale-context";
import {
  Flame,
  Heart,
  Cross,
  Sun,
  RotateCcw,
  Sparkles,
  Video,
  FileText,
  Globe,
  ArrowRight,
} from "lucide-react";

const GOSPEL_ICONS = [Flame, Heart, Cross, RotateCcw, Sun, Sparkles];

const FEATURES_ICONS = [Video, FileText, Globe];
const FEATURES_KEYS = [
  {
    title: "Sign Language Lessons",
    text: "Video lessons in multiple sign languages, designed to teach the Gospel clearly and faithfully.",
  },
  {
    title: "Printable Teaching Sheets",
    text: "Download and print gospel teaching materials for use in classrooms, churches, and homes.",
  },
  {
    title: "Multilingual",
    text: "Available in multiple written languages so the Gospel can reach every community.",
  },
];

export default function HomePage() {
  const { t } = useLocale();

  const gospelPoints = t.home.gospelSummary.points;
  const gospelTitles = [
    "God Is Holy",
    "Man Has Sinned",
    "Christ Died for Sinners",
    "Christ Rose Again",
    "Repent and Believe",
    "Grace Alone",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="animate-fade-in px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {t.home.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
              {t.home.subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/learn" className="btn-primary text-base">
                {t.home.cta.startLearning}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/printable" className="btn-secondary text-base">
                {t.home.cta.downloadSheets}
              </Link>
              <Link href="/teach" className="btn-secondary text-base">
                {t.home.cta.share}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-warm-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="section-heading">{t.home.gospelSummary.title}</h2>
              <p className="section-subheading mx-auto">
                The good news of what God has done for sinners through Jesus
                Christ.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gospelPoints.map((point: string, i: number) => {
                const Icon = GOSPEL_ICONS[i];
                return (
                  <div key={i} className="card flex flex-col gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100">
                      <Icon
                        className="h-5 w-5 text-stone-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-stone-900">
                      {gospelTitles[i]}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="section-heading">How It Works</h2>
              <p className="section-subheading mx-auto">
                Tools and resources to make gospel teaching accessible to all.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {FEATURES_KEYS.map((feature, i) => {
                const Icon = FEATURES_ICONS[i];
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-900">
                      <Icon
                        className="h-6 w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-stone-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-stone-900 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Begin Learning the Gospel Today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Whether you are deaf, hearing, a church leader, or a missionary,
              these resources are free and available for everyone.
            </p>
            <Link
              href="/learn"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium text-stone-900 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
            >
              {t.home.cta.startLearning}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
