import MarkdownToLatexClient from "./client";
import MarkdownToLatexSeoContent from "./seo-content";

export default async function MarkdownToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <MarkdownToLatexClient />
      <MarkdownToLatexSeoContent locale={locale} />
    </>
  );
}
