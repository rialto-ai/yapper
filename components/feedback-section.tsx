"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle, Star } from "lucide-react";

const FEEDBACK_TYPES = [
  "General Feedback",
  "Content Suggestion",
  "Translation Correction",
  "Accessibility Issue",
  "Prayer Request",
  "Other",
];

export default function FeedbackSection() {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="border-t border-stone-200 bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle className="mx-auto h-10 w-10 text-green-600" />
          <h3 className="mt-4 text-xl font-semibold text-stone-900">
            Thank you for your feedback
          </h3>
          <p className="mt-2 text-stone-500">
            Your input helps us improve this platform and serve communities
            better. May God bless you.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setType("");
              setMessage("");
              setRating(0);
            }}
            className="btn-ghost mt-6"
          >
            Submit more feedback
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-stone-200 bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-200">
            <MessageSquare className="h-5 w-5 text-stone-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-stone-900">
              Share Your Feedback
            </h3>
            <p className="text-sm text-stone-500">
              Help us improve this resource for the global church.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              How would you rate this resource?
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-0.5 transition-colors"
                  aria-label={`Rate ${star} out of 5`}
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= (hoverRating || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-stone-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="feedback-type"
              className="mb-1.5 block text-sm font-medium text-stone-700"
            >
              Feedback type
            </label>
            <select
              id="feedback-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
            >
              <option value="">Select a category</option>
              {FEEDBACK_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="feedback-message"
              className="mb-1.5 block text-sm font-medium text-stone-700"
            >
              Your feedback
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              placeholder="Tell us what you think, suggest improvements, or report an issue..."
              className="w-full resize-none rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
