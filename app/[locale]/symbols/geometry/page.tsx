import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { geometrySymbols } from "@/lib/symbols";

export default async function GeometrySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("geometry", locale);
    return (
        <SymbolCategoryPage
            symbols={geometrySymbols}
            categoryKey="geometry"
            intro={intro}
        />
    );
}
