import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { diffGeoSymbols } from "@/lib/symbols";

export default async function DifferentialGeometrySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("differential-geometry", locale);
    return (
        <SymbolCategoryPage
            symbols={diffGeoSymbols}
            categoryKey="differentialGeometry"
            intro={intro}
        />
    );
}
