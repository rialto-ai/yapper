"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { Send, CheckCircle, Mail, Users, Globe } from "lucide-react";

const ROLE_OPTIONS = [
  "Deaf signer",
  "Interpreter",
  "Pastor",
  "Theological reviewer",
  "Translator",
  "Video editor",
  "Church partner",
  "Mission partner",
  "Other",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [signLanguage, setSignLanguage] = useState("");
  const [role, setRole] = useState("");
  const [ministry, setMinistry] = useState("");
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
        {/* Title */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Help us bring faithful signed Gospel lessons to more people.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              We welcome support from Deaf Christians, sign-language
              interpreters, churches, missionaries, video editors, translators,
              and theological reviewers.
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
                  Thank you for reaching out.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-500">
                  We will respond as soon as we can.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setCountry("");
                    setSignLanguage("");
                    setRole("");
                    setMinistry("");
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
                  <Send
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h2 className="text-lg font-semibold tracking-tight text-stone-900">
                    Get in Touch
                  </h2>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Name & Email -- two columns on desktop */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-stone-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-stone-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>
                  </div>

                  {/* Country & Sign Language -- two columns on desktop */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="country"
                        className="mb-1.5 block text-sm font-medium text-stone-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sign-language"
                        className="mb-1.5 block text-sm font-medium text-stone-700"
                      >
                        Sign language
                      </label>
                      <input
                        type="text"
                        id="sign-language"
                        name="sign-language"
                        value={signLanguage}
                        onChange={(e) => setSignLanguage(e.target.value)}
                        placeholder="e.g. ASL, Auslan, BSL"
                        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label
                      htmlFor="role"
                      className="mb-1.5 block text-sm font-medium text-stone-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {ROLE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Church / Ministry */}
                  <div>
                    <label
                      htmlFor="ministry"
                      className="mb-1.5 block text-sm font-medium text-stone-700"
                    >
                      Church / ministry
                    </label>
                    <input
                      type="text"
                      id="ministry"
                      name="ministry"
                      value={ministry}
                      onChange={(e) => setMinistry(e.target.value)}
                      className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-stone-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-y rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button type="submit" className="btn-primary w-full text-base">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            )}

            {/* Info Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-stone-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Users
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-stone-900">
                    Contribute signed content
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  If you have signed Gospel or Scripture resources that are
                  theologically reviewed and available for sharing, we would love
                  to hear from you.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Globe
                    className="h-5 w-5 text-stone-700"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-stone-900">
                    Request a signing track
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  We are adding new signed language tracks as reviewed resources
                  become available. Let us know which sign language your
                  community needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeedbackSection />
      </main>

      <Footer />
    </div>
  );
}
