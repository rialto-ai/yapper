import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ROLES = new Set([
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
]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { email, name, role } = (body ?? {}) as {
    email?: unknown;
    name?: unknown;
    role?: unknown;
  };

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanName =
    typeof name === "string" ? name.trim().slice(0, 120) : undefined;
  const cleanRole =
    typeof role === "string" && ROLES.has(role) ? role : "Listener / Family";

  // ---------------------------------------------------------------------------
  // INTEGRATION POINT
  // The submission is validated and ready to persist. Connect a real provider
  // here — e.g. an email service provider (Resend, Loops, Mailchimp), a CRM, or
  // a database. Until then we accept the signup and log it server-side.
  //
  //   await resend.contacts.create({ email: cleanEmail, ... })
  //   await db.insert(waitlist).values({ email: cleanEmail, name, role })
  // ---------------------------------------------------------------------------
  console.info(
    `[waitlist] signup — email=${cleanEmail} role=${cleanRole}` +
      (cleanName ? ` name=${cleanName}` : "")
  );

  return NextResponse.json({ ok: true });
}
