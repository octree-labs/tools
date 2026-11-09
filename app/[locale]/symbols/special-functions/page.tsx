import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { specialFunctionSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("special-functions");

export default function SpecialFunctionsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={specialFunctionSymbols}
            categoryKey="specialFunctions"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
