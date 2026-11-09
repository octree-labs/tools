import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { physicsSymbols } from "@/lib/symbols";

const Intro = getSymbolIntro("physics");

export default function PhysicsSymbolsPage() {
    return (
        <SymbolCategoryPage
            symbols={physicsSymbols}
            categoryKey="physics"
            intro={Intro ? <Intro /> : undefined}
        />
    );
}
