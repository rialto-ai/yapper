import Link from "next/link";
import { Logo } from "./logo";

const LINKS = [
  { label: "About",    href: "#" },
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Sign In",  href: "/sign-in" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-[320px]">
          <Logo size={22} />
          <p className="text-[13px] text-muted mt-3 leading-relaxed">
            Classical Christian education for the home.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-6 text-center text-[12px] text-muted">
          &copy; 2025 Paideia. Soli Deo Gloria.
        </div>
      </div>
    </footer>
  );
}
