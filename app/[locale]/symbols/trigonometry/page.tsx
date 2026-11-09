import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { trigSymbols } from "@/lib/symbols";

export default async function TrigonometrySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("trigonometry", locale);
    return (
        <SymbolCategoryPage
            symbols={trigSymbols}
            categoryKey="trigonometry"
            intro={intro}
        />
    );
}
