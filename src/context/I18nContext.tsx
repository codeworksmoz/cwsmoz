'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

import pt from '@/locales/pt.json';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import mkw from '@/locales/mkw.json';
import ts from '@/locales/ts.json';

const translations: Record<string, any> = { pt, en, es, fr, mkw, ts };

type I18nContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('pt');
  const [messages, setMessages] = useState(translations.pt);

  useEffect(() => {
    // This code runs only on the client
    try {
        const browserLang = navigator.language.split('-')[0];
        const newLocale = translations[browserLang] ? browserLang : 'pt';
        setLocale(newLocale);
        setMessages(translations[newLocale]);
    } catch (error) {
        // In case of SSR or other environments where navigator is not available
        setLocale('pt');
        setMessages(translations.pt);
    }
  }, []);

  const handleSetLocale = (newLocale: string) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      setMessages(translations[newLocale]);
      try {
        document.documentElement.lang = newLocale;
      } catch (error) {
        // Handle environments where document is not available
      }
    }
  };

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let result = messages;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // For development, it's helpful to see which key is missing.
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    return result || key;
  }, [messages]);

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
