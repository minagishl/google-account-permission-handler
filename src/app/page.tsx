'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/container';

const urlPattern = /^https:\/\/.*\.google\.com\/.+$/;

export default function Home() {
  const formUrlRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState('');
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const clearUrl = () => {
    setUrl('');
    formUrlRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = formUrlRef.current?.value ?? '';

    if (!urlPattern.test(formUrl)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }
    const encodedUrl = encodeURIComponent(transformGoogleFormsUrl(formUrl));
    const newUrl = `https://accounts.google.com/AccountChooser?continue=${encodedUrl}`;
    router.push(newUrl);
  };

  const handleSecondaryButtonClick = () => {
    const formUrl = formUrlRef.current?.value ?? '';
    const modifiedUrl = transformGoogleFormsUrl(
      formUrl.replace(/\/u\/\d+\//, '/')
    );

    if (!urlPattern.test(modifiedUrl)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    router.push(modifiedUrl);
  };

  const handleRedirect = () => {
    router.push(process.env.NEXT_PUBLIC_REDIRECT_URL ?? '/');
  };

  function transformGoogleFormsUrl(url: string): string {
    // It seems that you don't need to change anything except Google Form.
    const googleFormsPattern =
      /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)/;
    const match = url.match(googleFormsPattern);
    if (match) {
      const id = match[1];
      return `https://docs.google.com/forms/d/e/${id}/viewform`;
    }
    return url;
  }

  return (
    <Container>
      <form
        className="flex flex-col w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 relative">
          <input
            ref={formUrlRef}
            onChange={onChange}
            value={url}
            type="text"
            className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Please enter URL"
            autoComplete="off" // Disable autocomplete to prevent browser autofill
          />
          {url && (
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer pl-2 bg-white"
              onClick={clearUrl}
            >
              <div className="py-1 px-3 inline-flex justify-center items-center text-sm font-medium rounded bg-gray-50 text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                <p>Clear</p>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Open account switching screen
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          onClick={handleSecondaryButtonClick}
        >
          Automatically opens in an authorized account.
        </button>
      </form>
      {process.env.NEXT_PUBLIC_REDIRECT_HIDDEN !== 'true' && (
        <button
          className="text-blue-600 decoration-2 hover:underline text-sm font-medium dark:text-blue-500"
          onClick={handleRedirect}
        >
          {process.env.NEXT_PUBLIC_REDIRECT_TEXT ??
            'Browse GitHub for usage instructions'}
        </button>
      )}
    </Container>
  );
}
