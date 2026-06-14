"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { translations, type Dictionary, type Language } from "./translations";

const STORAGE_KEY = "oli-gyros-lang";
const DEFAULT_LANG: Language = "hu";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === "hu" || stored === "en") {
        // Hydrate persisted language from localStorage on mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(stored);
      }
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "hu" ? "en" : "hu";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}
