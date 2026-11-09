import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { mlSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("machine-learning");

export default function MachineLearningSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={mlSymbols}
            categoryKey="machineLearning"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
