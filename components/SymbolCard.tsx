"use client";

import { Copy, Check } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import KatexPreview from "./KatexPreview";
import { useCopyLatex } from "./CopyLatexButton";

interface SymbolCardProps {
    latex: string;
    name?: string;
    /** Locale-less path of the symbol's own page; the name links there. */
    href?: string;
}

export function SymbolCard({ latex, name, href }: SymbolCardProps) {
    const { copied, copy: copyToClipboard } = useCopyLatex(latex);

    return (
        <div
            className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-6 pb-11 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
            onClick={copyToClipboard}
        >
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Copy LaTeX"
                >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[60px] mb-4">
                <div className="text-2xl">
                    <KatexPreview latex={latex} displayMode={true} />
                </div>
            </div>

            <div className="text-center">
                {name && (
                    <p className="text-sm font-medium text-gray-900 mb-1">
                        {href ? (
                            <Link
                                href={href}
                                onClick={(e) => e.stopPropagation()}
                                className="hover:text-blue-600 hover:underline"
                            >
                                {name}
                            </Link>
                        ) : (
                            name
                        )}
                    </p>
                )}
                <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 font-mono">
                    {latex}
                </code>
            </div>
        </div>
    );
}
