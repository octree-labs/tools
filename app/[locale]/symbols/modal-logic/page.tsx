import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { modalSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("modal-logic");

export default function ModalLogicSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={modalSymbols}
            categoryKey="modalLogic"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
