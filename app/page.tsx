import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
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

const GOSPEL_POINTS = [
  {
    icon: Flame,
    title: "God Is Holy",
    text: "God is holy. He is perfectly righteous, just, and pure. No sin can stand in His presence.",
  },
  {
    icon: Heart,
    title: "Man Has Sinned",
    text: "Man has sinned. Every person has broken God’s law and stands guilty before Him.",
  },
  {
    icon: Cross,
    title: "Christ Died for Sinners",
    text: "Christ died for sinners. Jesus Christ, the eternal Son of God, bore the wrath of God on the cross as a substitute for sinners.",
  },
  {
    icon: RotateCcw,
    title: "Christ Rose Again",
    text: "Christ rose again. On the third day, God raised Jesus from the dead, conquering sin and death.",
  },
  {
    icon: Sun,
    title: "Repent and Believe",
    text: "Repent and believe the Gospel. God commands all people everywhere to turn from sin and trust in Christ alone.",
  },
  {
    icon: Sparkles,
    title: "Grace Alone",
    text: "Salvation is by grace alone, through faith alone, in Christ alone, to the glory of God alone.",
  },
];

const FEATURES = [
  {
    icon: Video,
    title: "Sign Language Lessons",
    text: "Video lessons in multiple sign languages, designed to teach the Gospel clearly and faithfully.",
  },
  {
    icon: FileText,
    title: "Printable Teaching Sheets",
    text: "Download and print gospel teaching materials for use in classrooms, churches, and homes.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    text: "Available in multiple written languages so the Gospel can reach every community.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="animate-fade-in px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              The Gospel of Jesus Christ, taught clearly in sign language.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl">
              A simple multilingual teaching platform for deaf communities,
              churches, families, and missionaries.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/learn" className="btn-primary text-base">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/printable" className="btn-secondary text-base">
                Download Teaching Sheets
              </Link>
              <Link href="/teach" className="btn-secondary text-base">
                Share With Someone
              </Link>
            </div>
          </div>
        </section>

        {/* Gospel Summary Section */}
        <section className="border-t border-stone-100 bg-warm-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="section-heading">The Gospel</h2>
              <p className="section-subheading mx-auto">
                The good news of what God has done for sinners through Jesus
                Christ.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GOSPEL_POINTS.map((point) => (
                <div key={point.title} className="card flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100">
                    <point.icon
                      className="h-5 w-5 text-stone-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-stone-900">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="section-heading">How It Works</h2>
              <p className="section-subheading mx-auto">
                Tools and resources to make gospel teaching accessible to all.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-900">
                    <feature.icon
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
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
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
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
