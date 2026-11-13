import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LEGAL_UPDATED_AT } from "@/lib/config";
import { getLegalDocument, type LegalSection } from "@/lib/legal";
import {
  HTML_LANG,
  LEGAL_DOCS,
  LEGAL_SLUGS,
  LOCALES,
  getDictionary,
  hasLocale,
  legalDocFromSlug,
  legalPath,
  localePath,
} from "@/lib/i18n";

// Páginas legais: /privacidade, /termos, /cookies (PT, via proxy) e
// /en/privacy… /es/privacidad… Só os slugs do próprio idioma existem.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => LEGAL_DOCS.map((doc) => ({ lang, doc: LEGAL_SLUGS[lang][doc] })));
}

async function resolve(params: Promise<{ lang: string; doc: string }>) {
  const { lang, doc: slug } = await params;
  if (!hasLocale(lang)) return null;
  const doc = legalDocFromSlug(lang, slug);
  return doc ? { lang, doc } : null;
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[doc]">): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  const d = getLegalDocument(r.lang, r.doc);
  return {
    title: `${d.title} — Núcleo Polaris`,
    description: d.summary,
    alternates: {
      canonical: legalPath(r.lang, r.doc),
      languages: Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], legalPath(l, r.doc)])),
    },
  };
}

const MAILTO = /([\w.+-]+@[\w-]+\.[\w.]+[a-z])/;
const LINK = /\[([^\]]+)\]\(([^)]+)\)/;

/** Texto com [rótulo](caminho) e e-mails transformados em links. */
function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let rest = text;
  let key = 0;
  while (rest) {
    const link = LINK.exec(rest);
    const mail = MAILTO.exec(rest);
    const next = [link, mail].filter(Boolean).sort((a, b) => a!.index - b!.index)[0];
    if (!next) {
      out.push(rest);
      break;
    }
    out.push(rest.slice(0, next.index));
    const isLink = next === link;
    out.push(
      <a
        key={key++}
        href={isLink ? next[2] : `mailto:${next[1]}`}
        className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-2 hover:text-accent-deep"
      >
        {next[1]}
      </a>
    );
    rest = rest.slice(next.index + next[0].length);
  }
  return <>{out}</>;
}

function Section({ s }: { s: LegalSection }) {
  return (
    <section className="border-t border-night/10 pt-8">
      <h2 className="font-display text-[28px] leading-none text-navy sm:text-[32px]">{s.title}</h2>
      {s.paragraphs?.map((p) => (
        <p key={p} className="mt-4 text-[15px] leading-[1.75] text-night/80">
          <Rich text={p} />
        </p>
      ))}
      {s.list && (
        <ul className="mt-4 flex flex-col gap-2.5">
          {s.list.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-night/80">
              <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" />
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      )}
      {s.table && (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-night/10 bg-white">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                {s.table.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-night/10 align-top">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 leading-snug ${i === 0 ? "font-semibold text-navy" : "text-night/75"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.after?.map((p) => (
        <p key={p} className="mt-4 text-[15px] leading-[1.75] text-night/80">
          <Rich text={p} />
        </p>
      ))}
    </section>
  );
}

export default async function LegalPage({ params }: PageProps<"/[lang]/[doc]">) {
  const r = await resolve(params);
  if (!r) notFound();
  const { lang, doc } = r;
  const t = getDictionary(lang);
  const d = getLegalDocument(lang, doc);
  const updated = new Intl.DateTimeFormat(HTML_LANG[lang], { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(LEGAL_UPDATED_AT)
  );

  return (
    <article className="bg-cream text-night">
      <div className="mx-auto max-w-[860px] px-5 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36">
        <a href={localePath(lang)} className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-deep hover:text-navy">
          ← {t.legal.back}
        </a>
        <h1 className="mt-6 font-display text-[48px] leading-[0.95] text-navy sm:text-[64px]">{d.title}</h1>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-night/50">
          {t.legal.updated}: <time dateTime={LEGAL_UPDATED_AT}>{updated}</time>
        </p>
        <p className="mt-6 text-base leading-[1.75] text-night/75 sm:text-lg">{d.summary}</p>

        <div className="mt-12 flex flex-col gap-10">
          {d.sections.map((s) => (
            <Section key={s.title} s={s} />
          ))}
        </div>

        <nav aria-label={t.legal.navLabel} className="mt-16 border-t border-night/10 pt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-night/50">{t.legal.related}</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {LEGAL_DOCS.filter((other) => other !== doc).map((other) => (
              <li key={other}>
                <a
                  href={legalPath(lang, other)}
                  className="inline-flex min-h-11 items-center rounded-full border border-night/15 bg-white px-5 text-sm font-semibold text-navy hover:border-navy"
                >
                  {t.legal[other]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
