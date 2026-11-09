import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { quantifierSymbols } from "@/lib/symbols";

export default async function QuantifiersSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("quantifiers", locale);
    return (
        <SymbolCategoryPage
            symbols={quantifierSymbols}
            categoryKey="quantifiers"
            intro={intro}
        />
    );
}
