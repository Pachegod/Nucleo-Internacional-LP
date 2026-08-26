export const TOOL_URL = process.env.NEXT_PUBLIC_TOOL_URL || "http://localhost:3000";

// A ferramenta inteira (incluindo a Análise de Interesse) é de uso
// interno — o único link público que a LP oferece é o acesso ao painel.
export const ADMIN_URL = `${TOOL_URL}/admin`;
