import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { chemistrySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("chemistry");

export default function ChemistrySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={chemistrySymbols}
            categoryKey="chemistry"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
