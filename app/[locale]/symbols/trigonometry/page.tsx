import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { trigSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("trigonometry");

export default function TrigonometrySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={trigSymbols}
            categoryKey="trigonometry"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
