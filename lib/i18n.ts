import type { Translations } from "./translations/en";

export type Locale = "en" | "es" | "fr" | "pt" | "ar" | "zh" | "hi" | "id" | "tl";

export const DEFAULT_LOCALE: Locale = "en";

export const LANGUAGES: {
  code: Locale;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "zh", name: "Chinese", nativeName: "中文", dir: "ltr" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", dir: "ltr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr" },
  { code: "tl", name: "Tagalog", nativeName: "Tagalog", dir: "ltr" },
];

export async function getTranslations(locale: Locale): Promise<Translations> {
  switch (locale) {
    case "en":
      return (await import("./translations/en")).en;
    case "es":
      return (await import("./translations/es")).es;
    case "fr":
      return (await import("./translations/fr")).fr;
    case "pt":
      return (await import("./translations/pt")).pt;
    case "ar":
      return (await import("./translations/ar")).ar;
    case "zh":
      return (await import("./translations/zh")).zh;
    case "hi":
      return (await import("./translations/hi")).hi;
    case "id":
      return (await import("./translations/id")).id;
    case "tl":
      return (await import("./translations/tl")).tl;
    default:
      return (await import("./translations/en")).en;
  }
}

export function isValidLocale(value: string): value is Locale {
  return LANGUAGES.some((lang) => lang.code === value);
}

export function getLanguageInfo(locale: Locale) {
  return LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];
}

export type { Translations };
