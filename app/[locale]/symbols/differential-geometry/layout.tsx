import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Differential Geometry Symbols in LaTeX - Wedge, Nabla",
  description: "Differential geometry symbols in LaTeX, copy-ready: wedge product, \\bigwedge, exterior and covariant derivatives, Lie derivative, Christoffel symbols.",
  keywords: [
    "differential geometry symbols latex",
    "latex bigwedge",
    "christoffel symbol latex",
    "differential geometry symbols",
    "manifold notation",
    "latex manifold",
    "tangent space latex",
    "cotangent bundle latex",
    "covariant derivative latex",
    "christoffel symbols latex",
    "riemann curvature latex",
    "ricci tensor latex",
    "metric tensor latex",
    "exterior derivative latex",
    "wedge product latex",
    "lie derivative latex",
    "lie bracket latex",
    "hodge star latex",
    "geodesic latex",
    "parallel transport latex",
    "connection form latex",
    "curvature form latex",
    "advanced math symbols",
    "physics symbols",
  ],
  openGraph: {
    title: "Differential Geometry Symbols in LaTeX - Wedge, Nabla",
    description: "How to write forms, connections, curvature and derivatives on manifolds in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'differential-geometry', defaultMetadata);
}

export default function DifferentialGeometryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
