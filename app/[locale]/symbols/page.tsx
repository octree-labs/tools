import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generateAlternates, withDefaultOgImage } from '@/lib/seo';
import SymbolsIndexPage from './page.client';

// The symbols index previously inherited the root layout's metadata, so it
// shared the homepage title/description and canonicalised to "/". Give it its
// own metadata so the hub page can rank on its own.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = t('symbols.main.title');
  const description = t('symbols.main.description');
  const alternates = generateAlternates('/symbols', locale);

  return withDefaultOgImage({
    title,
    description,
    keywords: t('symbols.main.keywords').split(', '),
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  });
}

export default function SymbolsPage() {
  return <SymbolsIndexPage />;
}
