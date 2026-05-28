export const site = {
  name: "Christian Music Group",
  short: "CMG",
  tagline: "The Arts For Christ",
  description:
    "Christian Music Group is an Australian-based, full-service Christian label and publisher partnering with artists to carry the hope of Jesus through music.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://christianmusicgroup.com.au",
  email: "hello@christianmusicgroup.com.au",
  address: {
    line1: "Level 1, 60 Martin Place",
    locality: "Sydney",
    region: "NSW",
    postalCode: "2000",
    country: "Australia",
  },
  external: {
    distribution: "https://wingsaccess.com",
    labelServices: "https://wingsaccess.com",
  },
};

export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/roster", label: "Roster" },
  { href: "/distribution", label: "Distribution" },
  { href: "/label-services", label: "Label Services" },
  { href: "/press", label: "Press" },
  { href: "/creed", label: "What We Believe" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/press", label: "Press" },
    { href: "/creed", label: "What We Believe" },
    { href: "/contact", label: "Contact" },
  ],
  Divisions: [
    { href: "/distribution", label: "Christian Music Distribution" },
    { href: "/label-services", label: "Label Services" },
    { href: "/roster", label: "Roster" },
  ],
};
