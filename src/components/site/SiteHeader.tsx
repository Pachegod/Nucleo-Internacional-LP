"use client";

import { useState } from "react";
import Link from "next/link";
import { ADMIN_URL } from "@/lib/config";

const NAV_LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#cases", label: "Cases" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-navy-ink font-display text-sm">
            N
          </span>
          <span className="min-w-0 font-display text-[15px] leading-none text-ink sm:text-[17px]">
            <span className="block truncate">Núcleo Internacional</span>
            <span className="mt-0.5 hidden font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-ink-faint sm:block">
              Polaris · COC Santa Catarina
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          <a
            href={ADMIN_URL}
            className="font-mono text-xs uppercase tracking-wide text-ink-faint hover:text-ink"
          >
            Painel interno
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-soft md:hidden"
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
        <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:bg-tag-bg hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={ADMIN_URL}
            className="rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:bg-tag-bg hover:text-ink"
          >
            Painel interno
          </a>
        </nav>
      )}
    </header>
  );
}
