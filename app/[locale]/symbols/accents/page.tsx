import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { accentSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("accents");

export default function AccentsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={accentSymbols}
            categoryKey="accents"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
