import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { unitSymbols } from "@/lib/symbols";

export default async function UnitsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("units", locale);
    return (
        <SymbolCategoryPage
            symbols={unitSymbols}
            categoryKey="units"
            intro={intro}
        />
    );
}
