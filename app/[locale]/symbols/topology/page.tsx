import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { topologySymbols } from "@/lib/symbols";

export default async function TopologySymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("topology", locale);
    return (
        <SymbolCategoryPage
            symbols={topologySymbols}
            categoryKey="topology"
            intro={intro}
        />
    );
}
