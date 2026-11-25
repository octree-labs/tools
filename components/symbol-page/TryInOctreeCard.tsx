"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCtaImpression } from "@/hooks/use-cta-impression";
import { normalizePlacement, openInOctree } from "@/lib/open-in-octree";
import { cn } from "@/lib/utils";

/**
 * "Try it in a real LaTeX document": sends a starter document that already
 * uses the page's symbol(s) to the Octree editor as a draft, and reports a
 * `cta_impression` for the same placement so click-through is measurable.
 */
export function TryInOctreeCard({
  latex,
  title,
  source,
  placement,
  heading,
  body,
  label,
  className,
}: {
  latex: string;
  /** Draft title shown in the editor. */
  title: string;
  /** Draft source, e.g. tools:symbols:arrows:right-arrow. */
  source: string;
  /** Defaults to `source`. */
  placement?: string;
  heading: string;
  body: string;
  label: string;
  className?: string;
}) {
  const resolvedPlacement = normalizePlacement(placement || source);
  const ref = useCtaImpression<HTMLDivElement>(resolvedPlacement);

  return (
    <div
      ref={ref}
      data-cta-placement={resolvedPlacement}
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border border-blue-200 bg-blue-50/60 p-4",
        className,
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900">{heading}</p>
        <p className="text-sm text-gray-600 mt-1">{body}</p>
      </div>
      <Button
        variant="gradient"
        size="lg"
        className="shrink-0"
        onClick={() => openInOctree({ latex, title, source, placement: resolvedPlacement })}
      >
        <ExternalLink className="h-4 w-4" />
        {label}
      </Button>
    </div>
  );
}
