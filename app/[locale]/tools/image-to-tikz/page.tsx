import ImageToTikzClient from "./client";
import ImageToTikzSeoContent from "./seo-content";

export default async function ImageToTikzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ImageToTikzClient />
      <ImageToTikzSeoContent locale={locale} />
    </>
  );
}
