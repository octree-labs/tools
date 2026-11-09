import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { linearAlgebraSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("linear-algebra");

export default function LinearAlgebraSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={linearAlgebraSymbols}
            categoryKey="linearAlgebra"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
