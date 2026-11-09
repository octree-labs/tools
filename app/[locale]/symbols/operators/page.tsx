import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { operatorSymbols } from "@/lib/symbols";

export default async function OperatorsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("operators", locale);
    return (
        <SymbolCategoryPage
            symbols={operatorSymbols}
            categoryKey="operators"
            intro={intro}
        />
    );
}
