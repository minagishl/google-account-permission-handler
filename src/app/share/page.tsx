'use client';

// Packages
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Components
import Container from '@/components/container';
import Announce from '@/components/announce';
import Banner from '@/components/banner';
import Button from '@/components/button';
import Input from '@/components/input';

// Utils
import checkUrl from '@/utils/checkUrl';
import toViewUrl from '@/utils/toViewUrl';

export default function Home() {
  const [url, setUrl] = useState<string>('');
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const clearUrl = () => {
    setUrl('');
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => {
          alert('The URL has been copied to the clipboard.');
        },
        (error) => {
          console.log('Error copying', error);
        }
      );
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed'; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert('The URL has been copied to the clipboard.');
      } catch (error) {
        console.log('Error copying', error);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting

    // Check if the URL is valid
    if (!checkUrl(url)) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    const encodedUrl = toViewUrl(url);
    if (navigator.share) {
      navigator
        .share({
          url: encodedUrl,
        })
        .then(() => {
          console.log('Successful share');
        })
        .catch((error) => {
          console.log('Error sharing', error);
        });
    } else {
      copyToClipboard(encodedUrl);
    }
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
        <Input url={url} onChange={onChange} clearUrl={clearUrl} />
        <Button type="submit" color="primary" font="medium">
          Convert and share the URL
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
