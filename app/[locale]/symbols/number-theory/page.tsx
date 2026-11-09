import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { numberTheorySymbols } from "@/lib/symbols";

export default async function NumberTheorySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("number-theory", locale);
    return (
        <SymbolCategoryPage
            symbols={numberTheorySymbols}
            categoryKey="numberTheory"
            intro={intro}
        />
    );
}
