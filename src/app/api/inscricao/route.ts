import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

type Payload = {
  responsavel?: string;
  aluno?: string;
  serie?: string;
  email?: string;
  whatsapp?: string;
  unidade?: string;
};

// Modo dual, igual à ferramenta: sem DATABASE_URL a inscrição só é
// validada e registrada no log — o cliente segue direto para o WhatsApp e
// nada quebra. Com a env definida, grava numa tabela ISOLADA
// `lp_inscricoes` (criada sob demanda), sem tocar no schema da ferramenta.
const DATABASE_URL = process.env.DATABASE_URL;

async function persist(row: {
  id: string;
  createdAt: string;
  responsavel: string;
  aluno: string;
  serie: string;
  email: string;
  whatsapp: string;
  unidade: string;
}) {
  if (!DATABASE_URL) return false;
  const sql = neon(DATABASE_URL);
  await sql`
    CREATE TABLE IF NOT EXISTS lp_inscricoes (
      id          text PRIMARY KEY,
      created_at  timestamptz NOT NULL DEFAULT now(),
      responsavel text NOT NULL,
      aluno       text NOT NULL,
      serie       text NOT NULL DEFAULT '',
      email       text NOT NULL,
      whatsapp    text NOT NULL,
      unidade     text NOT NULL DEFAULT ''
    )
  `;
  await sql`
    INSERT INTO lp_inscricoes
      (id, created_at, responsavel, aluno, serie, email, whatsapp, unidade)
    VALUES
      (${row.id}, ${row.createdAt}, ${row.responsavel}, ${row.aluno},
       ${row.serie}, ${row.email}, ${row.whatsapp}, ${row.unidade})
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

  const row = {
    id: `INS-${Date.now()}`,
    createdAt: new Date().toISOString(),
    responsavel: (data.responsavel ?? "").trim(),
    aluno: (data.aluno ?? "").trim(),
    serie: (data.serie ?? "").trim(),
    email: (data.email ?? "").trim(),
    whatsapp: (data.whatsapp ?? "").trim(),
    unidade: (data.unidade ?? "").trim(),
  };

  if (!row.responsavel || !row.aluno || !row.email || !row.whatsapp) {
    return NextResponse.json(
      { error: "Preencha responsável, aluno, e-mail e WhatsApp." },
      { status: 422 }
    );
  }

  let persisted = false;
  try {
    persisted = await persist(row);
  } catch (err) {
    // Não falha a requisição: o cliente ainda precisa seguir pro WhatsApp.
    console.error("[inscricao] falha ao gravar:", err);
  }

  if (!persisted) console.info("[inscricao]", JSON.stringify(row));

  return NextResponse.json({ ok: true, id: row.id, persisted }, { status: 201 });
}
