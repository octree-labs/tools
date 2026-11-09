import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { accentSymbols } from "@/lib/symbols";

export default async function AccentsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("accents", locale);
    return (
        <SymbolCategoryPage
            symbols={accentSymbols}
            categoryKey="accents"
            intro={intro}
        />
    );
}
