"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Lightbulb,
  Bug,
  MessageCircle,
  Heart,
  Check,
  Send,
  Sparkles,
  Users,
  Lock,
  Mail,
  ArrowRight,
  Megaphone,
  Paperclip,
} from "lucide-react";

type FeedbackType = "idea" | "bug" | "general" | "story";

type FeedbackCard = {
  id: FeedbackType;
  icon: typeof Lightbulb;
  title: string;
  desc: string;
  color: "accent" | "secondary" | "positive";
  placeholder: string;
};

const feedbackTypes: FeedbackCard[] = [
  {
    id: "idea",
    icon: Lightbulb,
    title: "Idea / Feature Request",
    desc: "Have an idea for something Selah should build? Tell us.",
    color: "accent",
    placeholder:
      "Describe the feature you'd like to see. What does it do? Who is it for? How would you use it?",
  },
  {
    id: "bug",
    icon: Bug,
    title: "Bug Report",
    desc: "Something broken? Help us fix it fast.",
    color: "secondary",
    placeholder:
      "Describe what's going wrong. Include steps to reproduce if you can.",
  },
  {
    id: "general",
    icon: MessageCircle,
    title: "General Feedback",
    desc: "Thoughts on how we're doing? We want to hear them.",
    color: "positive",
    placeholder:
      "Tell us what's working, what isn't, and anything else on your mind.",
  },
  {
    id: "story",
    icon: Heart,
    title: "Customer Story",
    desc: "Want to share your success story? Help us celebrate.",
    color: "secondary",
    placeholder:
      "Tell us about a moment when Selah made a difference for you, your team, or your community.",
  },
];

const roles = [
  "Artist",
  "Worship Leader",
  "Label / Manager",
  "Publisher",
  "Ministry / Church",
  "Other",
];

const handlingPoints = [
  {
    icon: Users,
    color: "accent" as const,
    title: "Read by humans",
    desc: "Every submission is read by our product team, not a chatbot. We aim to respond within 3 business days.",
  },
  {
    icon: Sparkles,
    color: "secondary" as const,
    title: "Public roadmap",
    desc: "Approved ideas appear on our public roadmap. You can track progress from idea to release.",
  },
  {
    icon: Lock,
    color: "accent" as const,
    title: "Confidential",
    desc: "Bug reports and customer feedback are handled confidentially. Your data stays private.",
  },
];

function colorFor(c: "accent" | "secondary" | "positive") {
  if (c === "secondary") {
    return {
      bg: "bg-secondary-soft",
      border: "border-secondary/15",
      text: "text-secondary",
      ring: "ring-secondary/40",
      gradient: "from-secondary to-secondary-hover",
      shadow: "shadow-secondary/20",
      selectedBg: "bg-secondary-soft/60",
      selectedBorder: "border-secondary",
    };
  }
  if (c === "positive") {
    return {
      bg: "bg-positive-soft",
      border: "border-positive/20",
      text: "text-positive",
      ring: "ring-positive/40",
      gradient: "from-positive to-positive",
      shadow: "shadow-positive/20",
      selectedBg: "bg-positive-soft/60",
      selectedBorder: "border-positive",
    };
  }
  return {
    bg: "bg-accent-soft",
    border: "border-accent/15",
    text: "text-accent",
    ring: "ring-accent/40",
    gradient: "from-accent to-accent-hover",
    shadow: "shadow-accent/20",
    selectedBg: "bg-accent-soft/60",
    selectedBorder: "border-accent",
  };
}

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState<FeedbackType>("idea");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Artist",
    subject: "",
    description: "",
    expected: "",
    actual: "",
    url: "",
    problem: "",
  });

  const active = feedbackTypes.find((t) => t.id === selectedType)!;
  const activeColors = colorFor(active.color);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      role: "Artist",
      subject: "",
      description: "",
      expected: "",
      actual: "",
      url: "",
      problem: "",
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-soft/40 via-white to-white pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgb(217 119 6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-[10%] left-[8%] w-[420px] h-[420px] bg-accent/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[5%] right-[8%] w-[420px] h-[420px] bg-secondary/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-[920px] mx-auto px-8 pt-24 pb-20 text-center">
          <p className="label-eyebrow-secondary mb-4">We&apos;re listening</p>
          <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight leading-[1.05] mb-5">
            Your feedback shapes{" "}
            <span className="bg-gradient-to-r from-secondary via-secondary-hover to-accent bg-clip-text text-transparent">
              Selah.
            </span>
          </h1>
          <p className="text-[17px] text-subtle leading-relaxed max-w-[680px] mx-auto">
            Tell us what&apos;s working, what&apos;s broken, and what would make Selah better for you. Every submission goes to our product team.
          </p>
        </div>
      </section>

      {/* TYPE SELECTOR */}
      <section className="pb-12">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-muted mb-6">
            Pick a feedback type
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {feedbackTypes.map((t) => {
              const c = colorFor(t.color);
              const isSelected = selectedType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`card p-6 text-left transition-all ${
                    isSelected
                      ? `${c.selectedBorder} ring-4 ${c.ring} shadow-lg ${c.shadow}`
                      : "hover:border-border-strong card-interactive"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isSelected
                        ? `bg-gradient-to-br ${c.gradient} shadow-md ${c.shadow}`
                        : `${c.bg} border ${c.border}`
                    }`}
                  >
                    <t.icon
                      size={20}
                      strokeWidth={1.8}
                      className={isSelected ? "text-white" : c.text}
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-[15px] font-semibold leading-tight">{t.title}</h3>
                    {isSelected && (
                      <div
                        className={`shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center`}
                      >
                        <Check size={11} strokeWidth={3} className="text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-[12.5px] text-subtle leading-relaxed">{t.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-24">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="card p-8 md:p-10 shadow-xl shadow-accent/5">
            {submitted ? (
              <div className="py-10 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${activeColors.gradient} shadow-lg ${activeColors.shadow} mb-6`}
                >
                  <Check size={28} strokeWidth={2.5} className="text-white" />
                </div>
                <h3 className="text-[24px] font-bold tracking-tight mb-3">
                  Thanks for your feedback.
                </h3>
                <p className="text-[14px] text-subtle leading-relaxed max-w-[460px] mx-auto mb-6">
                  Our product team reviews every submission. If you left an email, we&apos;ll follow up if we have questions.
                </p>
                <button onClick={reset} className="btn-secondary text-[14px]">
                  Submit another
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-border">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${activeColors.gradient} shadow-md ${activeColors.shadow}`}
                  >
                    <active.icon size={17} strokeWidth={1.8} className="text-white" />
                  </div>
                  <div>
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-wider ${activeColors.text}`}
                    >
                      {active.title}
                    </p>
                    <p className="text-[13px] text-subtle">{active.desc}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                        Name <span className="text-muted font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                        Email <span className="text-muted font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                      Your role
                    </label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
                    >
                      {roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Short summary of your feedback"
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                      Description
                    </label>
                    <textarea
                      required
                      rows={8}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder={active.placeholder}
                      className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted resize-none leading-relaxed"
                    />
                  </div>

                  {/* Conditional bug fields */}
                  {selectedType === "bug" && (
                    <div className="rounded-lg bg-secondary-soft/40 border border-secondary/20 p-5 space-y-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                        <Bug size={11} />
                        Bug report details
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            What did you expect?
                          </label>
                          <textarea
                            rows={3}
                            value={form.expected}
                            onChange={(e) => setForm({ ...form, expected: e.target.value })}
                            placeholder="The expected behavior."
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all placeholder:text-muted resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                            What happened instead?
                          </label>
                          <textarea
                            rows={3}
                            value={form.actual}
                            onChange={(e) => setForm({ ...form, actual: e.target.value })}
                            placeholder="The actual behavior."
                            className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all placeholder:text-muted resize-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                          URL where this happened
                        </label>
                        <input
                          type="text"
                          value={form.url}
                          onChange={(e) => setForm({ ...form, url: e.target.value })}
                          placeholder="https://app.selah.com/..."
                          className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/15 focus:outline-none transition-all placeholder:text-muted"
                        />
                      </div>
                    </div>
                  )}

                  {/* Conditional idea fields */}
                  {selectedType === "idea" && (
                    <div className="rounded-lg bg-accent-soft/40 border border-accent/15 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5 mb-4">
                        <Lightbulb size={11} />
                        Feature request details
                      </p>
                      <label className="block text-[12px] font-semibold text-foreground mb-1.5">
                        What problem does this solve?
                      </label>
                      <textarea
                        rows={3}
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        placeholder="Help us understand the underlying need."
                        className="w-full px-3.5 py-2.5 text-[14px] rounded-lg border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all placeholder:text-muted resize-none"
                      />
                    </div>
                  )}

                  {/* Attachment hint */}
                  <div className="rounded-lg border border-dashed border-border-strong bg-surface px-5 py-6 flex items-center justify-center gap-2 text-[12.5px] text-muted">
                    <Paperclip size={13} strokeWidth={1.8} />
                    <span>Drag files or click to attach screenshots</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-3 text-[14px] flex items-center justify-center gap-2 shadow-md shadow-accent/20"
                  >
                    <Send size={14} />
                    Submit feedback
                  </button>
                  <p className="text-[11px] text-muted text-center pt-1">
                    By submitting you agree that we may use your feedback to improve Selah.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HOW WE HANDLE FEEDBACK */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">How it works</p>
            <h2 className="text-[32px] font-bold tracking-tight mb-3">
              How we handle your feedback.
            </h2>
            <p className="text-subtle max-w-[560px] mx-auto text-[14px]">
              We take every piece of feedback seriously. Here&apos;s our commitment to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {handlingPoints.map((p) => (
              <div key={p.title} className="card p-7">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    p.color === "secondary"
                      ? "bg-secondary-soft border border-secondary/15"
                      : "bg-accent-soft border border-accent/15"
                  }`}
                >
                  <p.icon
                    size={19}
                    strokeWidth={1.8}
                    className={p.color === "secondary" ? "text-secondary" : "text-accent"}
                  />
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{p.title}</h3>
                <p className="text-[13px] text-subtle leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO REACH US */}
      <section className="py-20">
        <div className="max-w-[1080px] mx-auto px-8">
          <div className="text-center mb-10">
            <p className="label-eyebrow-secondary mb-3">Other channels</p>
            <h2 className="text-[28px] font-bold tracking-tight mb-2">
              Other ways to reach us.
            </h2>
            <p className="text-subtle text-[14px]">
              Need something more specific? Pick the right channel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:support@christianmusicgrp.com"
              className="card p-6 card-interactive group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center shrink-0">
                <Mail size={17} strokeWidth={1.8} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold mb-1">Need help right now?</p>
                <p className="text-[12px] text-subtle mb-2">Our support team can get you unblocked.</p>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent group-hover:gap-2 transition-all">
                  support@christianmusicgrp.com
                  <ArrowRight size={11} />
                </span>
              </div>
            </a>

            <Link
              href="/contact"
              className="card p-6 card-interactive group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary-soft border border-secondary/15 flex items-center justify-center shrink-0">
                <Sparkles size={17} strokeWidth={1.8} className="text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold mb-1">Speaking with sales?</p>
                <p className="text-[12px] text-subtle mb-2">Explore Label Services or Enterprise.</p>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-secondary group-hover:gap-2 transition-all">
                  Contact sales
                  <ArrowRight size={11} />
                </span>
              </div>
            </Link>

            <Link
              href="/press"
              className="card p-6 card-interactive group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft border border-accent/15 flex items-center justify-center shrink-0">
                <Megaphone size={17} strokeWidth={1.8} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold mb-1">Press inquiries?</p>
                <p className="text-[12px] text-subtle mb-2">Media kit, interviews, and resources.</p>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent group-hover:gap-2 transition-all">
                  Press room
                  <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
