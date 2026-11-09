import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { linearAlgebraSymbols } from "@/lib/symbols";

export default async function LinearAlgebraSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("linear-algebra", locale);
    return (
        <SymbolCategoryPage
            symbols={linearAlgebraSymbols}
            categoryKey="linearAlgebra"
            intro={intro}
        />
    );
}
