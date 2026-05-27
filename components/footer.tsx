import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Watch", href: "/watch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-fg text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">Gospel in Sign</p>
            <p className="mt-2 text-sm text-white/70">
              Making the Gospel of Jesus Christ clear and accessible through
              signed video, Scripture, written teaching, and printable
              resources.
            </p>
          </div>

          <nav className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-xs text-white/50">
            Partner resources are displayed or linked with permission.
          </p>
          <p className="mt-4 text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gospel in Sign. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
