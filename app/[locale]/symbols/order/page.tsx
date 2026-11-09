import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { orderSymbols } from "@/lib/symbols";

export default async function OrderSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("order", locale);
    return (
        <SymbolCategoryPage
            symbols={orderSymbols}
            categoryKey="order"
            intro={intro}
        />
    );
}
