import { Logo } from "@/components/wordmark";

const linkGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "Platform", href: "/#platform" },
      { label: "Artists", href: "/#artists" },
      { label: "Discovery", href: "/#discovery" },
      { label: "Global", href: "/#global" },
    ],
  },
  {
    heading: "Institution",
    links: [
      { label: "Research", href: "/#research" },
      { label: "Integrity", href: "/#integrity" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Standards",
    links: [
      { label: "Sponsorship Standards", href: "/sponsorship-standards" },
      { label: "Disclosure Standards", href: "/disclosure-standards" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[18px] font-semibold tracking-tightest">Rejoice</span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-subtle">
              Rejoice — the audio platform for the global Church.
            </p>
            <p className="mt-3 text-[13px] text-muted">Launching Q4 2026.</p>
            <a
              href="mailto:hello@rejoice.org"
              className="mt-4 inline-block text-[13px] font-medium text-accent hover:underline"
            >
              hello@rejoice.org
            </a>
          </div>

          {linkGroups.map((g) => (
            <div key={g.heading}>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                {g.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-subtle transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Rejoice. A mission-governed Christian
            media initiative.
          </p>
          <p className="text-[13px] text-muted">
            The Church is global. Christian audio infrastructure should be too.
          </p>
        </div>
      </div>
    </footer>
  );
}
