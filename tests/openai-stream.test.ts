import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSseTextParser, extractDeltaText, openAIStreamToText } from '../lib/openai-stream';

const event = (content: unknown) => `data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`;

/** A realistic reply split into SSE events, then cut into network chunks at awkward byte offsets. */
const REPLY = ['\\[', ' \\int_0^1', ' x^2', '\\,dx', ' = \\frac{1}{3}', ' \\quad', ' α ≤ β', ' \\]'];
const SSE = REPLY.map(event).join('') + 'data: [DONE]\n\n';

function chunked(bytes: Uint8Array, sizes: number[]): Uint8Array[] {
  const out: Uint8Array[] = [];
  let i = 0;
  let k = 0;
  while (i < bytes.length) {
    const n = sizes[k++ % sizes.length];
    out.push(bytes.slice(i, i + n));
    i += n;
  }
  return out;
}

async function run(chunks: Uint8Array[]): Promise<string> {
  const body = new ReadableStream<Uint8Array>({
    start(c) {
      for (const ch of chunks) c.enqueue(ch);
      c.close();
    },
  });
  return new Response(openAIStreamToText(body)).text();
}

test('keeps every token when SSE lines are split across chunks (the dropped-text bug)', async () => {
  const bytes = new TextEncoder().encode(SSE);
  for (const sizes of [[1], [7], [13, 5, 31], [64], [bytes.length]]) {
    assert.equal(await run(chunked(bytes, sizes)), REPLY.join(''), `chunk sizes ${sizes}`);
  }
});

test('the old split-per-chunk loop loses text on the same fixture', () => {
  // Documents the regression this helper fixes.
  const decoder = new TextDecoder();
  let out = '';
  for (const chunk of chunked(new TextEncoder().encode(SSE), [13, 5, 31])) {
    for (const line of decoder.decode(chunk, { stream: true }).split('\n')) {
      if (!line.startsWith('data: ') || line.slice(6) === '[DONE]') continue;
      try {
        out += JSON.parse(line.slice(6)).choices[0]?.delta?.content ?? '';
      } catch {
        // dropped
      }
    }
  }
  assert.notEqual(out, REPLY.join(''));
});

test('handles CRLF, comments, no space after data:, and a trailing event without a blank line', () => {
  let out = '';
  const p = createSseTextParser((t) => (out += t));
  p.push(': keep-alive\r\n');
  p.push(`data:${JSON.stringify({ choices: [{ delta: { content: 'a' } }] })}\r\n\r\n`);
  p.push(`data: ${JSON.stringify({ choices: [{ delta: { content: 'b' } }] })}`);
  p.end();
  assert.equal(out, 'ab');
});

test('extractDeltaText reads string and array content and ignores role/tool-call deltas', () => {
  assert.equal(extractDeltaText({ choices: [{ delta: { content: 'x' } }] }), 'x');
  assert.equal(extractDeltaText({ choices: [{ delta: { content: [{ type: 'text', text: 'a' }, { text: 'b' }] } }] }), 'ab');
  assert.equal(extractDeltaText({ choices: [{ delta: { role: 'assistant' } }] }), '');
  assert.equal(extractDeltaText({ choices: [] }), '');
});

test('an error event mid-stream errors the output instead of ending quietly', async () => {
  const bytes = new TextEncoder().encode(event('partial') + `data: ${JSON.stringify({ error: { message: 'boom' } })}\n\n`);
  await assert.rejects(run([bytes]));
});
