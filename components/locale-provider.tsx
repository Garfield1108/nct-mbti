"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  getUiText,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
  type UiTextKey,
} from "@/lib/locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiTextKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const documentLanguage = (locale: Locale) =>
  locale === "en" ? "en" : locale === "ko" ? "ko" : "zh-CN";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = documentLanguage(locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState((currentLocale) =>
      currentLocale === nextLocale ? currentLocale : nextLocale,
    );

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {}
  }, []);

  useEffect(() => {
    const syncStoredLocale = window.setTimeout(() => {
      try {
        const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        if (isLocale(storedLocale)) {
          setLocaleState((currentLocale) =>
            currentLocale === storedLocale ? currentLocale : storedLocale,
          );
        }
      } catch {}
    }, 0);

    return () => {
      window.clearTimeout(syncStoredLocale);
    };
  }, []);

  const t = useCallback((key: UiTextKey) => getUiText(key, locale), [locale]);
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useTranslations must be used within LocaleProvider.");
  }

  return context;
}
