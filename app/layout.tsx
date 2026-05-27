import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Gospel in Sign",
    template: "%s | The Gospel in Sign",
  },
  description:
    "The Gospel of Jesus Christ, taught clearly in sign language. A simple multilingual teaching platform for deaf communities, churches, families, and missionaries.",
  openGraph: {
    title: "The Gospel in Sign",
    description:
      "The Gospel of Jesus Christ, taught clearly in sign language. A simple multilingual teaching platform for deaf communities, churches, families, and missionaries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen font-sans antialiased text-base leading-relaxed">
        {children}
      </body>
    </html>
  );
}
