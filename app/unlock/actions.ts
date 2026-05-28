"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "cmg-auth";
const TOKEN = "1";

export type UnlockState = { error: string | null };

export async function unlockAction(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const password = String(formData.get("password") ?? "");
  const nextRaw = String(formData.get("next") ?? "/");
  const next = nextRaw.startsWith("/") && !nextRaw.startsWith("//") ? nextRaw : "/";

  const expected = process.env.SITE_PASSWORD ?? "christianmusicgrp23!";

  if (password !== expected) {
    return { error: "Incorrect password. Please try again." };
  }

  const jar = await cookies();
  jar.set(COOKIE, TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(next);
}
