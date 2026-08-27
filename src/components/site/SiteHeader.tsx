"use client";

import { useState } from "react";
import Link from "next/link";
import { ADMIN_URL } from "@/lib/config";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#cases", label: "Cases" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-2 border-rule bg-paper">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-3.5 sm:px-10 sm:py-[18px]">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center bg-accent text-accent-ink text-[15px] font-semibold">
            N
          </span>
          <span className="min-w-0 leading-[1.1]">
            <span className="block truncate text-[15px] font-semibold -tracking-[0.01em] sm:text-base">
              Núcleo Internacional
            </span>
            <span className="mt-[3px] hidden font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint sm:block">
              Polaris · COC Santa Catarina
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <a
            href={ADMIN_URL}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint hover:text-accent"
          >
            Painel interno
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center border border-line text-ink-soft"
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
        <nav className="flex flex-col border-t border-line px-4 py-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-2 py-3 text-sm text-ink-soft hover:bg-accent-tint hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={ADMIN_URL}
            className="px-2 py-3 text-sm text-ink-soft hover:bg-accent-tint hover:text-ink"
          >
            Painel interno
          </a>
        </nav>
      )}
    </header>
  );
}
