'use client';

import { useState, Suspense } from 'react';
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

type Props = Readonly<{
  items: {
    placeholder: string;
    button1: string;
    button2: string;
    bottomText: string;
  };
}>;

function Component({ items }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [clickButton, setClickButton] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(searchParams.get('url') ?? '');

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
            placeholder={items.placeholder}
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
          {items.button1}
        </Button>
        <Button
          type="button"
          disabled={clickButton}
          color="secondary"
          font="medium"
          onClick={handleSecondaryButtonClick}
        >
          {items.button2}
        </Button>
      </form>
      {process.env.NEXT_PUBLIC_REDIRECT_HIDDEN !== 'true' && (
        <button
          className="px-2 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
          onClick={handleRedirect}
        >
          {process.env.NEXT_PUBLIC_REDIRECT_TEXT ?? items.bottomText}
        </button>
      )}
      <Banner />
      <Announce />
    </Container>
  );
}

export default function Form({ items }: Props) {
  return (
    <Suspense fallback={null}>
      <Component items={items} />
    </Suspense>
  );
}
