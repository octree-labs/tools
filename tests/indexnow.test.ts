import { test } from 'node:test';
import assert from 'node:assert/strict';
import { INDEXNOW_KEY, parseSitemap, selectRecentUrls } from '../lib/indexnow';

const urlset = `<urlset>
  <url><loc>https://tools.useoctree.com/tools/math-to-latex</loc><lastmod>2026-11-24T10:00:00.000Z</lastmod></url>
  <url><loc>https://tools.useoctree.com/templates/old</loc><lastmod>2025-01-01T00:00:00.000Z</lastmod></url>
  <url><loc>https://tools.useoctree.com/symbols</loc></url>
  <url><loc>https://example.com/x</loc><lastmod>2026-11-24T10:00:00.000Z</lastmod></url>
</urlset>`;

test('key is 32 hex characters', () => {
  assert.match(INDEXNOW_KEY, /^[0-9a-f]{32}$/);
});

test('parses a sitemap index', () => {
  const { isIndex, entries } = parseSitemap(
    '<sitemapindex><sitemap><loc>https://tools.useoctree.com/sitemap/0.xml</loc></sitemap></sitemapindex>',
  );
  assert.equal(isIndex, true);
  assert.deepEqual(entries.map((e) => e.loc), ['https://tools.useoctree.com/sitemap/0.xml']);
});

test('selects recent URLs on the host, undated only on request', () => {
  const { entries } = parseSitemap(urlset);
  const now = new Date('2026-11-25T12:00:00Z');
  assert.deepEqual(selectRecentUrls(entries, { host: 'tools.useoctree.com', days: 3, now }), [
    'https://tools.useoctree.com/tools/math-to-latex',
  ]);
  assert.deepEqual(
    selectRecentUrls(entries, { host: 'tools.useoctree.com', days: 3, now, includeUndated: true }),
    ['https://tools.useoctree.com/tools/math-to-latex', 'https://tools.useoctree.com/symbols'],
  );
});
