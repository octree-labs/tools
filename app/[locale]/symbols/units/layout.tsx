import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Units in LaTeX - siunitx, Degree Symbol, SI Units",
  description: "Units in LaTeX, copy-ready: siunitx \\qty, \\unit and \\num, degree symbol ^\\circ and \\degreeCelsius, angstrom \\AA, micro and ohm with correct spacing.",
  keywords: [
    "units latex",
    "siunitx",
    "latex units",
    "degree symbol latex",
    "angstrom latex",
    "celsius latex",
    "measurement symbols",
    "units symbols latex",
    "latex degree symbol",
    "latex angstrom",
    "latex micro",
    "latex ohm",
    "latex hbar",
    "si units latex",
    "celsius fahrenheit latex",
    "latex meter kilogram",
    "latex volt watt",
    "latex joule newton",
    "prime double prime latex",
    "scientific units latex",
    "physics units latex",
    "engineering symbols",
    "math symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "Units in LaTeX - siunitx, Degree Symbol, SI Units",
    description: "How to write units, the degree symbol and SI prefixes in LaTeX with siunitx.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'units', defaultMetadata);
}

export default function UnitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
