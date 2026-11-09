import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { instructions } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'user',
            content: `Generate TikZ code based on these instructions: "${instructions}". 

Create a complete LaTeX document with:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{tikz} and any other necessary TikZ libraries
- Complete \\begin{document}...\\end{document} structure
- Well-commented TikZ code inside a tikzpicture environment

Return ONLY the complete LaTeX code, no explanations or markdown formatting.`,
          },
        ],
        max_completion_tokens: 4000,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    return streamTextResponse(response);
  } catch (error) {
    console.error('TikZ generation error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 