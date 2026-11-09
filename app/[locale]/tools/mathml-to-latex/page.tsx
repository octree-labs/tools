import MathmlToLatexClient from "./client";
import MathmlToLatexSeoContent from "./seo-content";

export default async function MathmlToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <MathmlToLatexClient />
      <MathmlToLatexSeoContent locale={locale} />
    </>
  );
}
