import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { tensorSymbols } from "@/lib/symbols";

export default async function TensorsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("tensors", locale);
    return (
        <SymbolCategoryPage
            symbols={tensorSymbols}
            categoryKey="tensors"
            intro={intro}
        />
    );
}
