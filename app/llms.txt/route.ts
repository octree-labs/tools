import { buildLlmsTxt, textResponse } from "@/lib/discovery/llms";

// Generated at build time from the tool, template and symbol registries.
export const dynamic = "force-static";

export function GET() {
  return textResponse(buildLlmsTxt());
}
