"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  Check,
  GraduationCap,
  HelpCircle,
  Landmark,
  Languages,
  Microscope,
  Play,
  Users,
} from "lucide-react";
import { subjects, countLessons } from "@/lib/education-data";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Subjects />
      <Pricing />
      <FinalCta />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.30] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 65% 50% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 50% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgb(var(--accent) / 0.10), transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <motion.div
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-[40px] sm:text-[56px] lg:text-[68px] font-semibold tracking-tighter leading-[1.05] text-foreground"
          >
            Classical Christian Education,{" "}
            <span className="text-accent">Reimagined</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-[17px] sm:text-[19px] text-muted mt-7 max-w-[660px] leading-relaxed"
          >
            Short, engaging video lessons. Interactive quizzes. Catechism
            training. Built for Reformed homeschool families.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row items-center gap-3 mt-9"
          >
            <Link
              href="/sign-up"
              className="btn-primary h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
            >
              Start Learning Free <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#features"
              className="btn-ghost h-11 px-5 text-[14px] font-medium flex items-center gap-1.5"
            >
              See How It Works
              <ArrowRight className="size-4 text-muted" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-16 lg:mt-20 max-w-[700px] mx-auto"
        >
          <LessonPreview />
        </motion.div>
      </div>
    </section>
  );
}

function LessonPreview() {
  return (
    <div className="card overflow-hidden shadow-[0_24px_64px_-24px_rgba(17,21,28,0.18)] dark:shadow-[0_24px_80px_-24px_rgba(0,0,0,0.5)]">
      <div className="h-9 border-b border-border bg-surface flex items-center px-4 gap-2">
        <span className="size-2.5 rounded-full bg-negative/40" />
        <span className="size-2.5 rounded-full bg-warning/40" />
        <span className="size-2.5 rounded-full bg-positive/40" />
        <div className="mx-auto text-[11px] font-mono text-muted">
          paideia / lesson
        </div>
      </div>
      <div className="relative aspect-[16/9] bg-gradient-to-br from-accent/10 via-gold-soft to-accent-soft flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgb(var(--gold)/0.15),transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="size-16 rounded-full bg-accent/90 text-accent-foreground grid place-items-center shadow-lg">
            <Play className="size-7 ml-0.5" />
          </div>
          <div className="text-center">
            <div className="text-[15px] font-semibold text-foreground">
              What Is the Chief End of Man?
            </div>
            <div className="text-[12px] text-muted mt-1">
              Westminster Shorter Catechism Q1 &middot; 5 min
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-card flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 grid place-items-center">
            <BookOpen className="size-3.5" />
          </div>
          <span className="text-[12px] text-muted">Bible &amp; Theology</span>
        </div>
        <span className="text-[11px] text-muted font-mono">3 quiz questions</span>
      </div>
    </div>
  );
}

/* ─────────────────────────── FEATURES ─────────────────────────── */

const FEATURES = [
  {
    icon: Play,
    title: "Engaging Video Lessons",
    body: "Short, animated lessons that make learning stick. No more 45-minute recorded lectures.",
  },
  {
    icon: HelpCircle,
    title: "Interactive Quizzes",
    body: "Test understanding after every lesson with immediate feedback and explanations.",
  },
  {
    icon: BookOpen,
    title: "Catechism Training",
    body: "Westminster Shorter Catechism integrated throughout, with spaced repetition for memorization.",
  },
  {
    icon: Users,
    title: "Multi-Child Families",
    body: "One family subscription, unlimited children. Track each student’s progress individually.",
  },
  {
    icon: BarChart3,
    title: "Parent Dashboard",
    body: "See exactly where each child stands. Progress tracking, completion reports, and insights.",
  },
  {
    icon: GraduationCap,
    title: "Classical & Reformed",
    body: "Trivium-based learning aligned with your theological convictions. Grammar, Logic, Rhetoric stages.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-surface border-y border-border scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Why Paideia
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Everything your homeschool needs
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed">
            Designed by homeschool parents, for homeschool parents. Each feature
            serves a single purpose: making classical Christian education
            accessible and delightful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="card card-interactive p-7 hover:-translate-y-0.5"
            >
              <div className="size-10 rounded-md bg-accent-soft text-accent grid place-items-center mb-5">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SUBJECTS ─────────────────────────── */

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Landmark,
  Microscope,
  Calculator,
  Languages,
};

const COLOR_MAP: Record<string, { bg: string; text: string; ring: string }> = {
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-600 dark:text-indigo-400",
    ring: "ring-indigo-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-500/20",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-600 dark:text-sky-400",
    ring: "ring-sky-500/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    ring: "ring-rose-500/20",
  },
};

function Subjects() {
  return (
    <section id="subjects" className="py-24 lg:py-32 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Curriculum
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            A classical curriculum, built from the ground up
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed">
            Five core subjects grounded in the classical trivium and a Reformed
            worldview. New lessons added regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, i) => {
            const Icon = ICON_MAP[subject.icon] ?? BookOpen;
            const colors = COLOR_MAP[subject.color] ?? COLOR_MAP.indigo;
            const lessons = countLessons(subject);
            const topicCount = subject.topics.length;

            return (
              <motion.div
                key={subject.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="card card-interactive p-6 hover:-translate-y-0.5 flex flex-col"
              >
                <div
                  className={cn(
                    "size-11 rounded-lg grid place-items-center mb-4 ring-1",
                    colors.bg,
                    colors.text,
                    colors.ring,
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight text-foreground">
                  {subject.name}
                </h3>
                <p className="text-[13px] text-muted mt-2 leading-relaxed flex-1">
                  {subject.description}
                </p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-[12px] text-muted">
                  <span>{lessons} lessons</span>
                  <span>{topicCount} topics</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PRICING ─────────────────────────── */

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Start exploring",
    features: [
      "First unit of each subject",
      "Up to 2 student profiles",
      "Basic progress tracking",
    ],
    cta: "Get Started Free",
    href: "/sign-up",
    highlighted: false,
  },
  {
    name: "Family",
    price: "$29",
    period: "/month",
    annual: "$249/year",
    description: "Unlimited access for your whole family",
    features: [
      "All subjects & lessons",
      "Unlimited student profiles",
      "Full progress tracking & reports",
      "Catechism training with spaced repetition",
      "New content added regularly",
    ],
    cta: "Start Free Trial",
    href: "/sign-up",
    highlighted: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface border-y border-border scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <div className="text-[11.5px] font-medium text-accent uppercase tracking-wider mb-3">
            Pricing
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-semibold tracking-tighter text-foreground leading-tight">
            Simple, family-friendly pricing
          </h2>
          <p className="text-[16px] text-muted mt-5 leading-relaxed">
            Start free and upgrade when you are ready. One subscription covers
            your entire household.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className={cn(
                "card p-8 flex flex-col relative",
                plan.highlighted && "border-gold ring-1 ring-gold/30",
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-[11px] font-semibold text-white px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[18px] font-semibold text-foreground tracking-tight">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-[40px] font-semibold text-foreground tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-muted">{plan.period}</span>
                </div>
                {plan.annual && (
                  <div className="text-[13px] text-muted mt-1">
                    or {plan.annual}
                  </div>
                )}
                <p className="text-[14px] text-muted mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13.5px] text-foreground"
                  >
                    <Check className="size-4 text-positive mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  "mt-8 h-11 flex items-center justify-center text-[14px] font-medium gap-1.5 rounded-md transition-colors",
                  plan.highlighted
                    ? "btn-primary"
                    : "btn-ghost",
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */

function FinalCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="card p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgb(var(--accent) / 0.10), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tighter text-foreground leading-[1.05]">
              Begin Your Family&rsquo;s Learning Journey
            </h2>
            <p className="text-[16px] text-muted mt-5 max-w-[580px] mx-auto leading-relaxed">
              Join families across the country who are rediscovering the joy of
              classical Christian education.
            </p>
            <div className="mt-9">
              <Link
                href="/sign-up"
                className="btn-primary h-11 px-6 text-[14px] font-medium inline-flex items-center gap-1.5"
              >
                Get Started Free <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
