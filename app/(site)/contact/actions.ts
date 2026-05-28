"use server";

const TO = "cameron@christianmusicgrp.com";

export type ContactState = {
  ok: boolean;
  error: string | null;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) return { ok: true, error: null };

  if (!name || !email || !message) {
    return {
      ok: false,
      error: "Please fill in your name, email, and message.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 8000) {
    return { ok: false, error: "Message is too long (max 8,000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Christian Music Group <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return {
      ok: false,
      error: `Our contact form isn't connected yet. Please email us directly at ${TO}.`,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [TO],
      reply_to: email,
      subject: subject
        ? `[CMG site] ${subject}`
        : `[CMG site] Message from ${name}`,
      text:
        `From: ${name} <${email}>\n` +
        `Subject: ${subject || "(no subject)"}\n\n` +
        `${message}\n`,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[contact] resend failed", res.status, body);
    return {
      ok: false,
      error: `Something went wrong sending your message. Please email us directly at ${TO}.`,
    };
  }

  return { ok: true, error: null };
}
