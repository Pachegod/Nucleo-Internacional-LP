"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOGIN_URL } from "@/lib/config";
import { CTA } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#summer", label: "Summer Camps" },
  { href: "#parceiros", label: "Parceiros" },
];

export function SiteHeader({ logo }: { logo?: { src: string; alt: string } }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-2 border-rule bg-paper">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-3.5 sm:px-10 sm:py-[18px]">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          {logo ? (
            <Image
              src={logo.src}
              alt={logo.alt || "Núcleo Internacional"}
              width={30}
              height={30}
              className="h-[30px] w-[30px] shrink-0 object-contain"
            />
          ) : (
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center bg-accent text-accent-ink text-[15px] font-semibold">
              N
            </span>
          )}
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
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            className="border-2 border-rule px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:bg-accent-tint"
          >
            Login
          </a>
          <Link
            href="#inscrever"
            className="bg-accent px-4 py-2 text-[13px] font-semibold text-accent-ink transition-colors hover:bg-accent-deep"
          >
            {CTA.visit}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Link
            href="#inscrever"
            className="bg-accent px-3 py-2 text-[12px] font-semibold text-accent-ink"
          >
            {CTA.enroll}
          </Link>
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
            href={LOGIN_URL}
            className="px-2 py-3 text-sm text-ink-soft hover:bg-accent-tint hover:text-ink"
          >
            Login
          </a>
          <Link
            href="#inscrever"
            onClick={() => setMobileOpen(false)}
            className="mx-2 my-2 bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-ink"
          >
            {CTA.visit}
          </Link>
        </nav>
      )}
    </header>
  );
}
