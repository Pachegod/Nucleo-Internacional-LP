import type { Dictionary } from "./i18n/pt";

// Fallback é a URL de produção da ferramenta — assim o link do login
// funciona mesmo sem NEXT_PUBLIC_TOOL_URL definido na Vercel. Para dev
// local, o .env.local sobrescreve com http://localhost:3000.
export const TOOL_URL =
  process.env.NEXT_PUBLIC_TOOL_URL || "https://nucleo-de-internacionalizacao.vercel.app";

// A ferramenta inteira (incluindo a Análise de Interesse) é de uso
// interno. O único acesso que a LP oferece é o login da equipe — após
// entrar, a própria ferramenta leva o usuário para dentro dela.
export const LOGIN_URL = `${TOOL_URL}/login`;

// Instagram do Núcleo — usado no rodapé e na seção de agenda. Se o admin
// cadastrar outro link (chave social-instagram), o rodapé usa o do mini-CMS.
export const INSTAGRAM_HANDLE = "nucleo_inter";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

// Número de WhatsApp de destino dos CTAs — só dígitos, com DDI.
// Sobrescreva com NEXT_PUBLIC_WHATSAPP (Vercel → Project Settings →
// Environment Variables) sem precisar mexer no código.
export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP || "55479997544005"
).replace(/\D/g, "");

/** Monta um link wa.me com a mensagem já preenchida. */
export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão de interesse (no idioma da página), com os dados do formulário quando houver. */
export function interestMessage(
  t: Dictionary["whatsappMessage"],
  fields?: {
    responsavel?: string;
    aluno?: string;
    serie?: string;
    unidade?: string;
    email?: string;
  }
) {
  if (!fields) return t.base;

  const linhas = [
    fields.responsavel && `${t.responsavel}: ${fields.responsavel}`,
    fields.aluno && `${t.aluno}: ${fields.aluno}${fields.serie ? ` — ${fields.serie}` : ""}`,
    fields.unidade && `${t.unidade}: ${fields.unidade}`,
    fields.email && `${t.email}: ${fields.email}`,
  ].filter(Boolean);

  return linhas.length ? `${t.base}\n\n${linhas.join("\n")}` : t.base;
}
