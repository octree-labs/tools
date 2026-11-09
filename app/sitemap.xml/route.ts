import { SITEMAP_BASE_URL, sitemapIds } from '../sitemap'

export const dynamic = 'force-static'

/** Sitemap index over the split sitemaps that app/sitemap.ts serves at /sitemap/<id>.xml. */
export function GET() {
  const entries = sitemapIds()
    .map(id => `  <sitemap><loc>${SITEMAP_BASE_URL}/sitemap/${id}.xml</loc></sitemap>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
