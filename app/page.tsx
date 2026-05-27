"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { useLocale } from "@/lib/locale-context";
import {
  ArrowRight,
  Play,
  Printer,
  Share2,
  Globe,
  Hand,
  MapPin,
  Plus,
  Flame,
  Heart,
  Scale,
  Cross,
  Sun,
  RotateCcw,
} from "lucide-react";

const SIGNING_TRACKS = [
  {
    id: "international-sign",
    name: "International Sign",
    description: "A global bridge track for some cross-cultural Deaf settings.",
    icon: Globe,
    href: "/watch?track=international-sign",
  },
  {
    id: "asl",
    name: "American Sign Language",
    description: "Signed Gospel and Scripture resources in ASL.",
    icon: Hand,
    href: "/watch?track=asl",
  },
  {
    id: "auslan",
    name: "Auslan",
    description: "Signed Gospel resources for Australian Deaf communities.",
    icon: MapPin,
    href: "/watch?track=auslan",
  },
  {
    id: "more",
    name: "More Coming Soon",
    description:
      "Additional signed language tracks will be added as reviewed resources become available.",
    icon: Plus,
    href: null,
  },
];

const GOSPEL_POINTS = [
  { icon: Flame, text: "God is holy." },
  { icon: Heart, text: "All people have sinned." },
  { icon: Scale, text: "Sin deserves judgment." },
  { icon: Cross, text: "Christ died for sinners." },
  { icon: Sun, text: "Christ rose from the dead." },
  { icon: RotateCcw, text: "Repent and believe the Gospel." },
];

export default function HomePage() {
  const { t } = useLocale();
  const [shareToast, setShareToast] = useState(false);

  async function handleShare() {
    const url = window.location.origin;
    const title = "The Gospel in Sign";
    const text =
      "The Gospel of Jesus Christ, taught clearly in sign language.";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    } catch {
      // Clipboard not available
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="animate-fade-in px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {t.home.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
              {t.home.subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/watch" className="btn-primary text-base">
                <Play className="h-4 w-4" />
                Start Watching
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/watch" className="btn-secondary text-base">
                <Printer className="h-4 w-4" />
                Print Teaching Sheets
              </Link>
              <div className="relative inline-block">
                <button
                  onClick={handleShare}
                  className="btn-secondary text-base"
                >
                  <Share2 className="h-4 w-4" />
                  Share the Gospel
                </button>
                {shareToast && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-stone-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg"
                  >
                    Link copied to clipboard
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sign Language Note */}
        <section className="px-4 pb-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-base font-medium text-stone-700">
              Signed Gospel lessons in International Sign and selected local sign
              languages.
            </p>
            <p className="mt-2 text-sm text-stone-400">
              International Sign can help in some global settings, but it is not
              a replacement for local sign languages like ASL, Auslan, BSL, or
              Filipino Sign Language.
            </p>
          </div>
        </section>

        {/* Choose a Signing Track */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="section-heading">Choose a signing track</h2>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNING_TRACKS.map((track) => {
                const Icon = track.icon;
                const isDisabled = track.href === null;

                const cardContent = (
                  <div
                    className={`card flex flex-col items-start gap-4 transition-shadow ${
                      isDisabled
                        ? "opacity-60 cursor-default"
                        : "hover:shadow-md cursor-pointer"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        isDisabled ? "bg-stone-100" : "bg-stone-900"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isDisabled ? "text-stone-400" : "text-white"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold tracking-tight ${
                        isDisabled ? "text-stone-400" : "text-stone-900"
                      }`}
                    >
                      {track.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDisabled ? "text-stone-400" : "text-stone-500"
                      }`}
                    >
                      {track.description}
                    </p>
                  </div>
                );

                if (isDisabled) {
                  return <div key={track.id}>{cardContent}</div>;
                }

                return (
                  <Link
                    key={track.id}
                    href={track.href}
                    className="no-underline"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple Gospel Summary */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="section-heading">The Gospel in Summary</h2>
              <p className="section-subheading mx-auto">
                The good news of what God has done for sinners through Jesus
                Christ.
              </p>
            </div>
            <ol className="mt-14 space-y-6">
              {GOSPEL_POINTS.map((point, i) => {
                const Icon = point.icon;
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <Icon
                        className="h-5 w-5 text-stone-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-base font-medium leading-relaxed text-stone-800">
                      {point.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-stone-100 bg-stone-900 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Begin watching now
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Whether you are deaf, hearing, a church leader, or a missionary,
              these resources are free and available for everyone.
            </p>
            <Link
              href="/watch"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium text-stone-900 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
            >
              <Play className="h-4 w-4" />
              Start Watching
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
