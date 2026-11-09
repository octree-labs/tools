import AiLatexGeneratorClient from "./client";
import AiLatexGeneratorSeoContent from "./seo-content";

export default async function AiLatexGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <AiLatexGeneratorClient />
      <AiLatexGeneratorSeoContent locale={locale} />
    </>
  );
}
