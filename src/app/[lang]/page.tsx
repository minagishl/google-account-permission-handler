import Form from '@/components/form';
import { useTranslation, nonDefaultLanguages } from '@/translate';

export const generateStaticParams = async () =>
  nonDefaultLanguages.map((lang) => ({ lang }));

type Props = Readonly<{
  params: {
    lang: string;
  };
}>;

export default async function Home({ params }: Props) {
  const { lang } = params;
  console.log('lang:', lang);
  const { t } = await useTranslation({ lang });

  const items = {
    placeholder: t('Please enter URL'),
    button1: t('Open account switching screen'),
    button2: t('Automatically opens in an authorized account'),
    bottomText: t('Browse GitHub for usage instructions'),
  };

  return <Form items={items} />;
}
