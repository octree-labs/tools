import { test } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/react-global';
import cn from '../lib/tool-seo/locales/cn';
import es from '../lib/tool-seo/locales/es';
import fr from '../lib/tool-seo/locales/fr';
import ru from '../lib/tool-seo/locales/ru';
import { getToolSeoTranslation } from '../lib/tool-seo';
import { toLanguageTag } from '../lib/seo';

const locales = { cn, es, fr, ru };
const translatedTools = [
  'latex-preview',
  'math-to-latex',
  'pdf-to-latex',
  'image-to-tikz',
  'tikz-generator',
  'equation-to-latex',
  'ai-latex-generator',
  'table-to-latex',
];

for (const [code, locale] of Object.entries(locales)) {
  test(`${code}: translates the most-visited tool pages`, () => {
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

test('English and untranslated locales fall back to the English block', () => {
  assert.equal(getToolSeoTranslation('latex-preview', 'en'), undefined);
  assert.equal(getToolSeoTranslation('latex-preview', 'de'), undefined);
  assert.equal(getToolSeoTranslation('latex-to-word', 'cn'), undefined);
  assert.equal(toLanguageTag('cn'), 'zh');
});
