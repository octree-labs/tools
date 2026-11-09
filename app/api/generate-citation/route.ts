import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

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
            content: `Generate a proper BibTeX citation entry from this input. The input might be:
- Structured details (title, author, year, etc.)
- A DOI (try to extract metadata if possible)
- Article details in natural language
- A URL or reference

Create a well-formatted BibTeX entry with:
- Appropriate entry type (@article, @book, @inproceedings, etc.)
- A meaningful citation key (e.g., author2023title)
- All relevant fields (author, title, year, journal/booktitle, volume, pages, etc.)
- Proper formatting and escaping

Return ONLY the BibTeX code, no explanations or markdown.

Input:
${input}`,
          },
        ],
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    // Create a transform stream to parse SSE and extract content
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
    console.error('Citation generation error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
} 