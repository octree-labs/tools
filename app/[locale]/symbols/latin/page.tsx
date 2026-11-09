import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { latinSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("latin");

export default function LatinSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={latinSymbols}
            categoryKey="latin"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
