import { pt, type Dictionary } from "./pt";
import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./locales";

export type { Dictionary };
export * from "./locales";

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
