import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';

export async function POST(request: NextRequest) {
  try {
    const { mermaid } = await request.json();

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
            content: `Convert this Mermaid diagram syntax to a complete LaTeX document using TikZ. Include:
- \\documentclass{standalone} or \\documentclass{article}
- \\usepackage{tikz} and necessary TikZ libraries
- Complete \\begin{document}...\\end{document} structure
- Properly formatted TikZ code that recreates the Mermaid diagram
- IMPORTANT: Position all nodes properly using positioning syntax like "below of=", "right of=", coordinates, or positioning library
- Ensure nodes don't overlap by specifying explicit positions
- Use proper node distance and spacing

Return ONLY the complete LaTeX code, no explanations or markdown formatting.

Mermaid input:
${mermaid}`,
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
    console.error('Mermaid conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 