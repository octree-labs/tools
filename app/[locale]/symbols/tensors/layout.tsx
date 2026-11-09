import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Tensor Notation in LaTeX - Indices, Einstein Summation",
  description: "Tensor notation in LaTeX, copy-ready: upper and lower indices, staggered indices with the tensor package, Kronecker delta, Levi-Civita, metric g_{\\mu\\nu}.",
  keywords: [
    "tensor latex",
    "latex tensor",
    "latex tensor notation",
    "tensor notation latex",
    "tensor package latex",
    "tensor notation symbols",
    "index notation",
    "einstein summation latex",
    "covariant contravariant latex",
    "kronecker delta latex",
    "levi civita latex",
    "tensor product latex",
    "tensor contraction latex",
    "metric raising lowering latex",
    "symmetrization antisymmetrization latex",
    "tensor rank latex",
    "basis vector dual basis latex",
    "component transformation latex",
    "physics tensor latex",
    "general relativity symbols",
    "machine learning tensors",
    "math symbols",
  ],
  openGraph: {
    title: "Tensor Notation in LaTeX - Indices, Einstein Summation",
    description: "How to write tensor indices, staggered indices and Einstein summation in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'tensors', defaultMetadata);
}

export default function TensorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

