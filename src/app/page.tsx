'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

const urlPattern = /^https:\/\/.*\.google\.com\/.+$/;

export default function Home() {
  const formUrlRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
    const googleFormsPattern =
      /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)/;
    const match = url.match(googleFormsPattern);
    if (match) {
      const id = match[1];
      return `https://docs.google.com/forms/d/e/${id}/viewform`;
    }
    return url;
  }

  console.log(process.env.NEXT_PUBLIC_REDIRECT_HIDDEN);

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col space-y-3 px-3">
      <form
        className="flex flex-col w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="block text-sm font-medium dark:text-white">
            <span className="sr-only">Full name</span>
          </label>
          <input
            ref={formUrlRef}
            type="text"
            className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Google Form URL"
          />
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
    </main>
  );
}
