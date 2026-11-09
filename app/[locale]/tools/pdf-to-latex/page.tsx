import PdfToLatexClient from "./client";
import PdfToLatexSeoContent from "./seo-content";

export default async function PdfToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PdfToLatexClient />
      <PdfToLatexSeoContent locale={locale} />
    </>
  );
}
