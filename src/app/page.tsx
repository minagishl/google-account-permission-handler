'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

// Components
import Container from '@/components/container';
import Announce from '@/components/announce';
import Banner from '@/components/banner';
import Button from '@/components/button';
import Input from '@/components/input';

// Utils
import checkUrl from '@/utils/checkUrl';
import toViewUrl from '@/utils/toViewUrl';

// Translate
import { useTranslate } from '@/translate';

function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [clickButton, setClickButton] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(searchParams.get('url') ?? '');
  const { t, changeLocale } = useTranslate();

  // Set the locale from localStorage
  useEffect(() => {
    const locale = localStorage.getItem('locale') ?? 'en';
    localStorage.setItem('locale', locale);
    changeLocale(locale);
  }, [changeLocale]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const clearUrl = () => {
    setUrl('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting

    // Check if the URL is valid
    if (!checkUrl(url)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    setClickButton(true);

    const encodedUrl = encodeURIComponent(toViewUrl(url));
    const newUrl = `https://accounts.google.com/AccountChooser?continue=${encodedUrl}`;
    router.push(newUrl);
  };

  const handleSecondaryButtonClick = () => {
    // Check if the URL is valid
    if (!checkUrl(url)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    setClickButton(true);
    router.push(toViewUrl(url));
  };

  const handleRedirect = () => {
    router.push(process.env.NEXT_PUBLIC_REDIRECT_URL ?? '/');
  };

  return (
    <Container>
      <form
        className="flex w-full max-w-md flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="relative mb-3">
          <Input
            url={url}
            placeholder={t('Please enter URL')}
            onChange={onChange}
            clearUrl={clearUrl}
          />
        </div>
        <Button
          type="submit"
          disabled={clickButton}
          color="primary"
          font="medium"
        >
          {t('Open account switching screen')}
        </Button>
        <Button
          type="button"
          disabled={clickButton}
          color="secondary"
          font="medium"
          onClick={handleSecondaryButtonClick}
        >
          {t('Automatically opens in an authorized account')}
        </Button>
      </form>
      {process.env.NEXT_PUBLIC_REDIRECT_HIDDEN !== 'true' && (
        <button
          className="px-2 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
          onClick={handleRedirect}
        >
          {process.env.NEXT_PUBLIC_REDIRECT_TEXT ??
            t('Browse GitHub for usage instructions')}
        </button>
      )}
      <Banner />
      <Announce />
    </Container>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
