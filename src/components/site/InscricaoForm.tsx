"use client";

import { useState } from "react";
import { whatsappLink, interestMessage } from "@/lib/config";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/pt";

const inputClass =
  "min-h-12 w-full rounded-xl border border-night/20 bg-white px-3.5 text-[15px] text-night outline-none transition-colors focus:border-navy";

/** Formulário B2B: quem preenche é a instituição interessada em ser parceira. */
type Fields = {
  contato: string;
  cargo: string;
  instituicao: string;
  tipo: string;
  local: string;
  email: string;
  whatsapp: string;
};

function Label({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-xs font-semibold text-navy">{children}</span>;
}

export function InscricaoForm({
  lang,
  t,
  message,
}: {
  lang: Locale;
  t: Dictionary["form"];
  message: Dictionary["whatsappMessage"];
}) {
  const [fields, setFields] = useState<Fields>({
    contato: "",
    cargo: "",
    instituicao: "",
    tipo: t.tipoOptions[0],
    local: "",
    email: "",
    whatsapp: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  const missing =
    !fields.contato.trim() ||
    !fields.instituicao.trim() ||
    !fields.email.trim() ||
    !fields.whatsapp.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (missing || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    // Grava o contato (quando o banco está configurado) e, dê certo ou
    // não, encaminha a instituição para o WhatsApp com a mensagem de interesse.
    try {
      await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, lang }),
      });
    } catch {
      // Persistência é best-effort — não trava o encaminhamento.
    }

    window.location.href = whatsappLink(
      interestMessage(message, {
        contato: fields.contato.trim(),
        cargo: fields.cargo.trim(),
        instituicao: fields.instituicao.trim(),
        tipo: fields.tipo,
        local: fields.local.trim(),
        email: fields.email.trim(),
      })
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={t.ariaLabel}
      className="grid gap-x-4 gap-y-[18px] rounded-3xl bg-cream p-6 text-night sm:grid-cols-2 sm:p-10"
    >
      <label>
        <Label>{t.contato}</Label>
        <input
          className={inputClass}
          value={fields.contato}
          onChange={(e) => set("contato", e.target.value)}
          autoComplete="name"
        />
      </label>
      <label>
        <Label>{t.cargo}</Label>
        <input
          className={inputClass}
          value={fields.cargo}
          onChange={(e) => set("cargo", e.target.value)}
          placeholder={t.cargoPlaceholder}
          autoComplete="organization-title"
        />
      </label>
      <label>
        <Label>{t.instituicao}</Label>
        <input
          className={inputClass}
          value={fields.instituicao}
          onChange={(e) => set("instituicao", e.target.value)}
          autoComplete="organization"
        />
      </label>
      <label>
        <Label>{t.tipo}</Label>
        <select className={inputClass} value={fields.tipo} onChange={(e) => set("tipo", e.target.value)}>
          {t.tipoOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <Label>{t.local}</Label>
        <input
          className={inputClass}
          value={fields.local}
          onChange={(e) => set("local", e.target.value)}
          placeholder={t.localPlaceholder}
          autoComplete="country-name"
        />
      </label>
      <label>
        <Label>{t.email}</Label>
        <input
          type="email"
          className={inputClass}
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          autoComplete="email"
        />
      </label>
      <label>
        <Label>{t.whatsapp}</Label>
        <input
          type="tel"
          className={inputClass}
          value={fields.whatsapp}
          onChange={(e) => set("whatsapp", e.target.value)}
          placeholder={t.whatsappPlaceholder}
          autoComplete="tel"
        />
      </label>

      {status === "error" && (
        <p className="rounded-xl border border-red-700 bg-red-50 px-3.5 py-2.5 text-sm text-red-800 sm:col-span-2">
          {errorMsg || t.error}
        </p>
      )}

      <div className="mt-1 flex flex-col gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={missing || status === "sending"}
          className="min-h-14 rounded-full bg-navy px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-night disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        <span className="text-xs leading-relaxed text-night/60">{t.note}</span>
      </div>
    </form>
  );
}
