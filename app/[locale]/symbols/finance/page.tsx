import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { financeSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("finance");

export default function FinanceSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={financeSymbols}
            categoryKey="finance"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
