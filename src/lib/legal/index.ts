import { LEGAL_ENTITY, PRIVACY_EMAIL } from "@/lib/config";
import { LEGAL_DOCS, legalPath, type LegalDoc, type Locale } from "@/lib/i18n/locales";
import { legalPt } from "./pt";
import { legalEn } from "./en";
import { legalEs } from "./es";
import type { LegalDocument, LegalDocuments } from "./types";

export type { LegalDocument, LegalSection } from "./types";

const DOCS: Record<Locale, LegalDocuments> = { pt: legalPt, en: legalEn, es: legalEs };

export function getLegalDocument(locale: Locale, doc: LegalDoc): LegalDocument {
  const paths = Object.fromEntries(LEGAL_DOCS.map((d) => [d, legalPath(locale, d)])) as Record<LegalDoc, string>;
  return DOCS[locale]({ entity: LEGAL_ENTITY, email: PRIVACY_EMAIL, paths })[doc];
}
