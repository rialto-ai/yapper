import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "./logo";

const SECTIONS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Intelligence", href: "#intelligence" },
      { label: "Discover",     href: "#discover" },
      { label: "Builders",     href: "#builders" },
      { label: "Launches",     href: "#launches" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: "#" },
      { label: "Roadmap",  href: "#roadmap" },
      { label: "Contact",  href: "#" },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "Venice Ecosystem", href: "#" },
      { label: "Private AI",       href: "#" },
      { label: "Inference",        href: "#" },
      { label: "Founder Network",  href: "#network" },
    ],
  },
];

const SOCIAL = [
  { label: "X / Twitter", href: "#", icon: Twitter },
  { label: "GitHub",      href: "#", icon: Github },
  { label: "Discord",     href: "#", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.6fr_repeat(4,_1fr)] gap-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1 max-w-[320px]">
          <Logo size={22} />
          <p className="text-[13px] text-muted mt-4 leading-relaxed">
            Infrastructure and ecosystem intelligence for the Venice ecosystem
            and the emerging private AI economy.
          </p>
        </div>

        {SECTIONS.map((s) => (
          <div key={s.heading}>
            <div className="text-[12px] font-semibold text-foreground mb-3 tracking-tight">
              {s.heading}
            </div>
            <ul className="space-y-2.5">
              {s.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-muted hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-[12px] font-semibold text-foreground mb-3 tracking-tight">
            Social
          </div>
          <ul className="space-y-2.5">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-foreground transition-colors"
                >
                  <s.icon className="size-3.5" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-muted">
          <div>© 2026 Rialto AI. Powering the Private AI Economy.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
