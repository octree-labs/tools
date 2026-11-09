import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { bracketSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("brackets");

export default function BracketsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={bracketSymbols}
            categoryKey="brackets"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
