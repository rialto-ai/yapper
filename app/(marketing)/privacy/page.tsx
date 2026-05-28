"use client";

import { useEffect, useState } from "react";
import {
  Shield,
  Calendar,
  Mail,
  ArrowUp,
  ChevronRight,
  FileText,
} from "lucide-react";

const toc = [
  { id: "overview", title: "Overview" },
  { id: "info-collect", title: "Information we collect" },
  { id: "how-use", title: "How we use information" },
  { id: "sharing", title: "How we share information" },
  { id: "partners", title: "Partner ecosystem" },
  { id: "cookies", title: "Cookies and tracking" },
  { id: "security", title: "Security" },
  { id: "rights", title: "Your rights" },
  { id: "retention", title: "Data retention" },
  { id: "international", title: "International transfers" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState<string>("overview");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: [0, 1] }
    );

    toc.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1240px] mx-auto px-8 py-12">
      {/* Sample disclaimer */}
      <div className="mb-8 rounded-lg border border-secondary/15 bg-secondary-soft/60 px-4 py-3 text-[12.5px] text-foreground/80 flex items-start gap-2.5">
        <FileText size={14} className="mt-0.5 text-secondary shrink-0" />
        <span>
          This is a sample legal document for demonstration purposes. It is not legal advice and should not be relied upon as such.
        </span>
      </div>

      {/* Header */}
      <header className="mb-12 max-w-[820px]">
        <p className="label-eyebrow-secondary mb-3">Legal</p>
        <h1 className="text-[44px] leading-[1.1] font-bold tracking-tight text-foreground mb-4 flex items-center gap-3">
          <Shield size={36} className="text-accent" strokeWidth={1.8} />
          Privacy Policy
        </h1>
        <p className="text-[16px] leading-relaxed text-subtle mb-6">
          How Christian Music Group Distribution, Inc. collects, uses, and protects information about artists, labels, publishers, ministries, and visitors.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-accent" />
            Last updated: <span className="text-foreground font-medium">January 15, 2026</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-secondary" />
            Effective: <span className="text-foreground font-medium">January 15, 2026</span>
          </span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
        {/* TOC sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <div className="md:sticky md:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-3 px-2">
              On this page
            </p>
            <nav className="space-y-0.5">
              {toc.map((item) => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`group w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[13px] font-medium text-left transition-all ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-subtle hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    <ChevronRight
                      size={12}
                      className={`shrink-0 transition-transform ${
                        isActive ? "text-accent translate-x-0.5" : "text-muted/70"
                      }`}
                    />
                    <span className="truncate">{item.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 mx-2 rounded-lg border border-accent/15 bg-accent-soft/60 p-4">
              <p className="text-[12px] font-semibold text-accent mb-1.5">Questions?</p>
              <p className="text-[12.5px] text-subtle leading-relaxed mb-2">
                Reach our privacy team directly.
              </p>
              <a
                href="mailto:privacy@cmg.com"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent hover:underline"
              >
                <Mail size={12} />
                privacy@cmg.com
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <article className="col-span-12 md:col-span-9 max-w-[760px] legal-prose">
          <section id="overview">
            <h2>1. Overview</h2>
            <p>
              Christian Music Group Distribution, Inc. (&ldquo;Selah&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This Privacy Policy describes how we collect, use, share, and protect information when you visit our websites, use the Selah platform, or interact with our distribution services. We operate from our Sydney headquarters and regional offices across Asia-Pacific, and comply with the <strong>Australian Privacy Act 1988</strong>, <strong>GDPR</strong>, and equivalent regulations across the markets we serve.
            </p>
          </section>

          <section id="info-collect">
            <h2>2. Information we collect</h2>
            <p>We collect information in three main ways:</p>

            <h3>You provide it directly</h3>
            <p>
              Account information (name, email, organization, role), artist or ministry profiles, catalog metadata, payment and banking details for royalty payouts, tax documentation, and any content you upload to the platform including audio masters, video, artwork, lyrics, and chord charts.
            </p>

            <h3>Automatically through your use</h3>
            <p>
              Usage analytics, log data, device information, IP address, browser type, referring URLs, pages visited, and product interactions. This helps us improve the platform.
            </p>

            <h3>From third parties</h3>
            <p>
              Information from DSP partners about your catalog performance (streams, revenue), data from rights organizations (<strong>ASCAP</strong>, <strong>BMI</strong>, <strong>APRA AMCOS</strong>, <strong>PRS</strong>, <strong>GEMA</strong>, <strong>SACEM</strong>, <strong>CCLI</strong>, <strong>MLC</strong>, <strong>HFA</strong>, and other PROs we integrate with), and information from public business records when verifying organizational customers.
            </p>
          </section>

          <section id="how-use">
            <h2>3. How we use information</h2>
            <p>We use the information we collect to:</p>
            <ol>
              <li>Provide, operate, and maintain the Selah platform and your account.</li>
              <li>Deliver your music and associated assets to the DSPs and Christian channels you select.</li>
              <li>Process royalty calculations, splits, and payouts to participants and payees.</li>
              <li>Generate analytics, reporting, and insights about your catalog performance.</li>
              <li>Communicate with you about your account, service updates, and operational notices.</li>
              <li>Send marketing communications about products, features, and offerings relevant to your role (you may opt out at any time).</li>
              <li>Comply with legal, tax, accounting, and regulatory obligations across the territories we operate in.</li>
              <li>Detect, prevent, and respond to fraud, abuse, security incidents, and infringement.</li>
              <li>Improve the Service, train and evaluate features, and develop new products.</li>
              <li>Enforce our Terms of Service and other applicable agreements.</li>
            </ol>
          </section>

          <section id="sharing">
            <h2>4. How we share information</h2>
            <p>We share information with:</p>
            <ul>
              <li><strong>DSPs and Christian channels</strong> where you choose to distribute your music;</li>
              <li><strong>PROs and rights organizations</strong> to administer royalties;</li>
              <li><strong>Payment processors</strong> (Stripe, Wise, banks) to facilitate payouts and currency conversion;</li>
              <li><strong>Our regional offices and authorized contractors</strong> who help operate the platform;</li>
              <li><strong>Successors</strong> if Selah is acquired, merged, or undergoes a reorganization;</li>
              <li><strong>Legal authorities</strong> when required by law, subpoena, or to protect rights and safety.</li>
            </ul>
            <p>
              <strong>We do not sell personal information.</strong>
            </p>
          </section>

          <section id="partners">
            <h2>5. Partner ecosystem</h2>
            <p>
              Selah operates as a distribution platform that integrates with publishers, rights organizations, and DSPs. <strong>We do not act as your publisher</strong>; existing publishing relationships remain between you and your publisher. When you choose to distribute through Selah, you authorize us to share necessary information with the DSPs and Christian channels you select. We integrate with <strong>60+ PROs and rights bodies</strong> globally and may share royalty-related data with these organizations on your behalf.
            </p>
          </section>

          <section id="cookies">
            <h2>6. Cookies and tracking</h2>
            <p>
              We use cookies and similar tracking technologies to provide and improve the Service. These fall into three categories:
            </p>
            <ul>
              <li><strong>Essential cookies</strong> are required for the Service to function (authentication, session management, security).</li>
              <li><strong>Analytics cookies</strong> help us understand how the Service is used so we can improve it.</li>
              <li><strong>Marketing cookies</strong> support measurement and attribution for our advertising activity.</li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings. Disabling essential cookies will affect the Service&apos;s functionality.
            </p>
          </section>

          <section id="security">
            <h2>7. Security</h2>
            <p>
              We implement industry-standard security measures including <strong>encryption at rest and in transit</strong>, access controls, regular security audits, and <strong>SOC 2 Type II compliance</strong>. Our infrastructure runs on AWS and Cloudflare with security monitoring across all regions where we operate. No system is perfectly secure, however, and we encourage you to use strong, unique credentials and enable multi-factor authentication where available.
            </p>
          </section>

          <section id="rights">
            <h2>8. Your rights</h2>
            <p>Depending on your region, you may have the following rights:</p>
            <ul>
              <li><strong>Access</strong> the personal information we hold about you.</li>
              <li><strong>Correction</strong> of inaccurate or incomplete information.</li>
              <li><strong>Deletion</strong> of your personal information, subject to legal retention requirements.</li>
              <li><strong>Portability</strong> of your information in a structured, machine-readable format.</li>
              <li><strong>Objection</strong> to certain processing, including direct marketing.</li>
              <li><strong>Withdrawal of consent</strong> where processing is based on consent.</li>
            </ul>
            <p>
              These rights are available under the <strong>Australian Privacy Act 1988 (Cth)</strong>, the <strong>GDPR</strong> (for European Economic Area, UK, and Switzerland), the <strong>California Consumer Privacy Act (CCPA)</strong>, Singapore&apos;s <strong>PDPA</strong>, Japan&apos;s <strong>APPI</strong>, and equivalent regimes elsewhere. To exercise any right, contact <a href="mailto:privacy@cmg.com">privacy@cmg.com</a>. You also have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) or your local supervisory authority.
            </p>
          </section>

          <section id="retention">
            <h2>9. Data retention</h2>
            <p>
              We retain information as long as your account is active or as needed to provide services, comply with legal obligations (including <strong>tax records required for 7 years under Australian law</strong>), resolve disputes, and enforce agreements. When information is no longer required, we delete or anonymize it in accordance with our retention schedules.
            </p>
          </section>

          <section id="international">
            <h2>10. International transfers</h2>
            <p>
              Selah operates globally with offices in <strong>Australia, Singapore, Japan, South Korea, Hong Kong SAR, the Philippines, Indonesia, and India</strong>. Your data may be transferred between these regions in the course of providing the Service. We use <strong>Standard Contractual Clauses</strong>, the ASEAN Model Contractual Clauses, and equivalent mechanisms to ensure adequate protection for cross-border transfers.
            </p>
          </section>

          <section id="children">
            <h2>11. Children</h2>
            <p>
              Selah is not intended for users under <strong>13 years of age</strong> (under 16 in EU territories). We do not knowingly collect information from children. Artist accounts may be administered by parents or guardians on behalf of minor artists with our prior approval and the appropriate documentation.
            </p>
          </section>

          <section id="changes">
            <h2>12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. If changes are material, we will provide more prominent notice (such as an email or in-product notification). Your continued use of the Service after the changes become effective constitutes acceptance of the updated policy.
            </p>
          </section>

          <section id="contact">
            <h2>13. Contact us</h2>
            <div className="not-prose mt-4 rounded-xl border border-border bg-surface/60 p-6 space-y-3 text-[14px]">
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-muted text-[12.5px]">Privacy questions</p>
                  <a href="mailto:privacy@cmg.com" className="text-accent font-medium hover:underline">privacy@cmg.com</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-muted text-[12.5px]">Data Protection Officer</p>
                  <a href="mailto:dpo@cmg.com" className="text-accent font-medium hover:underline">dpo@cmg.com</a>
                </div>
              </div>
              <div className="pt-3 border-t border-border text-[13px] leading-relaxed text-subtle">
                <p className="text-muted text-[12.5px] mb-1">Postal</p>
                <p>
                  Christian Music Group Distribution, Inc.<br />
                  Attn: Privacy Officer<br />
                  Level 1, 60 Martin Place<br />
                  Sydney NSW 2000, Australia
                </p>
                <p className="mt-2 text-[12.5px] text-muted">ABN: <span className="text-foreground font-medium">12 345 678 901</span></p>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 h-11 w-11 rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-hover transition-all flex items-center justify-center z-50"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <style jsx global>{`
        .legal-prose {
          font-size: 14.5px;
          line-height: 1.75;
          color: rgb(var(--subtle));
        }
        .legal-prose section {
          scroll-margin-top: 96px;
          padding-top: 8px;
          padding-bottom: 28px;
        }
        .legal-prose section + section {
          border-top: 1px solid rgb(var(--border));
          margin-top: 28px;
          padding-top: 36px;
        }
        .legal-prose h2 {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: rgb(var(--foreground));
          margin-bottom: 16px;
        }
        .legal-prose h3 {
          font-size: 15.5px;
          font-weight: 600;
          color: rgb(var(--foreground));
          margin-top: 22px;
          margin-bottom: 8px;
        }
        .legal-prose p {
          margin-bottom: 14px;
        }
        .legal-prose ul,
        .legal-prose ol {
          margin: 12px 0 18px;
          padding-left: 22px;
        }
        .legal-prose li {
          margin-bottom: 6px;
        }
        .legal-prose ul li {
          list-style: disc;
        }
        .legal-prose ol li {
          list-style: decimal;
        }
        .legal-prose a {
          color: rgb(var(--accent));
          font-weight: 500;
        }
        .legal-prose a:hover {
          text-decoration: underline;
        }
        .legal-prose strong {
          color: rgb(var(--foreground));
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
