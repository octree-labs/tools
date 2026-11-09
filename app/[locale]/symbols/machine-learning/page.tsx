import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { mlSymbols } from "@/lib/symbols";

export default async function MachineLearningSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("machine-learning", locale);
    return (
        <SymbolCategoryPage
            symbols={mlSymbols}
            categoryKey="machineLearning"
            intro={intro}
        />
    );
}
