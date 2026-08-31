"use client";

import { useState } from "react";
import { whatsappLink, interestMessage } from "@/lib/config";
import { SERIE_OPTIONS } from "@/lib/content";

const inputClass =
  "w-full border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent";

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
    <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
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
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
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
        <p className="sm:col-span-2 border border-danger bg-danger-soft px-3.5 py-2.5 text-sm text-danger">
          {errorMsg || "Não foi possível enviar agora. Tente novamente."}
        </p>
      )}

      <div className="mt-1 flex flex-col gap-2.5 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={missing || status === "sending"}
          className="bg-accent px-[26px] py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? "Enviando…" : "Enviar e falar no WhatsApp"}
        </button>
        <span className="font-mono text-[11px] leading-relaxed tracking-[0.06em] text-ink-faint">
          Ao enviar, você abre uma conversa no WhatsApp com o time do Núcleo.
        </span>
      </div>
    </form>
  );
}
