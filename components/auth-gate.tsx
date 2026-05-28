"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Lock } from "lucide-react";

const STORAGE_KEY = "selah-auth";
const PASSWORD = "selah23!";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setError("You must accept the confidentiality terms to continue.");
      return;
    }
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
      setError(null);
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  if (checking) return null;

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-soft/30 via-white to-white flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgb(67 56 202) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[440px] px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <h1 className="text-[22px] font-semibold tracking-tight">Selah</h1>
          <p className="text-[12px] text-muted mt-1">by Christian Music Group</p>
        </div>

        <div className="card p-7 shadow-xl shadow-accent/5">
          <div className="flex items-center gap-2 mb-1">
            <Lock size={14} className="text-accent" strokeWidth={2} />
            <h2 className="text-[15px] font-semibold">Confidential preview</h2>
          </div>
          <p className="text-[12px] text-muted mb-5 leading-relaxed">
            This is an internal demo environment for illustrative purposes only.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-subtle mb-1.5">
                Access password
              </label>
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(null);
                }}
                placeholder="Enter password"
                autoFocus
                className={`w-full h-[40px] px-3 rounded-md border bg-white text-[14px] placeholder:text-muted focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? "border-negative focus:border-negative focus:ring-negative/15"
                    : "border-border focus:border-accent focus:ring-accent/15"
                }`}
              />
            </div>

            <label className="flex items-start gap-2.5 p-3 rounded-md border border-border bg-surface hover:border-border-strong transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  setError(null);
                }}
                className="mt-0.5 w-4 h-4 rounded border-border text-accent focus:ring-accent/20"
              />
              <span className="text-[12px] text-subtle leading-relaxed">
                I acknowledge this site is an{" "}
                <span className="font-semibold text-foreground">internal demonstration</span>{" "}
                for development, build, and illustrative purposes only, contains{" "}
                <span className="font-semibold text-foreground">confidential information</span>,
                and agree not to share, distribute, or screenshot its contents outside of Christian
                Music Group&apos;s authorised reviewers.
              </span>
            </label>

            {error && (
              <p className="text-[12px] text-negative">{error}</p>
            )}

            <button
              type="submit"
              className="btn-primary w-full h-[42px] text-[14px] shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/20 transition-shadow flex items-center justify-center gap-2"
            >
              <ShieldCheck size={14} />
              Continue to demo
            </button>
          </form>
        </div>

        <p className="text-[11px] text-muted text-center mt-6">
          © 2026 Christian Music Group Distribution, Inc. · Sydney, Australia
        </p>
      </div>
    </div>
  );
}
