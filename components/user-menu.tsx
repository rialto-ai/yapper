"use client";

import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { hasClerk } from "@/lib/auth";

// Renders Clerk's UserButton on the right side of the topbar when auth is
// configured. Falls back to a clear "Sign in" link if Clerk isn't set up,
// so a preview deploy still has a sane CTA.

export function UserMenu() {
  if (!hasClerk()) {
    return (
      <Link
        href="/sign-in"
        className="text-[13px] text-muted hover:text-foreground transition-colors px-2.5 h-9 inline-flex items-center"
      >
        Sign in
      </Link>
    );
  }
  return (
    <>
      <Show when="signed-out">
        <Link
          href="/sign-in"
          className="text-[13px] text-muted hover:text-foreground transition-colors px-2.5 h-9 inline-flex items-center"
        >
          Sign in
        </Link>
      </Show>
      <Show when="signed-in">
        <UserButton appearance={{ elements: { avatarBox: "size-8" } }} />
      </Show>
    </>
  );
}
