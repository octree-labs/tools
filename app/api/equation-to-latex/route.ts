import { NextRequest, NextResponse } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

export async function POST(request: NextRequest) {
  try {
    const { equation, image } = await request.json();

    // Validate input
    if (!equation && !image) {
      return NextResponse.json(
        { error: 'Either equation text or image is required' },
        { status: 400 }
      );
    }

    if (equation && equation.length > 2000) {
      return NextResponse.json(
        { error: 'Equation text must be 2000 characters or less' },
        { status: 400 }
      );
    }

    // Build messages based on input type
    const messages: Array<{
      role: 'system' | 'user';
      content: string | Array<{ type: string; text?: string; image_url?: { url: string } }>;
    }> = [
      {
        role: 'system',
        content: `You are a LaTeX equation generator. Your task is to convert mathematical descriptions or images into valid LaTeX code.

Rules:
- Write the code as a chat message NOT a code cell
- Output ONLY valid LaTeX equations
- Use display math mode with \\[ \\] for main equations
- Use inline math mode with $ $ only when appropriate for inline expressions
- NO markdown formatting (no \`\`\` code blocks)
- NO explanations or additional text
- NO document boilerplate (no \\documentclass, \\begin{document}, etc.)
- Include only the mathematical expression itself
- Use appropriate LaTeX packages features (amsmath, amssymb) but don't include package imports
- For complex equations, use align or equation environments inside the display math delimiters`,
      },
    ];

    // Add user message based on input type
    if (image && equation) {
      // Both image and text provided
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Convert this mathematical expression to LaTeX. The description is: "${equation}". Also refer to the attached image for visual context. Output ONLY the LaTeX equation code.`,
          },
          {
            type: 'image_url',
            image_url: {
              url: image,
            },
          },
        ],
      });
    } else if (image) {
      // Only image provided
      messages.push({
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Convert this mathematical expression from the image to LaTeX. Output ONLY the LaTeX equation code.',
          },
          {
            type: 'image_url',
            image_url: {
              url: image,
            },
          },
        ],
      });
    } else {
      // Only text provided
      messages.push({
        role: 'user',
        content: `Convert this mathematical description to LaTeX: "${equation}". Output ONLY the LaTeX equation code.`,
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    return streamTextResponse(response);
  } catch (error) {
    console.error('Equation to LaTeX error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
}
