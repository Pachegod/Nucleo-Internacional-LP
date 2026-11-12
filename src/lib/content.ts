// Conteúdo institucional das 3 soluções e dos 2 parceiros — espelha
// SOLUTIONS/PARTNERS da ferramenta (src/lib/types.ts no outro repo).
// Duplicado deliberadamente aqui: a LP é só apresentação, não precisa
// do motor de recomendação nem do resto do modelo de dados da ferramenta.
// Os valores de investimento NÃO ficam na LP — cada card leva a um CTA.

export const SOLUTIONS = {
  "dupla-diplomacao": {
    name: "Dupla Diplomação Internacional",
    image: { src: "/media/solucao-dupla-diplomacao.jpg", alt: "Alunos em sala de aula trabalhando juntos em notebooks", focus: "center" },
    shortName: "Junior High International Program",
    tagline: "Diploma de High School americano em paralelo ao COC.",
  },
  "high-school": {
    name: "Consultoria High School",
    image: { src: "/media/solucao-high-school.jpg", alt: "Dois estudantes planejando os estudos com notebook e livro", focus: "center" },
    shortName: "International Counselling",
    tagline: "Planejamento para Fundamental II e Ensino Médio.",
  },
  college: {
    name: "Consultoria College",
    image: { src: "/media/solucao-college.jpg", alt: "Estudantes subindo a escadaria de uma universidade, vistos pelo portão do campus", focus: "center 62%" },
    shortName: "College Admissions Program",
    tagline: "Preparação completa para ingresso em universidades no exterior.",
  },
} as const;

export const PARTNERS = {
  "instituto-cultural": {
    name: "Instituto Cultural",
    focus: "Prioridade: Estados Unidos",
    brands: "EducationUSA · Griggs",
    logo: { src: "/media/parceiros/instituto-cultural.webp", alt: "Instituto Cultural Brasileiro Norte-Americano" },
  },
  worlded: {
    name: "WorldEd",
    focus: "Prioridade: demais destinos internacionais",
    brands: "Programas em diferentes países e sistemas educacionais",
    logo: { src: "/media/parceiros/worlded.webp", alt: "WorldEd School" },
  },
} as const;

/** Demais marcas da rede de parceiros (faixa de logos). */
export const PARTNER_NETWORK = [
  { src: "/media/parceiros/be.webp", alt: "Be Currículo Bilíngue" },
  { src: "/media/parceiros/griggs.webp", alt: "Griggs International Academy" },
  { src: "/media/parceiros/nba-school.webp", alt: "NBA Basketball School" },
  { src: "/media/parceiros/psg-academy.webp", alt: "PSG Academy" },
];

// ---------------------------------------------------------------------------
// Landing page — copy dos CTAs e das seções novas.
// ---------------------------------------------------------------------------

/** Rótulos de Call to Action. Todos levam ao mesmo formulário (#inscrever). */
export const CTA = {
  visit: "Agende uma visita",
  enroll: "Inscreva-se",
  meeting: "Marque uma reunião",
  whatsapp: "Falar no WhatsApp",
};

/** Frase curta de reforço usada nas faixas de CTA ao longo da rolagem. */
export const CTA_LINE = "Matrículas abertas — fale com o Núcleo antes das vagas fecharem.";

/** A trajetória do aluno, do Fundamental II ao próximo passo. */
export const TRAJETORIA = [
  {
    phase: "Fundamental II",
    label: "6º ao 9º ano",
    detail:
      "Imersão em inglês desde cedo e a base do currículo internacional, integradas à rotina do COC.",
  },
  {
    phase: "Certificação Junior High",
    label: "Certificação americana",
    detail:
      "Certificação norte-americana de Junior High cursada em paralelo ao Fundamental II.",
  },
  {
    phase: "Ensino Médio",
    label: "1ª à 3ª série",
    detail:
      "Dupla diplomação Brasil/USA: o diploma de High School americano somado ao do COC.",
  },
  {
    phase: "Próximo passo",
    label: "Universidade no exterior",
    detail:
      "Para quem já mira fora, orientação completa de admissão em universidades internacionais.",
  },
];

/** Seção de Summer Camps. */
export const SUMMER_CAMPS = {
  kicker: "Summer Camps",
  title: "No verão, a trajetória internacional sai do papel.",
  description:
    "Nas férias, os alunos do Núcleo participam de summer camps no exterior — semanas de imersão em inglês, vida de campus e cultura local que aceleram todo o resto da formação.",
  points: [
    "Imersão em inglês em ambiente 100% nativo",
    "Vivência de campus e da rotina de um estudante internacional",
    "Turmas acompanhadas pela coordenação do Núcleo",
    "Vagas limitadas por temporada",
  ],
};

/** Opções de série no formulário de inscrição. */
export const SERIE_OPTIONS = [
  "6º ano",
  "7º ano",
  "8º ano",
  "9º ano",
  "1ª série do Ensino Médio",
  "2ª série do Ensino Médio",
  "3ª série do Ensino Médio",
  "Já concluí o Ensino Médio",
];

/**
 * Últimos posts do Instagram (@nucleo_inter) destacados na seção de agenda.
 * Atualize as imagens em /public/media/instagram e os textos aqui quando
 * houver eventos novos.
 */
export const INSTAGRAM_POSTS = [
  {
    tag: "Live · 11/11",
    title: "Estudar nos EUA com a Wilbraham & Monson Academy",
    image: { src: "/media/instagram/live-wilbraham-monson.jpg", alt: "Live: a experiência de estudar nos EUA com a Wilbraham & Monson Academy" },
  },
  {
    tag: "Treinamento · 06/11",
    title: "Basquete com Andre White Sr. — COC Balneário Camboriú",
    image: { src: "/media/instagram/treinamento-andre-white.jpg", alt: "Treinamento especial de basquete com Andre White Sr." },
  },
  {
    tag: "Guia gratuito",
    title: "Vai estudar fora? Prepare-se para a entrevista",
    image: { src: "/media/instagram/guia-entrevista.jpg", alt: "Guia gratuito: prepare-se para a entrevista de admissão" },
  },
];
