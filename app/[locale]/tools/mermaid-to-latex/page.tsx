import MermaidToLatexClient from "./client";
import MermaidToLatexSeoContent from "./seo-content";

export default async function MermaidToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <MermaidToLatexClient />
      <MermaidToLatexSeoContent locale={locale} />
    </>
  );
}
