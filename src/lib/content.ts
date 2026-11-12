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

export type CityPhoto = {
  src: string;
  /** Ponto turístico ou paisagem retratada. */
  landmark: string;
  /** Vista aérea (drone/avião) ou do alto. */
  aerial?: boolean;
  /** Atribuição — exigida pelas licenças CC do Wikimedia Commons; cortesia no Pexels. Ausente em foto cedida. */
  credit?: { author: string; license: string; url: string };
};

/**
 * Unidades COC em Santa Catarina. `photos` alimenta o carrossel de abertura
 * (uma ou mais fotos por cidade; o admin pode substituir pelo mini-CMS com as
 * chaves cidade-<slug>, cidade-<slug>-2…). `x`/`y` posicionam a cidade no
 * mapa-constelação (viewBox 520×270).
 */
export const COC_SC_UNITS: {
  city: string;
  slug: string;
  units: number;
  photos: CityPhoto[];
  x: number;
  y: number;
  label: "top" | "right" | "bottom";
}[] = [
  {
    city: "Balneário Camboriú", slug: "balneario-camboriu", units: 4, x: 380, y: 118, label: "bottom",
    photos: [
      { src: "/media/cidades/balneario-camboriu-aerea.jpg", landmark: "Vista aérea — Praia do Buraco e skyline", aerial: true,
        credit: { author: "Jodejau", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Vista_a%C3%A9rea_praia_do_Buraco.jpg" } },
      { src: "/media/cidades/balneario-camboriu.jpg", landmark: "Praia Central e Barra Norte",
        credit: { author: "HVL", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Praia_Central_e_Barra_Norte_ao_fundo,_Balne%C3%A1rio_Cambori%C3%BA_SC.JPG" } },
    ],
  },
  {
    city: "Itajaí", slug: "itajai", units: 1, x: 345, y: 58, label: "top",
    photos: [
      { src: "/media/cidades/itajai-aerea.jpg", landmark: "Vista aérea do litoral", aerial: true,
        credit: { author: "Aleson Padilha", license: "Pexels", url: "https://www.pexels.com/photo/scenic-aerial-view-of-itajai-coastline-34054812/" } },
      { src: "/media/cidades/itajai.jpg", landmark: "Praia Brava",
        credit: { author: "Eduardo Marquetti", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Praia_Brava_Itaja%C3%AD.jpg" } },
    ],
  },
  {
    city: "Porto Belo", slug: "porto-belo", units: 1, x: 340, y: 192, label: "right",
    photos: [
      // Foto cedida por um amigo do Núcleo (uso autorizado) — trocar pelo arquivo
      // original em alta resolução e preencher o crédito quando houver.
      { src: "/media/cidades/porto-belo-orla.jpg", landmark: "Vista aérea da orla ao entardecer", aerial: true },
      { src: "/media/cidades/porto-belo.jpg", landmark: "Enseada de Porto Belo",
        credit: { author: "Rachmaninoff", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Porto_Belo_boats_sunset.jpg" } },
    ],
  },
  {
    city: "Blumenau", slug: "blumenau", units: 1, x: 245, y: 92, label: "top",
    photos: [
      { src: "/media/cidades/blumenau.jpg", landmark: "Vista aérea do Rio Itajaí-Açu", aerial: true,
        credit: { author: "Charles Ringenberg", license: "CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Foto_a%C3%A9rea_Blumenau_-_panoramio.jpg" } },
      { src: "/media/cidades/blumenau-vila-germanica.jpg", landmark: "Vila Germânica",
        credit: { author: "off leko", license: "Pexels", url: "https://www.pexels.com/photo/the-parque-vila-germanica-in-brazil-13571279/" } },
    ],
  },
  {
    // Sem foto livre de Rio do Sul (aérea ou das cachoeiras) — o slide usa a arte
    // Polaris até o admin subir as fotos nas chaves cidade-rio-do-sul / -2.
    city: "Rio do Sul", slug: "rio-do-sul", units: 2, x: 150, y: 150, label: "bottom",
    photos: [],
  },
  {
    city: "Lages", slug: "lages", units: 1, x: 62, y: 222, label: "right",
    photos: [
      { src: "/media/cidades/lages-alto.jpg", landmark: "Vista do alto da cidade", aerial: true,
        credit: { author: "Leonir Angelo Lunardi", license: "CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Lages_-_SC.jpg" } },
      { src: "/media/cidades/lages.jpg", landmark: "Coxilha Rica",
        credit: { author: "Gibbneckel", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Vista_da_Coxilha_Rica,_com_destaque_para_o_Viaduto_Ferrovi%C3%A1rio_Rio_Tatetos_(02-05-2020).jpg" } },
    ],
  },
];
