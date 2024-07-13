'use client';

import Link from 'next/link';

export default function Banner() {
  if (
    process.env.NEXT_PUBLIC_BANNER_HIDDEN === 'true' ||
    !process.env.NEXT_PUBLIC_BANNER_HIDDEN
  ) {
    return null;
  }

  return (
    <div className="w-full max-w-md pt-8">
      <div className="mx-auto w-full">
        <div className="rounded-lg bg-blue-600 bg-[url('/abstract.svg')] bg-cover bg-center bg-no-repeat p-4 text-center">
          <p className="me-2 inline-block text-white">
            {process.env.NEXT_PUBLIC_BANNER_TEXT ??
              'See the latest information'}
          </p>
          <Link
            className="inline-flex items-center gap-x-2 rounded-full border-2 border-white px-3 py-2 text-sm font-semibold text-white hover:border-white/70 hover:text-white/70 disabled:pointer-events-none disabled:opacity-50"
            href={process.env.NEXT_PUBLIC_BANNER_URL ?? '/'}
          >
            Learn more
            <svg
              className="size-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
