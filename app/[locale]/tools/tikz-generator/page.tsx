import TikzGeneratorClient from "./client";
import TikzGeneratorSeoContent from "./seo-content";

export default async function TikzGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <TikzGeneratorClient />
      <TikzGeneratorSeoContent locale={locale} />
    </>
  );
}
