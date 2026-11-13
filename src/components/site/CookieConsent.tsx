"use client";

import { useEffect, useId, useRef, useState } from "react";
import { OPEN_CONSENT_EVENT, readConsent, saveConsent, useConsentState, type Consent } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n/pt";

const BTN =
  "min-h-11 rounded-full px-4 text-[11px] sm:px-5 font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
// Aceitar e recusar com o mesmo peso visual: recusar precisa ser tão fácil quanto aceitar.
const BTN_SOLID = `${BTN} bg-accent text-accent-ink hover:brightness-110`;
const BTN_LINE = `${BTN} border border-sand/30 text-sand hover:border-accent hover:text-accent`;

/**
 * Aviso de cookies (barra inferior) + central de preferências (diálogo).
 * A barra aparece até a pessoa decidir; o link "Preferências de cookies" do
 * rodapé reabre o diálogo a qualquer momento.
 */
export function CookieConsent({ t, policyHref }: { t: Dictionary["consent"]; policyHref: string }) {
  const { ready, consent } = useConsentState();
  const banner = ready && !consent;
  const [dialog, setDialog] = useState(false);
  const [choice, setChoice] = useState<Consent>({ analytics: false, marketing: false });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const open = () => {
      setChoice(readConsent() ?? { analytics: false, marketing: false });
      setDialog(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (dialog && !el.open) el.showModal();
    if (!dialog && el.open) el.close();
  }, [dialog]);

  function decide(consent: Consent) {
    saveConsent(consent);
    setChoice(consent);
    setDialog(false);
  }

  const categories = [
    { key: "essential", fixed: true },
    { key: "analytics", fixed: false },
    { key: "marketing", fixed: false },
  ] as const;

  return (
    <>
      {banner && !dialog && (
        <div
          role="region"
          aria-label={t.title}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-sand/15 bg-deep/95 text-sand shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-4 sm:px-10 sm:py-5 lg:flex-row lg:items-center lg:gap-8 lg:px-14">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{t.title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-sand/80 sm:text-sm">
                {t.text}{" "}
                <a href={policyHref} className="font-semibold text-sand underline underline-offset-2 hover:text-accent">
                  {t.policy}
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
              <button type="button" className={BTN_LINE} onClick={() => setDialog(true)}>
                {t.customize}
              </button>
              <button type="button" className={BTN_LINE} onClick={() => decide({ analytics: false, marketing: false })}>
                {t.rejectAll}
              </button>
              <button type="button" className={`${BTN_SOLID} order-first col-span-2 sm:order-none`} onClick={() => decide({ analytics: true, marketing: true })}>
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setDialog(false)}
        className="m-auto w-[min(560px,calc(100vw-32px))] rounded-3xl bg-cream p-0 text-night backdrop:bg-night/70"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="font-display text-[30px] leading-none text-navy">
              {t.dialogTitle}
            </h2>
            <button
              type="button"
              onClick={() => setDialog(false)}
              aria-label={t.close}
              className="-mr-2 -mt-1 flex h-10 w-10 items-center justify-center rounded-full text-xl text-night/60 hover:bg-night/5"
            >
              ×
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-night/70">{t.dialogText}</p>

          <ul className="mt-5 divide-y divide-night/10 rounded-2xl border border-night/10 bg-white">
            {categories.map(({ key, fixed }) => {
              const c = t.categories[key];
              const checked = fixed ? true : choice[key];
              return (
                <li key={key} className="flex items-start gap-4 p-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-navy">{c.name}</p>
                    <p className="mt-1 text-[13px] leading-snug text-night/65">{c.desc}</p>
                  </div>
                  {fixed ? (
                    <span className="mt-0.5 shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-deep">
                      {t.alwaysOn}
                    </span>
                  ) : (
                    <label className="relative mt-0.5 inline-flex shrink-0 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={checked}
                        onChange={(e) => setChoice((prev) => ({ ...prev, [key]: e.target.checked }))}
                        aria-label={c.name}
                      />
                      <span className="h-6 w-11 rounded-full bg-night/20 transition-colors peer-checked:bg-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent" />
                      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-wrap justify-end gap-2.5">
            <button
              type="button"
              className={`${BTN} border border-night/20 text-night hover:border-navy`}
              onClick={() => decide({ analytics: false, marketing: false })}
            >
              {t.rejectAll}
            </button>
            <button type="button" className={`${BTN} border border-night/20 text-night hover:border-navy`} onClick={() => decide(choice)}>
              {t.save}
            </button>
            <button type="button" className={`${BTN} bg-navy text-white hover:bg-night`} onClick={() => decide({ analytics: true, marketing: true })}>
              {t.acceptAll}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

/** Botão do rodapé que reabre a central de preferências. */
export function CookiePreferencesButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))}
    >
      {label}
    </button>
  );
}
