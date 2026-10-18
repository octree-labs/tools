import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { complexSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("complex");

export default function ComplexSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={complexSymbols}
            categoryKey="complex"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
