import Image from "next/image";
import Link from "next/link";
import {
  SOLUTIONS,
  PARTNERS,
  PARTNER_NETWORK,
  TRAJETORIA,
  SUMMER_CAMPS,
  INSTAGRAM_POSTS,
  CTA,
} from "@/lib/content";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/config";
import { MediaFrame } from "@/components/site/MediaFrame";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { CtaButton, CtaBand } from "@/components/site/Cta";
import { InscricaoForm } from "@/components/site/InscricaoForm";
import { WhatsappButton } from "@/components/site/WhatsappButton";
import { InstagramIcon } from "@/components/site/icons";
import { getLpContent, getImage, getVideo, parseVideoEmbed } from "@/lib/cms";

const PILLARS = [
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

const VIDEO_PIECES = ["Depoimento de família", "Tour pelo programa bilíngue", "Cerimônia de certificação"];

const ABERTURA = { src: "/media/abertura.jpg", alt: "Estudantes saindo pelo portão de um campus universitário" };

// Classes compartilhadas
const WRAP = "mx-auto max-w-[1240px] px-5 sm:px-10 lg:px-14";
const SECTION_Y = "py-16 sm:py-24 lg:py-28";
const KICKER = "text-[11px] font-bold uppercase tracking-[0.2em]";
const H2 = "font-display text-[44px] leading-[0.95] sm:text-[56px] lg:text-[68px]";
const LEAD = "text-base leading-[1.75]";
const NUM = "font-display leading-none";

export default async function HomePage() {
  const items = await getLpContent();
  const aberturaImage = getImage(items, "hero") ?? ABERTURA;
  const heroVideoUrl = getVideo(items, "hero-video");
  const heroVideoEmbed = heroVideoUrl ? parseVideoEmbed(heroVideoUrl) : undefined;

  return (
    <>
      {/* Hero — Polaris: o mundo e a estrela que guia */}
      <section
        id="topo"
        className="relative overflow-hidden bg-deep"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 80% 70%, rgba(35,50,100,0.55), rgba(5,7,13,0) 70%)",
        }}
      >
        <div className={`${WRAP} grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]`}>
          <div className="pb-12 pt-14 sm:pb-20 sm:pt-20 lg:pt-24">
            <p
              className={`mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/35 px-3.5 py-2 ${KICKER} text-accent`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Núcleo de Internacionalização · Colégio COC
            </p>
            <h1 className="font-display text-[56px] leading-[0.92] text-white sm:text-[80px] lg:text-[104px]">
              Formação global,
              <br />
              <span className="text-accent">desde os primeiros anos</span>
              <br />
              da vida escolar.
            </h1>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.7] text-sand/75">
              Do Fundamental II ao Ensino Médio, construímos uma trajetória internacional real — certificação
              americana Junior High, dupla diplomação Brasil/USA e imersão em inglês desde cedo. Para quem já mira
              o próximo passo, também orientamos a admissão em universidades no exterior.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton label={CTA.visit} />
              <Link
                href="#trajetoria"
                className="border-b-2 border-accent py-2 text-sm font-semibold text-white hover:text-accent"
              >
                Conhecer o programa
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-sand/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/60">
              {PROOF.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center pb-10 md:min-h-[520px] md:items-center md:py-6">
            <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "335 / 597" }}>
              <Image
                src="/media/hero-globo.jpg"
                alt="O planeta Terra no espaço, com a estrela Polaris brilhando acima"
                fill
                preload
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
                style={{
                  maskImage: "radial-gradient(ellipse 70% 62% at 50% 48%, #000 62%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 62% at 50% 48%, #000 62%, transparent 100%)",
                }}
              />
              {/* Brilho animado sobre a estrela da imagem */}
              <span
                aria-hidden="true"
                className="polaris-star pointer-events-none absolute h-[150px] w-[150px]"
                style={{
                  left: "50.1%",
                  top: "11.9%",
                  background:
                    "radial-gradient(circle, #fff 0 3px, rgba(228,237,255,0.7) 4px, rgba(157,187,255,0.18) 32px, transparent 60px), linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.85) 50%, transparent 85%) center / 100% 1px no-repeat, linear-gradient(0deg, transparent 22%, rgba(255,255,255,0.85) 50%, transparent 78%) center / 1px 100% no-repeat",
                }}
              />
              <p
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.32em] text-[#dce8ff]/60"
                style={{ top: "calc(11.9% + 52px)" }}
              >
                Polaris · a estrela que guia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section aria-label="Pilares do programa" className="border-y border-sand/10 bg-night">
        <div className={`${WRAP} grid md:grid-cols-3`}>
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`py-9 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === PILLARS.length - 1 ? "md:pr-0" : "md:border-r md:border-sand/10"} ${i > 0 ? "border-t border-sand/10 md:border-t-0" : ""}`}
            >
              <p className={`${KICKER} text-accent`}>0{i + 1}</p>
              <h3 className="mb-4 mt-2.5 font-display text-[28px] tracking-[0.02em] text-white">{pillar.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <li key={item} className="rounded-full border border-sand/15 px-3 py-1.5 text-xs text-sand/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Imagem de abertura */}
      <figure className="bg-night">
        <MediaFrame
          src={aberturaImage.src}
          alt={aberturaImage.alt}
          height="clamp(280px, 38vw, 540px)"
          focus="center 55%"
          sizes="100vw"
        />
        <figcaption
          className={`${WRAP} flex flex-wrap justify-between gap-x-6 gap-y-2 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand/55`}
        >
          <span>Fig. 01 — Abertura</span>
          <span>O próximo passo começa dentro da escola</span>
        </figcaption>
      </figure>

      {/* Trajetória — Fundamental II ao Ensino Médio */}
      <section id="trajetoria" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <div className="grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent-deep`}>A trajetória</p>
              <h2 className={`mt-3.5 ${H2}`}>Um caminho contínuo — do 6º ano ao diploma internacional.</h2>
              <p className={`mt-5 max-w-[560px] ${LEAD} text-night/70`}>
                A formação internacional não começa no Ensino Médio. Ela é construída ano a ano, dentro da rotina do
                COC, até o aluno chegar à reta final com dupla diplomação e — se quiser — candidatura a
                universidades no exterior.
              </p>
            </div>
            <MediaFrame
              src="/media/trajetoria.jpg"
              alt="Formandos jogando os capelos para o alto"
              ratio="2 / 1"
              focus="center 30%"
              className="rounded-[20px]"
            />
          </div>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRAJETORIA.map((step, i) => {
              const last = i === TRAJETORIA.length - 1;
              return (
                <li
                  key={step.phase}
                  className={`rounded-[18px] px-6 pb-8 pt-7 ${last ? "bg-navy text-white" : "border border-night/10 bg-white"}`}
                >
                  <span className={`${NUM} block text-[44px] ${last ? "text-accent" : "text-accent-deep"}`}>
                    0{i + 1}
                  </span>
                  <h3 className={`mt-4 text-lg font-bold ${last ? "text-white" : "text-navy"}`}>{step.phase}</h3>
                  <p
                    className={`mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${last ? "text-white/65" : "text-night/55"}`}
                  >
                    {step.label}
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${last ? "text-white/80" : "text-night/70"}`}>
                    {step.detail}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CTA #2 — início-meio da rolagem */}
      <CtaBand label={CTA.enroll} />

      {/* Soluções */}
      <section id="solucoes" className="scroll-mt-20 bg-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <p className={`${KICKER} text-accent`}>Três soluções estratégicas</p>
          <h2 className={`mt-3.5 max-w-[760px] ${H2} text-white`}>
            Cada aluno tem um caminho — não adivinhamos, calculamos.
          </h2>
          <p className={`mt-5 max-w-[620px] ${LEAD} text-sand/70`}>
            A partir do perfil acadêmico, do momento escolar e do objetivo da família, nossa equipe indica qual das
            três soluções combina melhor com cada aluno.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {Object.entries(SOLUTIONS).map(([id, s], i) => (
              <article
                key={id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-sand/10 bg-white/[0.04]"
              >
                <MediaFrame
                  src={s.image.src}
                  alt={s.image.alt}
                  focus={s.image.focus}
                  ratio="16 / 10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <span className={`${NUM} text-4xl text-accent`}>0{i + 1}</span>
                  <h3 className="mt-3.5 text-xl font-bold leading-tight text-white">{s.name}</h3>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/55">
                    {s.shortName}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-sand/75">{s.tagline}</p>
                  <CtaButton label="Consultar valores" variant="outline" className="mt-6 self-start" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Camps */}
      <section id="summer" className="scroll-mt-20 bg-navy">
        <div className={`${WRAP} ${SECTION_Y} grid items-center gap-12 md:grid-cols-2`}>
          <div>
            <p className={`${KICKER} text-accent`}>{SUMMER_CAMPS.kicker}</p>
            <h2 className={`mt-3.5 ${H2} text-white`}>{SUMMER_CAMPS.title}</h2>
            <p className={`mt-5 max-w-[520px] ${LEAD} text-white/75`}>{SUMMER_CAMPS.description}</p>
            <ul className="mt-8 border-t border-white/15">
              {SUMMER_CAMPS.points.map((point, i) => (
                <li key={point} className="flex gap-4 border-b border-white/15 py-4 text-[15px] text-white/85">
                  <span className="w-6 shrink-0 text-xs font-bold text-accent">0{i + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
            <CtaButton label="Quero saber das vagas" className="mt-9" />
          </div>
          <figure className="grid grid-cols-2 gap-3.5">
            <MediaFrame
              src="/media/summer-01.jpg"
              alt="Grupo de estudantes tirando uma selfie em uma rua de cidade americana"
              ratio="16 / 10"
              className="col-span-2 rounded-[20px]"
            />
            <MediaFrame
              src="/media/summer-02.jpg"
              alt="Estudantes conversando na escadaria de um campus"
              ratio="4 / 3"
              focus="center 60%"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-2xl"
            />
            <MediaFrame
              src="/media/summer-03.jpg"
              alt="Grupo de adolescentes reunidos no gramado de um campus"
              ratio="4 / 3"
              focus="center 55%"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-2xl"
            />
            <figcaption className="col-span-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              Temporada de verão · turmas do Núcleo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Vídeo */}
      <section aria-labelledby="video-titulo" className="bg-night">
        <div className={`${WRAP} ${SECTION_Y} grid items-center gap-10 md:grid-cols-[1.5fr_1fr]`}>
          <VideoEmbed embed={heroVideoEmbed} />
          <div>
            <p className={`${KICKER} text-accent`}>Vídeo</p>
            <h2 id="video-titulo" className="mt-3.5 font-display text-[44px] leading-[0.95] text-white sm:text-[56px]">
              O Núcleo em movimento
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-sand/70">Conheça de perto a rotina do Núcleo.</p>
            <ul className="mt-7 border-t border-sand/10 text-xs font-semibold uppercase tracking-[0.14em] text-sand/60">
              {VIDEO_PIECES.map((piece) => (
                <li key={piece} className="border-b border-sand/10 py-3.5">
                  {piece}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <p className={`${KICKER} text-accent-deep`}>Ecossistema de parceiros</p>
          <h2 className={`mt-3.5 max-w-[760px] ${H2}`}>
            Cada estudante conectado ao parceiro certo para o seu destino.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {Object.entries(PARTNERS).map(([id, p]) => (
              <article
                key={id}
                className="flex flex-wrap items-center gap-x-7 gap-y-6 rounded-[20px] border border-night/10 bg-white p-8"
              >
                <div className="relative h-24 w-[180px] shrink-0">
                  <Image src={p.logo.src} alt={p.logo.alt} fill sizes="180px" className="object-contain" />
                </div>
                <div className="min-w-0 flex-[1_1_200px]">
                  <h3 className="text-[22px] font-bold text-navy">{p.name}</h3>
                  <p className={`mt-2 ${KICKER} tracking-[0.14em] text-accent-deep`}>{p.focus}</p>
                  <p className="mt-3 text-sm leading-relaxed text-night/70">{p.brands}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-11 border-t border-night/10 pt-7">
            <p className={`mb-5 ${KICKER} text-night/55`}>Também na rede</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PARTNER_NETWORK.map((logo) => (
                <li key={logo.src} className="relative h-24 rounded-[14px] border border-night/10 bg-white">
                  <Image src={logo.src} alt={logo.alt} fill sizes="200px" className="object-contain p-3.5" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Citação */}
      <section
        id="cases"
        aria-label="Citação"
        className="scroll-mt-20 bg-navy"
        style={{
          backgroundImage: "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(194,160,104,0.18), rgba(35,50,100,0) 60%)",
        }}
      >
        <div className={`${WRAP} py-16 sm:py-24`}>
          <svg aria-hidden="true" width="48" height="40" viewBox="0 0 48 40" className="fill-accent">
            <path d="M0 40V22C0 9 7 1.5 20 0l2 5c-7 2-10 6-10.5 12H20v23H0Zm26 0V22C26 9 33 1.5 46 0l2 5c-7 2-10 6-10.5 12H46v23H26Z" />
          </svg>
          <blockquote className="mt-6 max-w-[960px] font-display text-[40px] leading-[0.98] text-white sm:text-[56px] lg:text-[72px]">
            Educação não transforma o mundo. Educação muda as pessoas.{" "}
            <span className="text-accent">Pessoas transformam o mundo.</span>
          </blockquote>
          <p className={`mt-7 ${KICKER} text-white/70`}>— Anísio Teixeira</p>
        </div>
      </section>

      {/* Agenda + Instagram */}
      <section id="agenda" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y} grid gap-12 md:grid-cols-2`}>
          <div>
            <p className={`${KICKER} text-accent-deep`}>Agenda</p>
            <h2 className={`mt-3.5 ${H2}`}>Próximos eventos</h2>
            <ul className="mt-8 border-t border-night/10">
              {EVENTS.map((e, i) => (
                <li key={e} className="flex gap-5 border-b border-night/10 py-4 font-medium text-navy">
                  <span className="w-7 shrink-0 text-xs font-bold text-accent-deep">0{i + 1}</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`mb-4 ${KICKER} text-night/55`}>Últimos no Instagram · @{INSTAGRAM_HANDLE}</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
              {INSTAGRAM_POSTS.map((post) => (
                <a
                  key={post.image.src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2.5 text-navy"
                >
                  <MediaFrame
                    src={post.image.src}
                    alt={post.image.alt}
                    ratio="4 / 5"
                    sizes="(max-width: 640px) 33vw, 200px"
                    className="rounded-[14px] border border-night/10 transition group-hover:border-accent-deep"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent-deep sm:text-[11px]">{post.tag}</span>
                  <span className="text-xs font-semibold leading-snug group-hover:underline sm:text-sm">{post.title}</span>
                </a>
              ))}
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <InstagramIcon />
              Seguir @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* Fechamento + inscrição — terceiro CTA, no texto final (não no rodapé) */}
      <section
        id="inscrever"
        className="scroll-mt-20 bg-night"
        style={{
          backgroundImage: "radial-gradient(ellipse 50% 70% at 0% 100%, rgba(35,50,100,0.6), rgba(10,14,26,0) 70%)",
        }}
      >
        <div className={`${WRAP} ${SECTION_Y} grid gap-12 md:grid-cols-[0.85fr_1.15fr]`}>
          <div>
            <p className={`${KICKER} text-accent`}>Próximo passo</p>
            <h2 className={`mt-3.5 ${H2} text-white`}>Comece a trajetória internacional deste aluno.</h2>
            <p className={`mt-5 max-w-[480px] ${LEAD} text-sand/70`}>
              Deixe seus dados e o time do Núcleo retoma o contato pelo WhatsApp para agendar uma visita, tirar
              dúvidas sobre a dupla diplomação e os summer camps, e mostrar qual solução combina com o momento
              escolar do aluno.
            </p>
            <div className="mt-9 border-t border-sand/10 pt-6">
              <p className={`mb-3.5 ${KICKER} tracking-[0.16em] text-sand/55`}>Prefere falar agora?</p>
              <WhatsappButton label={CTA.whatsapp} />
            </div>
          </div>
          <InscricaoForm />
        </div>
      </section>
    </>
  );
}
