import Link from "next/link";
import { Container } from "@/components/container";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-[15px] font-medium tracking-tight">
              {site.name}
            </div>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-subtle">
              {site.description}
            </p>
            <address className="mt-6 not-italic text-[13px] leading-relaxed text-subtle">
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.locality}, {site.address.region}{" "}
              {site.address.postalCode}
              <br />
              {site.address.country}
            </address>
            <div className="mt-3 text-[13px] text-subtle">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <div className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">
                {heading}
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-subtle hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-6 text-[12.5px] text-muted md:flex-row md:items-start md:justify-between">
          <div className="space-y-0.5">
            <div>© {year} {site.legal.entity}. All rights reserved.</div>
            <div>ACN {site.legal.acn}</div>
            <div>
              <a
                href={`https://${site.legal.websiteLabel}`}
                className="hover:text-foreground"
              >
                {site.legal.websiteLabel}
              </a>
            </div>
          </div>
          <div className="md:text-right">{site.tagline}</div>
        </div>
      </Container>
    </footer>
  );
}
