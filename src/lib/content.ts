// Dados estruturais da LP (ids, imagens, nomes próprios) — espelha
// SOLUTIONS/PARTNERS da ferramenta (src/lib/types.ts no outro repo).
// Duplicado deliberadamente aqui: a LP é só apresentação, não precisa
// do motor de recomendação nem do resto do modelo de dados da ferramenta.
// Os valores de investimento NÃO ficam na LP — cada card leva a um CTA.
//
// Todo texto traduzível (nomes descritivos, taglines, alts, CTAs, séries…)
// fica nos dicionários em src/lib/i18n/{pt,en,es}.ts, indexados pelas
// mesmas chaves/ordem usadas aqui.

/** Frentes de parceria (B2B) — os nomes "de marca" (shortName) são iguais em todos os idiomas. */
export const SOLUTIONS = {
  "dupla-diplomacao": {
    image: { src: "/media/solucao-dupla-diplomacao.jpg", focus: "center" },
    shortName: "Secondary School Partnerships",
  },
  "high-school": {
    image: { src: "/media/solucao-high-school.jpg", focus: "center" },
    shortName: "Language & Academy Programs",
  },
  college: {
    image: { src: "/media/solucao-college.jpg", focus: "center 62%" },
    shortName: "University Pathways",
  },
} as const;

export const PARTNERS = {
  "instituto-cultural": {
    name: "Instituto Cultural",
    logo: { src: "/media/parceiros/instituto-cultural.webp" },
  },
  worlded: {
    name: "WorldEd",
    logo: { src: "/media/parceiros/worlded.webp" },
  },
} as const;

/** Demais marcas da rede de parceiros (faixa de logos) — o alt é o nome da marca. */
export const PARTNER_NETWORK = [
  { src: "/media/parceiros/be.webp", alt: "Be Currículo Bilíngue" },
  { src: "/media/parceiros/griggs.webp", alt: "Griggs International Academy" },
  { src: "/media/parceiros/nba-school.webp", alt: "NBA Basketball School" },
  { src: "/media/parceiros/psg-academy.webp", alt: "PSG Academy" },
];

/**
 * Últimos posts do Instagram (@nucleo_inter) destacados na seção de agenda.
 * Atualize as imagens em /public/media/instagram aqui e os textos (tag,
 * título, alt) nos dicionários — mesma ordem — quando houver eventos novos.
 */
export const INSTAGRAM_POSTS = [
  { image: { src: "/media/instagram/live-wilbraham-monson.jpg" } },
  { image: { src: "/media/instagram/treinamento-andre-white.jpg" } },
  { image: { src: "/media/instagram/guia-entrevista.jpg" } },
];

/**
 * Seção "Quem somos" (de cima para baixo: COC Nacional → COC Santa Catarina
 * → Núcleo Polaris → Counseling). Números ficam aqui por serem iguais em
 * todos os idiomas; os rótulos ficam nos dicionários (mesma ordem).
 * `null` = dado ainda não confirmado — a página mostra "—" destacado.
 */
export const ABOUT_STATS = {
  // Fundação · escolas parceiras no Brasil · alunos na rede · estados
  // 1963 (Ribeirão Preto/SP) e "mais de 500 escolas" vêm de fontes públicas — confirmar com o COC.
  national: ["1963", "500+", null, null] as (string | null)[],
  // Cidades · unidades · alunos · anos em SC
  regional: ["6", null, null, null] as (string | null)[],
};

/**
 * Unidades COC em Santa Catarina. `x`/`y` posicionam cada cidade no
 * mapa-constelação (viewBox 520×270) — geografia aproximada, espaçada
 * para leitura: interior à esquerda/baixo, litoral à direita.
 */
export const COC_SC_UNITS = [
  { city: "Blumenau", x: 245, y: 92, label: "top" },
  { city: "Itajaí", x: 345, y: 58, label: "top" },
  { city: "Balneário Camboriú", x: 380, y: 118, label: "bottom" },
  { city: "Porto Belo", x: 340, y: 192, label: "right" },
  { city: "Rio do Sul", x: 150, y: 150, label: "bottom" },
  { city: "Lages", x: 62, y: 222, label: "right" },
] as const;
