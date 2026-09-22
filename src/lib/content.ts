// Conteúdo institucional das 3 soluções e dos 2 parceiros — espelha
// SOLUTIONS/PARTNERS da ferramenta (src/lib/types.ts no outro repo).
// Duplicado deliberadamente aqui: a LP é só apresentação, não precisa
// do motor de recomendação nem do resto do modelo de dados da ferramenta.
// Os valores de investimento NÃO ficam na LP — cada card leva a um CTA.

export const SOLUTIONS = {
  "dupla-diplomacao": {
    name: "Dupla Diplomação Internacional",
    shortName: "Junior High International Program",
    tagline: "Diploma de High School americano em paralelo ao COC.",
  },
  "high-school": {
    name: "Consultoria High School",
    shortName: "International Counselling",
    tagline: "Planejamento para Fundamental II e Ensino Médio.",
  },
  college: {
    name: "Consultoria College",
    shortName: "College Admissions Program",
    tagline: "Preparação completa para ingresso em universidades no exterior.",
  },
} as const;

export const PARTNERS = {
  "instituto-cultural": {
    name: "Instituto Cultural",
    focus: "Prioridade: Estados Unidos 🇺🇸",
    brands: "EducationUSA · Griggs",
  },
  worlded: {
    name: "WorldEd",
    focus: "Prioridade: demais destinos internacionais 🌎",
    brands: "Programas em diferentes países e sistemas educacionais",
  },
} as const;

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
