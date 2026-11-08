import { test } from 'node:test';
import assert from 'node:assert/strict';
import { templateJsonLdName } from '../lib/json-ld';

test('appends "LaTeX Template" to a bare template name', () => {
  assert.equal(templateJsonLdName('Cover Letter'), 'Cover Letter LaTeX Template');
  assert.equal(templateJsonLdName('Anschreiben'), 'Anschreiben LaTeX Template');
});

test('does not double "Template" on titles ending in Template', () => {
  assert.equal(
    templateJsonLdName('Letter of Recommendation Template'),
    'Letter of Recommendation LaTeX Template',
  );
});

test('keeps titles that already say LaTeX and Template', () => {
  for (const title of [
    'Cover Letter LaTeX Template (Overleaf-Compatible)',
    'LaTeX Resume Template (Overleaf-Compatible)',
    "Jake's Resume Template (LaTeX, Overleaf-Compatible)",
  ]) {
    assert.equal(templateJsonLdName(title), title);
  }
});
