import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { calculusSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("calculus");

export default function CalculusSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={calculusSymbols}
            categoryKey="calculus"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
