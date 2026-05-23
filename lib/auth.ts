// Single source of truth for "is Clerk configured?"
// Lets every consumer (middleware, layout, pages) behave gracefully when keys
// are missing — useful for previews and for keeping the marketing site
// available even before auth is wired up in a given environment.

export function hasClerk(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.CLERK_SECRET_KEY
  );
}
