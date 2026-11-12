// Dicionário PT-BR — idioma padrão da LP (rota "/"). O tipo `Dictionary`
// nasce daqui: en.ts e es.ts precisam cobrir exatamente as mesmas chaves.

export const pt = {
  meta: {
    title: "Núcleo Internacional — Polaris COC Santa Catarina",
    description:
      "Formação global, dupla diplomação e consultoria de admissão internacional para alunos do Colégio COC.",
  },

  langSwitcher: {
    label: "Idioma",
    names: { pt: "Português", en: "English", es: "Español" },
  },

  logoAlt: "Núcleo de Internacionalização",

  header: {
    navLabel: "Seções",
    nav: {
      trajetoria: "Trajetória",
      solucoes: "Soluções",
      summer: "Summer Camps",
      parceiros: "Parceiros",
      agenda: "Agenda",
    },
    login: "Entrar",
    loginAria: "Entrar na área da equipe",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },

  footer: {
    tagline: "Da escola ao mundo",
    description:
      "Formação global, dupla diplomação e consultoria de admissão internacional — Colégio COC Santa Catarina.",
    nucleo: "Núcleo",
    contact: "Contato",
    networks: "Redes",
    whatsapp: "WhatsApp",
    email: "E-mail",
    enroll: "Inscreva-se",
    staffLogin: "Entrar (equipe)",
    legal: "Grupo Nota Máxima · Rede COC Santa Catarina",
  },

  /** Rótulos de Call to Action. Todos levam ao mesmo formulário (#inscrever). */
  cta: {
    visit: "Agende uma visita",
    enroll: "Inscreva-se",
    meeting: "Marque uma reunião",
    whatsapp: "Falar no WhatsApp",
    pricing: "Consultar valores",
    summerSpots: "Quero saber das vagas",
    /** Frase curta de reforço usada nas faixas de CTA ao longo da rolagem. */
    line: "Matrículas abertas — fale com o Núcleo antes das vagas fecharem.",
    bandLabel: "Matrículas abertas",
  },

  hero: {
    kicker: "Núcleo de Internacionalização · Colégio COC",
    titleA: "Formação global,",
    titleAccent: "desde os primeiros anos",
    titleB: "da vida escolar.",
    lead:
      "Do Fundamental II ao Ensino Médio, construímos uma trajetória internacional real — certificação americana Junior High, dupla diplomação Brasil/USA e imersão em inglês desde cedo. Para quem já mira o próximo passo, também orientamos a admissão em universidades no exterior.",
    secondary: "Conhecer o programa",
    proof: [
      "Inglês",
      "Competências Globais",
      "Experiências Internacionais",
      "Planejamento",
      "Projeto de Vida",
      "Bolsa de Estudos",
    ],
    globeAlt: "O planeta Terra no espaço, com a estrela Polaris brilhando acima",
    polaris: "Polaris · a estrela que guia",
  },

  pillars: {
    label: "Pilares do programa",
    items: [
      {
        title: "Formação Internacional",
        items: ["Dupla Diplomação", "Certificações", "Currículo Internacional", "Junior High", "High School"],
      },
      {
        title: "Desenvolvimento do Estudante",
        items: ["Planejamento", "Extracurriculares", "Summer Camps", "Mentorias"],
      },
      {
        title: "Universidade Internacional",
        items: ["Admissions", "Essays", "SAT, TOEFL, IELTS", "Applications", "Scholarship"],
      },
    ],
  },

  abertura: {
    alt: "Estudantes saindo pelo portão de um campus universitário",
    figLabel: "Fig. 01 — Abertura",
    caption: "O próximo passo começa dentro da escola",
  },

  trajetoria: {
    kicker: "A trajetória",
    title: "Um caminho contínuo — do 6º ano ao diploma internacional.",
    lead:
      "A formação internacional não começa no Ensino Médio. Ela é construída ano a ano, dentro da rotina do COC, até o aluno chegar à reta final com dupla diplomação e — se quiser — candidatura a universidades no exterior.",
    imageAlt: "Formandos jogando os capelos para o alto",
    steps: [
      {
        phase: "Fundamental II",
        label: "6º ao 9º ano",
        detail: "Imersão em inglês desde cedo e a base do currículo internacional, integradas à rotina do COC.",
      },
      {
        phase: "Certificação Junior High",
        label: "Certificação americana",
        detail: "Certificação norte-americana de Junior High cursada em paralelo ao Fundamental II.",
      },
      {
        phase: "Ensino Médio",
        label: "1ª à 3ª série",
        detail: "Dupla diplomação Brasil/USA: o diploma de High School americano somado ao do COC.",
      },
      {
        phase: "Próximo passo",
        label: "Universidade no exterior",
        detail: "Para quem já mira fora, orientação completa de admissão em universidades internacionais.",
      },
    ],
  },

  solutions: {
    kicker: "Três soluções estratégicas",
    title: "Cada aluno tem um caminho — não adivinhamos, calculamos.",
    lead:
      "A partir do perfil acadêmico, do momento escolar e do objetivo da família, nossa equipe indica qual das três soluções combina melhor com cada aluno.",
    items: {
      "dupla-diplomacao": {
        name: "Dupla Diplomação Internacional",
        tagline: "Diploma de High School americano em paralelo ao COC.",
        alt: "Alunos em sala de aula trabalhando juntos em notebooks",
      },
      "high-school": {
        name: "Consultoria High School",
        tagline: "Planejamento para Fundamental II e Ensino Médio.",
        alt: "Dois estudantes planejando os estudos com notebook e livro",
      },
      college: {
        name: "Consultoria College",
        tagline: "Preparação completa para ingresso em universidades no exterior.",
        alt: "Estudantes subindo a escadaria de uma universidade, vistos pelo portão do campus",
      },
    },
  },

  summer: {
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
    images: [
      "Grupo de estudantes tirando uma selfie em uma rua de cidade americana",
      "Estudantes conversando na escadaria de um campus",
      "Grupo de adolescentes reunidos no gramado de um campus",
    ],
    caption: "Temporada de verão · turmas do Núcleo",
  },

  video: {
    kicker: "Vídeo",
    title: "O Núcleo em movimento",
    lead: "Conheça de perto a rotina do Núcleo.",
    pieces: ["Depoimento de família", "Tour pelo programa bilíngue", "Cerimônia de certificação"],
    posterAlt: "Estudantes estudando juntos com notebook ao ar livre",
    play: "Assistir ao vídeo institucional",
    iframeTitle: "Vídeo institucional",
  },

  partners: {
    kicker: "Ecossistema de parceiros",
    title: "Cada estudante conectado ao parceiro certo para o seu destino.",
    network: "Também na rede",
    items: {
      "instituto-cultural": {
        focus: "Prioridade: Estados Unidos",
        brands: "EducationUSA · Griggs",
        alt: "Instituto Cultural Brasileiro Norte-Americano",
      },
      worlded: {
        focus: "Prioridade: demais destinos internacionais",
        brands: "Programas em diferentes países e sistemas educacionais",
        alt: "WorldEd School",
      },
    },
  },

  quote: {
    label: "Citação",
    text: "Educação não transforma o mundo. Educação muda as pessoas.",
    accent: "Pessoas transformam o mundo.",
    author: "— Anísio Teixeira",
  },

  agenda: {
    kicker: "Agenda",
    title: "Próximos eventos",
    events: [
      "Parents Meeting",
      "Cerimônia de Abertura",
      "Community Service",
      "Workshops e Encontros Acadêmicos",
      "Cerimônia Anual de Certificação",
    ],
    instagramLatest: "Últimos no Instagram",
    follow: "Seguir",
    /** Mesma ordem de INSTAGRAM_POSTS em content.ts. */
    posts: [
      {
        tag: "Live · 11/11",
        title: "Estudar nos EUA com a Wilbraham & Monson Academy",
        alt: "Live: a experiência de estudar nos EUA com a Wilbraham & Monson Academy",
      },
      {
        tag: "Treinamento · 06/11",
        title: "Basquete com Andre White Sr. — COC Balneário Camboriú",
        alt: "Treinamento especial de basquete com Andre White Sr.",
      },
      {
        tag: "Guia gratuito",
        title: "Vai estudar fora? Prepare-se para a entrevista",
        alt: "Guia gratuito: prepare-se para a entrevista de admissão",
      },
    ],
  },

  inscricao: {
    kicker: "Próximo passo",
    title: "Comece a trajetória internacional deste aluno.",
    lead:
      "Deixe seus dados e o time do Núcleo retoma o contato pelo WhatsApp para agendar uma visita, tirar dúvidas sobre a dupla diplomação e os summer camps, e mostrar qual solução combina com o momento escolar do aluno.",
    talkNow: "Prefere falar agora?",
  },

  form: {
    ariaLabel: "Formulário de inscrição",
    responsavel: "Nome do responsável *",
    aluno: "Nome do aluno(a) *",
    serie: "Série que vai cursar",
    unidade: "Unidade / cidade",
    unidadePlaceholder: "Ex.: Balneário Camboriú, SC",
    email: "E-mail *",
    whatsapp: "WhatsApp *",
    whatsappPlaceholder: "(47) 90000-0000",
    error: "Não foi possível enviar agora. Tente novamente.",
    sending: "Enviando…",
    submit: "Enviar e falar no WhatsApp",
    note: "Ao enviar, você abre uma conversa no WhatsApp com o time do Núcleo.",
    serieOptions: [
      "6º ano",
      "7º ano",
      "8º ano",
      "9º ano",
      "1ª série do Ensino Médio",
      "2ª série do Ensino Médio",
      "3ª série do Ensino Médio",
      "Já concluí o Ensino Médio",
    ],
  },

  /** Mensagem pré-preenchida do WhatsApp. */
  whatsappMessage: {
    base: "Olá! Vim pela página do Núcleo Internacional e quero saber mais sobre o programa de formação internacional (do Fundamental II ao Ensino Médio).",
    responsavel: "Responsável",
    aluno: "Aluno(a)",
    unidade: "Unidade/cidade",
    email: "E-mail",
  },
};

export type Dictionary = typeof pt;
