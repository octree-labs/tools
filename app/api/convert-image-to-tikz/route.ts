import { NextRequest } from 'next/server';
import { AI_UNAVAILABLE, aiErrorResponse } from '@/lib/api-error';
import { streamTextResponse } from '@/lib/openai-stream';

const SYSTEM_PROMPT = `You are an expert LaTeX and TikZ engineer. Your task is to convert images of diagrams, flowcharts, shapes, and visual elements into clean, compilable TikZ code.

IMPORTANT RULES:
1. Output ONLY the TikZ code - no explanations, no markdown code blocks, no commentary.
2. The code must be a complete, compilable LaTeX document with all necessary packages.
3. Use clean, structured \\begin{tikzpicture} conventions with accurate geometry.
4. Create editable nodes and paths - NOT rasterized content.
5. Preserve the visual layout, colors, shapes, and text from the original image as accurately as possible.
6. Use appropriate TikZ libraries (arrows, shapes, positioning, calc, etc.) as needed.
7. Include meaningful comments in the code to explain different sections.
8. Use relative positioning and coordinates for maintainability.
9. For colors, use CUSTOM color names (e.g., mygreen, myblue, myorange) with \\definecolor - NEVER redefine standard color names like red, blue, green, orange, etc.
10. Ensure all text labels are preserved and positioned correctly.
11. Output the TikZ code as a chat message NOT a code cell

OUTPUT FORMAT:
- Start with \\documentclass{standalone}
- Include all necessary packages (tikz, and any required tikz libraries)
- Use \\begin{document} and \\end{document}
- The TikZ picture should be self-contained and compilable

CRITICAL COMPILATION RULES:
- ALWAYS specify a value for node distance (e.g., "node distance=2cm" NOT "node distance=cm")
- If using drop shadow, MUST include \\usetikzlibrary{shadows}
- If using opacity, MUST include \\usetikzlibrary{fadings} or use [opacity=X] syntax
- Use custom color names (mygreen, myblue, etc.) instead of redefining standard colors
- Always include \\usepackage{xcolor} if defining custom colors
- Test all positioning syntax: use "below=of node" NOT "below of=node" with positioning library

SHAPE RECOGNITION:
- Rectangles: Use \\node[draw, rectangle] or \\draw commands
- Circles/Ellipses: Use \\node[draw, circle] or \\node[draw, ellipse]
- Arrows: Use appropriate arrow tips with ->>, ->, -stealth, etc.
- Lines: Use \\draw with appropriate line styles (dashed, dotted, thick, etc.)
- Text: Use \\node for labels and text elements
- Flowchart shapes: Use shapes.geometric library for diamonds, parallelograms, etc.

Remember: Output ONLY valid LaTeX/TikZ code that compiles without errors, nothing else.`;

export async function POST(request: NextRequest) {
  try {
    const { image, mimeType } = await request.json();

    if (!image) {
      return aiErrorResponse(400, 'No image was sent.', 'missing_file');
    }

    const validMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
    const finalMimeType = validMimeTypes.includes(mimeType) ? mimeType : 'image/png';

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:${finalMimeType};base64,${image}`,
                  detail: 'high',
                },
              },
              {
                type: 'text',
                text: 'Convert this image into TikZ code. Analyze all shapes, text, colors, arrows, and layout. Generate clean, compilable LaTeX/TikZ code that accurately reproduces this diagram.',
              },
            ],
          },
        ],
        max_tokens: 8192,
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, (await response.text().catch(() => '')).slice(0, 500));
      return aiErrorResponse(502, AI_UNAVAILABLE, 'upstream_error');
    }

    return streamTextResponse(response);
  } catch (error) {
    console.error('Image to TikZ conversion error:', error);
    return aiErrorResponse(500, AI_UNAVAILABLE);
  }
}