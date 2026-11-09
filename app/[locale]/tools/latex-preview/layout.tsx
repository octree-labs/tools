import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Edit LaTeX Online: Free LaTeX Editor, Compiler & Viewer",
  description: "Edit LaTeX online and see the PDF as you type. Free LaTeX compiler and viewer with full TeX Live, pdfLaTeX, XeLaTeX and LuaLaTeX. No account needed.",
  keywords: [
    "edit latex online",
    "latex online editor",
    "latex online",
    "online tex compiler",
    "LaTeX preview",
    "online LaTeX editor",
    "LaTeX live preview",
    "LaTeX compiler online",
    "free LaTeX editor",
    "LaTeX PDF preview",
    "LaTeX online",
    "real-time LaTeX compiler",
    "LaTeX playground",
    "latex renderer",
    "render latex",
    "latex rendering",
    "overleaf alternative",
    "overleaf alternatives",
    "alternative to overleaf",
    "latex editor online free",
    "latex viewer",
    "latex to pdf",
    "latex pdf",
    "pdf latex",
    "compile latex online",
    "latex compiler free",
    "write latex online",
    "latex sandbox",
  ],
  alternates: {
    canonical: '/tools/latex-preview',
  },
  openGraph: {
    title: "Edit LaTeX Online: Free LaTeX Editor, Compiler & Viewer",
    description: "Edit LaTeX online and see the PDF as you type. Full TeX Live, no account needed.",
    url: 'https://tools.useoctree.com/tools/latex-preview',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Edit LaTeX Online: Free LaTeX Editor, Compiler & Viewer",
    description: "Edit LaTeX online and see the PDF as you type. Full TeX Live, no account needed.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'latex-preview', defaultMetadata);
}

export default function LatexPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 