import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { csSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("computer-science");

export default function ComputerScienceSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={csSymbols}
            categoryKey="computerScience"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
