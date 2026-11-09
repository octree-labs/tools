import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createTranslator } from 'next-intl';
import en from '../messages/en.json';
import cn from '../messages/cn.json';
import es from '../messages/es.json';
import fr from '../messages/fr.json';
import ru from '../messages/ru.json';
import de from '../messages/de.json';
import * as symbols from '../lib/symbols';
import { toLanguageTag } from '../lib/seo';
import {
  SYMBOL_CATEGORIES,
  SYMBOL_PAGES,
  getSymbolPageRef,
  symbolHrefsFor,
  symbolPagePath,
} from '../lib/symbol-pages';
import { buildSymbolPageModel, type SymbolPageModel, type SymbolPageT } from '../lib/symbol-pages/model';

function translator(messages: Record<string, unknown>, locale: string): SymbolPageT {
  const local = createTranslator({ locale: toLanguageTag(locale), messages: messages as never, namespace: 'symbolPage' as never });
  const english = createTranslator({ locale: 'en', messages: en as never, namespace: 'symbolPage' as never });
  return (key, values) => {
    const l = local as unknown as { has: (k: string) => boolean } & ((k: string, v?: object) => string);
    const e = english as unknown as (k: string, v?: object) => string;
    return l.has(key) ? l(key, values) : e(key, values);
  };
}

const locales: Record<string, Record<string, unknown>> = { en, cn, es, fr, ru, de };

function models(locale: string): SymbolPageModel[] {
  const t = translator(locales[locale], locale);
  return SYMBOL_PAGES.map((ref) => {
    const model = buildSymbolPageModel(ref, t);
    assert.ok(model, `${symbolPagePath(ref)} has no copy or facts (lib/symbol-pages/content.json, facts.json)`);
    return model;
  });
}

const enModels = models('en');

test('every command in the dataset has exactly one page', () => {
  const commands = new Set(
    Object.values(symbols)
      .filter(Array.isArray)
      .flatMap((list) => (list as symbols.SymbolItem[]).map((s) => s.latex)),
  );
  assert.equal(SYMBOL_PAGES.length, commands.size);
  for (const category of SYMBOL_CATEGORIES) {
    for (const [latex, href] of Object.entries(symbolHrefsFor(category.slug))) {
      const [, , cat, slug] = href.split('/');
      assert.equal(getSymbolPageRef(cat, slug)?.latex, latex, `${category.slug} row ${latex} links to ${href}`);
    }
  }
  assert.ok(SYMBOL_CATEGORIES.every((c) => fs.existsSync(path.join('app/[locale]/symbols', c.slug, '[symbol]/page.tsx'))));
});

test('slugs are ASCII kebab-case and unique within a category', () => {
  const seen = new Set<string>();
  for (const ref of SYMBOL_PAGES) {
    assert.match(ref.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/, `bad slug ${ref.slug}`);
    const key = `${ref.category}/${ref.slug}`;
    assert.ok(!seen.has(key), `duplicate slug ${key}`);
    seen.add(key);
  }
});

for (const locale of Object.keys(locales)) {
  test(`${locale}: every page has a unique title and meta description`, () => {
    const list = locale === 'en' ? enModels : models(locale);
    const titles = new Set(list.map((m) => m.title));
    assert.equal(titles.size, list.length);
    assert.equal(new Set(list.map((m) => m.metaDescription)).size, list.length);
    for (const m of list) {
      assert.equal(m.faq.length, 3);
      for (const item of m.faq) assert.ok(item.question.trim() && item.answer.trim());
    }
  });
}

const sentences = (text: string) =>
  text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);

test('every page has at least 80 words of text no other page shares', () => {
  // Only the hand-written "Where it is used" copy counts (template strings,
  // FAQs and facts never do), and within it any sentence that recurs on
  // another page once the symbol's own name and command are blanked out.
  const normalised = (m: SymbolPageModel) =>
    [m.copy.meaning, m.copy.usage]
      .flatMap(sentences)
      .map((s) => ({ s, key: s.split(m.ref.latex).join('<cmd>').split(m.ref.name).join('<name>').toLowerCase() }));
  const counts = new Map<string, number>();
  const perPage = enModels.map(normalised);
  for (const page of perPage) for (const key of new Set(page.map((p) => p.key))) counts.set(key, (counts.get(key) ?? 0) + 1);
  const thin: string[] = [];
  perPage.forEach((page, i) => {
    const words = page
      .filter((p) => counts.get(p.key) === 1)
      .reduce((n, p) => n + p.s.split(/\s+/).filter(Boolean).length, 0);
    if (words < 80) thin.push(`${symbolPagePath(enModels[i].ref)} (${words})`);
  });
  assert.deepEqual(thin, []);
});

test('related links: six per page, same category, never the page itself, all resolve', () => {
  for (const m of enModels) {
    assert.equal(m.related.length, Math.min(6, SYMBOL_PAGES.length - 1));
    const category = SYMBOL_CATEGORIES.find((c) => c.slug === m.ref.category)!;
    for (const rel of m.related) {
      assert.notEqual(rel.latex, m.ref.latex);
      assert.ok(category.symbols.some((s) => s.latex === rel.latex), `${rel.latex} not in ${category.slug}`);
      assert.ok(getSymbolPageRef(rel.category, rel.slug));
    }
  }
});

test('example documents are complete and load the measured packages', () => {
  for (const m of enModels) {
    assert.match(m.exampleDocument, /^\\documentclass\{article\}\n/);
    assert.match(m.exampleDocument, /\\begin\{document\}[\s\S]*\\end\{document\}$/);
    for (const pkg of m.facts.packages) assert.ok(m.facts.examplePackages.includes(pkg));
    if (m.facts.packages.length) assert.equal(m.usepackage, `\\usepackage{${m.facts.packages.join(',')}}`);
  }
});

test('no aggregateRating markup on symbol pages', () => {
  const files = [
    'components/symbol-page/SymbolPageView.tsx',
    'lib/symbol-pages/route.tsx',
    'lib/symbol-pages/model.ts',
    'lib/symbol-intros/ui.tsx',
  ];
  for (const file of files) assert.ok(!fs.readFileSync(file, 'utf8').includes('aggregateRating'), file);
  assert.ok(!JSON.stringify(enModels.map((m) => m.faq)).includes('aggregateRating'));
});

test('sitemap lists symbol pages only in locales with localised copy, each file small', async () => {
  const { default: sitemap, sitemapIds } = await import('../app/sitemap');
  const { SYMBOL_PAGE_INDEXED_LOCALES } = await import('../lib/symbol-pages');
  const files = await Promise.all(sitemapIds().map((id) => sitemap({ id })));
  const urls = files.flat().map((entry) => entry.url);
  assert.equal(new Set(urls).size, urls.length, 'no URL is listed twice');
  const symbolPageUrl = /^https:\/\/tools\.useoctree\.com(?:\/([a-z]+))?\/symbols\/[a-z-]+\/[a-z0-9-]+$/;
  const symbolUrls = urls.filter((u) => symbolPageUrl.test(u));
  assert.equal(symbolUrls.length, SYMBOL_PAGES.length * SYMBOL_PAGE_INDEXED_LOCALES.length);
  for (const u of symbolUrls) {
    const locale = symbolPageUrl.exec(u)![1] ?? 'en';
    assert.ok(SYMBOL_PAGE_INDEXED_LOCALES.includes(locale), `non-localised symbol URL in sitemap: ${u}`);
  }
  for (const entry of files.flat().filter((e) => symbolPageUrl.test(e.url))) {
    for (const href of Object.values(entry.alternates?.languages ?? {})) {
      const locale = symbolPageUrl.exec(String(href))?.[1] ?? 'en';
      assert.ok(SYMBOL_PAGE_INDEXED_LOCALES.includes(locale), `hreflang to non-localised page: ${href}`);
    }
  }
  for (const file of files) assert.ok(file.length > 0 && file.length <= 5000, `sitemap file has ${file.length} URLs`);
});

test('non-localised symbol pages canonicalise to English and are noindex', async () => {
  const { symbolPageAlternates } = await import('../lib/symbol-pages/seo');
  const path = '/symbols/arrows/right-arrow';
  const fr = symbolPageAlternates(path, 'fr');
  assert.equal(fr.alternates?.canonical, path);
  assert.deepEqual(fr.robots, { index: false, follow: true });
  const en = symbolPageAlternates(path, 'en');
  assert.equal(en.alternates?.canonical, path);
  assert.equal(en.robots, undefined);
  assert.deepEqual(Object.keys(en.alternates?.languages ?? {}).sort(), ['en', 'x-default']);
});
