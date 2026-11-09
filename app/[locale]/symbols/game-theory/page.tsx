import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { gameTheorySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("game-theory");

export default function GameTheorySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={gameTheorySymbols}
            categoryKey="gameTheory"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
