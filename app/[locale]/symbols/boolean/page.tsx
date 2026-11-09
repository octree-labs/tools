import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { booleanSymbols } from "@/lib/symbols";

export default async function BooleanSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("boolean", locale);
    return (
        <SymbolCategoryPage
            symbols={booleanSymbols}
            categoryKey="boolean"
            intro={intro}
        />
    );
}
