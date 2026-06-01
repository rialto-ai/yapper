"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const ROLES = [
  "Listener / Family",
  "Artist",
  "Worship leader",
  "Church",
  "Ministry",
  "Publisher",
  "Podcaster",
  "Audiobook partner",
  "Theologian",
  "Researcher",
  "Technologist",
  "Foundation",
  "Global city representative",
];

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, role }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="mx-auto max-w-lg rounded-2xl border border-white/12 bg-white/[0.04] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink">
          <Check size={22} strokeWidth={2.4} />
        </span>
        <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-white">
          You&rsquo;re on the list.
        </h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#B9B6AF]">
          Thank you for joining the Rejoice waitlist as{" "}
          <span className="text-white">{role}</span>. We&rsquo;ll be in touch as
          we approach our Q4 2026 launch.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setEmail("");
            setName("");
          }}
          className="mt-6 text-[13.5px] font-medium text-gold-soft hover:underline"
        >
          Add another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-2xl border border-white/12 bg-white/[0.04] p-6 text-left sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className="mb-1.5 block text-[13px] font-medium text-[#CFCBC3]">
            Name <span className="text-[#7E7A72]">(optional)</span>
          </label>
          <input
            id="wl-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="h-11 w-full rounded-[10px] border border-white/15 bg-white/[0.04] px-3.5 text-[14.5px] text-white placeholder:text-[#7E7A72] focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft/40"
          />
        </div>
        <div>
          <label htmlFor="wl-role" className="mb-1.5 block text-[13px] font-medium text-[#CFCBC3]">
            I&rsquo;m joining as
          </label>
          <select
            id="wl-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="h-11 w-full rounded-[10px] border border-white/15 bg-white/[0.04] px-3 text-[14.5px] text-white focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft/40"
          >
            {ROLES.map((r) => (
              <option key={r} value={r} className="bg-ink text-white">
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="wl-email" className="mb-1.5 block text-[13px] font-medium text-[#CFCBC3]">
          Email
        </label>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <input
            id="wl-email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={status === "error"}
            className="h-11 flex-1 rounded-[10px] border border-white/15 bg-white/[0.04] px-3.5 text-[14.5px] text-white placeholder:text-[#7E7A72] focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft/40"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-white px-5 text-[14.5px] font-medium text-ink transition-colors hover:bg-[#EDEAE3] disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Joining
              </>
            ) : (
              <>
                Join the Waitlist
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      <p className="mt-3 min-h-[18px] text-[13px]" aria-live="polite">
        {status === "error" ? (
          <span className="text-[#E0A89A]">{message}</span>
        ) : (
          <span className="text-[#8C887F]">
            No spam. We&rsquo;ll only email you about the Rejoice launch.
          </span>
        )}
      </p>
    </form>
  );
}
