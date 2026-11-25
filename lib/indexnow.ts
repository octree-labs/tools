/**
 * IndexNow (https://www.indexnow.org) tells Bing, Yandex, Seznam, Naver and
 * other participating engines that URLs changed, so they recrawl them without
 * waiting for the next sitemap fetch. ChatGPT search and Copilot answer from
 * Bing's index. The key is public by design: engines verify it by fetching
 * https://<host>/<key>.txt, served from /public.
 */

export const INDEXNOW_KEY = '741b57c6449e1b5df8f8aeb1274a2b11'
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
/** IndexNow accepts at most 10,000 URLs per request. */
export const INDEXNOW_MAX_URLS = 10000

export interface SitemapEntry {
  loc: string
  lastmod?: string
}

const decodeXml = (text: string) =>
  text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim()

/** Parse <url> (or, for an index, <sitemap>) entries with their optional lastmod. */
export function parseSitemap(xml: string): { isIndex: boolean; entries: SitemapEntry[] } {
  const isIndex = /<sitemapindex[\s>]/.test(xml)
  const tag = isIndex ? 'sitemap' : 'url'
  const entries: SitemapEntry[] = []
  for (const [, block] of xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'))) {
    const loc = block?.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]
    if (!loc) continue
    const lastmod = block?.match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]
    entries.push({ loc: decodeXml(loc), lastmod: lastmod ? decodeXml(lastmod) : undefined })
  }
  return { isIndex, entries }
}

/**
 * URLs on `host` whose lastmod falls within `days` of `now`. URLs without a
 * lastmod are included only when `includeUndated` is set (a first, manual run).
 */
export function selectRecentUrls(
  entries: SitemapEntry[],
  { host, days, now = new Date(), includeUndated = false }: {
    host: string
    days: number
    now?: Date
    includeUndated?: boolean
  },
): string[] {
  const cutoff = now.getTime() - days * 24 * 60 * 60 * 1000
  const urls = new Set<string>()
  for (const { loc, lastmod } of entries) {
    let url: URL
    try {
      url = new URL(loc)
    } catch {
      continue
    }
    if (url.host !== host) continue
    const time = lastmod ? Date.parse(lastmod) : Number.NaN
    if (Number.isNaN(time) ? includeUndated : time >= cutoff) urls.add(url.toString())
  }
  return Array.from(urls).slice(0, INDEXNOW_MAX_URLS)
}

/** Fetch a sitemap and, if it is an index, its child sitemaps (one level). */
export async function fetchSitemapEntries(sitemapUrl: string): Promise<SitemapEntry[]> {
  const read = async (url: string) => {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) throw new Error(`${url} returned ${response.status}`)
    return parseSitemap(await response.text())
  }
  const root = await read(sitemapUrl)
  if (!root.isIndex) return root.entries
  const children = await Promise.allSettled(root.entries.map(({ loc }) => read(loc)))
  return children.flatMap((child) => (child.status === 'fulfilled' ? child.value.entries : []))
}

export async function submitToIndexNow({ host, urls }: { host: string; urls: string[] }) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  return { status: response.status, body: (await response.text()).slice(0, 500) }
}
