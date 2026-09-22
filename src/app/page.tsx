import Link from "next/link";
import { SOLUTIONS, PARTNERS, TRAJETORIA, SUMMER_CAMPS, CTA } from "@/lib/content";
import { MediaFrame } from "@/components/site/MediaFrame";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { CtaButton, CtaBand } from "@/components/site/Cta";
import { InscricaoForm } from "@/components/site/InscricaoForm";
import { WhatsappButton } from "@/components/site/WhatsappButton";
import { getLpContent, getImage, getVideo, parseVideoEmbed } from "@/lib/cms";

const PILLARS = [
  {
    title: "Formação Internacional",
    items: [
      "Dupla Diplomação",
      "Certificações",
      "Currículo Internacional",
      "Junior High",
      "High School",
    ],
  },
  {
    title: "Desenvolvimento do Estudante",
    items: ["Planejamento", "Extracurriculares", "Summer Camps", "Mentorias"],
  },
  {
    title: "Universidade Internacional",
    items: ["Admissions", "Essays", "SAT, TOEFL, IELTS", "Applications", "Scholarship"],
  },
];

const PROOF = [
  "Inglês",
  "Competências Globais",
  "Experiências Internacionais",
  "Planejamento",
  "Projeto de Vida",
  "Bolsa de Estudos",
];

const EVENTS = [
  "Parents Meeting",
  "Cerimônia de Abertura",
  "Community Service",
  "Workshops e Encontros Acadêmicos",
  "Cerimônia Anual de Certificação",
];

const VIDEO_PIECES = [
  "Depoimento de família",
  "Tour pelo programa bilíngue",
  "Cerimônia de certificação",
];

const KICKER = "font-mono text-xs uppercase tracking-[0.18em] text-accent";
const SHELL = "mx-auto max-w-[1240px] border-x border-line";

export default async function HomePage() {
  const items = await getLpContent();
  const heroImage = getImage(items, "hero");
  const heroVideoUrl = getVideo(items, "hero-video");
  const heroVideoEmbed = heroVideoUrl ? parseVideoEmbed(heroVideoUrl) : undefined;

  return (
    <>
      {/* Hero — primeiro CTA visível já na abertura (inclusive no mobile) */}
      <section className={`${SHELL} grid border-b-2 border-rule md:grid-cols-[1.15fr_0.85fr]`}>
        <div className="px-6 py-16 sm:px-10 md:border-r-2 md:border-rule md:py-[72px]">
          <p className={`mb-6 ${KICKER}`}>Núcleo de Internacionalização · Colégio COC</p>
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] -tracking-[0.03em] md:text-[58px]">
            Formação global, desde os primeiros anos da vida escolar.
          </h1>
          <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-ink-soft">
            Do Fundamental II ao Ensino Médio, construímos uma trajetória
            internacional real — certificação americana Junior High, dupla
            diplomação Brasil/USA e imersão em inglês desde cedo. Para quem já
            mira o próximo passo, também orientamos a admissão em universidades
            no exterior.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton label={CTA.visit} />
            <Link
              href="#trajetoria"
              className="border-b-2 border-accent pb-0.5 text-sm font-medium text-ink-soft hover:text-ink"
            >
              Conhecer o programa
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
            {PROOF.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-t border-line md:border-t-0">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`flex-1 px-8 py-7 ${i < PILLARS.length - 1 ? "border-b border-line" : ""}`}
            >
              <h3 className="text-[17px] font-semibold">{pillar.title}</h3>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <li key={item} className="border border-line px-2.5 py-1 text-xs text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Imagem de abertura */}
      <section className={`${SHELL} border-b-2 border-rule`}>
        <MediaFrame
          src={heroImage?.src}
          alt={heroImage?.alt}
          placeholder="Imagem de abertura — alunos do Núcleo (paisagem, 2400×900)"
          height={460}
          className="border-0"
        />
        <div className="flex justify-between gap-6 border-t border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:px-10">
          <span>Fig. 01 — Abertura</span>
          <span>Legenda da foto entra aqui</span>
        </div>
      </section>

      {/* Trajetória — Fundamental II ao Ensino Médio */}
      <section id="trajetoria" className={`${SHELL} scroll-mt-24 border-b-2 border-rule px-6 py-[72px] sm:px-10`}>
        <p className={KICKER}>A trajetória</p>
        <h2 className="mt-3.5 max-w-[640px] text-balance text-[32px] font-semibold leading-[1.08] -tracking-[0.02em] md:text-[38px]">
          Um caminho contínuo — do 6º ano ao diploma internacional.
        </h2>
        <p className="mt-4 max-w-[660px] leading-relaxed text-ink-soft">
          A formação internacional não começa no Ensino Médio. Ela é construída
          ano a ano, dentro da rotina do COC, até o aluno chegar à reta final
          com dupla diplomação e — se quiser — candidatura a universidades no
          exterior.
        </p>

        <ol className="mt-12 grid border-t-2 border-rule md:grid-cols-4">
          {TRAJETORIA.map((step, i) => (
            <li
              key={step.phase}
              className={`flex flex-col py-7 md:px-6 ${i === 0 ? "md:pl-0" : ""} ${
                i === TRAJETORIA.length - 1 ? "md:pr-0" : "md:border-r md:border-line"
              } ${i > 0 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <span className="font-mono text-xs tracking-[0.1em] text-accent">0{i + 1}</span>
              <h3 className="mt-3.5 text-[19px] font-semibold leading-tight">{step.phase}</h3>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                {step.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA #2 — início-meio da rolagem */}
      <CtaBand label={CTA.enroll} />

      {/* Soluções */}
      <section id="solucoes" className={`${SHELL} scroll-mt-24 border-b-2 border-rule px-6 py-[72px] sm:px-10`}>
        <p className={KICKER}>Três soluções estratégicas</p>
        <h2 className="mt-3.5 max-w-[620px] text-balance text-[32px] font-semibold leading-[1.08] -tracking-[0.02em] md:text-[38px]">
          Cada aluno tem um caminho — não adivinhamos, calculamos.
        </h2>
        <p className="mt-4 max-w-[660px] leading-relaxed text-ink-soft">
          A partir do perfil acadêmico, do momento escolar e do objetivo da
          família, nossa equipe indica qual das três soluções combina melhor
          com cada aluno.
        </p>

        <div className="mt-12 grid border-t-2 border-rule md:grid-cols-3">
          {(Object.entries(SOLUTIONS) as [keyof typeof SOLUTIONS, (typeof SOLUTIONS)[keyof typeof SOLUTIONS]][]).map(
            ([id, s], i) => (
              <div
                key={id}
                className={`flex flex-col py-7 md:px-7 ${i === 0 ? "md:pl-0" : ""} ${
                  i === 2 ? "md:pr-0" : "md:border-r md:border-line"
                }`}
              >
                <MediaFrame
                  placeholder={`Foto — ${s.name} (1200×750)`}
                  height={150}
                  className="mb-6"
                />
                <span className="font-mono text-xs tracking-[0.1em] text-accent">0{i + 1}</span>
                <h3 className="mt-3.5 text-[21px] font-semibold leading-tight">{s.name}</h3>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
                  {s.shortName}
                </p>
                <p className="mt-4.5 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
                <div className="mt-6 border-t border-line pt-4">
                  <CtaButton label="Consultar valores" variant="ghost" />
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Summer Camps */}
      <section
        id="summer"
        className={`${SHELL} grid scroll-mt-24 border-b-2 border-rule md:grid-cols-[1fr_0.9fr]`}
      >
        <div className="px-6 py-[72px] sm:px-10 md:border-r-2 md:border-rule">
          <p className={KICKER}>{SUMMER_CAMPS.kicker}</p>
          <h2 className="mt-3.5 max-w-[520px] text-balance text-[30px] font-semibold leading-[1.1] -tracking-[0.02em] md:text-[36px]">
            {SUMMER_CAMPS.title}
          </h2>
          <p className="mt-4 max-w-[520px] leading-relaxed text-ink-soft">
            {SUMMER_CAMPS.description}
          </p>
          <ul className="mt-8 border-t border-line">
            {SUMMER_CAMPS.points.map((point, i) => (
              <li
                key={point}
                className="flex gap-4 border-b border-line py-3.5 text-[15px] text-ink-soft"
              >
                <span className="w-6 font-mono text-xs tracking-[0.1em] text-accent">
                  0{i + 1}
                </span>
                {point}
              </li>
            ))}
          </ul>
          <CtaButton label="Quero saber das vagas" className="mt-9" />
        </div>
        <div className="flex flex-col">
          <MediaFrame placeholder="Foto — summer camp no exterior (retrato, 1200×1500)" ratio="4 / 5" className="border-0 flex-1" />
          <div className="border-t border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:px-8">
            Temporada de verão · turmas do Núcleo
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className={`${SHELL} grid border-b-2 border-rule md:grid-cols-[1.5fr_1fr]`}>
        <div className="p-6 sm:p-10 md:border-r-2 md:border-rule">
          <VideoEmbed embed={heroVideoEmbed} />
        </div>
        <div className="border-t border-line p-6 sm:p-10 md:border-t-0">
          <p className={KICKER}>Vídeo</p>
          <h2 className="mt-3.5 text-[28px] font-semibold leading-tight -tracking-[0.02em]">
            O Núcleo em movimento
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {heroVideoEmbed
              ? "Conheça de perto a rotina do Núcleo."
              : "Vídeo institucional cadastrado pelo admin (chave hero-video) aparece aqui."}
          </p>
          <ul className="mt-7 border-t border-line font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
            {VIDEO_PIECES.map((piece) => (
              <li key={piece} className="border-b border-line py-3">
                {piece}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className={`${SHELL} scroll-mt-24 border-b-2 border-rule px-6 py-[72px] sm:px-10`}>
        <p className={KICKER}>Ecossistema de parceiros</p>
        <h2 className="mt-3.5 max-w-[620px] text-balance text-[32px] font-semibold leading-[1.08] -tracking-[0.02em] md:text-[38px]">
          Cada estudante conectado ao parceiro certo para o seu destino.
        </h2>

        <div className="mt-11 grid border-t-2 border-rule md:grid-cols-2">
          {(Object.entries(PARTNERS) as [keyof typeof PARTNERS, (typeof PARTNERS)[keyof typeof PARTNERS]][]).map(
            ([id, p], i) => (
              <div
                key={id}
                className={`py-7 ${i === 0 ? "md:border-r md:border-line md:pr-8" : "md:pl-8"}`}
              >
                <MediaFrame
                  placeholder={`Logo ${p.name}`}
                  height={72}
                  className="mb-6 w-[200px]"
                />
                <h3 className="text-[22px] font-semibold">{p.name}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {p.focus}
                </p>
                <p className="mt-4.5 text-sm leading-relaxed text-ink-soft">{p.brands}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Citação */}
      <section
        id="cases"
        className={`${SHELL} scroll-mt-24 border-b-2 border-rule bg-accent px-6 py-[72px] text-accent-ink sm:px-10`}
      >
        <p className="max-w-[900px] text-balance text-[28px] font-medium leading-[1.18] -tracking-[0.02em] md:text-[34px]">
          &ldquo;Educação não transforma o mundo. Educação muda as pessoas.
          Pessoas transformam o mundo.&rdquo;
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] opacity-75">
          — Anísio Teixeira
        </p>
      </section>

      {/* Agenda */}
      <section className={`${SHELL} border-b-2 border-rule px-6 py-[72px] sm:px-10`}>
        <p className={KICKER}>Agenda</p>
        <h2 className="mt-3.5 text-[26px] font-semibold -tracking-[0.01em]">Próximos eventos</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <ul className="border-t border-line">
            {EVENTS.map((e, i) => (
              <li
                key={e}
                className="flex gap-5 border-b border-line py-3.5 text-[15px] text-ink-soft"
              >
                <span className="w-6 font-mono text-xs tracking-[0.1em] text-ink-faint">
                  0{i + 1}
                </span>
                {e}
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Registros dos eventos
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <MediaFrame key={n} placeholder="Foto do evento (retrato)" ratio="3 / 4" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fechamento + inscrição — terceiro CTA, no texto final (não no rodapé) */}
      <section id="inscrever" className={`${SHELL} scroll-mt-24 border-b-2 border-rule px-6 py-[72px] sm:px-10`}>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="md:border-r-2 md:border-rule md:pr-10">
            <p className={KICKER}>Próximo passo</p>
            <h2 className="mt-3.5 text-balance text-[30px] font-semibold leading-[1.1] -tracking-[0.02em] md:text-[36px]">
              Comece a trajetória internacional deste aluno.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Deixe seus dados e o time do Núcleo retoma o contato pelo
              WhatsApp para agendar uma visita, tirar dúvidas sobre a dupla
              diplomação e os summer camps, e mostrar qual solução combina com
              o momento escolar do aluno.
            </p>
            <div className="mt-8 border-t border-line pt-6">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                Prefere falar agora?
              </p>
              <WhatsappButton label={CTA.whatsapp} />
            </div>
          </div>
          <div className="md:pl-2">
            <InscricaoForm />
          </div>
        </div>
      </section>
    </>
  );
}
