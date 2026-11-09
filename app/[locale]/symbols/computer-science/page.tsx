import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { csSymbols } from "@/lib/symbols";

export default async function ComputerScienceSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("computer-science", locale);
    return (
        <SymbolCategoryPage
            symbols={csSymbols}
            categoryKey="computerScience"
            intro={intro}
        />
    );
}
