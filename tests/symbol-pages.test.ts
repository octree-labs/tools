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
import it from '../messages/it.json';
import pt from '../messages/pt.json';
import vi from '../messages/vi.json';
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
import { getSymbolCopy } from '../lib/symbol-pages/content';
import {
  SYMBOL_PAGE_TEXT_LOCALES,
  getSymbolPageText,
  getSymbolPageTranslation,
  isSymbolPageLocalized,
  symbolPageLocales,
  translatedSymbolCategories,
  translatedSymbolSlugs,
} from '../lib/symbol-pages/locales';
import { symbolPageAlternates } from '../lib/symbol-pages/seo';
import { LOCALES } from '../lib/i18n/config';

function translator(messages: Record<string, unknown>, locale: string): SymbolPageT {
  const local = createTranslator({ locale: toLanguageTag(locale), messages: messages as never, namespace: 'symbolPage' as never });
  const english = createTranslator({ locale: 'en', messages: en as never, namespace: 'symbolPage' as never });
  return (key, values) => {
    const l = local as unknown as { has: (k: string) => boolean } & ((k: string, v?: object) => string);
    const e = english as unknown as (k: string, v?: object) => string;
    return l.has(key) ? l(key, values) : e(key, values);
  };
}

const locales: Record<string, Record<string, unknown>> = { en, cn, es, fr, ru, de, it, pt, vi };

function models(locale: string): SymbolPageModel[] {
  const t = translator(locales[locale], locale);
  return SYMBOL_PAGES.map((ref) => {
    const model = buildSymbolPageModel(ref, t, locale);
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

test('sitemap lists each symbol page in English plus its translated locales, each file small', async () => {
  const { default: sitemap, sitemapIds } = await import('../app/sitemap');
  const files = await Promise.all(sitemapIds().map((id) => sitemap({ id })));
  const urls = files.flat().map((entry) => entry.url);
  assert.equal(new Set(urls).size, urls.length, 'no URL is listed twice');
  const symbolPageUrl = /^https:\/\/tools\.useoctree\.com(?:\/([a-z]+))?\/symbols\/([a-z-]+)\/([a-z0-9-]+)$/;
  const symbolUrls = urls.filter((u) => symbolPageUrl.test(u));
  const expected = SYMBOL_PAGES.reduce((n, ref) => n + symbolPageLocales(ref).length, 0);
  assert.equal(symbolUrls.length, expected);
  assert.equal(
    symbolUrls.filter((u) => !symbolPageUrl.exec(u)![1]).length,
    SYMBOL_PAGES.length,
    'every English symbol page is listed',
  );
  const localized = (href: string) => {
    const [, locale = 'en', category, slug] = symbolPageUrl.exec(href)!;
    return isSymbolPageLocalized(category, slug, locale);
  };
  for (const u of symbolUrls) assert.ok(localized(u), `untranslated symbol URL in sitemap: ${u}`);
  for (const entry of files.flat().filter((e) => symbolPageUrl.test(e.url))) {
    for (const href of Object.values(entry.alternates?.languages ?? {})) {
      assert.ok(localized(String(href)), `hreflang to untranslated page: ${href}`);
    }
  }
  for (const file of files) assert.ok(file.length > 0 && file.length <= 5000, `sitemap file has ${file.length} URLs`);
});

test('canonical, robots and hreflang follow the translation of each symbol-locale pair', () => {
  for (const ref of SYMBOL_PAGES) {
    const path = symbolPagePath(ref);
    const translated = symbolPageLocales(ref);
    const expectedLanguages = [...translated.map(toLanguageTag), 'x-default'].sort();
    for (const locale of LOCALES) {
      const meta = symbolPageAlternates(ref, locale);
      if (isSymbolPageLocalized(ref.category, ref.slug, locale)) {
        assert.equal(meta.alternates?.canonical, locale === 'en' ? path : `/${locale}${path}`);
        assert.equal(meta.robots, undefined, `${locale}${path} must be indexable`);
        assert.deepEqual(Object.keys(meta.alternates?.languages ?? {}).sort(), expectedLanguages);
      } else {
        assert.equal(meta.alternates?.canonical, path, `${locale}${path} canonicalises to English`);
        assert.deepEqual(meta.robots, { index: false, follow: true });
        assert.equal(meta.alternates?.languages, undefined);
      }
    }
  }
});

test('locales without any translated symbol copy stay noindex everywhere', () => {
  const path = '/symbols/greek/alpha';
  const ref = getSymbolPageRef('greek', 'alpha')!;
  for (const locale of LOCALES.filter((l) => l !== 'en' && !SYMBOL_PAGE_TEXT_LOCALES.includes(l))) {
    assert.equal(translatedSymbolCategories(locale).length, 0);
    assert.deepEqual(symbolPageAlternates(ref, locale), {
      alternates: { canonical: path },
      robots: { index: false, follow: true },
    });
  }
});

/** Every category: translated in full in cn, es, fr and ru. */
const ALL_CATEGORIES: string[] = [] = [
  'accents',
  'arrows',
  'boolean',
  'brackets',
  'calculus',
  'chemistry',
  'combinatorics',
  'complex',
  'computer-science',
  'differential-geometry',
  'finance',
  'functions',
  'game-theory',
  'geometry',
  'graph-theory',
  'greek',
  'latin',
  'linear-algebra',
  'logic',
  'machine-learning',
  'math',
  'modal-logic',
  'number-theory',
  'operators',
  'optimization',
  'order',
  'physics',
  'probability',
  'quantifiers',
  'relations',
  'set-theory',
  'special-functions',
  'summation',
  'tensors',
  'topology',
  'trigonometry',
  'units',
];

/** Categories translated in de, it, pt and vi. */
const PARTIAL_CATEGORIES: string[] = [
  'accents',
  'arrows',
  'boolean',
  'brackets',
  'calculus',
  'chemistry',
  'combinatorics',
  'complex',
  'computer-science',
  'differential-geometry',
  'finance',
  'functions',
  'game-theory',
  'geometry',
  'graph-theory',
  'greek',
  'latin',
  'linear-algebra',
  'logic',
  'machine-learning',
  'math',
  'physics',
  'probability',
  'quantifiers',
  'set-theory',
];

/** Categories whose body copy is translated, per locale. */
const TRANSLATED_CATEGORIES: Record<string, string[]> = {
  cn: ALL_CATEGORIES,
  es: ALL_CATEGORIES,
  fr: ALL_CATEGORIES,
  ru: ALL_CATEGORIES,
  de: PARTIAL_CATEGORIES,
  it: PARTIAL_CATEGORIES,
  pt: PARTIAL_CATEGORIES,
  vi: PARTIAL_CATEGORIES,
};

test('each locale translates exactly its listed categories, in full, and nothing else', () => {
  assert.deepEqual([...SYMBOL_PAGE_TEXT_LOCALES].sort(), Object.keys(TRANSLATED_CATEGORIES).sort());
  for (const locale of SYMBOL_PAGE_TEXT_LOCALES) {
    const expected = [...TRANSLATED_CATEGORIES[locale]].sort();
    assert.deepEqual(translatedSymbolCategories(locale).sort(), expected, locale);
    const dir = path.join('lib/symbol-pages/locales', locale);
    const files = fs.existsSync(dir) ? fs.readdirSync(dir).map((f) => f.replace(/\.ts$/, '')).sort() : [];
    assert.deepEqual(files, expected, `${dir}: every category file is registered`);
  }
  for (const ref of SYMBOL_PAGES) {
    const expected = LOCALES.filter((l) => l === 'en' || TRANSLATED_CATEGORIES[l]?.includes(ref.category));
    assert.deepEqual(symbolPageLocales(ref), expected, symbolPagePath(ref));
  }
});

test('an untranslated category stays English, canonical to the English URL and noindex in de, it, pt and vi', () => {
  const ref = SYMBOL_PAGES.find((r) => !PARTIAL_CATEGORIES.includes(r.category))!;
  for (const locale of ['de', 'it', 'pt', 'vi']) {
    assert.equal(isSymbolPageLocalized(ref.category, ref.slug, locale), false);
    assert.deepEqual(symbolPageAlternates(ref, locale), {
      alternates: { canonical: symbolPagePath(ref) },
      robots: { index: false, follow: true },
    });
  }
});

test('de, it, pt and vi have their own symbolPage messages (no English labels)', () => {
  const en_ = (en as Record<string, Record<string, string>>).symbolPage;
  for (const [locale, messages] of Object.entries({ de, it, pt, vi })) {
    const local = (messages as Record<string, Record<string, string>>).symbolPage;
    assert.ok(local, `messages/${locale}.json has no symbolPage section`);
    assert.deepEqual(Object.keys(local).sort(), Object.keys(en_).sort(), locale);
    for (const key of ['faqHowQ', 'related', 'example', 'packageLabel', 'faqHeading', 'whereUsed']) {
      assert.notEqual(local[key], en_[key], `${locale}: symbolPage.${key} is English`);
    }
  }
});

const commandsIn = (text: string) => new Set(text.match(/\\[a-zA-Z]+/g) ?? []);

test('every translated symbol has all fields, keeps its commands and a compilable example', () => {
  for (const locale of SYMBOL_PAGE_TEXT_LOCALES) {
    for (const category of translatedSymbolCategories(locale)) {
      const refs = SYMBOL_PAGES.filter((r) => r.category === category);
      assert.ok(refs.length > 0, `${category} is a real category`);
      const names = new Set<string>();
      for (const slug of translatedSymbolSlugs(locale, category)) {
        assert.ok(getSymbolPageRef(category, slug), `${locale}/${category}: ${slug} is not a page of this category`);
      }
      for (const ref of refs) {
        const where = `${locale}${symbolPagePath(ref)}`;
        const local = getSymbolPageTranslation(category, ref.slug, locale);
        assert.ok(local, `${where} is missing`);
        for (const field of ['name', 'meaning', 'usage'] as const) {
          assert.ok(local[field]?.trim(), `${where}: empty ${field}`);
        }
        const english = getSymbolCopy(ref.latex)!;
        assert.notEqual(local.meaning, english.meaning, `${where}: meaning is untranslated`);
        assert.notEqual(local.usage, english.usage, `${where}: usage is untranslated`);
        const kept = commandsIn(`${local.meaning} ${local.usage}`);
        for (const cmd of commandsIn(`${english.meaning} ${english.usage}`)) {
          assert.ok(kept.has(cmd), `${where}: ${cmd} dropped from the translation`);
        }
        if (local.example !== undefined) {
          assert.match(local.example, /^[\x00-\x7f]+$/, `${where}: example must stay ASCII`);
          assert.deepEqual(commandsIn(local.example), commandsIn(english.example), `${where}: example commands`);
        }
        assert.ok(!names.has(local.name), `${where}: duplicate name ${local.name}`);
        names.add(local.name);
      }
    }
  }
});

test('translated pairs render their own language; untranslated pairs fall back to English', () => {
  for (const locale of SYMBOL_PAGE_TEXT_LOCALES) {
    const t = translator(locales[locale], locale);
    for (const ref of SYMBOL_PAGES) {
      const model = buildSymbolPageModel(ref, t, locale)!;
      const local = getSymbolPageTranslation(ref.category, ref.slug, locale);
      const text = getSymbolPageText(ref.category, ref.slug, locale)!;
      assert.equal(model.localized, local !== undefined);
      assert.equal(text.localized, local !== undefined);
      if (local) {
        assert.equal(model.copy.meaning, local.meaning);
        assert.equal(model.name, local.name);
        assert.ok(model.title.includes(local.name));
        assert.ok(model.metaDescription.startsWith(local.meaning));
        assert.ok(model.faq[0].question.includes(local.name), 'FAQ asks about the localised name');
      } else {
        assert.equal(model.copy.meaning, getSymbolCopy(ref.latex)!.meaning);
        assert.equal(model.name, ref.name);
      }
      // The example document keeps the English name (and example unless an
      // ASCII one is given) so the measured packages and pdfLaTeX still apply.
      const enDoc = enModels[SYMBOL_PAGES.indexOf(ref)].exampleDocument;
      if (!local?.example) assert.equal(model.exampleDocument, enDoc);
      else assert.equal(model.exampleDocument, enDoc.replace(getSymbolCopy(ref.latex)!.example, local.example));
    }
  }
});
