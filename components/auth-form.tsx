"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Logo } from "./logo";

type Mode = "sign-in" | "sign-up";

export function AuthForm({ mode }: { mode: Mode }) {
  const isSignUp = mode === "sign-up";
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-7">
      <div className="lg:hidden flex justify-center mb-2">
        <Logo size={26} />
      </div>

      <header>
        <h1 className="text-[26px] font-semibold tracking-tight text-foreground">
          {isSignUp ? "Create your account" : "Sign in to Rialto"}
        </h1>
        <p className="text-[13.5px] text-muted mt-1.5">
          {isSignUp
            ? "Free forever for individuals. No credit card required."
            : "Welcome back. Pick up where you left off."}
        </p>
      </header>

      <div className="space-y-2.5">
        <ProviderButton provider="google" />
        <ProviderButton provider="x" />
        <ProviderButton provider="wallet" />
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[11.5px] font-medium text-muted uppercase tracking-wider">
            or with email
          </span>
        </div>
      </div>

      <form
        className="space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => {
            window.location.href = "/app";
          }, 400);
        }}
      >
        {isSignUp && (
          <Field label="Full name">
            <input className="input" placeholder="Erik Voorhees" required />
          </Field>
        )}
        <Field label="Work email">
          <div className="relative">
            <Mail className="size-4 text-subtle absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="input pl-9"
            />
          </div>
        </Field>
        <Field
          label="Password"
          hint={!isSignUp ? <Link href="#" className="text-accent hover:underline">Forgot?</Link> : undefined}
        >
          <div className="relative">
            <Lock className="size-4 text-subtle absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="password"
              required
              minLength={8}
              placeholder={isSignUp ? "At least 8 characters" : "Enter password"}
              className="input pl-9"
            />
          </div>
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary h-11 w-full text-[14px] font-medium flex items-center justify-center gap-1.5 disabled:opacity-60"
        >
          {loading ? "Signing you in…" : (
            <>{isSignUp ? "Create account" : "Sign in"} <ArrowRight className="size-4" /></>
          )}
        </button>
      </form>

      <div className="text-center text-[12.5px] text-muted">
        {isSignUp ? (
          <>Already have an account? <Link href="/sign-in" className="text-accent font-medium hover:underline">Sign in</Link></>
        ) : (
          <>New to Rialto? <Link href="/sign-up" className="text-accent font-medium hover:underline">Create an account</Link></>
        )}
      </div>

      {isSignUp && (
        <p className="text-center text-[11.5px] text-subtle leading-relaxed">
          By creating an account, you agree to our{" "}
          <Link href="#" className="underline">Terms</Link> and{" "}
          <Link href="#" className="underline">Privacy Policy</Link>.
        </p>
      )}

      <style jsx>{`
        :global(.input) {
          width: 100%;
          height: 40px;
          border-radius: 8px;
          border: 1px solid rgb(var(--border));
          background: rgb(var(--card));
          padding: 0 12px;
          font-size: 13.5px;
          color: rgb(var(--foreground));
          outline: none;
          transition: border-color 120ms ease, box-shadow 120ms ease;
        }
        :global(.input::placeholder) { color: rgb(var(--subtle)); }
        :global(.input:focus) {
          border-color: rgb(var(--accent));
          box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label, hint, children,
}: { label: string; hint?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[12px] font-medium text-foreground">{label}</span>
        {hint && <span className="text-[11.5px]">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

function ProviderButton({ provider }: { provider: "google" | "x" | "wallet" }) {
  const meta = {
    google: { label: "Continue with Google",  icon: <GoogleIcon /> },
    x:      { label: "Continue with X",       icon: <XIcon /> },
    wallet: { label: "Continue with wallet",  icon: <WalletIcon /> },
  }[provider];

  return (
    <button
      type="button"
      className="btn-ghost w-full h-11 text-[13.5px] font-medium flex items-center justify-center gap-2.5"
    >
      {meta.icon}
      {meta.label}
    </button>
  );
}

/* — provider marks — */

function GoogleIcon() {
  return (
    <svg className="size-4" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M16.5 9.2c0-.6-.05-1.2-.16-1.7H9v3.2h4.2c-.18 1-.74 1.84-1.57 2.4v2h2.54c1.5-1.38 2.33-3.4 2.33-5.9z"/>
      <path fill="#34A853" d="M9 17c2.13 0 3.92-.7 5.22-1.9l-2.54-2c-.7.47-1.6.75-2.68.75-2.06 0-3.8-1.4-4.43-3.27H1.96v2.05A8 8 0 0 0 9 17z"/>
      <path fill="#FBBC05" d="M4.57 10.58a4.8 4.8 0 0 1 0-3.06V5.47H1.96a8 8 0 0 0 0 7.16l2.61-2.05z"/>
      <path fill="#EA4335" d="M9 4.66c1.16 0 2.2.4 3.02 1.18l2.26-2.26C12.92 2.34 11.14 1.6 9 1.6A8 8 0 0 0 1.96 5.47L4.57 7.5C5.2 5.65 6.94 4.66 9 4.66z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="size-4" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.36 1.5H15.7l-5.1 5.83L16.6 16.5h-4.7l-3.68-4.83-4.21 4.83H1.66l5.45-6.24L1.4 1.5h4.81l3.32 4.41L13.36 1.5zM12.54 15.1h1.3L5.52 2.82H4.13L12.54 15.1z"/>
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg className="size-4" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="4" width="15" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 9.5 H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="11.6" cy="9.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
