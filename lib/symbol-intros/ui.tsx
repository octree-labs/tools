import type { ReactNode } from "react";
import Link from "next/link";

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
