import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { graphSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("graph-theory");

export default function GraphTheorySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={graphSymbols}
            categoryKey="graphTheory"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
