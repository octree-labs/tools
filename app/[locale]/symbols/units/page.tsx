import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { unitSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("units");

export default function UnitsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={unitSymbols}
            categoryKey="units"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
