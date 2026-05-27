"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Locale, type Translations, DEFAULT_LOCALE, LANGUAGES, getTranslations } from "./i18n";
import { en } from "./translations/en";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: en as Translations,
  dir: "ltr",
});

export function useLocale() {
  return useContext(LocaleContext);
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const params = new URLSearchParams(window.location.search);
  const paramLocale = params.get("locale");
  if (paramLocale && LANGUAGES.some((l) => l.code === paramLocale)) {
    return paramLocale as Locale;
  }

  const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
  if (match && LANGUAGES.some((l) => l.code === match[1])) {
    return match[1] as Locale;
  }

  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<Translations>(en as Translations);

  useEffect(() => {
    const initial = getInitialLocale();
    setLocaleState(initial);
    getTranslations(initial).then(setTranslations);
  }, []);

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale);
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    getTranslations(newLocale).then(setTranslations);

    const lang = LANGUAGES.find((l) => l.code === newLocale);
    if (lang) {
      document.documentElement.lang = newLocale;
      document.documentElement.dir = lang.dir;
    }
  }

  const dir = LANGUAGES.find((l) => l.code === locale)?.dir ?? "ltr";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}
