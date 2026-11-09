import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { quantifierSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("quantifiers");

export default function QuantifiersSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={quantifierSymbols}
            categoryKey="quantifiers"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
