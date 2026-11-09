import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { combinatoricsSymbols } from "@/lib/symbols";

export default async function CombinatoricsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("combinatorics", locale);
    return (
        <SymbolCategoryPage
            symbols={combinatoricsSymbols}
            categoryKey="combinatorics"
            intro={intro}
        />
    );
}
