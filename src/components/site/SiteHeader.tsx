"use client";

import { useState } from "react";
import { LOGIN_URL } from "@/lib/config";
import { Logo } from "./Logo";
import { UserIcon } from "./icons";
import { LangSwitcher } from "./LangSwitcher";
import { localePath, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/pt";

const NAV_KEYS = ["quem-somos", "trajetoria", "solucoes", "summer", "parceiros", "agenda"] as const;

const LOGIN_CLASS =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-sand/30 px-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-accent hover:text-accent";

export function SiteHeader({
  logo,
  lang,
  t,
  langSwitcher,
  logoAlt,
}: {
  logo?: { src: string; alt: string };
  lang: Locale;
  t: Dictionary["header"];
  langSwitcher: Dictionary["langSwitcher"];
  logoAlt: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = NAV_KEYS.map((key) => ({ href: `${localePath(lang)}#${key}`, label: t.nav[key] }));

  return (
    <header className="sticky top-0 z-30 border-b border-sand/10 bg-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 sm:px-10 lg:px-14">
        <a href={localePath(lang)} className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <Logo logo={logo} alt={logoAlt} className="h-10 sm:h-11" />
        </a>

        <nav aria-label={t.navLabel} className="hidden items-center gap-5 text-[13px] font-medium md:flex lg:gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap py-3 text-sand/80 transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
          <LangSwitcher lang={lang} t={langSwitcher} />
          <a href={LOGIN_URL} aria-label={t.loginAria} className={LOGIN_CLASS}>
            <UserIcon />
            {t.login}
          </a>
        </nav>

        <div className="flex items-center gap-2.5 md:hidden">
        <LangSwitcher lang={lang} t={langSwitcher} />
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 text-sand"
        >
          {mobileOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label={t.navLabel} className="flex flex-col border-t border-sand/10 px-5 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-sand/10 py-3.5 text-sm text-sand/85 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a href={LOGIN_URL} aria-label={t.loginAria} className={`mt-4 self-start ${LOGIN_CLASS}`}>
            <UserIcon />
            {t.login}
          </a>
        </nav>
      )}
    </header>
  );
}
