import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { logicSymbols } from "@/lib/symbols";

export default async function LogicSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("logic", locale);
    return (
        <SymbolCategoryPage
            symbols={logicSymbols}
            categoryKey="logic"
            intro={intro}
        />
    );
}
