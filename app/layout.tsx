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
    default: "Gospel in Sign | The Gospel of Jesus Christ in Sign Language",
    template: "%s | Gospel in Sign",
  },
  description:
    "Simple signed Gospel lessons, Scripture videos, printable sheets, and teaching resources for Deaf communities, churches, families, and missionaries.",
  openGraph: {
    title: "Gospel in Sign | The Gospel of Jesus Christ in Sign Language",
    description:
      "Simple signed Gospel lessons, Scripture videos, printable sheets, and teaching resources for Deaf communities, churches, families, and missionaries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
