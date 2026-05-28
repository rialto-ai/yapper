"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Calendar,
  Mail,
  ArrowUp,
  ChevronRight,
  Scale,
} from "lucide-react";

const toc = [
  { id: "intro", title: "Introduction" },
  { id: "definitions", title: "Definitions" },
  { id: "accounts", title: "Accounts" },
  { id: "your-content", title: "Your content" },
  { id: "our-rights", title: "Our rights to the platform" },
  { id: "distribution", title: "Distribution services" },
  { id: "royalties", title: "Royalty payments" },
  { id: "publishing", title: "Publishing partnerships" },
  { id: "christian-network", title: "Christian channel network" },
  { id: "fees", title: "Fees and billing" },
  { id: "term-termination", title: "Term and termination" },
  { id: "prohibited", title: "Prohibited uses" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing law" },
  { id: "dispute", title: "Dispute resolution" },
  { id: "general", title: "General provisions" },
  { id: "contact", title: "Contact" },
];

export default function TermsOfServicePage() {
  const [active, setActive] = useState<string>("intro");
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
          <Scale size={36} className="text-accent" strokeWidth={1.8} />
          Terms of Service
        </h1>
        <p className="text-[16px] leading-relaxed text-subtle mb-6">
          The agreement between you and Christian Music Group Distribution, Inc. governing your use of Selah.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-accent" />
            Last updated: <span className="text-foreground font-medium">January 15, 2026</span>
          </span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
        {/* TOC sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <div className="md:sticky md:top-24 md:max-h-[calc(100vh-120px)] md:overflow-y-auto pr-1">
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
              <p className="text-[12px] font-semibold text-accent mb-1.5">Legal contact</p>
              <p className="text-[12.5px] text-subtle leading-relaxed mb-2">
                Reach our legal team directly.
              </p>
              <a
                href="mailto:legal@christianmusicgrp.com"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent hover:underline"
              >
                <Mail size={12} />
                legal@christianmusicgrp.com
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <article className="col-span-12 md:col-span-9 max-w-[760px] legal-prose">
          <section id="intro">
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) govern your access to and use of the Selah platform (the &ldquo;<strong>Service</strong>&rdquo;), operated by Christian Music Group Distribution, Inc. (&ldquo;<strong>Selah</strong>&rdquo;, &ldquo;<strong>CMG</strong>&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), an Australian company with <strong>ABN 12 345 678 901</strong>, headquartered at Level 1, 60 Martin Place, Sydney NSW 2000. By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section id="definitions">
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>Account</strong> means the registered profile you use to access the Service.</li>
              <li><strong>Content</strong> means any audio, video, artwork, lyrics, chord charts, metadata, or other material you upload, generate, or transmit through the Service.</li>
              <li><strong>DSP</strong> means a digital service provider, such as a streaming or download platform.</li>
              <li><strong>PRO</strong> means a performing rights organisation, neighbouring rights society, mechanical rights organisation, or equivalent collective management organisation.</li>
              <li><strong>Catalog</strong> means the body of recordings, compositions, releases, videos, and supporting assets you have made available through the Service.</li>
              <li><strong>Royalties</strong> means revenue collected by Selah on your behalf from DSPs, PROs, Christian channels, and other distribution partners.</li>
              <li><strong>Christian Channel Network</strong> means the set of Christian-native distribution endpoints integrated with Selah, including CCLI SongSelect, PraiseCharts, Multitracks.com, Planning Center, Loop Community, and others.</li>
              <li><strong>Publisher Partner</strong> means a music publishing entity with which Selah has an integration or administration relationship.</li>
            </ul>
          </section>

          <section id="accounts">
            <h2>3. Accounts</h2>
            <p>
              To use the Service, you must create an Account and provide accurate, complete, and current information. You must be at least <strong>13 years of age</strong> (or older where required by local law) and have the legal capacity to enter into these Terms. If you create an Account on behalf of an organisation, you represent that you are authorized to bind that organisation to these Terms.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your Account. You must notify us promptly of any unauthorized use or suspected security breach.
            </p>
          </section>

          <section id="your-content">
            <h2>4. Your content</h2>
            <p>
              <strong>You retain ownership of all music, video, lyrics, artwork, and other Content you upload to Selah.</strong> You grant Selah a worldwide, non-exclusive, royalty-free license to host, store, transmit, distribute, modify (only as needed for delivery formatting), and display your Content solely for the purpose of providing the Service, including delivering your Content to DSPs and Christian channels you select.
            </p>
            <p>
              You represent and warrant that you own or have all necessary rights, licenses, consents, and permissions to upload your Content and to grant the license described above, and that your Content does not infringe any third-party rights or violate any applicable law.
            </p>
          </section>

          <section id="our-rights">
            <h2>5. Our rights to the platform</h2>
            <p>
              The Service, including its software, user interfaces, designs, trademarks, logos, and documentation, is owned by Selah or its licensors and is protected by intellectual property laws. Except for the limited right to use the Service as expressly permitted under these Terms, no rights are granted to you in the Service. You may not copy, modify, reverse engineer, scrape, or create derivative works of the Service, nor remove any proprietary notices.
            </p>
          </section>

          <section id="distribution">
            <h2>6. Distribution services</h2>
            <p>
              Selah delivers your Content to digital service providers (DSPs), Christian channels (including CCLI SongSelect, PraiseCharts, Multitracks.com, Planning Center, and others), and other partners you select. Delivery timelines depend on the DSP and may vary. <strong>Selah does not guarantee acceptance by any DSP</strong>; DSPs maintain their own content policies and may reject, remove, or restrict Content at their discretion.
            </p>
          </section>

          <section id="royalties">
            <h2>7. Royalty payments</h2>
            <p>
              Royalties earned from distribution are collected by Selah on your behalf and paid out according to your configured splits and payout schedule. Standard payouts occur <strong>quarterly</strong>. The minimum payout threshold is <strong>A$10</strong>. Currency conversion uses prevailing market rates at the time of payout. We deduct our Distribution Fee (specified in your service tier agreement) before payout.
            </p>
            <p>
              You are responsible for the accuracy of your payee details, splits, and tax information. Selah may withhold amounts as required by applicable tax law and remit them to the relevant authority.
            </p>
          </section>

          <section id="publishing">
            <h2>8. Publishing partnerships</h2>
            <p>
              Selah operates as a distribution partner and integrates with publishers, songwriter administrators, and <strong>60+ PROs/MROs globally</strong>. <strong>Selah does not act as your publisher</strong> unless explicitly agreed under a separate Publishing Administration Agreement. Your existing publishing relationships remain with your publisher of record, and nothing in these Terms alters those relationships.
            </p>
          </section>

          <section id="christian-network">
            <h2>9. Christian channel network</h2>
            <p>
              Selah&apos;s Christian channel network includes <strong>CCLI SongSelect</strong>, <strong>PraiseCharts</strong>, <strong>Multitracks.com</strong>, <strong>Planning Center</strong>, <strong>Loop Community</strong>, and other Christian-native platforms. Distribution to these channels follows the same terms as standard DSPs. CCLI registration and reporting are subject to CCLI&apos;s own terms, which you authorize Selah to facilitate on your behalf.
            </p>
          </section>

          <section id="fees">
            <h2>10. Fees and billing</h2>
            <p>
              Fees applicable to your service tier are set out in your service tier agreement or on our pricing page. Unless stated otherwise, fees are quoted in Australian dollars (AUD) and are exclusive of GST or equivalent taxes. Subscription fees are billed in advance and are <strong>non-refundable</strong> except where required by law. We may change our fees on no less than 30 days&apos; written notice; the changes will apply to renewal periods following the notice.
            </p>
          </section>

          <section id="term-termination">
            <h2>11. Term and termination</h2>
            <p>
              These Terms apply for as long as your Account is active. You may terminate at any time by closing your Account in the Service. We may suspend or terminate your access if you materially breach these Terms, if required by law, or for prolonged inactivity (with notice). Upon termination, Selah will continue to distribute your Content for a wind-down period of up to <strong>30 days</strong>, after which we will issue takedown notices to DSPs and Christian channels. Sections that by their nature should survive termination will survive.
            </p>
          </section>

          <section id="prohibited">
            <h2>12. Prohibited uses</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Upload Content you do not own or are not authorized to distribute;</li>
              <li>Infringe any copyright, trademark, publicity, or other third-party right;</li>
              <li>Upload illegal, defamatory, hateful, or sexually explicit content;</li>
              <li>Introduce malware, viruses, or other harmful code;</li>
              <li>Engage in fraud, including artificial streaming, fake engagement, or revenue manipulation;</li>
              <li>Scrape, harvest, or use automated means to extract data from the Service;</li>
              <li>Harass, threaten, or impersonate any person or entity;</li>
              <li>Interfere with or circumvent the security, integrity, or rate limits of the Service;</li>
              <li>Use the Service to compete with Selah or develop a competing product.</li>
            </ul>
          </section>

          <section id="disclaimers">
            <h2>13. Disclaimers</h2>
            <p>
              The Service is provided <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available&rdquo;</strong> without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement, except as required under the Australian Consumer Law. Without limiting the foregoing, Selah does not warrant uninterrupted, error-free, or secure operation, and <strong>DSP and Christian channel performance is not guaranteed</strong>.
            </p>
          </section>

          <section id="liability">
            <h2>14. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Selah and its affiliates, officers, employees, and contractors will not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, or any loss of profits, revenue, data, goodwill, or anticipated savings, arising out of or in connection with these Terms or the Service. Selah&apos;s total aggregate liability for any claim arising under these Terms is limited to the greater of (a) the fees paid by you to Selah in the <strong>twelve (12) months</strong> preceding the claim or (b) A$100. Nothing in these Terms excludes liability that cannot be excluded under applicable law, including under the Australian Consumer Law.
            </p>
          </section>

          <section id="indemnification">
            <h2>15. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Selah and its affiliates from and against any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your Content; (b) your breach of these Terms or any representation or warranty made by you; (c) your violation of any law or third-party right; or (d) your use of the Service.
            </p>
          </section>

          <section id="governing-law">
            <h2>16. Governing law</h2>
            <p>
              These Terms are governed by the laws of <strong>New South Wales, Australia</strong>, without regard to its conflict-of-laws principles. The parties submit to the <strong>exclusive jurisdiction of the courts of New South Wales, Sydney</strong>, in respect of any dispute arising under or in connection with these Terms.
            </p>
          </section>

          <section id="dispute">
            <h2>17. Dispute resolution</h2>
            <p>
              Before commencing formal proceedings, the parties will attempt in good faith to resolve any dispute through informal negotiation between authorized representatives. If the dispute is not resolved within 30 days, the parties will attempt mediation in Sydney through a mutually agreed mediator. If mediation is unsuccessful within a further 30 days, the dispute will be referred to and finally resolved by arbitration administered by the <strong>Australian Centre for International Commercial Arbitration (ACICA)</strong> under the ACICA Arbitration Rules. The seat of arbitration is Sydney, the language is English, and the tribunal will consist of one arbitrator.
            </p>
          </section>

          <section id="general">
            <h2>18. General provisions</h2>
            <ul>
              <li><strong>Severability.</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions remain in full effect.</li>
              <li><strong>Entire agreement.</strong> These Terms, together with your service tier agreement and any incorporated policies, constitute the entire agreement between you and Selah regarding the Service.</li>
              <li><strong>Assignment.</strong> You may not assign or transfer these Terms without our prior written consent. Selah may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Force majeure.</strong> Neither party is liable for failure or delay caused by events beyond reasonable control.</li>
              <li><strong>No waiver.</strong> Failure to enforce any right or provision is not a waiver of that right or provision.</li>
              <li><strong>Modifications.</strong> We may update these Terms from time to time. Material changes will be notified to you, and your continued use after the changes become effective constitutes acceptance.</li>
            </ul>
          </section>

          <section id="contact">
            <h2>19. Contact</h2>
            <div className="not-prose mt-4 rounded-xl border border-border bg-surface/60 p-6 space-y-3 text-[14px]">
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-muted text-[12.5px]">Legal</p>
                  <a href="mailto:legal@christianmusicgrp.com" className="text-accent font-medium hover:underline">legal@christianmusicgrp.com</a>
                </div>
              </div>
              <div className="pt-3 border-t border-border text-[13px] leading-relaxed text-subtle">
                <p className="text-muted text-[12.5px] mb-1">Postal</p>
                <p>
                  Christian Music Group Distribution, Inc.<br />
                  Attn: Legal<br />
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
