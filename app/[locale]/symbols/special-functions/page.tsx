import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { specialFunctionSymbols } from "@/lib/symbols";

export default async function SpecialFunctionsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("special-functions", locale);
    return (
        <SymbolCategoryPage
            symbols={specialFunctionSymbols}
            categoryKey="specialFunctions"
            intro={intro}
        />
    );
}
