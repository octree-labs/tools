import CitationGeneratorClient from "./client";
import CitationGeneratorSeoContent from "./seo-content";

export default async function CitationGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <CitationGeneratorClient />
      <CitationGeneratorSeoContent locale={locale} />
    </>
  );
}
