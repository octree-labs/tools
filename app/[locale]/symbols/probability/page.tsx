import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { probabilitySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("probability");

export default function ProbabilitySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={probabilitySymbols}
            categoryKey="probability"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
