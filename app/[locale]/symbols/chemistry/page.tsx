import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { chemistrySymbols } from "@/lib/symbols";

export default async function ChemistrySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("chemistry", locale);
    return (
        <SymbolCategoryPage
            symbols={chemistrySymbols}
            categoryKey="chemistry"
            intro={intro}
        />
    );
}
