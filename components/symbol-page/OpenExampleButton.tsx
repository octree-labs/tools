"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openInOctree } from "@/lib/open-in-octree";

/** Sends the page's example document to the Octree editor as a draft. */
export function OpenExampleButton({
  latex,
  title,
  source,
  label,
}: {
  latex: string;
  title: string;
  source: string;
  label: string;
}) {
  return (
    <Button variant="gradient" onClick={() => openInOctree({ latex, title, source })}>
      <ExternalLink className="h-4 w-4" />
      {label}
    </Button>
  );
}
