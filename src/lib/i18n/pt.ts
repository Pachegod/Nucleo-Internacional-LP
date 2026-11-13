// Dicionário PT-BR — idioma padrão da LP (rota "/"). O tipo `Dictionary`
// nasce daqui: en.ts e es.ts precisam cobrir exatamente as mesmas chaves.
//
// Posicionamento: esta LP é B2B — fala com instituições de ensino do mundo
// todo (high schools, universidades, escolas de idioma, academies) que
// querem ser parceiras do Núcleo. A LP para famílias (B2C) é a
// lp.nucleopolaris.com.br.

export const pt = {
  meta: {
    title: "Núcleo Polaris — Parcerias Institucionais",
    description:
      "Seja uma instituição parceira do Núcleo Polaris: conecte sua high school, universidade, escola de idiomas ou academy a estudantes brasileiros preparados desde o Fundamental II na rede COC.",
  },

  langSwitcher: {
    label: "Idioma",
    names: { pt: "Português", en: "English", es: "Español" },
  },

  logoAlt: "Núcleo de Internacionalização",

  header: {
    navLabel: "Seções",
    nav: {
      "quem-somos": "Quem somos",
      trajetoria: "Como funciona",
      solucoes: "Parcerias",
      summer: "Programas",
      parceiros: "Rede",
      agenda: "Agenda",
    },
    login: "Entrar",
    loginAria: "Entrar na área da equipe e dos parceiros",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },

  footer: {
    tagline: "Da escola brasileira ao mundo",
    description:
      "Parcerias institucionais entre a rede COC e instituições de ensino do mundo todo — high schools, universidades, escolas de idioma e academies.",
    nucleo: "Núcleo",
    contact: "Contato",
    networks: "Redes",
    whatsapp: "WhatsApp",
    email: "E-mail",
    enroll: "Seja parceira",
    staffLogin: "Entrar (equipe e parceiros)",
    legal: "Grupo Nota Máxima · Rede COC Santa Catarina",
  },

  /** Rótulos de Call to Action. Todos levam ao mesmo formulário (#inscrever). */
  cta: {
    visit: "Seja uma instituição parceira",
    enroll: "Quero ser parceira",
    meeting: "Agende uma reunião",
    whatsapp: "Falar no WhatsApp",
    pricing: "Conhecer o modelo",
    summerSpots: "Receber uma turma",
    /** Frase curta de reforço usada nas faixas de CTA ao longo da rolagem. */
    line: "Novas parcerias abertas para o próximo ciclo — fale com o Núcleo.",
    bandLabel: "Parcerias abertas",
  },

  hero: {
    kicker: "Núcleo Polaris · Parcerias Institucionais",
    titleA: "Sua instituição,",
    titleAccent: "a próxima parada",
    titleB: "de estudantes globais.",
    lead:
      "O Núcleo Polaris prepara estudantes brasileiros desde o Fundamental II — inglês, currículo internacional, dupla diplomação e planejamento de carreira. Agora abrimos a rede para novas instituições parceiras: high schools, universidades, escolas de idioma e academies que querem receber esses alunos, prontos e acompanhados.",
    secondary: "Ver como funciona",
    proof: [
      "High Schools",
      "Boarding Schools",
      "Universidades",
      "Escolas de Idioma",
      "Academies",
      "Summer Programs",
    ],
    globeAlt: "O planeta Terra no espaço, com a estrela Polaris brilhando acima",
    polaris: "Polaris · a estrela que guia",
  },

  pillars: {
    label: "O que a parceria entrega",
    items: [
      {
        title: "Estudantes Qualificados",
        items: ["Perfil acadêmico", "Inglês avaliado", "Objetivo definido", "Orçamento alinhado", "Famílias engajadas"],
      },
      {
        title: "Plataforma e Formação",
        items: ["Match Institucional", "CRM de alunos", "Treinamento", "Material de captação", "Coordenação dedicada"],
      },
      {
        title: "Novas Matrículas",
        items: ["Nova fonte de receita", "Diversidade internacional", "Mercado brasileiro", "Programas conjuntos"],
      },
    ],
  },

  about: {
    kicker: "Quem somos",
    title: "Antes da parceria, as apresentações.",
    lead:
      "Uma boa parceria começa por conhecer quem está do outro lado. Do sistema de ensino nacional à equipe do Núcleo, este é o caminho que leva cada estudante até a sua instituição.",
    /** Marcador exibido onde um número ainda não foi confirmado. */
    pending: "a confirmar",
    figures: {
      opening: { alt: "Alunos conversando no pátio do COC Colinas ao entardecer", caption: "Fig. 01 — COC Colinas" },
      counseling: { alt: "Orientadora apresenta o plano de estudos no notebook a uma aluna e sua mãe", caption: "Fig. 02 — Orientação individual" },
    },
    principles: {
      title: "Missão, visão e valores",
      missionLabel: "Missão",
      mission:
        "Promover a excelência educacional, fornecendo aos alunos oportunidades ilimitadas para impulsionar os seus sonhos e desenvolver suas habilidades.",
      visionLabel: "Visão",
      vision:
        "Ser referência nacional em inovação e em qualidade pedagógica, oferecendo soluções para os ecossistemas digitais educacionais.",
      valuesLabel: "Valores",
      values: [
        "Transformação de vidas através da educação e tecnologia",
        "Evolução constante",
        "Incentivo ao aprendizado",
        "Compromisso com a evolução da educação no Brasil",
        "Paixão por educar",
      ],
    },
    national: {
      tag: "01 · Rede nacional",
      title: "COC — tradição em educação desde 1963",
      text:
        "Fundado em Ribeirão Preto (SP), o COC é uma plataforma educacional com mais de 60 anos de trajetória — metodologia, material didático, avaliações e currículo bilíngue próprios, presentes em escolas de todo o Brasil.",
      stats: ["Escolas parceiras em 24 estados e no DF", "Estudantes na rede", "Estudantes no currículo bilíngue Be", "Aprovação em exames internacionais"],
      values: ["500+", "160 mil+", "70 mil+", "95%"],
    },
    regional: {
      tag: "02 · Santa Catarina",
      title: "COC Santa Catarina — Grupo Nota Máxima",
      text:
        "Desde 1999 o Grupo Nota Máxima constrói o COC em Santa Catarina: hoje são 10 unidades em 6 cidades, do Vale do Itajaí e da Serra até o litoral. Uma rede reconhecida por resultados, com alunos aprovados em mais de 70 universidades no Brasil e no exterior.",
      stats: ["Cidades", "Unidades", "Desde", "Universidades com alunos aprovados"],
      unitsSuffix: "unidades",
      timelineTitle: "Nossa trajetória em Santa Catarina",
      timeline: [
        { year: "1999", text: "Início em Rio do Sul" },
        { year: "2003", text: "Chegada a Lages" },
        { year: "2012", text: "Unificação no sistema COC" },
        { year: "2017", text: "Balneário Camboriú" },
        { year: "2018", text: "Blumenau e Aletech — startup do grupo e plataforma de aulas on-line COC Online" },
        { year: "2019", text: "Construção em Lages e novas unidades em Rio do Sul e Balneário Camboriú" },
        { year: "2021", text: "Chegada da Unidade 2 de Balneário Camboriú" },
        { year: "2023", text: "Balneário Camboriú — Unidade 3" },
        { year: "2024", text: "Nova unidade em Lages e escola de campo" },
        { year: "2025", text: "COC Itajaí" },
        { year: "2026", text: "COC Porto Belo" },
      ],
      expansion: {
        kicker: "Próximos passos",
        title: "O próximo capítulo já está em obras.",
        lead: "A rede continua crescendo — e cresce olhando para o mundo.",
        items: [
          {
            name: "COC Colinas Global School",
            place: "Balneário Camboriú",
            detail:
              "Uma escola bilíngue de cerca de 8 mil m², num bairro planejado — pensada desde o projeto para a formação internacional.",
          },
          {
            name: "Educação Infantil",
            place: "Balneário Camboriú",
            detail: "Uma nova unidade dedicada à primeira infância: a trajetória global começando ainda mais cedo.",
          },
        ],
      },
      mapTitle: "Mapa das unidades COC em Santa Catarina",
      mapCaption: "Unidades COC em Santa Catarina · mapa ilustrativo",
    },
    nucleo: {
      tag: "03 · Núcleo Polaris",
      title: "Como nasceu o Núcleo",
      text:
        "O mundo mudou — e as oportunidades acadêmicas deixaram de ter fronteiras. As melhores universidades passaram a valorizar estudantes com domínio do inglês, vivências internacionais, protagonismo e liderança, muito além das boas notas. O Núcleo de Internacionalização nasce dentro do COC Santa Catarina para preparar os alunos para essa realidade desde os primeiros anos da vida escolar, acompanhando cada um em toda a jornada internacional.",
      frontsTitle: "Duas frentes que caminham juntas",
      fronts: [
        {
          name: "Sem mobilidade · o mundo dentro da escola",
          detail:
            "Currículo bilíngue, Junior High Certificate no Fundamental II, dupla diplomação de High School no Ensino Médio, preparação para exames de proficiência e aulas com especialistas de instituições internacionais — sem sair do Brasil.",
        },
        {
          name: "Com mobilidade · o mundo fora da escola",
          detail:
            "Short programs e summer camps, High School Experience no exterior e candidatura a universidades internacionais, com acompanhamento antes, durante e depois.",
        },
      ],
      partnerNote:
        "Construído com parceiros acadêmicos como o Instituto Cultural, que formou e certificou a equipe do Núcleo para multiplicar a metodologia nas unidades da rede — e em novas instituições parceiras.",
    },
    founders: {
      tag: "05 · Parceiros fundamentais",
      title: "Quem construiu o Núcleo com a gente",
      text:
        "Dois parceiros estiveram na base do projeto desde o início — da formação da equipe ao diploma americano dos nossos alunos.",
    },
    counseling: {
      tag: "04 · Counseling",
      title: "International Counseling",
      approvalsTitle: "Aprovações internacionais de alunos da rede",
      text:
        "O coração do Núcleo é o counseling: um acompanhamento individual do estudante e da família, do Fundamental II à universidade, que transforma interesse em uma candidatura sólida — e em um aluno preparado para chegar à sua instituição.",
      items: [
        "Planejamento acadêmico desde o Fundamental II",
        "Extracurriculares, mentorias e projeto de vida",
        "Preparação para SAT, TOEFL e IELTS",
        "Essays, entrevistas e applications",
        "Busca de bolsas e orientação financeira à família",
        "Acompanhamento até o embarque",
      ],
    },
  },

  abertura: {
    alt: "Estudantes saindo pelo portão de um campus universitário",
    figLabel: "Fig. 05 — Nossas cidades",
    carouselLabel: "Cidades com unidades COC em Santa Catarina",
    prev: "Cidade anterior",
    next: "Próxima cidade",
    goTo: "Ir para",
    pause: "Pausar",
    play: "Reproduzir",
    photoBy: "Foto:",
    caption: "Da escola brasileira à sua instituição",
  },

  trajetoria: {
    kicker: "Como funciona",
    title: "Da primeira conversa ao aluno matriculado.",
    lead:
      "A parceria não é uma lista de contatos. Sua instituição entra na plataforma do Núcleo, nossa equipe conhece seus programas a fundo e passa a indicar — e preparar — os estudantes que realmente combinam com o seu perfil.",
    imageAlt: "Formandos jogando os capelos para o alto",
    steps: [
      {
        phase: "Diagnóstico",
        label: "Conversa inicial",
        detail: "Entendemos seus programas, critérios de admissão, faixas de investimento e o perfil de aluno que você busca.",
      },
      {
        phase: "Plataforma",
        label: "Match Institucional",
        detail: "Sua instituição entra na base de parceiros da plataforma e passa a aparecer para os alunos com perfil compatível.",
      },
      {
        phase: "Formação",
        label: "Equipe e materiais",
        detail: "Treinamos a coordenação do Núcleo sobre a sua instituição e construímos juntos lives, eventos e material de captação.",
      },
      {
        phase: "Matrícula",
        label: "Aluno pronto",
        detail: "Indicamos estudantes preparados e acompanhamos cada família até o embarque — uma nova fonte de matrículas e receita.",
      },
    ],
  },

  solutions: {
    kicker: "Três frentes de parceria",
    title: "Um modelo para cada tipo de instituição.",
    lead:
      "Do Fundamental II à universidade, o Núcleo acompanha o aluno em toda a trajetória — e cada fase abre uma frente de parceria diferente para a sua instituição.",
    items: {
      "dupla-diplomacao": {
        name: "High Schools e Boarding Schools",
        tagline:
          "Dupla diplomação, Junior High e programas de High School para alunos que já cursam o currículo internacional dentro da rede.",
        alt: "Alunos em sala de aula trabalhando juntos em notebooks",
      },
      "high-school": {
        name: "Escolas de Idioma e Academies",
        tagline:
          "Cursos de idioma, certificações e programas esportivos ou artísticos que complementam a formação do estudante.",
        alt: "Dois estudantes planejando os estudos com notebook e livro",
      },
      college: {
        name: "Universidades e Colleges",
        tagline:
          "Candidatos com planejamento desde cedo, testes (SAT, TOEFL, IELTS), essays e applications orientados pela nossa equipe.",
        alt: "Estudantes subindo a escadaria de uma universidade, vistos pelo portão do campus",
      },
    },
  },

  summer: {
    kicker: "Programas de curta duração",
    title: "Receba turmas do Núcleo na sua instituição.",
    description:
      "Summer camps, cursos de férias e imersões curtas são a porta de entrada da trajetória internacional. Sua instituição recebe grupos de estudantes brasileiros já organizados pelo Núcleo — e conhece de perto os alunos que podem voltar para programas mais longos.",
    points: [
      "Grupos acompanhados pela coordenação do Núcleo",
      "Documentação, logística e famílias organizadas por nós",
      "Programas desenhados em conjunto com a sua equipe",
      "Uma vitrine para os seus programas de longa duração",
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
    lead: "Conheça a estrutura que vai apresentar a sua instituição às famílias brasileiras.",
    pieces: ["Depoimento de família", "Tour pelo programa bilíngue", "Cerimônia de certificação"],
    posterAlt: "Estudantes estudando juntos com notebook ao ar livre",
    play: "Assistir ao vídeo institucional",
    iframeTitle: "Vídeo institucional",
  },

  partners: {
    kicker: "Rede de parceiros",
    title: "Sua instituição ao lado de quem já faz parte da rede.",
    network: "Também na rede",
    items: {
      "instituto-cultural": {
        focus: "Parceiro de rota: Estados Unidos",
        brands:
          "Primeiro centro binacional Brasil–EUA de Porto Alegre e centro oficial EducationUSA. Formou e certificou a equipe do Núcleo e conduz nossos alunos rumo a high schools e universidades americanas — orientação oficial, testes e todo o caminho até o embarque.",
        alt: "Instituto Cultural Brasileiro Norte-Americano",
        photoCaption: "Fig. 03 — Formação de educadores",
        photoAlt: "Formador conduz uma sessão de capacitação com professores ao redor de uma mesa",
        stats: ["Fundado em Porto Alegre", "Centro EducationUSA desde"],
        values: ["1938", "1981"],
      },
      griggs: {
        focus: "Parceiro acadêmico: diploma americano",
        brands:
          "Escola americana acreditada, operada pela Andrews University, que certifica o diploma de High School americano cursado em paralelo ao COC — mais de 250 mil alunos formados ao longo de sua história.",
        alt: "Griggs International Academy",
        photoCaption: "Fig. 04 — Diploma americano",
        photoAlt: "Formanda de beca e capelo, emocionada, segura o diploma enquanto colegas se abraçam",
        stats: ["Fundada nos EUA", "Países com alunos"],
        values: ["1909", "60+"],
      },
      worlded: {
        focus: "Parceiro de rota: demais destinos internacionais",
        brands: "Programas em diferentes países e sistemas educacionais",
        alt: "WorldEd School",
        photoCaption: "",
        photoAlt: "",
        stats: [] as string[],
        values: [] as string[],
      },
    },
  },

  quote: {
    label: "Citação",
    text: "Uma criança, um professor, um livro e uma caneta",
    accent: "podem mudar o mundo.",
    author: "— Malala Yousafzai",
  },

  agenda: {
    kicker: "Agenda",
    title: "Onde sua instituição aparece",
    events: [
      "Lives com instituições parceiras",
      "Visitas e apresentações nas unidades",
      "Parents Meeting",
      "Workshops com coordenadores e famílias",
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
    title: "Vamos construir essa parceria.",
    lead:
      "Deixe os dados da sua instituição e o time do Núcleo retoma o contato para agendar uma reunião e apresentar a rede, a plataforma e o modelo de parceria que faz sentido para vocês.",
    talkNow: "Prefere falar agora?",
  },

  form: {
    ariaLabel: "Formulário de parceria",
    contato: "Seu nome *",
    cargo: "Cargo",
    cargoPlaceholder: "Ex.: Diretor(a) de Admissões",
    instituicao: "Instituição *",
    tipo: "Tipo de instituição",
    local: "País / cidade",
    localPlaceholder: "Ex.: Boston, EUA",
    email: "E-mail *",
    whatsapp: "WhatsApp / telefone *",
    whatsappPlaceholder: "+1 555 000 0000",
    error: "Não foi possível enviar agora. Tente novamente.",
    sending: "Enviando…",
    submit: "Enviar e falar no WhatsApp",
    note: "Ao enviar, você abre uma conversa no WhatsApp com o time de parcerias do Núcleo.",
    tipoOptions: [
      "High School / Boarding School",
      "Universidade / College",
      "Escola de idiomas",
      "Academy (esportes, artes)",
      "Summer camp / curta duração",
      "Outro",
    ],
  },

  /** Mensagem pré-preenchida do WhatsApp. */
  whatsappMessage: {
    base: "Olá! Vim pela página de parcerias do Núcleo Polaris e quero conversar sobre tornar nossa instituição parceira.",
    contato: "Contato",
    instituicao: "Instituição",
    local: "País/cidade",
    email: "E-mail",
  },
};

export type Dictionary = typeof pt;
