import { Inter } from 'next/font/google';
import './../globals.css';

const inter = Inter({ subsets: ['latin'] });

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Readonly<{
    lang: string;
  }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
