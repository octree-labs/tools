import LatexToWordTool from './LatexToWordTool';
import LatexToWordSeoContent from './seo-content';

export default async function LatexToWordPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      <LatexToWordTool />
      <LatexToWordSeoContent locale={locale} />
    </div>
  );
}
