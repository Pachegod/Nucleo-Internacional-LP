// Conteúdo gerenciado pelo admin da ferramenta (mini-CMS) — imagens, textos,
// vídeos, redes sociais e a cor de destaque. Busca em ${TOOL_URL}/api/public/lp-content
// (rota pública, sem sessão) e nunca derruba a LP: qualquer falha (rede, timeout,
// resposta inválida) cai de volta pros valores padrão já hardcoded na página.

import { TOOL_URL } from "./config";
import type { Locale } from "./i18n/locales";

export type LpContentType = "image" | "text" | "video" | "social" | "color";

export type LpContentItem = {
  key: string;
  type: LpContentType;
  /** Valor em PT-BR (ou URL/cor/link, iguais em todos os idiomas). */
  value: string;
  alt: string;
  /** Traduções (vazio = sem tradução). Podem faltar enquanto a API antiga estiver no ar. */
  valueEn?: string;
  valueEs?: string;
  altEn?: string;
  altEs?: string;
};

export const DEFAULT_ACCENT = "#c2a068";

/** Fundo escuro predominante da LP — o destaque precisa ser legível sobre ele. */
const NIGHT = "#0a0e1a";
const MIN_ACCENT_CONTRAST = 4.5;

export async function getLpContent(): Promise<LpContentItem[]> {
  try {
    const res = await fetch(`${TOOL_URL}/api/public/lp-content`, {
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

function findItem(items: LpContentItem[], type: LpContentType, key: string) {
  return items.find((i) => i.type === type && i.key === key);
}

/**
 * Campo traduzido de um item do CMS. Em PT usa o campo base; em EN/ES usa
 * só o campo do idioma — NUNCA cai no PT, para não misturar idiomas na
 * página. Vazio/ausente devolve "" e quem chama usa o dicionário.
 */
function localized(item: LpContentItem | undefined, field: "value" | "alt", lang: Locale): string {
  if (!item) return "";
  const raw =
    lang === "pt"
      ? item[field]
      : item[`${field}${lang === "en" ? "En" : "Es"}` as "valueEn" | "valueEs" | "altEn" | "altEs"];
  return typeof raw === "string" ? raw.trim() : "";
}

/** Texto do CMS no idioma pedido → senão o fallback do dicionário desse idioma. */
export function getText(items: LpContentItem[], key: string, lang: Locale, fallback: string): string {
  return localized(findItem(items, "text", key), "value", lang) || fallback;
}

/**
 * Imagem do CMS (mesma URL em todos os idiomas). O alt segue a regra do
 * texto: alt do idioma → senão o fallbackAlt do dicionário desse idioma.
 */
export function getImage(
  items: LpContentItem[],
  key: string,
  lang: Locale,
  fallbackAlt = ""
): { src: string; alt: string } | undefined {
  const item = findItem(items, "image", key);
  return item?.value ? { src: item.value, alt: localized(item, "alt", lang) || fallbackAlt } : undefined;
}

export function getVideo(items: LpContentItem[], key: string): string | undefined {
  return findItem(items, "video", key)?.value || undefined;
}

const HEX_RE = /^#[0-9a-f]{6}$/i;

export function getAccentColor(items: LpContentItem[]): string {
  const value = findItem(items, "color", "accent-color")?.value.trim().toLowerCase();
  if (!value || !HEX_RE.test(value)) return DEFAULT_ACCENT;
  // A LP é majoritariamente escura: uma cor escura demais some sobre o fundo
  // (botões e títulos ficam ilegíveis). Nesse caso mantém o dourado padrão.
  return contrastRatio(value, NIGHT) >= MIN_ACCENT_CONTRAST ? value : DEFAULT_ACCENT;
}

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => c / 255);
  const linear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** Preto ou branco conforme a luminância do hex — texto legível sobre a cor de destaque, qualquer que seja ela. */
export function getAccentInk(hex: string): string {
  if (!HEX_RE.test(hex)) return "#ffffff";
  return luminance(hex) > 0.5 ? "#0a0e1a" : "#ffffff";
}

const SOCIAL_NETWORKS: { key: string; label: string }[] = [
  { key: "social-instagram", label: "Instagram" },
  { key: "social-facebook", label: "Facebook" },
  { key: "social-linkedin", label: "LinkedIn" },
  { key: "social-youtube", label: "YouTube" },
  { key: "social-tiktok", label: "TikTok" },
  { key: "social-whatsapp", label: "WhatsApp" },
];

export function getSocialLinks(items: LpContentItem[]): { key: string; label: string; url: string }[] {
  return SOCIAL_NETWORKS.map((net) => ({ ...net, url: findItem(items, "social", net.key)?.value ?? "" })).filter(
    (net) => net.url
  );
}

/** Normaliza um link de vídeo (YouTube, Vimeo ou arquivo direto) num embed tocável. */
export function parseVideoEmbed(url: string): { kind: "iframe" | "video"; src: string } | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }
  const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");

  if (host === "youtube.com") {
    const id = parsed.searchParams.get("v") ?? parsed.pathname.split("/").filter(Boolean).pop();
    return id ? { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${id}` } : undefined;
  }
  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1);
    return id ? { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${id}` } : undefined;
  }
  if (host === "vimeo.com") {
    const id = parsed.pathname.split("/").filter(Boolean).pop();
    return id ? { kind: "iframe", src: `https://player.vimeo.com/video/${id}?dnt=1` } : undefined;
  }
  if (/\.(mp4|webm|ogg)$/i.test(parsed.pathname)) {
    return { kind: "video", src: url };
  }
  return undefined;
}
