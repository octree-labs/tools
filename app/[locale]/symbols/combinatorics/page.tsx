import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { combinatoricsSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("combinatorics");

export default function CombinatoricsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={combinatoricsSymbols}
            categoryKey="combinatorics"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
