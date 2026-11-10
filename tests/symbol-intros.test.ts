import { test } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/react-global';
import cn from '../lib/symbol-intros/locales/cn';
import es from '../lib/symbol-intros/locales/es';
import fr from '../lib/symbol-intros/locales/fr';
import pt from '../lib/symbol-intros/locales/pt';
import ru from '../lib/symbol-intros/locales/ru';
import vi from '../lib/symbol-intros/locales/vi';
import { quickRefs } from '../lib/symbol-intros/quick-refs';
import { toLanguageTag } from '../lib/seo';

const locales = { cn, es, fr, pt, ru, vi };

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

  test(`${code}: every symbol page is translated, with its full table`, () => {
    for (const slug of [...Object.keys(quickRefs), 'accents', 'logic']) {
      const intro = locale.intros[slug];
      assert.ok(intro?.title.trim(), `${code}/${slug} has no translation`);
      if (quickRefs[slug]) assert.ok(intro?.use, `${code}/${slug} leaves the table in English`);
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
