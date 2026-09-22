// Conteúdo gerenciado pelo admin da ferramenta (mini-CMS) — imagens, textos,
// vídeos, redes sociais e a cor de destaque. Busca em ${TOOL_URL}/api/public/lp-content
// (rota pública, sem sessão) e nunca derruba a LP: qualquer falha (rede, timeout,
// resposta inválida) cai de volta pros valores padrão já hardcoded na página.

import { TOOL_URL } from "./config";

export type LpContentType = "image" | "text" | "video" | "social" | "color";

export type LpContentItem = {
  key: string;
  type: LpContentType;
  value: string;
  alt: string;
};

export const DEFAULT_ACCENT = "#1f3cff";

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

export function getText(items: LpContentItem[], key: string, fallback: string): string {
  return findItem(items, "text", key)?.value.trim() || fallback;
}

export function getImage(
  items: LpContentItem[],
  key: string
): { src: string; alt: string } | undefined {
  const item = findItem(items, "image", key);
  return item?.value ? { src: item.value, alt: item.alt } : undefined;
}

export function getVideo(items: LpContentItem[], key: string): string | undefined {
  return findItem(items, "video", key)?.value || undefined;
}

const HEX_RE = /^#[0-9a-f]{6}$/i;

export function getAccentColor(items: LpContentItem[]): string {
  const value = findItem(items, "color", "accent-color")?.value.trim();
  return value && HEX_RE.test(value) ? value : DEFAULT_ACCENT;
}

/** Preto ou branco conforme a luminância do hex — texto legível sobre a cor de destaque, qualquer que seja ela. */
export function getAccentInk(hex: string): string {
  const match = HEX_RE.exec(hex);
  if (!match) return "#ffffff";
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => c / 255);
  const linear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
  return luminance > 0.5 ? "#0a0a0a" : "#ffffff";
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
    return id ? { kind: "iframe", src: `https://www.youtube.com/embed/${id}` } : undefined;
  }
  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1);
    return id ? { kind: "iframe", src: `https://www.youtube.com/embed/${id}` } : undefined;
  }
  if (host === "vimeo.com") {
    const id = parsed.pathname.split("/").filter(Boolean).pop();
    return id ? { kind: "iframe", src: `https://player.vimeo.com/video/${id}` } : undefined;
  }
  if (/\.(mp4|webm|ogg)$/i.test(parsed.pathname)) {
    return { kind: "video", src: url };
  }
  return undefined;
}
