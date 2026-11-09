import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { financeSymbols } from "@/lib/symbols";

export default async function FinanceSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("finance", locale);
    return (
        <SymbolCategoryPage
            symbols={financeSymbols}
            categoryKey="finance"
            intro={intro}
        />
    );
}
