import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { TOOL_SLUGS } from '../lib/discovery/tools';

test('every /tools route is in the discovery registry (sitemap and llms.txt)', () => {
  const routes = readdirSync(join(__dirname, '..', 'app', '[locale]', 'tools'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  assert.deepEqual([...TOOL_SLUGS].sort(), routes);
});
