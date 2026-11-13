import type { LegalDoc } from "@/lib/i18n/locales";

/** Dados do controlador e do contato, injetados nos textos legais. */
export type LegalContext = {
  entity: { name: string; cnpj: string; address: string; city: string };
  email: string;
  /** Caminhos das outras páginas legais no mesmo idioma. */
  paths: Record<LegalDoc, string>;
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  /** Parágrafos exibidos depois da lista/tabela. */
  after?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  sections: LegalSection[];
};

export type LegalDocuments = (ctx: LegalContext) => Record<LegalDoc, LegalDocument>;
