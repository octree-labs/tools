import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { optimizationSymbols } from "@/lib/symbols";

export default async function OptimizationSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("optimization", locale);
    return (
        <SymbolCategoryPage
            symbols={optimizationSymbols}
            categoryKey="optimization"
            intro={intro}
        />
    );
}
