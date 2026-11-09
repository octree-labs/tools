import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { tensorSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("tensors");

export default function TensorsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={tensorSymbols}
            categoryKey="tensors"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
