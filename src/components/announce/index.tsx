import Link from 'next/link';

export default function Announce() {
  if (
    process.env.NEXT_PUBLIC_ANNOUNCEMENT_HIDDEN === 'true' ||
    !process.env.NEXT_PUBLIC_ANNOUNCEMENT_HIDDEN
  ) {
    return null;
  }

  return (
    <div className="w-full max-w-md pt-8">
      <Link
        className="block w-full max-w-md rounded-lg bg-gray-100 p-4 text-center transition-all duration-300 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/10"
        href={process.env.NEXT_PUBLIC_ANNOUNCEMENT_URL ?? '/'}
      >
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <p className="me-2 inline-block text-sm text-gray-800 dark:text-neutral-200">
            {process.env.NEXT_PUBLIC_ANNOUNCEMENT_TEXT ??
              'Go to the application guidelines.'}
          </p>
          <span className="inline-flex items-center justify-center gap-x-2 text-sm font-semibold text-blue-600 decoration-2 group-hover:underline dark:text-blue-500">
            {process.env.NEXT_PUBLIC_ANNOUNCEMENT_BUTTON_TEXT ??
              'Official Guide'}
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}
