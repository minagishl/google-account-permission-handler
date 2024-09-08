import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import locale from './locale';

export const defaultLanguage = 'en';
export const nonDefaultLanguages = Object.keys(locale).filter(
  (lang) => lang !== defaultLanguage
);
export const languages = [defaultLanguage, ...nonDefaultLanguages] as const;
export type Language = (typeof languages)[number];

type useTranslationProps = Readonly<{
  lang: string;
}>;

export const useTranslation = async ({ lang }: useTranslationProps) => {
  const i18n = createInstance();
  await i18n
    .use(initReactI18next)
    .use(resourcesToBackend(locale))
    .init({
      debug: process.env.NODE_ENV === 'development',
      supportedLngs: languages,
      fallbackLng: defaultLanguage,
      lng: lang,
    });

  const prefixedUrl = (url: string) => {
    const linkPrefix = i18n.language == defaultLanguage ? '/' : `/${lang}/`;
    return `${linkPrefix}${url}`;
  };

  const changeLanguageUrl = (url: string, lang: string) => {
    const linkPrefix = lang == defaultLanguage ? '/' : `/${lang}/`;
    return `${linkPrefix}${url}`;
  };

  return {
    t: i18n.getFixedT(lang),
    i18n,
    prefixedUrl,
    changeLanguageUrl,
  };
};
