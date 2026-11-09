import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { html } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: `Convert this HTML markup to a complete LaTeX document. Include:
- \\documentclass{article}
- Necessary packages (amsmath, amssymb, hyperref, etc.)
- Complete \\begin{document}...\\end{document} structure
- Proper LaTeX equivalents for HTML elements (headers, lists, tables, emphasis, etc.)

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

HTML input:
${html}`,
          },
        ],
        max_tokens: 2000,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    return streamTextResponse(response);
  } catch (error) {
    console.error('HTML conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 