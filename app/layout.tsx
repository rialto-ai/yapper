import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthGate } from "@/components/auth-gate";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Selah by Christian Music Group",
    template: "%s | Selah",
  },
  description:
    "Infrastructure for the Christian music economy. Distribution, rights, royalties, campaigns, publishing, and label services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased text-[14px] leading-relaxed">
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
