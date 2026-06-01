import { ArrowRight } from "lucide-react";

const partnerCategories = [
  "Artists",
  "Worship leaders",
  "Churches",
  "Ministries",
  "Publishers",
  "Podcasters",
  "Audiobook partners",
  "Theologians",
  "Researchers",
  "Technologists",
  "Foundations",
  "Global city representatives",
];

export function CTASection() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-20 bg-ink px-6 py-24 text-[#E8E6E1] sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-prose text-center">
          <p className="eyebrow mb-3">Launching Q4 2026</p>
          <h2 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tightest text-white sm:text-[44px]">
            Launching Q4 2026.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#B9B6AF]">
            We are building with artists, churches, ministries, publishers,
            technologists, theologians, and families who care about the future
            of Christian audio.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-[#EDEAE3]"
            >
              Join the Waitlist
              <ArrowRight size={16} />
            </a>
            <a
              id="partners"
              href="#partners"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/20 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.07]"
            >
              Partner with Rejoice
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8C887F]">
            We are partnering with
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {partnerCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-[#CFCBC3]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
