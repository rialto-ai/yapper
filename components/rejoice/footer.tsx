const COLUMNS = [
  {
    heading: "Research",
    links: [
      "Gospel Media Infrastructure",
      "Artificial Intelligence and Agents",
      "Protocol Systems",
      "Global Mission and Translation",
      "Christian Institutions and Technology",
    ],
  },
  {
    heading: "Foundation",
    links: ["Mission", "Global Network", "Operating Principles", "Partnerships", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#2563EB] to-[#6D28D9]">
                <span className="text-[13px] font-bold text-white">R</span>
              </span>
              <span className="text-[16px] font-semibold tracking-[-0.01em] text-[#0F172A]">
                Rejoice Foundation
              </span>
            </div>
            <p className="mt-4 max-w-[300px] text-[14px] leading-[1.6] text-[#64748B]">
              A global Christian research foundation building media, AI, protocol, and
              infrastructure systems for the Gospel of Jesus Christ.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[#64748B] transition-colors hover:text-[#0F172A]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]">
              Contact
            </h4>
            <a
              href="mailto:contact@rejoice.foundation"
              className="mt-4 inline-block text-[14px] font-medium text-[#2563EB] transition-colors hover:text-[#6D28D9]"
            >
              contact@rejoice.foundation
            </a>
            <p className="mt-4 text-[13px] leading-[1.6] text-[#64748B]">
              Global research network across Sydney, New York, London, Singapore, San
              Francisco, Seoul, Dubai, Nairobi, São Paulo, and other major mission and
              technology centers.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[#E2E8F0] pt-6">
          <p className="text-[13px] text-[#94A3B8]">
            © 2026 Rejoice Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
