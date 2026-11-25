import { NextRequest, NextResponse } from 'next/server'

import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n/config'
import { fetchSitemapEntries, selectRecentUrls, submitToIndexNow } from '@/lib/indexnow'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

const HOST = 'tools.useoctree.com'
const SITEMAP_URL = `https://${HOST}/sitemap.xml`
const WINDOW_DAYS = 3

const localizedPrefixes = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => `/${locale}/`)
const isLocalized = (url: string) => {
  const path = new URL(url).pathname
  return localizedPrefixes.some((prefix) => path === prefix.slice(0, -1) || path.startsWith(prefix))
}

/**
 * Daily Vercel cron (vercel.json): submits sitemap URLs whose lastmod is within
 * the last 3 days to IndexNow. Vercel sends `Authorization: Bearer $CRON_SECRET`.
 *
 * The sitemap is generated at build time, so every lastmod is the deploy time;
 * to keep daily submissions small, only English URLs are sent by default (the
 * localized versions are linked from them with hreflang).
 *
 * Query flags for a manual run with the same header:
 * - `?all=1` also sends localized URLs and URLs without a lastmod (backfill)
 * - `?dry=1` lists what would be sent without sending it
 * Only production submits; other environments behave like `dry=1`.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'CRON_SECRET is not configured' }, { status: 500 })
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const params = request.nextUrl.searchParams
  const all = params.get('all') === '1'
  const dryRun = params.get('dry') === '1' || process.env.VERCEL_ENV !== 'production'

  try {
    const entries = await fetchSitemapEntries(SITEMAP_URL)
    const recent = selectRecentUrls(entries, { host: HOST, days: WINDOW_DAYS, includeUndated: all })
    const urls = all ? recent : recent.filter((url) => !isLocalized(url))
    if (urls.length === 0 || dryRun) {
      console.log(`[indexnow] ${entries.length} sitemap URLs, ${urls.length} selected, dryRun=${dryRun}`)
      return NextResponse.json({ sitemapUrls: entries.length, selected: urls.length, submitted: false, urls })
    }
    const result = await submitToIndexNow({ host: HOST, urls })
    console.log(`[indexnow] ${entries.length} sitemap URLs, submitted ${urls.length}, IndexNow HTTP ${result.status}`)
    return NextResponse.json({
      sitemapUrls: entries.length,
      selected: urls.length,
      submitted: result.status >= 200 && result.status < 300,
      indexNowStatus: result.status,
      indexNowBody: result.body || undefined,
    })
  } catch (error) {
    console.error(`[indexnow] failed: ${(error as Error).message}`)
    return NextResponse.json({ error: (error as Error).message }, { status: 502 })
  }
}
