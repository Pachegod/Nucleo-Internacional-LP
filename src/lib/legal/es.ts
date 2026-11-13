import type { LegalDocuments } from "./types";

// Traducción al español de los textos legales en PT-BR (prevalece la versión en portugués).
export const legalEs: LegalDocuments = ({ entity, email, paths }) => ({
  privacy: {
    title: "Política de Privacidad",
    summary:
      "Cómo el Núcleo Polaris recopila, utiliza, comparte y protege los datos personales de quienes visitan este sitio y de quienes nos contactan para una alianza institucional, conforme a la Ley General de Protección de Datos de Brasil (Ley nº 13.709/2018 — LGPD).",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          `El responsable de los datos personales tratados en este sitio es ${entity.name}, inscrita en el registro brasileño de empresas (CNPJ) con el nº ${entity.cnpj}, con sede en ${entity.address}, integrante del Grupo Nota Máxima y responsable del Núcleo Polaris (“Núcleo”, “nosotros”).`,
          `Encargado de Protección de Datos (DPO): puede contactarse en ${email}.`,
        ],
      },
      {
        title: "2. A quién se aplica esta política",
        paragraphs: [
          "Este es un sitio institucional dirigido a instituciones educativas (high schools, universidades, escuelas de idiomas, academias y programas de corta duración). La política se aplica a los visitantes del sitio y a las personas que completan el formulario de alianza en nombre de una institución.",
          "Este sitio no está dirigido a niños ni adolescentes y no recopila intencionalmente datos de estudiantes.",
        ],
      },
      {
        title: "3. Datos que recopilamos",
        list: [
          "Formulario de alianza: nombre, cargo, institución, tipo de institución, país/ciudad, correo electrónico, WhatsApp/teléfono y el idioma de la página en que se completó el formulario.",
          "Conversaciones: el contenido de los mensajes que nos envíe por WhatsApp o correo electrónico.",
          "Datos técnicos de navegación: dirección IP, fecha y hora de acceso, navegador, dispositivo y páginas visitadas, registrados automáticamente por el proveedor de alojamiento.",
          `Cookies: según se describe en la [Política de Cookies](${paths.cookies}).`,
        ],
        after: ["No solicitamos datos personales sensibles. Le pedimos que no los envíe por el formulario ni en las conversaciones."],
      },
      {
        title: "4. Para qué usamos los datos y con qué base legal",
        table: {
          head: ["Finalidad", "Datos", "Base legal (LGPD)"],
          rows: [
            [
              "Responder a su interés y llevar adelante las conversaciones de alianza",
              "Formulario y conversaciones",
              "Procedimientos previos a un contrato (art. 7, V) e interés legítimo (art. 7, IX)",
            ],
            [
              "Mantener el historial de relación con instituciones aliadas y potenciales aliadas",
              "Formulario y conversaciones",
              "Interés legítimo (art. 7, IX)",
            ],
            [
              "Enviar comunicaciones institucionales sobre programas, eventos y novedades del Núcleo",
              "Nombre, correo y WhatsApp",
              "Interés legítimo (art. 7, IX), con opción de darse de baja en cualquier momento",
            ],
            [
              "Garantizar la seguridad del sitio y conservar registros de acceso",
              "Datos técnicos de navegación",
              "Cumplimiento de una obligación legal (art. 7, II; Marco Civil de Internet, art. 15)",
            ],
            [
              "Recordar su idioma y sus preferencias de cookies",
              "Cookies esenciales",
              "Interés legítimo (art. 7, IX)",
            ],
            [
              "Medir la audiencia del sitio y de campañas, si estas funciones se activan",
              "Cookies de análisis y de marketing",
              "Consentimiento (art. 7, I), que puede revocarse en cualquier momento",
            ],
          ],
        },
      },
      {
        title: "5. Con quién compartimos",
        paragraphs: ["No vendemos datos personales. Solo compartimos lo necesario con:"],
        list: [
          "Proveedores de tecnología que operan el sitio en nuestro nombre, como alojamiento (Vercel Inc.) y base de datos en la nube (Neon Inc.).",
          "WhatsApp (Meta Platforms), cuando usted elige continuar la conversación allí. A partir de ese momento, también se aplican los términos y la política de privacidad de WhatsApp.",
          "El equipo del Núcleo y las empresas del Grupo Nota Máxima involucradas en la atención, siempre con deber de confidencialidad.",
          "Autoridades públicas, cuando exista obligación legal u orden judicial.",
        ],
      },
      {
        title: "6. Transferencia internacional",
        paragraphs: [
          "Algunos de nuestros proveedores almacenan o procesan datos fuera de Brasil, especialmente en Estados Unidos. En esos casos, la transferencia sigue el art. 33 de la LGPD, con proveedores que adoptan cláusulas contractuales y medidas de seguridad compatibles con la ley brasileña.",
        ],
      },
      {
        title: "7. Por cuánto tiempo conservamos los datos",
        list: [
          "Datos del formulario y de las conversaciones: mientras duren las conversaciones o la alianza y hasta 2 años después del último contacto.",
          "Registros de acceso: 6 meses, como exige el Marco Civil de Internet.",
          `Cookies: durante los plazos indicados en la [Política de Cookies](${paths.cookies}).`,
        ],
        after: [
          "Tras esos plazos, los datos se eliminan o anonimizan, salvo cuando debamos conservarlos para cumplir una obligación legal o ejercer derechos en procesos.",
        ],
      },
      {
        title: "8. Sus derechos",
        paragraphs: ["Conforme al art. 18 de la LGPD, puede solicitar en cualquier momento:"],
        list: [
          "confirmación de que tratamos sus datos y acceso a ellos;",
          "corrección de datos incompletos, inexactos o desactualizados;",
          "anonimización, bloqueo o eliminación de datos innecesarios, excesivos o tratados en disconformidad con la ley;",
          "portabilidad de los datos a otro proveedor;",
          "información sobre con quién compartimos sus datos;",
          "revocación del consentimiento y eliminación de los datos tratados con base en él;",
          "oposición a tratamientos basados en interés legítimo.",
        ],
        after: [
          `Para ejercer sus derechos, escriba a ${email}. Podemos pedir información para confirmar su identidad y responderemos en un plazo de hasta 15 días. También puede presentar un reclamo ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD).`,
        ],
      },
      {
        title: "9. Seguridad",
        paragraphs: [
          "Adoptamos medidas técnicas y administrativas para proteger los datos, como conexión cifrada (HTTPS), acceso restringido al equipo autorizado y proveedores con estándares de seguridad reconocidos. Si ocurre un incidente que pueda suponer un riesgo relevante, lo comunicaremos a los titulares y a la ANPD, como prevé la LGPD.",
        ],
      },
      {
        title: "10. Cookies",
        paragraphs: [`Los detalles sobre cookies y cómo gestionarlas están en la [Política de Cookies](${paths.cookies}).`],
      },
      {
        title: "11. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política para reflejar cambios en el sitio, en los servicios o en la legislación. La fecha de la última actualización aparece al inicio de la página. Los cambios relevantes también se destacarán en el sitio.",
        ],
      },
    ],
  },

  terms: {
    title: "Términos de Uso",
    summary: "Las reglas para usar el sitio del Núcleo Polaris. Al navegar por este sitio, usted acepta estos términos.",
    sections: [
      {
        title: "1. Sobre el sitio",
        paragraphs: [
          `Este sitio es mantenido por ${entity.name}, CNPJ ${entity.cnpj}, responsable del Núcleo Polaris. Presenta el Núcleo y las oportunidades de alianza a instituciones educativas.`,
          "El contenido es informativo y no constituye una oferta vinculante. Toda alianza depende de una negociación y de un contrato propio, firmado por las partes.",
        ],
      },
      {
        title: "2. Uso permitido",
        paragraphs: ["Usted se compromete a usar el sitio de forma lícita y de buena fe. No está permitido:"],
        list: [
          "intentar acceder a áreas restringidas, sistemas o datos sin autorización;",
          "enviar información falsa o datos de terceros sin autorización;",
          "extraer el contenido de forma automatizada y abusiva, o sobrecargar la infraestructura del sitio;",
          "introducir código malicioso o interferir en el funcionamiento del sitio;",
          "usar el contenido con fines ilícitos o que vulneren derechos de terceros.",
        ],
      },
      {
        title: "3. Información que usted envía",
        paragraphs: [
          `Al completar el formulario de alianza, usted declara que la información es verdadera y que está autorizado a hablar en nombre de la institución indicada. Estos datos se tratan según nuestra [Política de Privacidad](${paths.privacy}).`,
        ],
      },
      {
        title: "4. Área restringida",
        paragraphs: [
          "El acceso “Entrar” es exclusivo del equipo del Núcleo y de aliados autorizados. Las credenciales son personales e intransferibles. Cada usuario responde por el uso de su propia cuenta.",
        ],
      },
      {
        title: "5. Propiedad intelectual",
        paragraphs: [
          "Los textos, marcas, logotipos, diseño y demás materiales de este sitio pertenecen al Núcleo Polaris y a las empresas del Grupo Nota Máxima, o se usan con autorización de sus titulares. No está permitido reproducirlos, modificarlos ni distribuirlos sin autorización previa y por escrito.",
          "Las marcas de las instituciones aliadas pertenecen a sus respectivos titulares y aparecen solo para identificar las alianzas. Algunas imágenes son ilustrativas. Las fotos de terceros se usan según sus respectivas licencias, con los créditos indicados.",
        ],
      },
      {
        title: "6. Enlaces y servicios de terceros",
        paragraphs: [
          "El sitio contiene enlaces a servicios de terceros, como WhatsApp, Instagram, YouTube y sitios de instituciones aliadas. Esos servicios tienen términos y políticas propios, y no respondemos por su contenido ni por sus prácticas.",
        ],
      },
      {
        title: "7. Información y responsabilidad",
        paragraphs: [
          "Las cifras, aprobaciones, programas y demás información se presentan de buena fe, con base en datos internos y públicos, y pueden cambiar sin aviso. Hacemos lo posible para mantener el sitio disponible y correcto, pero no garantizamos un funcionamiento ininterrumpido o libre de errores.",
          "En la máxima medida permitida por la ley, no respondemos por daños indirectos derivados del uso o de la imposibilidad de uso del sitio.",
        ],
      },
      {
        title: "8. Privacidad y cookies",
        paragraphs: [
          `El uso de datos personales se rige por la [Política de Privacidad](${paths.privacy}) y la [Política de Cookies](${paths.cookies}), que forman parte de estos términos.`,
        ],
      },
      {
        title: "9. Cambios",
        paragraphs: ["Podemos modificar estos términos en cualquier momento. La versión vigente es la publicada en esta página, con la fecha de la última actualización."],
      },
      {
        title: "10. Idioma, ley aplicable y jurisdicción",
        paragraphs: [
          "Estos términos se rigen por la legislación brasileña. Las versiones en inglés y español son traducciones; en caso de divergencia, prevalece la versión en portugués.",
          `Se elige la jurisdicción de ${entity.city}, Brasil, para resolver eventuales controversias, salvo que la ley disponga otra competencia.`,
        ],
      },
      {
        title: "11. Contacto",
        paragraphs: [`Dudas sobre estos términos: ${email}.`],
      },
    ],
  },

  cookies: {
    title: "Política de Cookies",
    summary: "Qué cookies usa este sitio, para qué, por cuánto tiempo y cómo controlar sus preferencias.",
    sections: [
      {
        title: "1. Qué son las cookies",
        paragraphs: [
          "Las cookies son pequeños archivos que un sitio guarda en su navegador para recordar información entre una visita y otra, como el idioma elegido.",
        ],
      },
      {
        title: "2. Categorías",
        table: {
          head: ["Categoría", "Para qué sirve", "Estado"],
          rows: [
            ["Esenciales", "Hacen funcionar el sitio: idioma elegido y registro de sus preferencias de cookies.", "Siempre activas"],
            ["Análisis", "Ayudan a entender cómo se usa el sitio (páginas visitadas, origen de las visitas) para mejorarlo.", "Solo con su consentimiento"],
            ["Marketing", "Miden el resultado de campañas y permiten anuncios más relevantes en otras plataformas.", "Solo con su consentimiento"],
          ],
        },
        after: [
          "Hoy el sitio usa solo cookies esenciales. Si se agregan herramientas de análisis o de marketing, solo se cargarán después de su consentimiento, y esta página se actualizará con las cookies correspondientes.",
        ],
      },
      {
        title: "3. Cookies en uso",
        table: {
          head: ["Nombre", "Tipo", "Finalidad", "Duración"],
          rows: [
            ["ni-lang", "Esencial · propia", "Recuerda el idioma elegido en el selector", "12 meses"],
            ["ni-consent", "Esencial · propia", "Guarda sus preferencias de cookies", "12 meses"],
          ],
        },
      },
      {
        title: "4. Contenido de terceros",
        paragraphs: [
          "Los videos de YouTube o Vimeo solo se cargan cuando usted hace clic en reproducir, en el modo de privacidad mejorada de esos servicios. Al reproducir un video, el proveedor puede usar cookies propias, según su política.",
          "Los enlaces a WhatsApp, Instagram y otros servicios llevan a sitios de terceros, con sus propias políticas de cookies.",
        ],
      },
      {
        title: "5. Cómo gestionarlas",
        paragraphs: [
          "Puede cambiar sus preferencias en cualquier momento con el enlace “Preferencias de cookies”, en el pie de página del sitio. También puede bloquear o borrar cookies en la configuración del navegador; bloquear las esenciales puede afectar el funcionamiento del sitio.",
        ],
      },
      {
        title: "6. Más información",
        paragraphs: [`El tratamiento de datos personales se detalla en la [Política de Privacidad](${paths.privacy}). Dudas: ${email}.`],
      },
    ],
  },
});
