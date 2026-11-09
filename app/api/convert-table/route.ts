import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';

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

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close();
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          console.error('Stream error:', error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 