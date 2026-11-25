"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCtaImpression } from "@/hooks/use-cta-impression";
import { openInOctree } from "@/lib/open-in-octree";

/** Sends the page's example document to the Octree editor as a draft. */
export function OpenExampleButton({
  latex,
  title,
  source,
  placement,
  label,
}: {
  latex: string;
  title: string;
  source: string;
  /** cta_impression / click placement; defaults to `source`. */
  placement?: string;
  label: string;
}) {
  const ref = useCtaImpression<HTMLDivElement>(placement || source);
  return (
    <div ref={ref} data-cta-placement={placement || source} className="inline-block">
      <Button variant="gradient" onClick={() => openInOctree({ latex, title, source, placement })}>
        <ExternalLink className="h-4 w-4" />
        {label}
      </Button>
    </div>
  );
}
