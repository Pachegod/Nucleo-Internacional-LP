"use client";

import { useState } from "react";
import { whatsappLink, interestMessage } from "@/lib/config";
import { SERIE_OPTIONS } from "@/lib/content";

const inputClass =
  "min-h-12 w-full rounded-xl border border-night/20 bg-white px-3.5 text-[15px] text-night outline-none transition-colors focus:border-navy";

type Fields = {
  responsavel: string;
  aluno: string;
  serie: string;
  email: string;
  whatsapp: string;
  unidade: string;
};

const EMPTY: Fields = {
  responsavel: "",
  aluno: "",
  serie: SERIE_OPTIONS[0],
  email: "",
  whatsapp: "",
  unidade: "",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-xs font-semibold text-navy">
      {children}
    </span>
  );
}

export function InscricaoForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  const missing =
    !fields.responsavel.trim() ||
    !fields.aluno.trim() ||
    !fields.email.trim() ||
    !fields.whatsapp.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (missing || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    // Grava a inscrição (quando o banco está configurado) e, dê certo ou
    // não, encaminha a família para o WhatsApp com a mensagem de interesse.
    try {
      await fetch("/api/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
    } catch {
      // Persistência é best-effort — não trava o encaminhamento.
    }

    window.location.href = whatsappLink(
      interestMessage({
        responsavel: fields.responsavel.trim(),
        aluno: fields.aluno.trim(),
        serie: fields.serie,
        unidade: fields.unidade.trim(),
        email: fields.email.trim(),
      })
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Formulário de inscrição"
      className="grid gap-x-4 gap-y-[18px] rounded-3xl bg-cream p-6 text-night sm:grid-cols-2 sm:p-10"
    >
      <label className="sm:col-span-1">
        <Label>Nome do responsável *</Label>
        <input
          className={inputClass}
          value={fields.responsavel}
          onChange={(e) => set("responsavel", e.target.value)}
          autoComplete="name"
        />
      </label>
      <label className="sm:col-span-1">
        <Label>Nome do aluno(a) *</Label>
        <input
          className={inputClass}
          value={fields.aluno}
          onChange={(e) => set("aluno", e.target.value)}
        />
      </label>
      <label className="sm:col-span-1">
        <Label>Série que vai cursar</Label>
        <select
          className={inputClass}
          value={fields.serie}
          onChange={(e) => set("serie", e.target.value)}
        >
          {SERIE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-1">
        <Label>Unidade / cidade</Label>
        <input
          className={inputClass}
          value={fields.unidade}
          onChange={(e) => set("unidade", e.target.value)}
          placeholder="Ex.: Balneário Camboriú, SC"
        />
      </label>
      <label className="sm:col-span-1">
        <Label>E-mail *</Label>
        <input
          type="email"
          className={inputClass}
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          autoComplete="email"
        />
      </label>
      <label className="sm:col-span-1">
        <Label>WhatsApp *</Label>
        <input
          className={inputClass}
          value={fields.whatsapp}
          onChange={(e) => set("whatsapp", e.target.value)}
          placeholder="(47) 90000-0000"
          autoComplete="tel"
        />
      </label>

      {status === "error" && (
        <p className="rounded-xl border border-red-700 bg-red-50 px-3.5 py-2.5 text-sm text-red-800 sm:col-span-2">
          {errorMsg || "Não foi possível enviar agora. Tente novamente."}
        </p>
      )}

      <div className="mt-1 flex flex-col gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={missing || status === "sending"}
          className="min-h-14 rounded-full bg-navy px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-night disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? "Enviando…" : "Enviar e falar no WhatsApp"}
        </button>
        <span className="text-xs leading-relaxed text-night/60">
          Ao enviar, você abre uma conversa no WhatsApp com o time do Núcleo.
        </span>
      </div>
    </form>
  );
}
