import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Geometry Symbols in LaTeX - Perpendicular, Angle, Triangle",
  description: "Geometry symbols in LaTeX, copy-ready: perpendicular \\perp (orthogonal), parallel \\parallel, angle \\angle, triangle \\triangle, congruent \\cong, segments.",
  keywords: [
    "perpendicular latex",
    "orthogonal symbol latex",
    "latex orthogonal symbol",
    "orthogonal latex",
    "parallel symbol latex",
    "angle symbol latex",
    "geometry symbols latex",
    // Geometry keywords
    "geometry symbols",
    "angle symbol",
    "congruent symbol",
    "similar symbol",
    "parallel lines symbol",
    "perpendicular lines symbol",
    "triangle symbol",
    "degree symbol math",
    "arc symbol",
    "parallel symbol",
    "perpendicular symbol",
    // LaTeX specific
    "latex geometry symbols",
    "latex angle symbol",
    "latex triangle",
    "latex perpendicular",
    "latex parallel",
    "latex congruent",
    "latex similar",
    "angle latex",
    "triangle latex",
    "perp latex",
    "parallel latex",
    "cong latex",
    "sim latex",
    "degree symbol",
    "latex degree symbol",
    "latex arc",
    "latex line segment",
    "latex ray",
    "geometry notation latex",
    "angle symbols latex",
    "math symbols",
  ],
  openGraph: {
    title: "Geometry Symbols in LaTeX - Perpendicular, Angle, Triangle",
    description: "How to write perpendicular, parallel, angle, triangle and congruence symbols in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'geometry', defaultMetadata);
}

export default function GeometryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
