import { useEffect, useState } from 'react';
import en from './locales/en';
import ja from './locales/ja';

const locales = { en, ja };

export const useTranslate = () => {
  const [locale, setLocale] = useState<string>('en');
  const [currentLocale, setCurrentLocale] = useState(en); // Default to English

  useEffect(() => {
    // Get the browser's language
    const browserLocale = navigator.language.split('-')[0];

    if (browserLocale && locales[browserLocale as keyof typeof locales]) {
      setLocale(browserLocale);
    } else {
      setLocale('en'); // Default to English
    }
  }, []);

  useEffect(() => {
    // Update the locale when `locale` state changes
    if (locales[locale as keyof typeof locales]) {
      setCurrentLocale(locales[locale as keyof typeof locales]);
    }
  }, [locale]);

  const t = (key: string): string => {
    return currentLocale[key] || key; // Returns key if key not found
  };

  const changeLocale = (newLocale: string): void => {
    setLocale(newLocale);
  };

  return { t, changeLocale };
};
