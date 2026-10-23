import { test } from 'node:test';
import assert from 'node:assert/strict';
import { APP_ORIGIN, DRAFTS_ENDPOINT, appUrl, linkClickProps, normalizePlacement, postDraftForm } from '../lib/open-in-octree';

test('appUrl adds utm params with cta as the default medium', () => {
  const url = new URL(appUrl('/', { placement: 'tools:latex-preview:cta' }));
  assert.equal(url.origin, APP_ORIGIN);
  assert.equal(url.pathname, '/');
  assert.equal(url.searchParams.get('utm_source'), 'tools');
  assert.equal(url.searchParams.get('utm_medium'), 'cta');
  assert.equal(url.searchParams.get('utm_campaign'), 'tools:latex-preview:cta');
});

test('appUrl preserves an existing query and URL-encodes the campaign', () => {
  const out = appUrl('/import?next=%2Fprojects&x=1', { placement: 'tools:a b&c', medium: 'nav' });
  const url = new URL(out);
  assert.equal(url.pathname, '/import');
  assert.equal(url.searchParams.get('next'), '/projects');
  assert.equal(url.searchParams.get('x'), '1');
  assert.equal(url.searchParams.get('utm_medium'), 'nav');
  assert.equal(url.searchParams.get('utm_campaign'), 'tools:a b&c');
  assert.ok(!out.includes('a b&c'), 'campaign must be encoded in the raw URL');
});

test('placements are normalized to a tools: prefix', () => {
  assert.equal(normalizePlacement('templates:mla-paper'), 'tools:templates:mla-paper');
  assert.equal(normalizePlacement('tools:templates:mla-paper'), 'tools:templates:mla-paper');
  assert.equal(normalizePlacement(''), 'tools');
  assert.equal(normalizePlacement(undefined), 'tools');
  assert.equal(normalizePlacement('tools'), 'tools');
  assert.equal(
    new URL(appUrl('/', { placement: 'templates:mla-paper' })).searchParams.get('utm_campaign'),
    'tools:templates:mla-paper',
  );
});

interface FakeElement {
  tag: string;
  name?: string;
  type?: string;
  value?: string;
  method?: string;
  action?: string;
  style: Record<string, string>;
  children: FakeElement[];
  submitted: boolean;
  appendChild(child: FakeElement): void;
  submit(): void;
}

test('postDraftForm posts content/title/source to the drafts endpoint with utm on the action', () => {
  const created: FakeElement[] = [];
  const fakeDocument = {
    createElement(tag: string): FakeElement {
      const el: FakeElement = {
        tag,
        style: {},
        children: [],
        submitted: false,
        appendChild(child) {
          this.children.push(child);
        },
        submit() {
          this.submitted = true;
        },
      };
      created.push(el);
      return el;
    },
    body: { appendChild() {}, removeChild() {} },
  };
  const g = globalThis as unknown as { document?: unknown };
  const previous = g.document;
  g.document = fakeDocument;
  try {
    postDraftForm({ latex: '\\documentclass{article}', title: 'My doc', source: 'tools:latex-preview:fix-error' });
  } finally {
    g.document = previous;
  }

  const form = created.find((el) => el.tag === 'form');
  assert.ok(form);
  assert.equal(form.method, 'POST');
  assert.equal(form.submitted, true);

  const action = new URL(form.action!);
  assert.equal(`${action.origin}${action.pathname}`, DRAFTS_ENDPOINT);
  assert.equal(action.searchParams.get('utm_source'), 'tools');
  assert.equal(action.searchParams.get('utm_medium'), 'draft');
  assert.equal(action.searchParams.get('utm_campaign'), 'tools:latex-preview:fix-error');

  const fields = Object.fromEntries(form.children.map((c) => [c.name, c.value]));
  assert.deepEqual(fields, {
    content: '\\documentclass{article}',
    title: 'My doc',
    source: 'tools:latex-preview:fix-error',
  });
  assert.equal(form.children.find((c) => c.name === 'title')?.type, 'hidden');
  assert.equal(form.children.find((c) => c.name === 'source')?.type, 'hidden');
});

test('appUrl keeps a hash after the query', () => {
  const out = appUrl('/pricing?plan=pro#faq', { placement: 'tools:header', medium: 'nav' });
  const url = new URL(out);
  assert.equal(url.hash, '#faq');
  assert.equal(url.searchParams.get('plan'), 'pro');
  assert.equal(url.searchParams.get('utm_campaign'), 'tools:header');
  assert.ok(out.endsWith('#faq'));
});

test('placements already in production are left unchanged', () => {
  for (const p of [
    'tools:latex-preview:fix-error',
    'tools:image-to-tikz:result',
    'tools:templates:mla-paper',
    'tools:templates',
    'tools:ai',
    'tools:fix-error',
  ]) {
    assert.equal(normalizePlacement(p), p);
  }
  assert.equal(normalizePlacement('  tools:ai  '), 'tools:ai');
  assert.ok(!normalizePlacement('tools:x').startsWith('tools:tools:'));
});

test('link clicks use source === placement, distinct from the draft source', () => {
  assert.deepEqual(linkClickProps('tools:templates:mla-paper:cta'), {
    source: 'tools:templates:mla-paper:cta',
    placement: 'tools:templates:mla-paper:cta',
    kind: 'link',
  });
  assert.notEqual(linkClickProps('tools:templates:mla-paper:cta').source, 'tools:templates:mla-paper');
  assert.equal(linkClickProps('header').placement, 'tools:header');
});
