import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Linear Algebra in LaTeX - Matrix, Transpose, Vector, Norm",
  description: "Linear algebra symbols in LaTeX, copy-ready: pmatrix and bmatrix matrices, transpose A^\\top, inverse, determinant, trace, norms and vectors \\mathbf{v}.",
  keywords: [
    "matrix latex",
    "transpose latex",
    "vector latex",
    "linear algebra symbols latex",
    "determinant latex",
    "norm latex",
    "pmatrix latex",
    // Linear algebra keywords
    "matrix symbols",
    "vector notation symbols",
    "dot product symbol",
    "cross product symbol",
    "tensor symbol",
    "transpose symbol",
    "determinant symbol",
    "norm symbol",
    "eigenvalue symbol",
    "identity matrix symbol",
    // LaTeX specific
    "latex linear algebra",
    "latex vector",
    "latex matrix",
    "latex transpose",
    "latex inverse",
    "latex determinant",
    "latex norm",
    "latex inner product",
    "vec latex",
    "mathbf latex",
    "bmatrix pmatrix latex",
    "latex tensor product",
    "latex direct sum",
    "otimes oplus latex",
    "langle rangle latex",
    "lVert rVert latex",
    "latex eigenvalue",
    "latex identity matrix",
    "math symbols",
    "academic symbols",
  ],
  openGraph: {
    title: "Linear Algebra in LaTeX - Matrix, Transpose, Vector, Norm",
    description: "How to write matrices, vectors, transposes, determinants and norms in LaTeX.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'linear-algebra', defaultMetadata);
}

export default function LinearAlgebraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
