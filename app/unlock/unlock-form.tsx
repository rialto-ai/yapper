"use client";

import { useActionState } from "react";
import { unlockAction, type UnlockState } from "./actions";

const initial: UnlockState = { error: null };

export function UnlockForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(unlockAction, initial);
  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="next" value={next} />
      <label className="block">
        <span className="sr-only">Password</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="Password"
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-[15px] outline-none transition-colors focus:border-foreground"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="btn-primary w-full disabled:opacity-60"
      >
        {pending ? "Unlocking…" : "Enter"}
      </button>
      {state.error ? (
        <p role="alert" className="text-[13px] text-negative">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
