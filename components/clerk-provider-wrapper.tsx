"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { hasClerk } from "@/lib/auth";

// Clerk's <SignIn> / <SignUp> / <UserButton> pull tokens from this provider.
// We keep its theme in sync with next-themes so the modal flips with the app.

export function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  if (!hasClerk()) return <>{children}</>;
  return <ThemedClerkProvider>{children}</ThemedClerkProvider>;
}

function ThemedClerkProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const appearance = {
    baseTheme: resolvedTheme === "dark" ? dark : undefined,
    variables: {
      colorPrimary:        "#ea580c",
      colorBackground:     resolvedTheme === "dark" ? "#101012" : "#ffffff",
      colorInputBackground:resolvedTheme === "dark" ? "#161618" : "#ffffff",
      colorText:           resolvedTheme === "dark" ? "#f0f1f4" : "#11151c",
      colorTextSecondary:  resolvedTheme === "dark" ? "#9498a2" : "#6c727c",
      colorInputText:      resolvedTheme === "dark" ? "#f0f1f4" : "#11151c",
      borderRadius:        "8px",
      fontFamily:          "var(--font-sans), Inter, system-ui, sans-serif",
    },
    elements: {
      card: "shadow-none border-0 bg-transparent",
      rootBox: "w-full",
      formButtonPrimary:
        "bg-accent hover:bg-accent-hover text-accent-foreground rounded-md h-11 text-[14px] font-medium normal-case",
      socialButtonsBlockButton:
        "border border-border bg-card hover:bg-surface text-foreground rounded-md h-11 text-[13.5px] font-medium",
      formFieldInput:
        "border border-border bg-card text-foreground rounded-md h-10 text-[13.5px]",
      headerTitle:    "text-foreground text-[24px] font-semibold tracking-tight",
      headerSubtitle: "text-muted text-[13.5px]",
      footerActionLink: "text-accent hover:underline font-medium",
      dividerLine: "bg-border",
      dividerText: "text-muted text-[11.5px] uppercase tracking-wider font-medium",
      formFieldLabel: "text-foreground text-[12px] font-medium",
      identityPreviewText: "text-foreground",
      identityPreviewEditButton: "text-accent",
    },
  } as const;

  return <ClerkProvider appearance={appearance}>{children}</ClerkProvider>;
}
