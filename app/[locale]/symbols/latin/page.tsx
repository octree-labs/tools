import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { latinSymbols } from "@/lib/symbols";

export default async function LatinSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("latin", locale);
    return (
        <SymbolCategoryPage
            symbols={latinSymbols}
            categoryKey="latin"
            intro={intro}
        />
    );
}
