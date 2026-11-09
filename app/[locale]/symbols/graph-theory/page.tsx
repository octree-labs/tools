import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { graphSymbols } from "@/lib/symbols";

export default async function GraphTheorySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("graph-theory", locale);
    return (
        <SymbolCategoryPage
            symbols={graphSymbols}
            categoryKey="graphTheory"
            intro={intro}
        />
    );
}
