import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rejoice Foundation | Gospel Media, AI and Infrastructure Research",
    template: "%s | Rejoice Foundation",
  },
  description:
    "Rejoice Foundation is a global Christian research foundation building Gospel media systems, AI agents, protocol infrastructure, and digital platforms for churches, ministries, creators, and Christian institutions worldwide.",
  keywords: [
    "Christian technology foundation",
    "Gospel media infrastructure",
    "Christian AI agents",
    "Great Commission technology",
    "Christian research foundation",
    "Gospel content distribution",
    "Christian media systems",
    "AI for ministry",
    "Christian protocol infrastructure",
    "global Gospel technology",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
