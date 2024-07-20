'use client';

import Container from '@/components/container';

export default function Bookmark() {
  return (
    <Container>
      <div className="w-full max-w-sm space-y-4 rounded-lg border border-gray-200 p-4 dark:border-neutral-700 dark:text-white">
        <p className="text-sm font-medium">
          This is the page to add bookmarks
          <br />
          Please long press or right click on the following links
          <br />
          <a
            className="text-blue-600 decoration-2 hover:underline dark:text-blue-500"
            href="javascript:(function(){const e=window.location.href,t=encodeURIComponent(e),n=`https://google-account-permission-handler.pages.dev/?url=${t}`;e.includes('google-account-permission-handler.pages.dev')||e.includes('localhost:3000')?alert('This URL is invalid'):window.location.href=n})();"
            title='Google Account Permission Handler'
          >
            Click here
          </a>
        </p>
      </div>
    </Container>
  );
}
