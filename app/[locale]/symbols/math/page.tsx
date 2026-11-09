import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { mathSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("math");

export default function MathSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={mathSymbols}
            categoryKey="math"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
