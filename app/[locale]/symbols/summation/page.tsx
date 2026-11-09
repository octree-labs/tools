import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { summationSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("summation");

export default function SummationSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={summationSymbols}
            categoryKey="summation"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
