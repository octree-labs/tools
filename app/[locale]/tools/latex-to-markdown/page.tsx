import LatexToMarkdownClient from "./client";
import LatexToMarkdownSeoContent from "./seo-content";

export default async function LatexToMarkdownPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <LatexToMarkdownClient />
      <LatexToMarkdownSeoContent locale={locale} />
    </>
  );
}
