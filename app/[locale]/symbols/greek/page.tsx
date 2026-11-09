import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { greekSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("greek");

export default function GreekSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={greekSymbols}
            categoryKey="greek"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
