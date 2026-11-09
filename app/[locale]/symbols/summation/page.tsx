import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { summationSymbols } from "@/lib/symbols";

export default async function SummationSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("summation", locale);
    return (
        <SymbolCategoryPage
            symbols={summationSymbols}
            categoryKey="summation"
            intro={intro}
        />
    );
}
