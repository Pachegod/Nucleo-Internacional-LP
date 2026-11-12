import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { DEFAULT_LOCALE, hasLocale } from "@/lib/i18n/locales";

export const dynamic = "force-dynamic";

/** Contato de uma instituição interessada em ser parceira (LP B2B). */
type Payload = {
  contato?: string;
  cargo?: string;
  instituicao?: string;
  tipo?: string;
  local?: string;
  email?: string;
  whatsapp?: string;
  /** Idioma da página em que o formulário foi preenchido (pt, en, es). */
  lang?: string;
};

// Modo dual, igual à ferramenta: sem DATABASE_URL o contato só é validado
// e registrado no log — o visitante segue direto para o WhatsApp e nada
// quebra. Com a env definida, grava numa tabela ISOLADA `lp_parcerias`
// (criada sob demanda), sem tocar no schema da ferramenta. A antiga
// `lp_inscricoes` (fase B2C) fica intacta, só deixa de receber linhas.
const DATABASE_URL = process.env.DATABASE_URL;

type Row = {
  id: string;
  createdAt: string;
  contato: string;
  cargo: string;
  instituicao: string;
  tipo: string;
  local: string;
  email: string;
  whatsapp: string;
  lang: string;
};

async function persist(row: Row) {
  if (!DATABASE_URL) return false;
  const sql = neon(DATABASE_URL);
  await sql`
    CREATE TABLE IF NOT EXISTS lp_parcerias (
      id          text PRIMARY KEY,
      created_at  timestamptz NOT NULL DEFAULT now(),
      contato     text NOT NULL,
      cargo       text NOT NULL DEFAULT '',
      instituicao text NOT NULL,
      tipo        text NOT NULL DEFAULT '',
      local       text NOT NULL DEFAULT '',
      email       text NOT NULL,
      whatsapp    text NOT NULL,
      lang        text NOT NULL DEFAULT 'pt'
    )
  `;
  await sql`
    INSERT INTO lp_parcerias
      (id, created_at, contato, cargo, instituicao, tipo, local, email, whatsapp, lang)
    VALUES
      (${row.id}, ${row.createdAt}, ${row.contato}, ${row.cargo}, ${row.instituicao},
       ${row.tipo}, ${row.local}, ${row.email}, ${row.whatsapp}, ${row.lang})
  `;
  return true;
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const row: Row = {
    id: `PAR-${Date.now()}`,
    createdAt: new Date().toISOString(),
    contato: (data.contato ?? "").trim(),
    cargo: (data.cargo ?? "").trim(),
    instituicao: (data.instituicao ?? "").trim(),
    tipo: (data.tipo ?? "").trim(),
    local: (data.local ?? "").trim(),
    email: (data.email ?? "").trim(),
    whatsapp: (data.whatsapp ?? "").trim(),
    lang: hasLocale(data.lang) ? data.lang : DEFAULT_LOCALE,
  };

  if (!row.contato || !row.instituicao || !row.email || !row.whatsapp) {
    return NextResponse.json(
      { error: "Preencha nome, instituição, e-mail e WhatsApp." },
      { status: 422 }
    );
  }

  let persisted = false;
  try {
    persisted = await persist(row);
  } catch (err) {
    // Não falha a requisição: o visitante ainda precisa seguir pro WhatsApp.
    console.error("[parceria] falha ao gravar:", err);
  }

  if (!persisted) console.info("[parceria]", JSON.stringify(row));

  return NextResponse.json({ ok: true, id: row.id, persisted }, { status: 201 });
}
