import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { mathSymbols } from "@/lib/symbols";

export default async function MathSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("math", locale);
    return (
        <SymbolCategoryPage
            symbols={mathSymbols}
            categoryKey="math"
            intro={intro}
        />
    );
}
