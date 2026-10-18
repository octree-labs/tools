import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { logicSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("logic");

export default function LogicSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={logicSymbols}
            categoryKey="logic"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
