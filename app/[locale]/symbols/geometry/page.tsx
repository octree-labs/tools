import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { geometrySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("geometry");

export default function GeometrySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={geometrySymbols}
            categoryKey="geometry"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
