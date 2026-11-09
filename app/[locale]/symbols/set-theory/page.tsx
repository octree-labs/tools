import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { setTheorySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("set-theory");

export default function SetTheorySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={setTheorySymbols}
            categoryKey="setTheory"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
