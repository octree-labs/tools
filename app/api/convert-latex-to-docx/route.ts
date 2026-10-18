import { NextRequest, NextResponse } from 'next/server';
import { htmlToDocx } from '@/lib/html-to-docx';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_INPUT_CHARS = 60_000;
const OPENAI_BASE_URL = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');

const SYSTEM_PROMPT = `You convert LaTeX source into clean, semantic HTML that will be turned into a Microsoft Word document.

Output rules:
- Output ONLY an HTML fragment (no <html>, <head>, <body>, no Markdown fences, no commentary).
- Use only these tags: h1 h2 h3 h4 h5 h6 p ul ol li table thead tbody tr th td strong em u code pre sup sub a br.
- Map structure: \\title -> <h1>, \\section -> <h2>, \\subsection -> <h3>, \\subsubsection -> <h4>, \\paragraph -> <p><strong>...</strong>.
- Put the author line and date (from \\author/\\date, if \\maketitle is used) in a <p> right after the <h1>. Put the abstract under <h2>Abstract</h2>.
- Drop the preamble, \\maketitle, \\label, comments, \\newpage, spacing commands and anything that has no visible content.
- Inline math: write it as readable plain text using Unicode where it helps (x², α, β, ∑, ∫, ≤, ≥, ≠, →, √, ∞, π, ×, ·). Use <sup> and <sub> for powers and indices. Never leave raw LaTeX macros such as \\frac or \\alpha; write them as readable text (e.g. (a + b)/2, α).
- Display math (equation, align, gather, \\[ \\], $$): one <p class="math">...</p> per equation line, written as readable Unicode text. Keep equation numbers as "(1)" at the end of the line if the environment is numbered.
- Lists: itemize -> <ul>, enumerate -> <ol>, description -> <ul> with the term in <strong>.
- Tables (tabular, booktabs, longtable, with or without a table float): <table> with the first header row in <thead>/<th>. Put the caption in a <p><em>Table N: ...</em></p> before the table.
- Figures: <p><em>Figure N: caption</em></p> (the image itself is not available).
- \\textbf -> <strong>, \\textit/\\emph -> <em>, \\underline -> <u>, \\texttt/\\verb -> <code>, verbatim/lstlisting/minted -> <pre>.
- \\href{url}{text} -> <a href="url">text</a>, \\url{url} -> <a href="url">url</a>.
- \\cite{key} -> [key] (or the author-year text if natbib \\citet/\\citep is used), \\ref/\\eqref -> the reference number if obvious, otherwise the label name. thebibliography -> <h2>References</h2> with an <ol> of entries.
- Footnotes: put the footnote text in parentheses inline.
- Escape &, < and > as &amp; &lt; &gt; in text. Preserve the document order exactly.`;

export async function POST(request: NextRequest) {
  let latex: unknown;
  try {
    ({ latex } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Request body must be JSON with a "latex" string.' }, { status: 400 });
  }

  if (typeof latex !== 'string' || !latex.trim()) {
    return NextResponse.json({ error: 'Provide a non-empty "latex" string.' }, { status: 400 });
  }
  if (latex.length > MAX_INPUT_CHARS) {
    return NextResponse.json(
      { error: `Input is too long (${latex.length} characters). The limit is ${MAX_INPUT_CHARS} characters.` },
      { status: 413 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'LaTeX to Word is not configured on this server: OPENAI_API_KEY is missing.' },
      { status: 500 }
    );
  }

  let html: string;
  try {
    const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0,
        max_tokens: 8000,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `LaTeX input:\n\n${latex}` },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'The AI conversion step failed. Please try again in a moment.' },
        { status: 502 }
      );
    }

    const data = await response.json();
    html = data?.choices?.[0]?.message?.content ?? '';
  } catch (error) {
    console.error('LaTeX to Word conversion error:', error);
    return NextResponse.json({ error: 'Could not reach the AI conversion service.' }, { status: 502 });
  }

  // Strip a Markdown code fence if the model wrapped its output anyway.
  html = html.trim().replace(/^```(?:html)?\s*/i, '').replace(/\s*```$/, '');
  if (!html) {
    return NextResponse.json({ error: 'The AI conversion step returned no content.' }, { status: 502 });
  }

  try {
    const title = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const buffer = await htmlToDocx(html, title || 'Converted LaTeX document');
    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="document.docx"',
        'Content-Length': String(buffer.length),
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('DOCX build error:', error);
    return NextResponse.json({ error: 'Failed to build the Word document.' }, { status: 500 });
  }
}
