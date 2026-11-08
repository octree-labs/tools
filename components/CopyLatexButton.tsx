"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { EVENTS, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Copies a LaTeX command to the clipboard and tracks the copy. Shared by the
 * symbol cards and the quick-reference tables on symbol category pages.
 */
export function useCopyLatex(latex: string) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(latex);
            track(EVENTS.SYMBOL_COPIED, { latex });
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return { copied, copy };
}

export function CopyLatexButton({ latex, className }: { latex: string; className?: string }) {
    const { copied, copy } = useCopyLatex(latex);

    return (
        <button
            type="button"
            onClick={copy}
            className={cn(
                "inline-flex items-center gap-1.5 px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 rounded-md transition-colors",
                className
            )}
            title="Copy LaTeX"
            aria-label={`Copy ${latex}`}
        >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy"}
        </button>
    );
}
