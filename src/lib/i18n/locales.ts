// Idiomas da LP: PT-BR é o padrão e vive em "/", EN e ES em "/en" e "/es".
// Internamente "/" é reescrito para "/pt" pelo proxy (src/proxy.ts), então
// todas as páginas ficam sob app/[lang] e recebem o idioma por params.

// Só constantes e helpers (sem dicionários) — seguro para Client Components.
export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

/** Cookie gravado pelo seletor de idioma — a escolha manual sempre vence o Accept-Language. */
export const LOCALE_COOKIE = "ni-lang";

/** Valor do atributo <html lang> e de hreflang. */
export const HTML_LANG: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };

export function hasLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Caminho público da home em cada idioma (PT fica na raiz, sem prefixo). */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

/**
 * Escolhe o idioma a partir do Accept-Language (ex. "en-US,en;q=0.9,pt;q=0.5").
 * Considera só o idioma base de cada entrada e respeita os pesos q;
 * sem nada suportado, cai no padrão (PT).
 */
export function matchAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number(q.slice(2)) : 1;
      return { base: tag.trim().toLowerCase().split("-")[0], weight: Number.isNaN(weight) ? 0 : weight, index };
    })
    .filter((entry) => entry.base && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  for (const { base } of ranked) {
    if (hasLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
