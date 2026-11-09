import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { greekSymbols } from "@/lib/symbols";

export default async function GreekSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("greek", locale);
    return (
        <SymbolCategoryPage
            symbols={greekSymbols}
            categoryKey="greek"
            intro={intro}
        />
    );
}
