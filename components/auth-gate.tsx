"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "selah-auth";
const PASSWORD = "selah23!";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
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
      <div className="relative w-full max-w-[380px] px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <h1 className="text-[22px] font-semibold tracking-tight">Selah</h1>
          <p className="text-[12px] text-muted mt-1">by Christian Music Group</p>
        </div>

        <div className="card p-6 shadow-xl shadow-accent/5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-subtle mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                autoFocus
                className={`w-full h-[40px] px-3 rounded-md border bg-white text-[14px] placeholder:text-muted focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? "border-negative focus:border-negative focus:ring-negative/15"
                    : "border-border focus:border-accent focus:ring-accent/15"
                }`}
              />
              {error && (
                <p className="text-[12px] text-negative mt-1.5">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary w-full h-[40px] text-[14px] shadow-md shadow-accent/15 hover:shadow-lg hover:shadow-accent/20 transition-shadow"
            >
              Continue
            </button>
          </form>
        </div>

        <p className="text-[11px] text-muted text-center mt-6">
          Prototype Demo Environment
        </p>
      </div>
    </div>
  );
}
