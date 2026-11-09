import TableToLatexClient from "./client";
import TableToLatexSeoContent from "./seo-content";

export default async function TableToLatexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <TableToLatexClient />
      <TableToLatexSeoContent locale={locale} />
    </>
  );
}
