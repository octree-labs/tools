import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "Quantum Mechanics Symbols in LaTeX - Bra-Ket, ℏ, Operators",
  description: "Quantum physics symbols in LaTeX: ℏ (\\hbar), bra ⟨ψ|, ket |ψ⟩, \\braket from the braket and physics packages, \\hat{H}, dagger, ∇² and ∂ₜ, with copy-ready commands.",
  keywords: [
    // Physics keywords
    "quantum symbols",
    "quantum physics symbols",
    "bra ket latex",
    "physics symbols",
    "quantum mechanics symbols",
    "vector field symbols",
    "physical constants symbols",
    "planck constant symbol",
    "h bar symbol",
    "electric field symbol",
    "magnetic field symbol",
    "wave function symbol",
    // LaTeX specific
    "latex physics symbols",
    "latex quantum mechanics",
    "latex bra ket",
    "latex planck constant",
    "latex nabla",
    "latex laplacian",
    "latex tensor",
    "hbar latex",
    "langle rangle latex",
    "braket latex",
    "latex wave function",
    "latex lagrangian",
    "latex hamiltonian",
    "latex christoffel symbol",
    "latex vector field",
    "latex divergence curl",
    "nabla cdot times latex",
    "latex d'alembertian",
    "scientific symbols",
    "research symbols",
  ],
  openGraph: {
    title: "Quantum Mechanics Symbols in LaTeX - Bra-Ket, ℏ, Operators",
    description: "Copy-paste LaTeX for ℏ, bra-ket notation, operators, the dagger and physics notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'physics', defaultMetadata);
}

export default function PhysicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
