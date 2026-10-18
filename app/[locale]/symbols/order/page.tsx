import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { orderSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("order");

export default function OrderSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={orderSymbols}
            categoryKey="order"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
