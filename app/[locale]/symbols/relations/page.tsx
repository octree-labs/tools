import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { relationSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("relations");

export default function RelationsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={relationSymbols}
            categoryKey="relations"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
