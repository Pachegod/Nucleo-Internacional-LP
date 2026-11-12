"use client";

import { useState } from "react";
import Link from "next/link";
import { LOGIN_URL } from "@/lib/config";
import { Logo } from "./Logo";
import { UserIcon } from "./icons";

const NAV_LINKS = [
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#summer", label: "Summer Camps" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#agenda", label: "Agenda" },
];

const LOGIN_CLASS =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-sand/30 px-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-accent hover:text-accent";

export function SiteHeader({ logo }: { logo?: { src: string; alt: string } }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-sand/10 bg-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 sm:px-10 lg:px-14">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <Logo logo={logo} className="h-10 sm:h-11" />
        </Link>

        <nav aria-label="Seções" className="hidden items-center gap-7 text-[13px] font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="py-3 text-sand/80 transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
          <a href={LOGIN_URL} aria-label="Entrar na área da equipe" className={`ml-1 ${LOGIN_CLASS}`}>
            <UserIcon />
            Entrar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 text-sand md:hidden"
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

      {mobileOpen && (
        <nav aria-label="Seções" className="flex flex-col border-t border-sand/10 px-5 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-sand/10 py-3.5 text-sm text-sand/85 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a href={LOGIN_URL} className={`mt-4 self-start ${LOGIN_CLASS}`}>
            <UserIcon />
            Entrar
          </a>
        </nav>
      )}
    </header>
  );
}
