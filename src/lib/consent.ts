"use client";

import { useMemo, useSyncExternalStore } from "react";

// Consentimento de cookies (LGPD). A escolha fica no cookie essencial
// `ni-consent` por 12 meses. Ferramentas opcionais (analytics, pixel) só
// devem carregar quando `useConsent()` devolver a categoria liberada:
//
//   const consent = useConsent();
//   {consent?.analytics && <Script src="…gtag…" />}
//
// Mudou o conjunto de cookies opcionais? Suba CONSENT_VERSION para pedir de novo.

export const CONSENT_COOKIE = "ni-consent";
export const CONSENT_VERSION = 1;
const MAX_AGE = 60 * 60 * 24 * 365;

/** Evento para reabrir a central de preferências (link do rodapé). */
export const OPEN_CONSENT_EVENT = "ni:open-consent";
/** Evento disparado quando a escolha muda. */
const CHANGE_EVENT = "ni:consent-change";

export type Consent = { analytics: boolean; marketing: boolean };

type Stored = Consent & { v: number; at: string };

function readRaw(): string {
  return (
    document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${CONSENT_COOKIE}=`))
      ?.slice(CONSENT_COOKIE.length + 1) ?? ""
  );
}

function parse(raw: string): Consent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(decodeURIComponent(raw)) as Stored;
    if (data.v !== CONSENT_VERSION) return null;
    return { analytics: !!data.analytics, marketing: !!data.marketing };
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  const value: Stored = { ...consent, v: CONSENT_VERSION, at: new Date().toISOString() };
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; path=/; max-age=${MAX_AGE}; samesite=lax`;
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function openConsentPreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT));
}

export function readConsent(): Consent | null {
  return typeof document === "undefined" ? null : parse(readRaw());
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

const SERVER = "\u0000ssr";

/**
 * Estado do consentimento. `ready` é false no HTML estático (SSR), para a
 * barra não piscar; `consent` é null enquanto a pessoa não decidiu.
 */
export function useConsentState(): { ready: boolean; consent: Consent | null } {
  const raw = useSyncExternalStore(subscribe, readRaw, () => SERVER);
  return useMemo(() => ({ ready: raw !== SERVER, consent: raw === SERVER ? null : parse(raw) }), [raw]);
}

/** Escolha atual (null = ainda não decidiu ou durante o SSR). */
export function useConsent(): Consent | null {
  return useConsentState().consent;
}
