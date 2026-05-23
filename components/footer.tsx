import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";

const SECTIONS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features",      href: "#" },
      { label: "Pricing",       href: "#" },
      { label: "Leaderboards",  href: "/leaderboards" },
      { label: "Narratives",    href: "/narratives" },
      { label: "API",           href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",     href: "#" },
      { label: "Careers",   href: "#" },
      { label: "Customers", href: "#" },
      { label: "Brand",     href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Changelog",     href: "#" },
      { label: "Blog",          href: "#" },
      { label: "Status",        href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy",        href: "#" },
      { label: "Terms",          href: "#" },
      { label: "Security",       href: "#" },
      { label: "Cookie settings",href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-8">
      <div className="px-8 py-12 grid grid-cols-1 lg:grid-cols-[1.4fr_repeat(4,_1fr)] gap-8">
        <div className="max-w-[280px]">
          <Logo size={22} />
          <p className="text-[13px] text-muted mt-3 leading-relaxed">
            Real-time intelligence and influence analytics for the open AI ecosystem.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <SocialLink href="#" icon={Twitter} label="Twitter" />
            <SocialLink href="#" icon={Github}  label="GitHub" />
            <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
          </div>
        </div>

        {SECTIONS.map((s) => (
          <div key={s.heading}>
            <div className="text-[12px] font-semibold text-foreground mb-3">{s.heading}</div>
            <ul className="space-y-2">
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
      </div>

      <div className="px-8 py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-muted">
        <div>© {new Date().getFullYear()} Rialto AI, Inc. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Status</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href, icon: Icon, label,
}: { href: string; icon: React.ElementType; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="size-8 grid place-items-center rounded-md border border-border bg-card text-muted hover:text-foreground hover:border-border-strong transition-colors"
    >
      <Icon className="size-4" />
    </Link>
  );
}
