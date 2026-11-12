"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { LOCALES, LOCALE_COOKIE, HTML_LANG, localePath, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/pt";
import { ChevronDownIcon, GlobeIcon } from "./icons";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Grava a escolha manual (fora do componente: efeito colateral no document). */
function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

/**
 * Seletor de idioma do header: botão (globo + idioma atual) que abre a lista
 * Português / English / Español, cada um no próprio idioma.
 *
 * Escolher grava o cookie ni-lang (o proxy o respeita acima do Accept-Language
 * em visitas a "/") e navega por completo para a rota do idioma — assim o
 * <html lang> e a metadata trocam junto — mantendo a âncora (#secao) atual.
 *
 * Teclado: Enter/Espaço/↓/↑ abrem; ↑/↓/Home/End movem; Enter escolhe;
 * Esc fecha e devolve o foco ao botão; Tab ou clique fora fecham.
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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuId = useId();

  // Fecha ao clicar/tocar fora.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function focusItem(index: number) {
    const count = LOCALES.length;
    itemRefs.current[((index % count) + count) % count]?.focus();
  }

  function openMenu(focusIndex = LOCALES.indexOf(lang)) {
    setOpen(true);
    // Espera o menu montar antes de mover o foco.
    requestAnimationFrame(() => focusItem(focusIndex));
  }

  function close(returnFocus: boolean) {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  function choose(locale: Locale) {
    rememberLocale(locale);
    setOpen(false);
    if (locale === lang) return;
    window.location.assign(localePath(locale) + window.location.hash);
  }

  function onButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openMenu();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      openMenu(LOCALES.length - 1);
    }
  }

  function onMenuKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    const current = itemRefs.current.findIndex((el) => el === document.activeElement);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusItem(current + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusItem(current - 1);
        break;
      case "Home":
        e.preventDefault();
        focusItem(0);
        break;
      case "End":
        e.preventDefault();
        focusItem(LOCALES.length - 1);
        break;
      case "Escape":
        e.preventDefault();
        close(true);
        break;
      case "Tab":
        close(false);
        break;
      case " ":
        // Espaço também escolhe (links só reagem a Enter por padrão).
        if (current >= 0) {
          e.preventDefault();
          choose(LOCALES[current]);
        }
        break;
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`${t.label}: ${t.names[lang]}`}
        onClick={() => (open ? close(false) : openMenu())}
        onKeyDown={onButtonKeyDown}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand/30 px-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-expanded:border-accent"
      >
        <GlobeIcon />
        {lang}
        <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={t.label}
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-[calc(100%+8px)] z-40 min-w-[180px] overflow-hidden rounded-2xl border border-sand/15 bg-deep py-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        >
          {LOCALES.map((locale, i) => {
            const active = locale === lang;
            return (
              <li key={locale} role="none">
                <a
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  role="menuitemradio"
                  aria-checked={active}
                  href={localePath(locale)}
                  hrefLang={HTML_LANG[locale]}
                  lang={HTML_LANG[locale]}
                  tabIndex={-1}
                  onClick={(e) => {
                    e.preventDefault();
                    choose(locale);
                  }}
                  className={`flex min-h-11 items-center justify-between gap-4 px-4 text-sm outline-none transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.08] ${
                    active ? "font-semibold text-accent" : "text-sand/85"
                  }`}
                >
                  {t.names[locale]}
                  <span aria-hidden="true" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sand/45">
                    {active && (
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <path d="M5 12.5 10 17 19 7" />
                      </svg>
                    )}
                    {locale}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
