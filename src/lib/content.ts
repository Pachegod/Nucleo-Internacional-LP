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
/**
 * Universidades no exterior com alunos da rede COC SC aprovados
 * (Convenção COC SC 2026). Nomes próprios — iguais em todos os idiomas.
 */
export const INTERNATIONAL_APPROVALS = [
  "Yale University",
  "University of Florida",
  "Florida Institute of Technology",
  "Temple University",
  "University of British Columbia",
  "University of Washington",
  "Indiana University",
  "University of South Carolina",
  "Florida International University",
  "University of Utah",
  "University of Oklahoma",
  "University of Iowa",
  "DePaul University",
  "University of Tampa",
  "UNC Charlotte",
];

export const ABOUT_STATS = {
  // Cidades · unidades · desde (grupo em SC) · universidades com alunos aprovados
  // Fontes: apresentações Polaris (alunos e famílias) e Convenção COC SC 2026 —
  // sem números do vestibular 2026.
  regional: ["6", "10", "1999", "70+"] as (string | null)[],
};

/**
 * Unidades COC em Santa Catarina. `slug` monta a chave da foto no mini-CMS
 * (cidade-<slug>) usada no carrossel de abertura; `landmark` é o ponto turístico
 * ou paisagem retratada e `photo` uma foto local em /public (opcional — o CMS vence). `x`/`y` posicionam cada cidade no
 * mapa-constelação (viewBox 520×270) — geografia aproximada, espaçada
 * para leitura: interior à esquerda/baixo, litoral à direita.
 */
export const COC_SC_UNITS = [
  { city: "Blumenau", slug: "blumenau", landmark: "Vila Germânica", photo: undefined as string | undefined, x: 245, y: 92, label: "top", units: 1 },
  { city: "Itajaí", slug: "itajai", landmark: "Praia Brava", photo: undefined as string | undefined, x: 345, y: 58, label: "top", units: 1 },
  { city: "Balneário Camboriú", slug: "balneario-camboriu", landmark: "Praia Central e Parque Unipraias", photo: undefined as string | undefined, x: 380, y: 118, label: "bottom", units: 4 },
  { city: "Porto Belo", slug: "porto-belo", landmark: "Ilha de Porto Belo", photo: undefined as string | undefined, x: 340, y: 192, label: "right", units: 1 },
  { city: "Rio do Sul", slug: "rio-do-sul", landmark: "Alto Vale do Itajaí", photo: undefined as string | undefined, x: 150, y: 150, label: "bottom", units: 2 },
  { city: "Lages", slug: "lages", landmark: "Serra Catarinense", photo: undefined as string | undefined, x: 62, y: 222, label: "right", units: 1 },
] as const;
