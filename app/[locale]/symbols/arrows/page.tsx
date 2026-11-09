import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { arrowSymbols } from "@/lib/symbols";

export default async function ArrowSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("arrows", locale);
    return (
        <SymbolCategoryPage
            symbols={arrowSymbols}
            categoryKey="arrows"
            intro={intro}
        />
    );
}
