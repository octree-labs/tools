import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { image, type } = await request.json();
    const fileData = image;

    // For now, use GPT-4o-mini to convert table data to LaTeX
    // In production, you might want to parse the files directly
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
            content: `Convert this table data to a complete LaTeX document with a properly formatted table. The file type is ${type}. Include \\documentclass{article}, necessary packages (booktabs, array, etc.), and wrap the table in \\begin{document}...\\end{document}. Return ONLY the complete LaTeX code, no explanations or markdown formatting.\n\nTable data:\n${fileData}`,
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
    console.error('Conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 