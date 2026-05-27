"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeedbackSection from "@/components/feedback-section";
import { Send, CheckCircle, Users, Globe } from "lucide-react";

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

  function handleReset() {
    setSubmitted(false);
    setName("");
    setEmail("");
    setCountry("");
    setSignLanguage("");
    setRole("");
    setMinistry("");
    setMessage("");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Title */}
        <section className="px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold text-fg sm:text-4xl">
              Help us bring faithful signed Gospel lessons to more people.
            </h1>
            <p className="mt-3 text-lg text-fg-muted">
              We welcome support from Deaf Christians, sign-language
              interpreters, churches, missionaries, video editors, translators,
              and theological reviewers.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto h-12 w-12 text-accent" />
                <h2 className="mt-6 text-2xl font-semibold text-fg">
                  Thank you for reaching out.
                </h2>
                <p className="mt-3 text-base text-fg-secondary">
                  We will respond as soon as we can.
                </p>
                <button onClick={handleReset} className="btn-secondary mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-fg"
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
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-fg"
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
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Row 2: Country & Sign Language */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1.5 block text-sm font-medium text-fg"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sign-language"
                      className="mb-1.5 block text-sm font-medium text-fg"
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
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Row 3: Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-1.5 block text-sm font-medium text-fg"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input-field"
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

                {/* Row 4: Church or ministry */}
                <div>
                  <label
                    htmlFor="ministry"
                    className="mb-1.5 block text-sm font-medium text-fg"
                  >
                    Church or ministry
                  </label>
                  <input
                    type="text"
                    id="ministry"
                    name="ministry"
                    value={ministry}
                    onChange={(e) => setMinistry(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Row 5: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-fg"
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
                    className="input-field resize-y"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-accent w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}

            {/* Info Cards */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="card">
                <div className="flex items-center gap-3">
                  <Users
                    className="h-5 w-5 text-fg-secondary"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-fg">
                    Contribute signed content
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                  If you have signed Gospel or Scripture resources that are
                  theologically reviewed and available for sharing, we would love
                  to hear from you.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-3">
                  <Globe
                    className="h-5 w-5 text-fg-secondary"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-fg">
                    Request a signing track
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
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
