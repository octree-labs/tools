import { test } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/react-global';
import cn from '../lib/symbol-intros/locales/cn';
import es from '../lib/symbol-intros/locales/es';
import fr from '../lib/symbol-intros/locales/fr';
import ru from '../lib/symbol-intros/locales/ru';
import { quickRefs } from '../lib/symbol-intros/quick-refs';
import { toLanguageTag } from '../lib/seo';

const locales = { cn, es, fr, ru };

for (const [code, locale] of Object.entries(locales)) {
  test(`${code}: FAQPage inLanguage matches the page's hreflang tag`, () => {
    assert.equal(locale.languageTag, toLanguageTag(code));
  });

  test(`${code}: translated "Use" cells match the English quick-reference rows`, () => {
    for (const [slug, intro] of Object.entries(locale.intros)) {
      if (!intro?.use) continue;
      const rows = quickRefs[slug];
      assert.ok(rows, `${code}/${slug} translates a table the English intro does not export`);
      const commands = rows.map((row) => row.latex);
      assert.deepEqual(
        Object.keys(intro.use).sort(),
        [...commands].sort(),
        `${code}/${slug} must translate every row, keyed by its exact command`,
      );
    }
  });

  test(`${code}: FAQs are complete`, () => {
    for (const [slug, intro] of Object.entries(locale.intros)) {
      for (const item of intro?.faq ?? []) {
        assert.ok(item.question.trim() && item.answer.trim(), `${code}/${slug} has an empty FAQ`);
      }
    }
  });
}
