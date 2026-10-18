"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslations } from 'next-intl';
import {
    Sigma,
    Calculator,
    ArrowRight,
    MoveRight,
    Languages,
    Circle,
    BrainCircuit,
    Grid3X3,
    TrendingUp,
    Percent,
    Binary,
    Hash,
    Atom,
    FlaskConical,
    DollarSign,
    Brackets,
    Sparkles,
    Triangle,
    Infinity,
    Brain,
    Equal,
    Plus,
    ListOrdered,
    FunctionSquare,
    ArrowUpDown,
    ToggleLeft,
    Target,
    Ruler,
    HelpCircle,
    Network,
    Layers,
    Zap,
    CircleDot,
    RotateCcw,
    Box,
    Boxes,
    Square,
    Gamepad2,
    LucideIcon
} from "lucide-react";
import { SymbolCard } from "@/components/SymbolCard";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    mathSymbols,
    greekSymbols,
    arrowSymbols,
    latinSymbols,
    setTheorySymbols,
    logicSymbols,
    linearAlgebraSymbols,
    calculusSymbols,
    probabilitySymbols,
    csSymbols,
    numberTheorySymbols,
    physicsSymbols,
    chemistrySymbols,
    financeSymbols,
    bracketSymbols,
    accentSymbols,
    geometrySymbols,
    topologySymbols,
    mlSymbols,
    relationSymbols,
    operatorSymbols,
    summationSymbols,
    functionSymbols,
    orderSymbols,
    booleanSymbols,
    optimizationSymbols,
    unitSymbols,
    quantifierSymbols,
    graphSymbols,
    combinatoricsSymbols,
    specialFunctionSymbols,
    complexSymbols,
    trigSymbols,
    diffGeoSymbols,
    tensorSymbols,
    modalSymbols,
    gameTheorySymbols,
} from "@/lib/symbols";

const ITEMS_PER_PAGE = 12;

interface CategoryItem {
    href: string;
    icon: LucideIcon;
    key: string;
}

const categories: CategoryItem[] = [
    { href: "/symbols/math", icon: Calculator, key: "math" },
    { href: "/symbols/greek", icon: Sigma, key: "greek" },
    { href: "/symbols/arrows", icon: MoveRight, key: "arrows" },
    { href: "/symbols/latin", icon: Languages, key: "latin" },
    { href: "/symbols/set-theory", icon: Circle, key: "setTheory" },
    { href: "/symbols/logic", icon: BrainCircuit, key: "logic" },
    { href: "/symbols/linear-algebra", icon: Grid3X3, key: "linearAlgebra" },
    { href: "/symbols/calculus", icon: TrendingUp, key: "calculus" },
    { href: "/symbols/probability", icon: Percent, key: "probability" },
    { href: "/symbols/computer-science", icon: Binary, key: "computerScience" },
    { href: "/symbols/number-theory", icon: Hash, key: "numberTheory" },
    { href: "/symbols/physics", icon: Atom, key: "physics" },
    { href: "/symbols/chemistry", icon: FlaskConical, key: "chemistry" },
    { href: "/symbols/finance", icon: DollarSign, key: "finance" },
    { href: "/symbols/brackets", icon: Brackets, key: "brackets" },
    { href: "/symbols/accents", icon: Sparkles, key: "accents" },
    { href: "/symbols/geometry", icon: Triangle, key: "geometry" },
    { href: "/symbols/topology", icon: Infinity, key: "topology" },
    { href: "/symbols/machine-learning", icon: Brain, key: "machineLearning" },
    { href: "/symbols/relations", icon: Equal, key: "relations" },
    { href: "/symbols/operators", icon: Plus, key: "operators" },
    { href: "/symbols/summation", icon: ListOrdered, key: "summation" },
    { href: "/symbols/functions", icon: FunctionSquare, key: "functions" },
    { href: "/symbols/order", icon: ArrowUpDown, key: "order" },
    { href: "/symbols/boolean", icon: ToggleLeft, key: "boolean" },
    { href: "/symbols/optimization", icon: Target, key: "optimization" },
    { href: "/symbols/units", icon: Ruler, key: "units" },
    { href: "/symbols/quantifiers", icon: HelpCircle, key: "quantifiers" },
    { href: "/symbols/graph-theory", icon: Network, key: "graphTheory" },
    { href: "/symbols/combinatorics", icon: Layers, key: "combinatorics" },
    { href: "/symbols/special-functions", icon: Zap, key: "specialFunctions" },
    { href: "/symbols/complex", icon: CircleDot, key: "complex" },
    { href: "/symbols/trigonometry", icon: RotateCcw, key: "trigonometry" },
    { href: "/symbols/differential-geometry", icon: Box, key: "differentialGeometry" },
    { href: "/symbols/tensors", icon: Boxes, key: "tensors" },
    { href: "/symbols/modal-logic", icon: Square, key: "modalLogic" },
    { href: "/symbols/game-theory", icon: Gamepad2, key: "gameTheory" },
];

// Combine all symbols for global search
const allSymbols = [
    ...mathSymbols,
    ...greekSymbols,
    ...arrowSymbols,
    ...latinSymbols,
    ...setTheorySymbols,
    ...logicSymbols,
    ...linearAlgebraSymbols,
    ...calculusSymbols,
    ...probabilitySymbols,
    ...csSymbols,
    ...numberTheorySymbols,
    ...physicsSymbols,
    ...chemistrySymbols,
    ...financeSymbols,
    ...bracketSymbols,
    ...accentSymbols,
    ...geometrySymbols,
    ...topologySymbols,
    ...mlSymbols,
    ...relationSymbols,
    ...operatorSymbols,
    ...summationSymbols,
    ...functionSymbols,
    ...orderSymbols,
    ...booleanSymbols,
    ...optimizationSymbols,
    ...unitSymbols,
    ...quantifierSymbols,
    ...graphSymbols,
    ...combinatoricsSymbols,
    ...specialFunctionSymbols,
    ...complexSymbols,
    ...trigSymbols,
    ...diffGeoSymbols,
    ...tensorSymbols,
    ...modalSymbols,
    ...gameTheorySymbols,
];

// Remove duplicates based on latex command
const uniqueSymbols = allSymbols.filter(
    (symbol, index, self) =>
        index === self.findIndex((s) => s.latex === symbol.latex)
);

const popularCategories = [
    { href: "/symbols/greek", key: "greek" },
    { href: "/symbols/arrows", key: "arrows" },
    { href: "/symbols/operators", key: "operators" },
    { href: "/symbols/relations", key: "relations" },
    { href: "/symbols/set-theory", key: "setTheory" },
    { href: "/symbols/calculus", key: "calculus" },
];

const blogGuides = [
    { href: "https://www.useoctree.com/blog/greater-than-less-than-symbols-guide", key: "greaterLess" },
    { href: "https://www.useoctree.com/blog/not-equal-sign-meaning-how-to-type", key: "notEqual" },
    { href: "https://www.useoctree.com/blog/plus-minus-symbol-meaning-how-to-type", key: "plusMinus" },
    { href: "https://www.useoctree.com/blog/infinity-symbol-meaning-how-to-type", key: "infinity" },
    { href: "https://www.useoctree.com/blog/degree-symbol-how-to-type", key: "degree" },
    { href: "https://www.useoctree.com/blog/real-numbers-symbol-blackboard-bold", key: "realNumbers" },
];

const introLinkClass = "text-blue-600 hover:text-blue-700 underline underline-offset-2";

// Editorial intro for the hub page. The grid of category cards alone gave the
// page almost no indexable text; this explains what the reference covers and
// links to the most-searched categories and the long-form symbol guides.
//
// It must not depend on useSearchParams: that hook opts its whole Suspense
// subtree out of static prerendering, which is why SymbolsContent (and the
// category grid) is not in the prerendered HTML. The intro is rendered as the
// fallback of its own boundary so it is in the static page, and SymbolsIntroGate
// hides it on the client only while a search query is active.
function SymbolsIntro() {
    const t = useTranslations('symbols.intro');
    const tCategories = useTranslations('symbols.categories');

    return (
        <section className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('heading')}</h2>
            <p className="mb-3">{t('coverage')}</p>
            <p className="mb-3">{t('mathMode')}</p>
            <p className="mb-4">{t('packages')}</p>
            <p className="mb-2">
                <span className="font-medium text-gray-900">{t('popularLabel')}</span>{" "}
                {popularCategories.map((category, i) => (
                    <span key={category.key}>
                        <Link href={category.href} className={introLinkClass}>
                            {tCategories(`${category.key}.title`)}
                        </Link>
                        {i < popularCategories.length - 1 ? ", " : "."}
                    </span>
                ))}
            </p>
            <p>
                <span className="font-medium text-gray-900">{t('guidesLabel')}</span>{" "}
                {blogGuides.map((guide, i) => (
                    <span key={guide.key}>
                        <a
                            href={guide.href}
                            className={introLinkClass}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t(`guides.${guide.key}`)}
                        </a>
                        {i < blogGuides.length - 1 ? ", " : "."}
                    </span>
                ))}
            </p>
        </section>
    );
}

function SymbolsIntroGate() {
    const searchParams = useSearchParams();
    if (searchParams.get("q")) return null;
    return <SymbolsIntro />;
}

function SymbolsContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    const [currentPage, setCurrentPage] = useState(1);
    const t = useTranslations('symbols');

    // If there's a search query, show filtered symbols
    if (searchQuery) {
        const filteredSymbols = uniqueSymbols.filter((symbol) =>
            symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            symbol.latex.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {t('searchResults')}
                    </h2>
                    <span className="text-sm text-gray-500">
                        {filteredSymbols.length} {filteredSymbols.length === 1 ? 'symbol' : 'symbols'} found
                    </span>
                </div>

                {filteredSymbols.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-12">
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

    // Pagination for categories
    const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedCategories = categories.slice(startIndex, endIndex);

    // Otherwise show category cards with pagination
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {paginatedCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link
                            key={category.href}
                            href={category.href}
                            className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <Icon className="size-6 text-gray-900" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {t(`categories.${category.key}.title`)}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                                {t(`categories.${category.key}.description`)}
                            </p>
                            <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                                {t('viewSymbols')}
                                <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                                    <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                                </span>
                            </span>
                        </Link>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className="mt-12 flex justify-center pb-12">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() =>
                                        currentPage > 1 && setCurrentPage(currentPage - 1)
                                    }
                                    className={
                                        currentPage === 1
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"
                                    }
                                />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, i) => (
                                <PaginationItem key={i + 1}>
                                    <PaginationLink
                                        onClick={() => setCurrentPage(i + 1)}
                                        isActive={currentPage === i + 1}
                                        className="cursor-pointer"
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() =>
                                        currentPage < totalPages &&
                                        setCurrentPage(currentPage + 1)
                                    }
                                    className={
                                        currentPage === totalPages
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </>
    );
}

export default function SymbolsPage() {
    return (
        <>
            <Suspense fallback={<SymbolsIntro />}>
                <SymbolsIntroGate />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <SymbolsContent />
            </Suspense>
        </>
    );
}
