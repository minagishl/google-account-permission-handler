import type { Viewport, Metadata } from 'next';
import RootLayout, { type RootLayoutProps } from './[lang]/layout';
import { defaultLanguage } from '@/translate';

export const metadata: Metadata = {
  title: 'Google Account Permission Handler',
  description:
    'Application to display correctly when displayed as only an organization account in Google Form, etc.',
};

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
