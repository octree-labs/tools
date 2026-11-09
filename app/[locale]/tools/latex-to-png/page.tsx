import LatexToPngTool from './LatexToPngTool';
import LatexToPngSeoContent from './seo-content';

export default async function LatexToPngPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      <LatexToPngTool />
      <LatexToPngSeoContent locale={locale} />
    </div>
  );
}
