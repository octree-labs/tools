import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { relationSymbols } from "@/lib/symbols";

export default async function RelationsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("relations", locale);
    return (
        <SymbolCategoryPage
            symbols={relationSymbols}
            categoryKey="relations"
            intro={intro}
        />
    );
}
