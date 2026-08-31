export const TOOL_URL = process.env.NEXT_PUBLIC_TOOL_URL || "http://localhost:3000";

// A ferramenta inteira (incluindo a Análise de Interesse) é de uso
// interno — o único link público que a LP oferece é o acesso ao painel.
export const ADMIN_URL = `${TOOL_URL}/admin`;

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

/** Mensagem padrão de interesse, com os dados do formulário quando houver. */
export function interestMessage(fields?: {
  responsavel?: string;
  aluno?: string;
  serie?: string;
  unidade?: string;
  email?: string;
}) {
  const base =
    "Olá! Vim pela página do Núcleo Internacional e quero saber mais sobre o programa de formação internacional (do Fundamental II ao Ensino Médio).";
  if (!fields) return base;

  const linhas = [
    fields.responsavel && `Responsável: ${fields.responsavel}`,
    fields.aluno &&
      `Aluno(a): ${fields.aluno}${fields.serie ? ` — ${fields.serie}` : ""}`,
    fields.unidade && `Unidade/cidade: ${fields.unidade}`,
    fields.email && `E-mail: ${fields.email}`,
  ].filter(Boolean);

  return linhas.length ? `${base}\n\n${linhas.join("\n")}` : base;
}
