import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { booleanSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("boolean");

export default function BooleanSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={booleanSymbols}
            categoryKey="boolean"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
