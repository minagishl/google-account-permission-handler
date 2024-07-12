'use client';

import { useRouter } from 'next/navigation';

export default function License() {
  const router = useRouter();

  const handle = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_GITHUB_URL}/blob/main/LICENSE` ?? '/'
    );
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col space-y-3 px-3">
      <div>
        <div className="border border-gray-200 p-4 rounded-lg space-y-4">
          <p className="text-sm font-medium">
            This website is open source
            <br />
            See the GitHub page for licenseinformation
            <br />
            <button
              className="text-blue-600 decoration-2 hover:underline dark:text-blue-500"
              onClick={handle}
            >
              Go to the license
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
