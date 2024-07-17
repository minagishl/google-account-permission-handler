'use client';

// Packages
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { tv } from 'tailwind-variants';

// Components
import Container from '@/components/container';
import Announce from '@/components/announce';
import Banner from '@/components/banner';
import Button from '@/components/button';

// Utils
import checkUrl from '@/utils/checkUrl';
import toViewUrl from '@/utils/toViewUrl';

const button = tv({
  base: 'inline-flex items-center justify-center gap-x-2 rounded-lg border px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: {
      primary: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
      secondary:
        'border-gray-200 text-gray-800 disabled:opacity-50 hover:bg-gray-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:border-neutral-700',
    },
    font: {
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
});

export default function Home() {
  const [clickButton, setClickButton] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const router = useRouter();

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
    const modifiedUrl = toViewUrl(url.replace(/\/u\/\d+\//, '/'));

    // Check if the URL is valid
    if (!checkUrl(modifiedUrl)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    setClickButton(true);
    router.push(modifiedUrl);
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
          <input
            tabIndex={1}
            onChange={onChange}
            value={url}
            type="text"
            className="block w-full rounded-lg border border-gray-200 px-4 py-3 pr-16 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-neutral-700 dark:focus:ring-neutral-600"
            placeholder="Please enter URL"
            autoComplete="off" // Disable autocomplete to prevent browser autofill
          />
          {url && (
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white pl-1 dark:bg-neutral-900"
              onClick={clearUrl}
            >
              <button
                tabIndex={2}
                className="inline-flex items-center justify-center rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-700"
              >
                <p>Clear</p>
              </button>
            </div>
          )}
        </div>
        <Button
          type="submit"
          disabled={clickButton}
          color="primary"
          font="medium"
        >
          Open account switching screen
        </Button>
        <Button
          type="button"
          disabled={clickButton}
          color="secondary"
          font="medium"
          onClick={handleSecondaryButtonClick}
        >
          Automatically opens in an authorized account
        </Button>
      </form>
      {process.env.NEXT_PUBLIC_REDIRECT_HIDDEN !== 'true' && (
        <button
          className="px-2 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
          onClick={handleRedirect}
        >
          {process.env.NEXT_PUBLIC_REDIRECT_TEXT ??
            'Browse GitHub for usage instructions'}
        </button>
      )}
      <Banner />
      <Announce />
    </Container>
  );
}
