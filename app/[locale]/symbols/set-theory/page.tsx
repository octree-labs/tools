import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { setTheorySymbols } from "@/lib/symbols";

export default async function SetTheorySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("set-theory", locale);
    return (
        <SymbolCategoryPage
            symbols={setTheorySymbols}
            categoryKey="setTheory"
            intro={intro}
        />
    );
}
