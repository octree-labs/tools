import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX to PNG Converter — Render Equations as Images",
  description: "Free online LaTeX to PNG converter. Render equations, formulas or whole documents as high-resolution PNG images for slides, Word, Google Docs, Notion and the web. Transparent background, 1x/2x/4x DPI, download or copy to clipboard.",
  keywords: [
    "latex to png",
    "latex to image",
    "equation to image",
    "render latex to png",
    "latex formula to png",
    "latex equation to png",
    "latex to png online",
    "convert latex to image",
    "latex image generator",
    "latex png transparent background",
    "latex to png high resolution",
    "math equation to png",
    "latex formula image",
    "tex to png",
  ],
  alternates: {
    canonical: '/tools/latex-to-png',
  },
  openGraph: {
    title: "LaTeX to PNG Converter — Render Equations as Images",
    description: "Render LaTeX equations and documents as crisp PNG images with a transparent background. Free, no sign-up.",
    url: 'https://tools.useoctree.com/tools/latex-to-png',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX to PNG Converter — Render Equations as Images",
    description: "Render LaTeX equations and documents as crisp PNG images with a transparent background. Free, no sign-up.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-to-png', defaultMetadata);
}

export default function LatexToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
