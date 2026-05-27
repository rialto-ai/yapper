import Link from "next/link";
import { Cross } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/sign-language", label: "Sign Language" },
  { href: "/scripture", label: "Scripture" },
  { href: "/printable", label: "Printable" },
  { href: "/teach", label: "Teach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-stone-200 bg-stone-50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Cross className="h-5 w-5 text-stone-500" strokeWidth={1.5} />
              <span className="text-base font-semibold tracking-tight text-black">
                The Gospel in Sign
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-stone-500">
              Sharing the Gospel of Jesus Christ through sign language, Scripture,
              and accessible teaching resources.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-stone-200 pt-6">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
            <p className="text-xs text-stone-400">
              &copy; {year} The Gospel in Sign. All rights reserved.
            </p>
            <p className="text-xs italic text-stone-400">
              Built for the glory of God
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
