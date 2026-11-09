import HtmlToLatexClient from "./client";
import HtmlToLatexSeoContent from "./seo-content";

export default async function HtmlToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <HtmlToLatexClient />
      <HtmlToLatexSeoContent locale={locale} />
    </>
  );
}
