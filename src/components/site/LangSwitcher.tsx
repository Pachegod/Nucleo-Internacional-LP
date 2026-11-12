import { LOCALES, LOCALE_COOKIE, HTML_LANG, localePath, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/pt";

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Seletor PT / EN / ES. São links comuns (navegação completa, para o
 * <html lang> e a metadata trocarem junto); o clique grava o cookie
 * ni-lang, que o proxy respeita acima do Accept-Language em visitas a "/".
 */
export function LangSwitcher({
  lang,
  t,
  className = "",
}: {
  lang: Locale;
  t: Dictionary["langSwitcher"];
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={t.label}
      className={`flex items-center rounded-full border border-sand/20 p-0.5 ${className}`}
    >
      {LOCALES.map((locale) => {
        const active = locale === lang;
        return (
          <a
            key={locale}
            href={localePath(locale)}
            hrefLang={HTML_LANG[locale]}
            lang={HTML_LANG[locale]}
            aria-label={t.names[locale]}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
            }}
            className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              active ? "bg-accent text-accent-ink" : "text-sand/75 hover:text-accent"
            }`}
          >
            {locale}
          </a>
        );
      })}
    </div>
  );
}
