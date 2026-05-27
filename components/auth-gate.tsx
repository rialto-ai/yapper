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
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-[360px] px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4">
            <span className="text-white text-lg font-bold">S</span>
          </div>
          <h1 className="text-[20px] font-semibold tracking-tight">Selah</h1>
          <p className="text-[12px] text-muted mt-0.5">by Christian Music Group</p>
        </div>

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
              className="w-full h-[40px] px-3 rounded-md border border-border bg-white text-[14px] placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
            />
            {error && (
              <p className="text-[12px] text-[#999] mt-1.5">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn-primary w-full h-[40px] text-[14px]"
          >
            Continue
          </button>
        </form>

        <p className="text-[11px] text-muted text-center mt-8">
          Prototype Demo
        </p>
      </div>
    </div>
  );
}
