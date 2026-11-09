import LatexWordCounterClient from "./client";
import LatexWordCounterSeoContent from "./seo-content";

export default async function LatexWordCounterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <LatexWordCounterClient />
      <LatexWordCounterSeoContent locale={locale} />
    </>
  );
}
