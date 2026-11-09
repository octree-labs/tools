import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { functionSymbols } from "@/lib/symbols";

export default async function FunctionsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("functions", locale);
    return (
        <SymbolCategoryPage
            symbols={functionSymbols}
            categoryKey="functions"
            intro={intro}
        />
    );
}
