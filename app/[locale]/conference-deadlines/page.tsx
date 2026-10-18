import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { generateAlternates, withDefaultOgImage } from "@/lib/seo";

/**
 * English-only editorial page listing the typical submission windows of the
 * major AI and CS venues, with a link to the matching LaTeX template on this
 * site. It renders under every locale prefix but does not use translations,
 * so adding a locale never leaves missing-message errors here.
 */

const PAGE_PATH = "/conference-deadlines";
const TITLE = "AI and CS Conference Deadlines 2026–2027 | LaTeX Templates";
const DESCRIPTION =
  "Typical submission windows for NeurIPS, ICML, ICLR, AAAI, ACL, EMNLP, CVPR, KDD, SIGIR, ICASSP and INTERSPEECH, with a free LaTeX template for each.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const alternates = generateAlternates(PAGE_PATH, locale);
  return withDefaultOgImage({
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      "conference deadlines 2026",
      "conference deadlines 2027",
      "ai conference deadlines",
      "neurips deadline",
      "icml deadline",
      "iclr deadline",
      "aaai deadline",
      "acl deadline",
      "emnlp deadline",
      "cvpr deadline",
      "latex conference template",
    ],
    alternates,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: alternates.canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
    },
  });
}

interface Venue {
  name: string;
  area: string;
  submission: string;
  held: string;
  template: { slug: string; label: string; note?: string };
  sites: { href: string; label: string }[];
}

const venues: Venue[] = [
  {
    name: "NeurIPS",
    area: "Machine learning",
    submission: "Abstract early/mid May, full paper about one week later",
    held: "December",
    template: { slug: "neurips-2027", label: "NeurIPS 2027" },
    sites: [{ href: "https://neurips.cc/", label: "neurips.cc" }],
  },
  {
    name: "ICML",
    area: "Machine learning",
    submission: "Late January / early February",
    held: "July",
    template: {
      slug: "neurips-2027",
      label: "NeurIPS 2027",
      note: "ICML ships its own icml style; this is the closest starting point",
    },
    sites: [{ href: "https://icml.cc/", label: "icml.cc" }],
  },
  {
    name: "ICLR",
    area: "Representation learning",
    submission: "Late September / early October",
    held: "April / May",
    template: {
      slug: "neurips-2027",
      label: "NeurIPS 2027",
      note: "ICLR uses a single-column style descended from the NeurIPS one",
    },
    sites: [{ href: "https://iclr.cc/", label: "iclr.cc" }],
  },
  {
    name: "AAAI",
    area: "Artificial intelligence",
    submission: "August",
    held: "January / February",
    template: { slug: "aaai-2027", label: "AAAI 2027" },
    sites: [{ href: "https://aaai.org/", label: "aaai.org" }],
  },
  {
    name: "ACL",
    area: "Natural language processing",
    submission: "ACL Rolling Review cycles; main commitment deadline around February",
    held: "July / August",
    template: { slug: "emnlp-2026", label: "EMNLP 2026 (ACL style)" },
    sites: [{ href: "https://www.aclweb.org/", label: "aclweb.org" }],
  },
  {
    name: "EMNLP",
    area: "Natural language processing",
    submission: "Around June (via ACL Rolling Review)",
    held: "November / December",
    template: { slug: "emnlp-2026", label: "EMNLP 2026" },
    sites: [{ href: "https://2026.emnlp.org/", label: "2026.emnlp.org" }],
  },
  {
    name: "CVPR",
    area: "Computer vision",
    submission: "November",
    held: "June",
    template: {
      slug: "ieee-conference",
      label: "IEEE Conference Paper",
      note: "CVPR uses an IEEE-style two-column format with its own cvpr.sty",
    },
    sites: [{ href: "https://cvpr.thecvf.com/", label: "cvpr.thecvf.com" }],
  },
  {
    name: "ICCV / ECCV",
    area: "Computer vision",
    submission: "Alternate years: ICCV (odd years) around March; ECCV (even years) around March",
    held: "ICCV October; ECCV September / October",
    template: { slug: "ieee-conference", label: "IEEE Conference Paper" },
    sites: [
      { href: "https://iccv.thecvf.com/", label: "iccv.thecvf.com" },
      { href: "https://eccv.ecva.net/", label: "eccv.ecva.net" },
    ],
  },
  {
    name: "KDD",
    area: "Data mining",
    submission: "February",
    held: "August",
    template: {
      slug: "research-paper",
      label: "Research Paper",
      note: "KDD uses the ACM acmart class; start here and swap the class",
    },
    sites: [{ href: "https://www.kdd.org/", label: "kdd.org" }],
  },
  {
    name: "SIGIR",
    area: "Information retrieval",
    submission: "January",
    held: "July",
    template: {
      slug: "research-paper",
      label: "Research Paper",
      note: "SIGIR uses the ACM acmart class",
    },
    sites: [{ href: "https://sigir.org/", label: "sigir.org" }],
  },
  {
    name: "ICASSP",
    area: "Signal processing",
    submission: "September",
    held: "April",
    template: { slug: "ieee-conference", label: "IEEE Conference Paper" },
    sites: [{ href: "https://ieeeicassp.org/", label: "ieeeicassp.org" }],
  },
  {
    name: "INTERSPEECH",
    area: "Speech",
    submission: "February / March",
    held: "September",
    template: {
      slug: "ieee-conference",
      label: "IEEE Conference Paper",
      note: "INTERSPEECH has its own ISCA two-column template",
    },
    sites: [{ href: "https://www.isca-speech.org/", label: "isca-speech.org" }],
  },
];

const linkClass = "text-blue-600 hover:text-blue-700 underline underline-offset-2";

export default async function ConferenceDeadlinesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-gray-100 to-gray-50 pt-16 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AI and CS Conference Deadlines 2026–2027 with LaTeX Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When the major machine learning, NLP, vision and systems venues
            usually open for submissions, and which free LaTeX template on this
            site gets you to a compiling draft fastest.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 mb-8">
          <strong>Exact dates change every year.</strong> The windows below
          describe when each venue <em>typically</em> opens and closes; the
          announced dates move by days or weeks from one edition to the next,
          and abstract deadlines, supplementary deadlines and rebuttal periods
          are not listed. Always confirm the current call for papers on the
          official site linked in the last column before planning around a
          date.
        </div>

        <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-900">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Conference</th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Area</th>
                <th scope="col" className="px-4 py-3 font-semibold">Typical submission window</th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Conference held</th>
                <th scope="col" className="px-4 py-3 font-semibold">LaTeX template</th>
                <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Official site</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {venues.map((v) => (
                <tr key={v.name} className="align-top">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{v.name}</td>
                  <td className="px-4 py-3">{v.area}</td>
                  <td className="px-4 py-3">{v.submission}</td>
                  <td className="px-4 py-3">{v.held}</td>
                  <td className="px-4 py-3">
                    <Link href={`/templates/${v.template.slug}`} className={linkClass}>
                      {v.template.label}
                    </Link>
                    {v.template.note && (
                      <span className="block text-xs text-gray-500 mt-1">{v.template.note}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {v.sites.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className={`${linkClass} block`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">How to use this page</h2>
          <p>
            Pick the venue, open the matching template, and click{" "}
            <em>Open in Octree</em> to start writing with a live PDF preview.
            Every template on this site compiles with plain pdfLaTeX and ships
            with comments explaining where the official style file from the
            author kit goes, so you can draft now and swap in{" "}
            <code className="px-1 bg-gray-100 rounded text-[0.9em]">neurips_2027.sty</code>,{" "}
            <code className="px-1 bg-gray-100 rounded text-[0.9em]">aaai27.sty</code> or{" "}
            <code className="px-1 bg-gray-100 rounded text-[0.9em]">acl.sty</code> when
            you are ready to submit.
          </p>
          <p>
            Accepted papers almost always come with a poster session. The{" "}
            <Link href="/templates/conference-poster" className={linkClass}>
              A0 conference poster template
            </Link>{" "}
            uses beamerposter, needs no external images and prints at A0 or
            36 by 48 inches with one option change.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Reading the submission windows</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Abstract versus full paper.</strong> NeurIPS, ICML and most
              vision conferences require a short abstract registration about a
              week before the full paper. Missing the abstract deadline means
              missing the conference.
            </li>
            <li>
              <strong>ACL Rolling Review.</strong> ACL, EMNLP and NAACL accept
              papers through ARR, which has its own monthly or bimonthly
              cycles; the dates above are the commitment deadlines for the
              conference itself, not the ARR submission dates.
            </li>
            <li>
              <strong>Time zones.</strong> Almost every venue uses Anywhere on
              Earth (AoE, UTC-12). A deadline of 23:59 AoE is 11:59 UTC on the
              following day: early afternoon in Europe and evening in East Asia.
            </li>
            <li>
              <strong>Page limits.</strong> Limits change with the format:
              NeurIPS allows 9 content pages, AAAI 7 plus references, ACL
              venues 8 for long papers, and IEEE conferences usually 6 with
              paid extra pages. Check the call for papers of the current
              edition.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Templates by format family</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Single-column ML preprints</strong> (NeurIPS, ICLR):{" "}
              <Link href="/templates/neurips-2027" className={linkClass}>NeurIPS 2027</Link>
            </li>
            <li>
              <strong>Two-column AI papers</strong> (AAAI, IJCAI-like):{" "}
              <Link href="/templates/aaai-2027" className={linkClass}>AAAI 2027</Link>
            </li>
            <li>
              <strong>ACL-style NLP papers</strong> (ACL, EMNLP, NAACL):{" "}
              <Link href="/templates/emnlp-2026" className={linkClass}>EMNLP 2026</Link>
            </li>
            <li>
              <strong>IEEE two-column papers</strong> (ICASSP, CVPR-like, IEEE
              workshops):{" "}
              <Link href="/templates/ieee-conference" className={linkClass}>IEEE Conference Paper</Link>
            </li>
            <li>
              <strong>Generic research paper</strong> to adapt to ACM or other
              classes:{" "}
              <Link href="/templates/research-paper" className={linkClass}>Research Paper</Link>
            </li>
            <li>
              <strong>Poster</strong> for any venue:{" "}
              <Link href="/templates/conference-poster" className={linkClass}>Conference Poster</Link>
            </li>
          </ul>
          <p className="pt-2">
            Browse the full list on the{" "}
            <Link href="/templates" className={linkClass}>templates page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
