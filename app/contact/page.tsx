"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { useLocale } from "@/lib/locale-context";
import { Send, Mail, MessageSquare, CheckCircle } from "lucide-react";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Request a Language",
  "Report an Issue",
  "Prayer Request",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title Section */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="animate-fade-in rounded-xl border border-stone-200 bg-white p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
                  <CheckCircle
                    className="h-7 w-7 text-stone-700"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-900">
                  Thank you for your message
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-500">
                  We have received your message and will get back to you as soon
                  as possible. May the Lord bless you.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="btn-secondary mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-stone-200 bg-white p-8 sm:p-10"
              >
                <div className="flex items-center gap-3 border-b border-stone-100 pb-6">
                  <MessageSquare
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h2 className="text-lg font-semibold tracking-tight text-stone-900">
                    Send us a message
                  </h2>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700"
                    >
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-stone-200 py-3 px-4 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-lg border border-stone-200 py-3 px-4 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-stone-200 py-3 px-4 text-base text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700"
                    >
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="mt-1.5 w-full resize-y rounded-lg border border-stone-200 py-3 px-4 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button type="submit" className="btn-primary w-full text-base">
                    <Send className="h-4 w-4" />
                    {t.contact.send}
                  </button>
                </div>
              </form>
            )}

            {/* Contact Info */}
            <div className="mt-12 space-y-8">
              <div className="rounded-xl border border-stone-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Mail
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-stone-900">
                    You can also reach us at
                  </h3>
                </div>
                <p className="mt-2 text-base text-stone-600">
                  <a
                    href="mailto:contact@thegospelinsign.org"
                    className="font-medium text-stone-900 underline underline-offset-4 transition-colors hover:text-stone-700"
                  >
                    contact@thegospelinsign.org
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <MessageSquare
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-stone-900">
                    Request a Sign Language
                  </h3>
                </div>
                <p className="mt-2 text-base leading-relaxed text-stone-600">
                  We are working to add more sign languages to our platform. If
                  your sign language is not yet available, please use the contact
                  form above and select &ldquo;Request a Language&rdquo; as the
                  subject. Include the name of the sign language and any
                  information about your community. We will do our best to add
                  your language as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FeedbackSection />
      <Footer />
    </div>
  );
}
