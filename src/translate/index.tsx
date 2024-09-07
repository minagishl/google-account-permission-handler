import { useEffect, useState } from 'react';
import en from './locales/en';
import ja from './locales/ja';

const locales = { en, ja };

export const useTranslate = () => {
  const [locale, setLocale] = useState<string>('en');
  const [currentLocale, setCurrentLocale] = useState(en); // Default to English

  useEffect(() => {
    if (locale && locales[locale as keyof typeof locales]) {
      setCurrentLocale(locales[locale as keyof typeof locales]);
    } else {
      setCurrentLocale(en); // Fallback to English if locale is not supported
    }
  }, [locale]);

  const t = (key: string): string => {
    return currentLocale[key] || key; // Returns key if key not found
  };

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
  };

  return { t, changeLocale };
};
