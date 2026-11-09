import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { optimizationSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("optimization");

export default function OptimizationSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={optimizationSymbols}
            categoryKey="optimization"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
