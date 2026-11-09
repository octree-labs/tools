import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { complexSymbols } from "@/lib/symbols";

export default async function ComplexSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("complex", locale);
    return (
        <SymbolCategoryPage
            symbols={complexSymbols}
            categoryKey="complex"
            intro={intro}
        />
    );
}
