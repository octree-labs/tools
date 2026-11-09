import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Gradient Symbol in LaTeX (\\nabla) & Machine Learning Symbols",
  description: "The gradient symbol in LaTeX is \\nabla. Copy-ready commands for gradients, partial derivatives, loss ℒ, expectation 𝔼, argmax, argmin and norms in machine learning.",
  keywords: [
    "latex gradient symbol",
    "gradient symbol latex",
    "gradient in latex",
    "nabla latex",
    "partial derivative latex",
    "machine learning symbols",
    "ml symbols latex",
    "loss function symbols",
    "optimization symbols",
    "argmax symbol",
    "argmin symbol",
    "gradient descent symbols",
    "expectation notation ml",
    "probability symbols ml",
    "neural network notation",
    "information theory symbols",
    "kl divergence latex",
    "cross entropy latex",
    "softmax latex",
    "sigmoid latex",
    "relu latex",
    "latex gradient",
    "latex theta",
    "latex weight matrix",
    "deep learning symbols",
    "ai symbols latex",
    "tensor symbol",
    "hadamard product latex",
    "l1 l2 norm latex",
  ],
  openGraph: {
    title: "Gradient Symbol in LaTeX & Machine Learning Notation",
    description: "Copy-paste LaTeX for the gradient \\nabla, partial derivatives, loss functions, argmax and ML notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'machine-learning', defaultMetadata);
}

export default function MLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

