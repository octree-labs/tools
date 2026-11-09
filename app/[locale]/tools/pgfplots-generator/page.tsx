import PgfplotsGeneratorClient from "./client";
import PgfplotsGeneratorSeoContent from "./seo-content";

export default async function PgfplotsGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PgfplotsGeneratorClient />
      <PgfplotsGeneratorSeoContent locale={locale} />
    </>
  );
}
