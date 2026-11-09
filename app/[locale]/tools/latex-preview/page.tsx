import LatexPreviewClient from "./client";
import LatexPreviewSeoContent from "./seo-content";

export default async function LatexPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <LatexPreviewClient />
      <LatexPreviewSeoContent locale={locale} />
    </>
  );
}
