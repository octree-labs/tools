import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { diffGeoSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("differential-geometry");

export default function DifferentialGeometrySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={diffGeoSymbols}
            categoryKey="differentialGeometry"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
