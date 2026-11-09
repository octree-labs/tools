import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { modalSymbols } from "@/lib/symbols";

export default async function ModalLogicSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("modal-logic", locale);
    return (
        <SymbolCategoryPage
            symbols={modalSymbols}
            categoryKey="modalLogic"
            intro={intro}
        />
    );
}
