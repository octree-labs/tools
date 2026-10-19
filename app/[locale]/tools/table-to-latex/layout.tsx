import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Excel to LaTeX Converter - CSV, JSON & Excel to LaTeX | Free",
  description: "Free AI-powered tool to convert Excel spreadsheets, CSV, JSON and XLSX files to LaTeX. Upload your file and get a clean LaTeX table with a PDF preview.",
  keywords: [
    "latex table generator",
    "table generator latex",
    "create latex table",
    "online table generator latex",
    "convert Excel to LaTeX",
    "CSV to LaTeX converter",
    "JSON to LaTeX converter",
    "Excel to LaTeX converter",
    "Excel to LaTeX online",
    "free Excel to LaTeX converter",
    "CSV to LaTeX table",
    "Excel to LaTeX table",
    "spreadsheet to LaTeX",
    "table to LaTeX",
    "latex table creator",
    "latex table maker online",
    "generate latex table",
    "latex table from data",
    "tabular latex generator",
    "booktabs table generator",
  ],
  alternates: {
    canonical: '/tools/table-to-latex',
  },
  openGraph: {
    title: "Convert Excel to LaTeX - Free Online Converter",
    description: "AI-powered converter for CSV, JSON, and Excel spreadsheets to LaTeX code with instant preview",
    url: 'https://tools.useoctree.com/tools/table-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Convert Excel to LaTeX - Free Online Converter",
    description: "AI-powered converter for CSV, JSON, and Excel spreadsheets to LaTeX code with instant preview",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'table-to-latex', defaultMetadata);
}

export default function TableToLatexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 