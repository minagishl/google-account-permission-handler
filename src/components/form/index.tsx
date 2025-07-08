import { createSignal } from 'solid-js';

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

export default function Form(props: Props) {
  const [clickButton, setClickButton] = createSignal<boolean>(false);
  const [url, setUrl] = createSignal<string>('');

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  };

  const clearUrl = () => {
    setUrl('');
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    // Check if the URL is valid
    if (!checkUrl(url())) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    setClickButton(true);

    const encodedUrl = encodeURIComponent(toViewUrl(url()));
    const newUrl = `https://accounts.google.com/AccountChooser?continue=${encodedUrl}`;
    window.location.href = newUrl;
  };

  const handleSecondaryButtonClick = () => {
    // Check if the URL is valid
    if (!checkUrl(url())) {
      alert('The URL must begin with https:// and end with .google.com.');
      return;
    }

    setClickButton(true);
    window.location.href = toViewUrl(url());
  };

  const handleRedirect = () => {
    window.location.href = 'https://github.com/minagishl/google-account-permission-handler';
  };

  return (
    <Container>
      <form
        class="flex w-full max-w-md flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <div class="relative mb-3">
          <Input
            url={url()}
            placeholder={props.items.placeholder}
            onChange={onChange}
            clearUrl={clearUrl}
          />
        </div>
        <Button
          type="submit"
          disabled={clickButton()}
          color="primary"
          font="medium"
          class="mt-4"
        >
          {props.items.button1}
        </Button>
        <Button
          type="button"
          disabled={clickButton()}
          color="secondary"
          font="medium"
          onClick={handleSecondaryButtonClick}
        >
          {props.items.button2}
        </Button>
      </form>
      <button
        class="px-2 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500"
        onClick={handleRedirect}
      >
        {props.items.bottomText}
      </button>
      <Banner />
      <Announce />
    </Container>
  );
}
