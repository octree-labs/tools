import ArxivToLatexClient from "./client";
import ArxivToLatexSeoContent from "./seo-content";

export default async function ArxivToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ArxivToLatexClient />
      <ArxivToLatexSeoContent locale={locale} />
    </>
  );
}
