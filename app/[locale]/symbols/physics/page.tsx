import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { getSymbolIntro } from "@/lib/symbol-intros";
import { physicsSymbols } from "@/lib/symbols";

export default async function PhysicsSymbolsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const intro = getSymbolIntro("physics", locale);
    return (
        <SymbolCategoryPage
            symbols={physicsSymbols}
            categoryKey="physics"
            intro={intro}
        />
    );
}
