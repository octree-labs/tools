import type { ReactNode } from "react";
import Link from "next/link";
import { Link as LocaleLink } from "@/src/i18n/navigation";
import { getSymbolPageRefByLatex, symbolPagePath } from "@/lib/symbol-pages";
import { CopyLatexButton } from "@/components/CopyLatexButton";
import KatexPreview from "@/components/KatexPreview";
import { getFaqJsonLd, serializeJsonLd, type FaqJsonLdItem } from "@/lib/json-ld";

/**
 * Presentational primitives for the editorial intros on symbol category
 * pages. They mirror the hub intro in app/[locale]/symbols/page.client.tsx
 * and must stay free of client-only code so intros render on the server.
 */

export function IntroSection({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
      {children}
    </section>
  );
}

export function IntroH2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-semibold text-gray-900 mb-3">{children}</h2>;
}

export function IntroH3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">{children}</h3>;
}

export interface QuickRefRow {
  /** The command copied to the clipboard and shown in the table. */
  latex: string;
  /** What KaTeX renders in the symbol column; defaults to `latex`. */
  preview?: string;
  use: string;
  /** Package the command needs; omitted means built into LaTeX. */
  pkg?: string;
}

/** Column headers and the "built in" cell, overridable per locale. */
export interface QuickRefLabels {
  symbol: string;
  command: string;
  use: string;
  package: string;
  builtIn: string;
  copy: string;
}

const defaultQuickRefLabels: QuickRefLabels = {
  symbol: "Symbol",
  command: "Command",
  use: "Use",
  package: "Package",
  builtIn: "built in",
  copy: "Copy",
};

/**
 * Copy-ready lookup table of the most used commands in a category. The
 * rendered symbol and copy button are client components; the command text
 * itself is server-rendered so it is indexable.
 */
export function QuickRefTable({
  rows,
  labels = defaultQuickRefLabels,
}: {
  rows: QuickRefRow[];
  labels?: QuickRefLabels;
}) {
  return (
    <div className="overflow-x-auto mb-4 border border-gray-200 rounded-lg bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-900">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">{labels.symbol}</th>
            <th scope="col" className="px-4 py-3 font-semibold">{labels.command}</th>
            <th scope="col" className="px-4 py-3 font-semibold">{labels.use}</th>
            <th scope="col" className="px-4 py-3 font-semibold">{labels.package}</th>
            <th scope="col" className="px-4 py-3 font-semibold">
              <span className="sr-only">{labels.copy}</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {rows.map((row) => (
            <tr key={row.latex} className="align-middle">
              <td className="px-4 py-2 text-lg whitespace-nowrap">
                <KatexPreview latex={row.preview ?? row.latex} displayMode={false} />
              </td>
              <td className="px-4 py-2">
                <QuickRefCommand latex={row.latex} />
              </td>
              <td className="px-4 py-2">{row.use}</td>
              <td className="px-4 py-2 whitespace-nowrap">{row.pkg ?? labels.builtIn}</td>
              <td className="px-4 py-2 text-right">
                <CopyLatexButton latex={row.latex} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The command cell; links to the symbol's own page when it has one. */
function QuickRefCommand({ latex }: { latex: string }) {
  const code = <code className="font-mono text-gray-800 whitespace-nowrap">{latex}</code>;
  const ref = getSymbolPageRefByLatex(latex);
  if (!ref) return code;
  return (
    <LocaleLink href={symbolPagePath(ref)} className="hover:underline text-blue-700" title={ref.name}>
      {code}
    </LocaleLink>
  );
}

/** FAQ list plus the matching schema.org FAQPage JSON-LD. */
export function IntroFaq({
  items,
  inLanguage,
}: {
  items: FaqJsonLdItem[];
  /** BCP 47 tag added to the FAQPage markup on translated intros. */
  inLanguage?: string;
}) {
  return (
    <>
      <dl className="space-y-5">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(getFaqJsonLd(items, inLanguage)) }}
      />
    </>
  );
}

export function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="mb-3 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}

export function IntroP({ children }: { children: ReactNode }) {
  return <p className="mb-3 last:mb-0">{children}</p>;
}

export function Cmd({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-[0.9em] font-mono whitespace-nowrap">
      {children}
    </code>
  );
}

export function IntroLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className = "text-blue-600 hover:text-blue-700 underline underline-offset-2";
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
