import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { latex } = await request.json();

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
            content: `Convert the following LaTeX document or snippet to clean, standard Markdown. Requirements:
- Preserve inline math as $...$ and display math as $$...$$
- Convert sections/headers to #, ##, ###, etc.
- Convert itemize/enumerate to Markdown lists
- Convert tables (tabular, booktabs) to Markdown tables
- Convert figures/images to Markdown image links if possible
- Convert \textbf, \textit, \emph to **bold** and *italic*
- Preserve code listings/environments as fenced code blocks
- Keep hyperlinks as [text](url)
- Output ONLY Markdown, no explanations or backticks around the whole document

LaTeX input:
${latex}`,
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
    console.error('LaTeX to Markdown conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
}


