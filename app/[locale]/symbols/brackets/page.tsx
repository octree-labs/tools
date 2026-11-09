import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { bracketSymbols } from "@/lib/symbols";

export default async function BracketsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("brackets", locale);
    return (
        <SymbolCategoryPage
            symbols={bracketSymbols}
            categoryKey="brackets"
            intro={intro}
        />
    );
}
