import EquationToLatexClient from "./client";
import EquationToLatexSeoContent from "./seo-content";

export default async function EquationToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <EquationToLatexClient />
      <EquationToLatexSeoContent locale={locale} />
    </>
  );
}
