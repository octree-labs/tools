import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { gameTheorySymbols } from "@/lib/symbols";

export default async function GameTheorySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("game-theory", locale);
    return (
        <SymbolCategoryPage
            symbols={gameTheorySymbols}
            categoryKey="gameTheory"
            intro={intro}
        />
    );
}
