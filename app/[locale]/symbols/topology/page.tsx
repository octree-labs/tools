import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { topologySymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("topology");

export default function TopologySymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={topologySymbols}
            categoryKey="topology"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
