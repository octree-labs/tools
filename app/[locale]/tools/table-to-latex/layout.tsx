import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Table Generator from CSV: Excel to LaTeX Free",
  description: "Free LaTeX table generator. Upload a CSV exported from Excel or Google Sheets and get a booktabs LaTeX table with a PDF preview. No signup.",
  keywords: [
    "csv to latex",
    "csv latex",
    "excel latex",
    "excel table latex",
    "latex table generator",
    "table generator latex",
    "create latex table",
    "online table generator latex",
    "convert Excel to LaTeX",
    "CSV to LaTeX converter",
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
    title: "LaTeX Table Generator from CSV: Excel to LaTeX Free",
    description: "Upload a CSV exported from Excel or Google Sheets and get a LaTeX table with a PDF preview. Free, no signup.",
    url: 'https://tools.useoctree.com/tools/table-to-latex',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaTeX Table Generator from CSV: Excel to LaTeX Free",
    description: "Upload a CSV exported from Excel or Google Sheets and get a LaTeX table with a PDF preview. Free, no signup.",
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