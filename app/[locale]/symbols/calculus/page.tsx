import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { calculusSymbols } from "@/lib/symbols";

export default async function CalculusSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("calculus", locale);
    return (
        <SymbolCategoryPage
            symbols={calculusSymbols}
            categoryKey="calculus"
            intro={intro}
        />
    );
}
