import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://rejoice.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rejoice | A Christian Audio Platform for Followers of Jesus",
    template: "%s | Rejoice",
  },
  description:
    "Rejoice is a Christian audio platform for followers of Jesus — music, worship, podcasts, audiobooks, Scripture, artist pages, and redemptive discovery in one trusted platform. Interactive demo available now. Launching Q4 2026.",
  keywords: [
    "Christian audio",
    "Christian music",
    "worship",
    "Christian podcasts",
    "Christian audiobooks",
    "Bible audio",
    "Scripture audio",
    "Christian media infrastructure",
    "redemptive discovery",
    "theological search",
    "Christian artists",
    "worship nights",
    "family-safe audio",
    "human artistry disclosure",
  ],
  openGraph: {
    title: "Rejoice | A Christian Audio Platform for Followers of Jesus",
    description:
      "Music, worship, podcasts, audiobooks, Scripture, artist pages, and redemptive discovery in one trusted platform. Interactive demo available now. Launching Q4 2026.",
    url: SITE_URL,
    siteName: "Rejoice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejoice | A Christian Audio Platform for Followers of Jesus",
    description:
      "Music, worship, podcasts, audiobooks, Scripture, artist pages, and redemptive discovery in one trusted platform. Interactive demo available now. Launching Q4 2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen font-sans antialiased text-[15px] leading-relaxed text-foreground">
        {children}
      </body>
    </html>
  );
}
