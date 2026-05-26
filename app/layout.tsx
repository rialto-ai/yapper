import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProviderWrapper } from "@/components/clerk-provider-wrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paideia",
    template: "%s · Paideia",
  },
  description:
    "Classical Christian education for the home. Video lessons, interactive quizzes, and catechism — built for Reformed homeschool families.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen font-sans antialiased text-[14px] leading-relaxed">
        <ThemeProvider>
          <ClerkProviderWrapper>{children}</ClerkProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
