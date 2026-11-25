import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { generateAlternates, withDefaultOgImage } from '@/lib/seo';

const localeToOgLocale: Record<string, string> = {
  en: 'en_US', es: 'es_ES', fr: 'fr_FR', pt: 'pt_BR', cn: 'zh_CN',
  ar: 'ar_SA', de: 'de_DE', ja: 'ja_JP', it: 'it_IT', ko: 'ko_KR',
  id: 'id_ID', ms: 'ms_MY', fil: 'fil_PH', ru: 'ru_RU', vi: 'vi_VN', nl: 'nl_NL',
};

const defaultMetadata: Metadata = {
  title: "60+ Free LaTeX Templates - Resume, CV, Research Paper, Beamer & More | Octree",
  description: "Download 60+ free professional LaTeX templates: resume, CV, research paper, thesis, beamer presentation, homework, poster, obituary, interactive flashcards & more. Ready-to-use code with live PDF previews. Perfect for academics, students & professionals.",
  keywords: [
    // High-volume keywords (1000+ searches)
    "latex templates",
    "latex resume template",
    "latex cv template",
    "overleaf template",
    "ieee latex template",
    "latex resume templates",
    "latex template",
    "resume template latex",
    "templates latex",
    "cv template latex",
    
    // Beamer & Presentations (500-1000 searches)
    "latex beamer",
    "beamer latex",
    "beamer theme",
    "beamer in latex",
    "beamer for latex",
    "beamer en latex",
    "beamerposter latex",
    "beamer slideshow",
    "beamer for presentation",
    "latex beamer template",
    "latex presentation template",
    "latex presentation slides",
    "presentation slides latex",
    "latex slide template",
    "latex for presentation",
    
    // Medium-volume keywords (500-1000 searches)
    "elsevier latex template",
    "cv latex template",
    "latex cover letter template",
    "latex homework template",
    "latex poster template",
    "latex thesis template",
    "arxiv latex template",
    "acm latex template",
    "latex book template",
    "latex report template",
    "latex letter template",
    "latex template report",
    "cv templates in latex",
    "cv template in latex",
    "cv latex templates",
    "latex template for cv",
    
    // Specific high-intent keywords
    "free latex templates",
    "best latex templates",
    "latex document templates",
    "latex algorithm template",
    "latex research paper template",
    "mathematical document template",
    "latex notes template",
    "latex exam template",
    "latex assignment template",
    "modern latex cv template",
    "professional latex templates",
    
    // Long-tail keywords
    "latex resume template reddit",
    "latex template for research paper",
    "best latex resume templates",
    "latex dissertation template",
    "phd thesis latex template",
    "overleaf latex templates",
    "academic templates latex",
    "latex cv template overleaf",
    "latex resume template free",
    "latex resume template github",
    
    // Business & professional templates
    "latex business plan template",
    "latex business report template",
    "latex invoice template",
    "latex newsletter template",
    "latex questionnaire template",
    "latex table template",
    "latex tables templates",
    "letter of recommendation latex",
    "motivation letter latex template",
    "internship report latex",
    "latex memo template",
    "latex manuscript template",
    "latex recipe template",
    "latex cookbook template",
    "latex flyer template",
    "latex business card template",
    "latex calendar template",
    
    // Publisher & conference templates
    "latex springer template",
    "latex ieee conference template",
    "latex springer book template",
    "latex apa template",
    "latex two column article template",
    
    // Academic workflows
    "latex template with bibliography",
    "latex template for machine learning paper",
    "latex template for computer science thesis",
    "latex poster template a0",
    "latex thesis template with chapters",
    "best latex cv template",
    
    // New templates - obituary
    "latex obituary template",
    "obituary template latex",
    "funeral program template latex",
    "memorial template latex",
    "in loving memory template latex",
    "death announcement template latex",
    
    // New templates - interactive/flashcard
    "latex flashcard template",
    "interactive latex template",
    "latex quiz template",
    "latex study guide template",
    "click to reveal latex",
    "redacted document template latex",
    "hidden answer template latex",
    "self-test template latex",
  ],
  alternates: generateAlternates('/templates', 'en'),
  openGraph: {
    title: "60+ Free LaTeX Templates - Resume, CV, Research Paper & More",
    description: "Download 60+ free LaTeX templates: resume, CV, thesis, beamer, homework, poster, obituary, interactive flashcards. Ready-to-use code with live PDF previews.",
    url: 'https://tools.useoctree.com/templates',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "60+ Free LaTeX Templates - Resume, CV, Research Paper & More",
    description: "Download 60+ free LaTeX templates: resume, CV, thesis, beamer, homework, poster, obituary, interactive flashcards. Ready-to-use code with live PDF previews.",
  },
};

async function generateMetadataBase({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return defaultMetadata;
  }

  try {
    const t = await getTranslations({ locale, namespace: 'metadata' });
    const title = t('templates.main.title');
    const description = t('templates.main.description');

    return {
      ...defaultMetadata,
      title,
      description,
      alternates: generateAlternates('/templates', locale),
      openGraph: {
        ...(typeof defaultMetadata.openGraph === 'object' ? defaultMetadata.openGraph : {}),
        title,
        description,
        url: `https://tools.useoctree.com/${locale}/templates`,
        locale: localeToOgLocale[locale] || locale,
      },
      twitter: {
        ...(typeof defaultMetadata.twitter === 'object' ? defaultMetadata.twitter : {}),
        title,
        description,
      },
    };
  } catch {
    return defaultMetadata;
  }
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export async function generateMetadata(args: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return withDefaultOgImage(await generateMetadataBase(args));
}
