import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import './helpers/react-global';
import cn from '../lib/tool-seo/locales/cn';
import de from '../lib/tool-seo/locales/de';
import es from '../lib/tool-seo/locales/es';
import fr from '../lib/tool-seo/locales/fr';
import it from '../lib/tool-seo/locales/it';
import ru from '../lib/tool-seo/locales/ru';
import { getToolSeoTranslation } from '../lib/tool-seo';
import { toLanguageTag } from '../lib/seo';

const locales = { cn, de, es, fr, it, ru };
// Every tool page with an SEO block (app/[locale]/tools/<slug>/seo-content.tsx)
// must have a translation in every locale file.
const toolsDir = join(__dirname, '..', 'app', '[locale]', 'tools');
const translatedTools = readdirSync(toolsDir).filter((slug) =>
  existsSync(join(toolsDir, slug, 'seo-content.tsx')),
);

for (const [code, locale] of Object.entries(locales)) {
  test(`${code}: translates every tool page's SEO block`, () => {
    assert.deepEqual(Object.keys(locale).sort(), [...translatedTools].sort());
  });

  test(`${code}: blocks are complete, with unique step/tip titles`, () => {
    for (const [slug, block] of Object.entries(locale)) {
      assert.ok(block, `${code}/${slug} is empty`);
      assert.ok(block.heading.trim() && block.stepsHeading.trim() && block.faqHeading.trim());
      assert.ok(block.steps.length > 0 && block.faq.length > 0, `${code}/${slug} lacks steps or FAQs`);
      for (const list of [block.steps, block.tips ?? []]) {
        const titles = list.map((item) => item.title);
        assert.equal(new Set(titles).size, titles.length, `${code}/${slug} repeats a title (React key)`);
      }
      for (const item of block.faq) {
        assert.ok(item.question.trim() && item.answer.trim(), `${code}/${slug} has an empty FAQ`);
      }
    }
  });
}

test('every tool has a seo-content.tsx block', () => {
  assert.ok(translatedTools.length >= 20, `found only ${translatedTools.length} tools`);
});

test('English and untranslated locales fall back to the English block', () => {
  assert.equal(getToolSeoTranslation('latex-preview', 'en'), undefined);
  assert.equal(getToolSeoTranslation('latex-preview', 'ja'), undefined);
  assert.equal(getToolSeoTranslation('latex-to-word', 'ko'), undefined);
  assert.equal(toLanguageTag('cn'), 'zh');
});

test('locale files never lose a LaTeX backslash to a JS escape', () => {
  // Inside a "..." or `...` literal a single backslash starts a JS escape, so
  // "\section" with one backslash renders as "section" and "\;" as ";".
  // JSX text (<Cmd>\alpha</Cmd>) is outside these literals and keeps it.
  const dir = join(__dirname, '..', 'lib', 'tool-seo', 'locales');
  const bad: string[] = [];
  for (const file of readdirSync(dir)) {
    const src = readFileSync(join(dir, file), 'utf8');
    for (const m of src.matchAll(/"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g)) {
      if (/(^|[^\\])(\\\\)*\\[^\\"`'nu]/.test(m[0])) {
        bad.push(`${file}:${src.slice(0, m.index).split('\n').length}`);
      }
    }
  }
  assert.deepEqual(bad, []);
});
