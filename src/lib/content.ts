// Conteúdo institucional das 3 soluções e dos 2 parceiros — espelha
// SOLUTIONS/PARTNERS da ferramenta (src/lib/types.ts no outro repo).
// Duplicado deliberadamente aqui: a LP é só apresentação, não precisa
// do motor de recomendação nem do resto do modelo de dados da ferramenta.

export const SOLUTIONS = {
  "dupla-diplomacao": {
    name: "Dupla Diplomação Internacional",
    shortName: "Junior High International Program",
    tagline: "Diploma de High School americano em paralelo ao COC.",
    investment: "12× R$ 450 + 1× R$ 450/ano (recursos de aprendizagem)",
  },
  "high-school": {
    name: "Consultoria High School",
    shortName: "International Counselling",
    tagline: "Planejamento para Fundamental II e Ensino Médio.",
    investment:
      "USD 2.500 (aluno COC) / USD 3.000 (externo) + 10% de êxito sobre bolsa",
  },
  college: {
    name: "Consultoria College",
    shortName: "College Admissions Program",
    tagline: "Preparação completa para ingresso em universidades no exterior.",
    investment: "Sob consulta, conforme escopo do planejamento",
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
