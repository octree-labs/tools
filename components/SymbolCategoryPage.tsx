import type { ReactNode } from "react";
import { SymbolCategoryPageClient } from "@/components/SymbolCategoryPageClient";
import { symbolSlugToTranslationKey } from "@/lib/symbol-categories";
import type { SymbolItem } from "@/lib/symbols";
import { buildCategoryStarterDocument } from "@/lib/symbol-pages/starter";

const slugByKey = Object.fromEntries(
    Object.entries(symbolSlugToTranslationKey).map(([slug, key]) => [key, slug]),
);

/**
 * Server wrapper: builds the category's Open-in-Octree starter document here
 * so the symbol facts and copy stay out of the client bundle.
 */
export default function SymbolCategoryPage({
    symbols,
    categoryKey,
    intro,
}: {
    symbols: SymbolItem[];
    categoryKey: string;
    intro?: ReactNode;
}) {
    const categorySlug = slugByKey[categoryKey];
    const starter = categorySlug ? buildCategoryStarterDocument(categorySlug) : undefined;
    return (
        <SymbolCategoryPageClient
            symbols={symbols}
            categoryKey={categoryKey}
            categorySlug={categorySlug}
            starterLatex={starter?.latex}
            intro={intro}
        />
    );
}
