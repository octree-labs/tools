import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { arrowSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("arrows");

export default function ArrowSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={arrowSymbols}
            categoryKey="arrows"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
