import type { LegalDocuments } from "./types";

// Links no formato [texto](caminho); e-mails viram mailto automaticamente.
// Textos legais em PT-BR — versão de referência. EN e ES são traduções;
// em caso de divergência, vale a versão em português (dito nos Termos).
export const legalPt: LegalDocuments = ({ entity, email, paths }) => ({
  privacy: {
    title: "Política de Privacidade",
    summary:
      "Como o Núcleo Polaris coleta, usa, compartilha e protege os dados pessoais de quem visita este site e de quem nos procura para uma parceria institucional, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
    sections: [
      {
        title: "1. Quem é o controlador",
        paragraphs: [
          `O controlador dos dados pessoais tratados neste site é ${entity.name}, inscrita no CNPJ sob o nº ${entity.cnpj}, com sede em ${entity.address}, integrante do Grupo Nota Máxima e responsável pelo Núcleo Polaris (“Núcleo”, “nós”).`,
          `Encarregado pelo tratamento de dados pessoais (DPO): pode ser contatado pelo e-mail ${email}.`,
        ],
      },
      {
        title: "2. A quem esta política se aplica",
        paragraphs: [
          "Este é um site institucional voltado a instituições de ensino (high schools, universidades, escolas de idiomas, academies e programas de curta duração). A política se aplica a visitantes do site e às pessoas que preenchem o formulário de parceria em nome de uma instituição.",
          "Este site não se destina a crianças e adolescentes e não coleta, de forma intencional, dados de estudantes.",
        ],
      },
      {
        title: "3. Dados que coletamos",
        list: [
          "Formulário de parceria: nome, cargo, instituição, tipo de instituição, país/cidade, e-mail, WhatsApp/telefone e o idioma da página em que o formulário foi preenchido.",
          "Conversas: o conteúdo das mensagens que você nos enviar por WhatsApp ou e-mail.",
          "Dados técnicos de navegação: endereço IP, data e hora de acesso, navegador, dispositivo e páginas acessadas, registrados automaticamente pelo provedor de hospedagem.",
          `Cookies: conforme descrito na [Política de Cookies](${paths.cookies}).`,
        ],
        after: ["Não solicitamos dados pessoais sensíveis. Pedimos que você não os envie pelo formulário ou pelas conversas."],
      },
      {
        title: "4. Para que usamos os dados e com qual base legal",
        table: {
          head: ["Finalidade", "Dados", "Base legal (LGPD)"],
          rows: [
            [
              "Responder ao seu interesse e conduzir as tratativas de parceria",
              "Formulário e conversas",
              "Procedimentos preliminares a contrato (art. 7º, V) e legítimo interesse (art. 7º, IX)",
            ],
            [
              "Manter o histórico de relacionamento com instituições parceiras e potenciais parceiras",
              "Formulário e conversas",
              "Legítimo interesse (art. 7º, IX)",
            ],
            [
              "Enviar comunicações institucionais sobre programas, eventos e novidades do Núcleo",
              "Nome, e-mail e WhatsApp",
              "Legítimo interesse (art. 7º, IX), com opção de descadastro a qualquer momento",
            ],
            [
              "Garantir a segurança do site e guardar registros de acesso",
              "Dados técnicos de navegação",
              "Cumprimento de obrigação legal (art. 7º, II; Marco Civil da Internet, art. 15)",
            ],
            [
              "Lembrar seu idioma e suas escolhas de cookies",
              "Cookies essenciais",
              "Legítimo interesse (art. 7º, IX)",
            ],
            [
              "Medir a audiência do site e de campanhas, se esses recursos forem ativados",
              "Cookies de análise e de marketing",
              "Consentimento (art. 7º, I), que pode ser revogado a qualquer momento",
            ],
          ],
        },
      },
      {
        title: "5. Com quem compartilhamos",
        paragraphs: ["Não vendemos dados pessoais. Compartilhamos apenas o necessário com:"],
        list: [
          "Provedores de tecnologia que operam o site em nosso nome, como hospedagem (Vercel Inc.) e banco de dados em nuvem (Neon Inc.).",
          "WhatsApp (Meta Platforms), quando você escolhe continuar a conversa por lá. A partir desse ponto, valem também os termos e a política de privacidade do WhatsApp.",
          "A equipe do Núcleo e as empresas do Grupo Nota Máxima envolvidas no atendimento, sempre sob dever de confidencialidade.",
          "Autoridades públicas, quando houver obrigação legal ou ordem judicial.",
        ],
      },
      {
        title: "6. Transferência internacional",
        paragraphs: [
          "Alguns dos nossos provedores armazenam ou processam dados fora do Brasil, especialmente nos Estados Unidos. Nesses casos, a transferência segue o art. 33 da LGPD, com provedores que adotam cláusulas contratuais e medidas de segurança compatíveis com a lei brasileira.",
        ],
      },
      {
        title: "7. Por quanto tempo guardamos",
        list: [
          "Dados do formulário e das conversas: enquanto durarem as tratativas ou a parceria e por até 2 anos após o último contato.",
          "Registros de acesso: 6 meses, como exige o Marco Civil da Internet.",
          `Cookies: pelos prazos indicados na [Política de Cookies](${paths.cookies}).`,
        ],
        after: [
          "Depois desses prazos, os dados são eliminados ou anonimizados, salvo quando precisarmos guardá-los para cumprir obrigação legal ou exercer direitos em processos.",
        ],
      },
      {
        title: "8. Seus direitos",
        paragraphs: ["Pelo art. 18 da LGPD, você pode solicitar a qualquer momento:"],
        list: [
          "confirmação de que tratamos seus dados e acesso a eles;",
          "correção de dados incompletos, inexatos ou desatualizados;",
          "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;",
          "portabilidade dos dados a outro fornecedor;",
          "informação sobre com quem compartilhamos seus dados;",
          "revogação do consentimento e eliminação dos dados tratados com base nele;",
          "oposição a tratamentos baseados em legítimo interesse.",
        ],
        after: [
          `Para exercer seus direitos, escreva para ${email}. Podemos pedir informações para confirmar sua identidade e responderemos em até 15 dias. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`,
        ],
      },
      {
        title: "9. Segurança",
        paragraphs: [
          "Adotamos medidas técnicas e administrativas para proteger os dados, como conexão criptografada (HTTPS), acesso restrito à equipe autorizada e provedores com padrões reconhecidos de segurança. Se ocorrer um incidente que possa trazer risco relevante, comunicaremos os titulares e a ANPD, como prevê a LGPD.",
        ],
      },
      {
        title: "10. Cookies",
        paragraphs: [`Os detalhes sobre cookies e como gerenciá-los estão na [Política de Cookies](${paths.cookies}).`],
      },
      {
        title: "11. Alterações desta política",
        paragraphs: [
          "Podemos atualizar esta política para refletir mudanças no site, nos serviços ou na legislação. A data da última atualização aparece no topo da página. Mudanças relevantes também serão destacadas no site.",
        ],
      },
    ],
  },

  terms: {
    title: "Termos de Uso",
    summary:
      "As regras para usar o site do Núcleo Polaris. Ao navegar por este site, você concorda com estes termos.",
    sections: [
      {
        title: "1. Sobre o site",
        paragraphs: [
          `Este site é mantido por ${entity.name}, CNPJ ${entity.cnpj}, responsável pelo Núcleo Polaris. Ele apresenta o Núcleo e as oportunidades de parceria a instituições de ensino.`,
          "O conteúdo tem caráter informativo e não constitui oferta vinculante. Toda parceria depende de negociação e de um instrumento contratual próprio, assinado pelas partes.",
        ],
      },
      {
        title: "2. Uso permitido",
        paragraphs: ["Você se compromete a usar o site de forma lícita e de boa-fé. Não é permitido:"],
        list: [
          "tentar acessar áreas restritas, sistemas ou dados sem autorização;",
          "enviar informações falsas ou dados de terceiros sem autorização;",
          "coletar o conteúdo de forma automatizada e abusiva, ou sobrecarregar a infraestrutura do site;",
          "inserir códigos maliciosos ou interferir no funcionamento do site;",
          "usar o conteúdo para fins ilícitos ou que violem direitos de terceiros.",
        ],
      },
      {
        title: "3. Informações que você envia",
        paragraphs: [
          `Ao preencher o formulário de parceria, você declara que as informações são verdadeiras e que está autorizado a falar em nome da instituição indicada. O tratamento desses dados segue a nossa [Política de Privacidade](${paths.privacy}).`,
        ],
      },
      {
        title: "4. Área restrita",
        paragraphs: [
          "O acesso “Entrar” é exclusivo da equipe do Núcleo e de parceiros autorizados. As credenciais são pessoais e intransferíveis. Cada usuário responde pelo uso da própria conta.",
        ],
      },
      {
        title: "5. Propriedade intelectual",
        paragraphs: [
          "Textos, marcas, logotipos, layout e demais materiais deste site pertencem ao Núcleo Polaris e às empresas do Grupo Nota Máxima, ou são usados com autorização dos seus titulares. Não é permitido reproduzi-los, modificá-los ou distribuí-los sem autorização prévia e por escrito.",
          "As marcas de instituições parceiras pertencem aos respectivos titulares e aparecem apenas para identificar as parcerias. Algumas imagens são ilustrativas. Fotos de terceiros são usadas conforme as respectivas licenças, com os créditos indicados.",
        ],
      },
      {
        title: "6. Links e serviços de terceiros",
        paragraphs: [
          "O site tem links para serviços de terceiros, como WhatsApp, Instagram, YouTube e sites de instituições parceiras. Esses serviços têm termos e políticas próprios, e não respondemos pelo conteúdo ou pelas práticas deles.",
        ],
      },
      {
        title: "7. Informações e responsabilidade",
        paragraphs: [
          "Números, aprovações, programas e demais informações são apresentados de boa-fé, com base em dados internos e públicos, e podem mudar sem aviso. Fazemos o possível para manter o site disponível e correto, mas não garantimos funcionamento ininterrupto ou livre de erros.",
          "Na máxima extensão permitida pela lei, não respondemos por danos indiretos decorrentes do uso ou da impossibilidade de uso do site.",
        ],
      },
      {
        title: "8. Privacidade e cookies",
        paragraphs: [
          `O uso de dados pessoais segue a [Política de Privacidade](${paths.privacy}) e a [Política de Cookies](${paths.cookies}), que fazem parte destes termos.`,
        ],
      },
      {
        title: "9. Alterações",
        paragraphs: [
          "Podemos alterar estes termos a qualquer momento. A versão vigente é a publicada nesta página, com a data da última atualização.",
        ],
      },
      {
        title: "10. Idioma, lei aplicável e foro",
        paragraphs: [
          "Estes termos são regidos pela legislação brasileira. As versões em inglês e espanhol são traduções; em caso de divergência, prevalece a versão em português.",
          `Fica eleito o foro da comarca de ${entity.city} para resolver eventuais controvérsias, ressalvadas as hipóteses de competência legal diversa.`,
        ],
      },
      {
        title: "11. Contato",
        paragraphs: [`Dúvidas sobre estes termos: ${email}.`],
      },
    ],
  },

  cookies: {
    title: "Política de Cookies",
    summary:
      "Quais cookies este site usa, para quê, por quanto tempo e como você controla suas escolhas.",
    sections: [
      {
        title: "1. O que são cookies",
        paragraphs: [
          "Cookies são pequenos arquivos que um site grava no seu navegador para lembrar informações entre uma visita e outra, como o idioma escolhido.",
        ],
      },
      {
        title: "2. Categorias",
        table: {
          head: ["Categoria", "Para que serve", "Situação"],
          rows: [
            ["Essenciais", "Fazem o site funcionar: idioma escolhido e registro das suas preferências de cookies.", "Sempre ativos"],
            ["Análise", "Ajudam a entender como o site é usado (páginas visitadas, origem das visitas), para melhorá-lo.", "Só com o seu consentimento"],
            ["Marketing", "Medem o resultado de campanhas e permitem anúncios mais relevantes em outras plataformas.", "Só com o seu consentimento"],
          ],
        },
        after: [
          "Hoje o site usa apenas cookies essenciais. Se ferramentas de análise ou de marketing forem adicionadas, elas só serão carregadas depois do seu consentimento, e esta página será atualizada com os cookies correspondentes.",
        ],
      },
      {
        title: "3. Cookies em uso",
        table: {
          head: ["Nome", "Tipo", "Finalidade", "Duração"],
          rows: [
            ["ni-lang", "Essencial · próprio", "Lembra o idioma escolhido no seletor", "12 meses"],
            ["ni-consent", "Essencial · próprio", "Guarda suas escolhas de cookies", "12 meses"],
          ],
        },
      },
      {
        title: "4. Conteúdo de terceiros",
        paragraphs: [
          "Vídeos do YouTube ou do Vimeo só são carregados quando você clica em reproduzir, no modo de privacidade reforçada desses serviços. Ao reproduzir um vídeo, o provedor pode usar cookies próprios, conforme a política dele.",
          "Links para WhatsApp, Instagram e outros serviços levam a sites de terceiros, que têm políticas de cookies próprias.",
        ],
      },
      {
        title: "5. Como gerenciar",
        paragraphs: [
          "Você pode mudar suas escolhas a qualquer momento pelo link “Preferências de cookies”, no rodapé do site. Também é possível bloquear ou apagar cookies nas configurações do navegador; bloquear os essenciais pode afetar o funcionamento do site.",
        ],
      },
      {
        title: "6. Mais informações",
        paragraphs: [
          `O tratamento de dados pessoais está detalhado na [Política de Privacidade](${paths.privacy}). Dúvidas: ${email}.`,
        ],
      },
    ],
  },
});
