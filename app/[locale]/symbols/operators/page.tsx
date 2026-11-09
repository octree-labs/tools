import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { operatorSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("operators");

export default function OperatorsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={operatorSymbols}
            categoryKey="operators"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
