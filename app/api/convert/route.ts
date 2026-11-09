import { NextRequest } from 'next/server';
import { parseConvertRequest, type UploadKind } from '@/lib/convert-input';

// PDFs take longer than a single handwritten equation.
export const maxDuration = 60;

const MODEL = 'gpt-4o-mini';

const PROMPTS: Record<UploadKind, string> = {
  image:
    'Convert this handwritten mathematical expression to a complete LaTeX document. Include \\documentclass{article}, necessary packages (amsmath, amssymb, etc.), and wrap the math in \\begin{document}...\\end{document}. Return ONLY the complete LaTeX code, no explanations or markdown formatting.',
  pdf:
    'Convert this PDF document to a complete, compilable LaTeX document that reproduces its content: headings as sections, paragraphs, lists, tables (tabular) and all mathematics (inline and display, using amsmath). Include \\documentclass{article}, the packages you need (amsmath, amssymb, graphicx, etc.) and \\begin{document}...\\end{document}. Replace figures with a short placeholder comment. The document must compile with pdflatex. Return ONLY the LaTeX code, no explanations or markdown code fences.',
};

const MAX_TOKENS: Record<UploadKind, number> = { image: 2000, pdf: 12000 };

function jsonError(status: number, code: string, error: string) {
  return Response.json({ error, code }, { status });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError(400, 'invalid_json', 'The request body must be JSON.');
  }

  const input = parseConvertRequest(body);
  if (!input.ok) return jsonError(input.status, input.code, input.error);

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('convert: OPENAI_API_KEY is not set');
    return jsonError(503, 'not_configured', 'Conversion is temporarily unavailable.');
  }

  const filePart =
    input.kind === 'pdf'
      ? { type: 'file', file: { filename: input.filename, file_data: input.dataUrl } }
      : { type: 'image_url', image_url: { url: input.dataUrl } };

  let response: Response;
  try {
    response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'user', content: [{ type: 'text', text: PROMPTS[input.kind] }, filePart] }],
        max_tokens: MAX_TOKENS[input.kind],
        stream: true,
      }),
    });
  } catch (error) {
    console.error('convert: OpenAI request failed', error);
    return jsonError(502, 'upstream_error', 'The conversion service could not be reached. Please try again.');
  }

  if (!response.ok || !response.body) {
    const detail = await response.text().catch(() => '');
    console.error('convert: OpenAI API error', response.status, detail.slice(0, 500));
    return jsonError(
      502,
      'upstream_error',
      input.kind === 'pdf'
        ? 'We could not convert this PDF. Try a smaller PDF, or open it in Octree to convert it.'
        : 'We could not convert this image. Please try again.',
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          // Keep a possibly incomplete trailing line for the next chunk.
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;
            try {
              const content = JSON.parse(data).choices?.[0]?.delta?.content;
              if (content) controller.enqueue(encoder.encode(content));
            } catch {
              // Skip invalid JSON
            }
          }
        }
      } catch (error) {
        console.error('convert: stream error', error);
        controller.error(error);
        return;
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });
}
