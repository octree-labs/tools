"use client";

import { Suspense, type ReactNode } from "react";
import { SymbolCard } from "@/components/SymbolCard";
import { useSearchParams } from "next/navigation";
import { useTranslations } from 'next-intl';
import { SymbolItem } from "@/lib/symbols";

interface SymbolCategoryPageProps {
    symbols: SymbolItem[];
    categoryKey: string;
    /**
     * Optional editorial intro (see lib/symbol-intros) rendered above the
     * grid. It is passed in from the server page so it is part of the static
     * HTML; it is only hidden on the client while a search query is active.
     */
    intro?: ReactNode;
}

function SymbolCategoryContent({ symbols, categoryKey }: Omit<SymbolCategoryPageProps, "intro">) {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    const t = useTranslations('symbols');

    const filteredSymbols = symbols.filter((symbol) =>
        symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        symbol.latex.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    {t(`categories.${categoryKey}.subtitle`)}
                </h2>
                <span className="text-sm text-gray-500">
                    {filteredSymbols.length} {filteredSymbols.length === 1 ? 'symbol' : 'symbols'}
                </span>
            </div>

            {filteredSymbols.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredSymbols.map((symbol) => (
                        <SymbolCard key={symbol.latex} latex={symbol.latex} name={symbol.name} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500">
                        {t('noSymbolsFound')} &quot;{searchQuery}&quot;
                    </p>
                </div>
            )}
        </>
    );
}

// useSearchParams opts its Suspense subtree out of prerendering, so the intro
// is rendered as the boundary's fallback (static HTML) and this gate only
// removes it on the client when the user is searching.
function IntroGate({ intro }: { intro: ReactNode }) {
    const searchParams = useSearchParams();
    if (searchParams.get("q")) return null;
    return <>{intro}</>;
}

export default function SymbolCategoryPage({ symbols, categoryKey, intro }: SymbolCategoryPageProps) {
    return (
        <>
            {intro && (
                <Suspense fallback={intro}>
                    <IntroGate intro={intro} />
                </Suspense>
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <SymbolCategoryContent symbols={symbols} categoryKey={categoryKey} />
            </Suspense>
        </>
    );
}
