import type { Viewport } from 'next';
import RootLayout, { type RootLayoutProps } from './[lang]/layout';
import { defaultLanguage } from '@/translate';

export const viewport: Viewport = {
  maximumScale: 1,
};

type DefaultRootLayoutProps = Omit<RootLayoutProps, 'params'>;

export default async function DefaultIndexPage({
  children,
}: DefaultRootLayoutProps) {
  return await RootLayout({
    params: {
      lang: defaultLanguage,
    },
    children,
  });
}
