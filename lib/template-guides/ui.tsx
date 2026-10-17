import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Small styled primitives for long-form template guides.
 *
 * The site uses Tailwind v4 without the typography plugin, so guides compose
 * these instead of relying on a `prose` class. Keep them presentational and
 * free of client-only code so guides stay server-renderable.
 */

export function GuideH2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24 first:mt-0"
    >
      {children}
    </h2>
  );
}

export function GuideH3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="text-lg font-semibold text-gray-900 mt-8 mb-3 scroll-mt-24">
      {children}
    </h3>
  );
}

export function GuideP({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
}

export function GuideUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
      {children}
    </ul>
  );
}

export function GuideOl({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
      {children}
    </ol>
  );
}

export function GuideCode({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-[0.9em] font-mono">
      {children}
    </code>
  );
}

export function GuidePre({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-4">
      <pre className="p-4 text-sm text-gray-800 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function GuideLink({
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

export function GuideTable({
  headers,
  rows,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-900">
          <tr>
            {headers.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface GuideFaqItem {
  question: string;
  answer: string;
}

/** Renders a FAQ list plus the matching schema.org FAQPage JSON-LD. */
export function GuideFaq({ items }: { items: GuideFaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <dl className="space-y-6 mb-4">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
            <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
