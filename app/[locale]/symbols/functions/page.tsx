import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { functionSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("functions");

export default function FunctionsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={functionSymbols}
            categoryKey="functions"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
