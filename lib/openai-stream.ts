/**
 * Turns an OpenAI Chat Completions SSE stream (`stream: true`) into a plain
 * text stream of the assistant's reply. Every AI route uses this, so the
 * parsing lives in one place.
 *
 * The old per-route loop split each network chunk on '\n' and parsed lines
 * independently. An SSE line split across two chunks failed JSON.parse in the
 * first half and lacked the `data: ` prefix in the second, so both halves were
 * dropped and the reply silently lost tokens (broken LaTeX). Here incomplete
 * lines are buffered until their newline arrives, and the decoder runs in
 * streaming mode so multi-byte characters split across chunks survive.
 */

/** Text carried by one parsed SSE `data:` payload; `content` may be a string or an array of parts. */
export function extractDeltaText(event: unknown): string {
  const content = (event as { choices?: Array<{ delta?: { content?: unknown } }> } | null)?.choices?.[0]?.delta
    ?.content;
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content
      .map((part) => (typeof part === 'string' ? part : typeof part?.text === 'string' ? part.text : ''))
      .join('');
  }
  return '';
}

export class StreamError extends Error {}

/**
 * Incremental SSE parser. `push` raw text as it arrives and `end` once the
 * stream is done; `onText` receives the reply text in order.
 */
export function createSseTextParser(onText: (text: string) => void) {
  let buffer = '';
  let dataLines: string[] = [];

  const dispatch = () => {
    if (dataLines.length === 0) return;
    const data = dataLines.join('\n');
    dataLines = [];
    if (data === '[DONE]') return;
    let parsed: unknown;
    try {
      parsed = JSON.parse(data);
    } catch {
      return; // not JSON (keep-alive or garbage): nothing to emit
    }
    const error = (parsed as { error?: { message?: string } } | null)?.error;
    if (error) throw new StreamError(error.message || 'The AI stream reported an error.');
    const text = extractDeltaText(parsed);
    if (text) onText(text);
  };

  const handleLine = (rawLine: string) => {
    const line = rawLine.endsWith('\r') ? rawLine.slice(0, -1) : rawLine;
    if (line === '') return dispatch(); // blank line ends an event
    if (line.startsWith(':')) return; // comment
    if (line.startsWith('data:')) {
      dataLines.push(line.slice(line.startsWith('data: ') ? 6 : 5));
    }
  };

  return {
    push(text: string) {
      buffer += text;
      let newline = buffer.indexOf('\n');
      while (newline !== -1) {
        handleLine(buffer.slice(0, newline));
        buffer = buffer.slice(newline + 1);
        newline = buffer.indexOf('\n');
      }
    },
    end() {
      if (buffer) handleLine(buffer);
      buffer = '';
      dispatch();
    },
  };
}

/** Byte stream of OpenAI SSE in, UTF-8 reply text out. Upstream errors error the output stream. */
export function openAIStreamToText(body: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let parser: ReturnType<typeof createSseTextParser>;

  return body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      start(controller) {
        parser = createSseTextParser((text) => controller.enqueue(encoder.encode(text)));
      },
      transform(chunk) {
        parser.push(decoder.decode(chunk, { stream: true }));
      },
      flush() {
        parser.push(decoder.decode());
        parser.end();
      },
    }),
  );
}

/** Response streaming the reply text of a successful OpenAI streaming response. */
export function streamTextResponse(upstream: Response): Response {
  if (!upstream.body) throw new StreamError('The AI response had no body.');
  return new Response(openAIStreamToText(upstream.body), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
