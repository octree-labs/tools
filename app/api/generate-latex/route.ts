import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

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
            content: `You are a LaTeX expert. Generate a complete, well-formatted LaTeX document based on this description:

"${prompt}"

Requirements:
- Include \\documentclass with appropriate class (article, report, beamer, etc.)
- Add all necessary packages (amsmath, amssymb, graphicx, etc.)
- Create a complete document structure with \\begin{document}...\\end{document}
- Include proper sections, formatting, and LaTeX best practices
- Add placeholder content where appropriate
- Make it ready to compile

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_tokens: 2500,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    return streamTextResponse(response);
  } catch (error) {
    console.error('LaTeX generation error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 