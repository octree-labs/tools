import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { probabilitySymbols } from "@/lib/symbols";

export default async function ProbabilitySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("probability", locale);
    return (
        <SymbolCategoryPage
            symbols={probabilitySymbols}
            categoryKey="probability"
            intro={intro}
        />
    );
}
