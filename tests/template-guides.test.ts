import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LOCALES } from '../lib/i18n/config';
import {
  getTemplateGuide,
  getTemplateGuideSlugs,
  isTemplateGuideLocalized,
} from '../lib/template-guides';
import { templateGuideLocales } from '../lib/template-guides/locales';

test('every translated template guide belongs to a template with an English guide', () => {
  const english = new Set(getTemplateGuideSlugs());
  for (const [locale, guides] of Object.entries(templateGuideLocales)) {
    assert.ok((LOCALES as readonly string[]).includes(locale), `${locale} is not a route locale`);
    assert.notEqual(locale, 'en', 'English guides live in lib/template-guides, not in locales');
    for (const slug of Object.keys(guides ?? {})) {
      assert.ok(english.has(slug), `${locale}/${slug} has no English guide`);
      assert.equal(isTemplateGuideLocalized(slug, locale), true);
      assert.notEqual(getTemplateGuide(slug, locale), getTemplateGuide(slug), `${locale}/${slug} is the English component`);
    }
  }
});

test('guides fall back to English for locales without a translation', () => {
  for (const slug of getTemplateGuideSlugs()) {
    assert.equal(getTemplateGuide(slug, 'xx'), getTemplateGuide(slug));
    assert.equal(isTemplateGuideLocalized(slug, 'xx'), false);
  }
  assert.equal(getTemplateGuide('no-such-template', 'es'), undefined);
});
