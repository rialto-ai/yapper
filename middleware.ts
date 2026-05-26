// Clerk middleware. Protects /app/* and the per-account API.
// Marketing site, auth screens, cron endpoints, and Next internals pass through.
//
// Requires NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to be set.
// In a Clerk-less preview environment, the middleware passes everything through
// so the marketing site stays viewable; Clerk's own guards inside server pages
// will surface a clear "Clerk not configured" error if a protected route is hit.

import { NextResponse, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher(["/dashboard(.*)", "/learn(.*)", "/catechism(.*)"]);

const clerkConfigured = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.CLERK_SECRET_KEY
);

const handler = clerkConfigured
  ? clerkMiddleware(async (auth, req) => {
      if (isProtected(req)) await auth.protect();
    })
  : (_req: NextRequest) => NextResponse.next();

export default handler;

export const config = {
  matcher: [
    // Run on every route except Next internals + static files.
    "/((?!_next|favicon\\.svg|.*\\..*).*)",
  ],
};
