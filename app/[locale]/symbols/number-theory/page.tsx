import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { numberTheorySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("number-theory");

export default function NumberTheorySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={numberTheorySymbols}
            categoryKey="numberTheory"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
