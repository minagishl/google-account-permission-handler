import Home from './[lang]/page';
import { defaultLanguage } from '@/translate';

export default async function Index() {
  return (
    <Home
      params={{
        lang: defaultLanguage,
      }}
    />
  );
}
