import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venice Signal · Ecosystem Overview",
  description:
    "Real-time intelligence and influence analytics for the Venice ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen font-sans antialiased text-[13.5px] leading-relaxed">
        {children}
      </body>
    </html>
  );
}
