"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = { ok: false, error: null };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="eyebrow">Message sent</div>
        <h3 className="mt-3 text-xl font-medium tracking-tight">
          Thanks — we'll be in touch.
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-subtle">
          We've received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <Field label="Subject" name="subject" autoComplete="off" />
      <label className="block">
        <span className="mb-1.5 block text-[12.5px] font-medium uppercase tracking-[0.12em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-[15px] outline-none transition-colors focus:border-foreground"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.error ? (
          <p role="alert" className="text-[13px] text-negative">
            {state.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-medium uppercase tracking-[0.12em] text-muted">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-[15px] outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}
