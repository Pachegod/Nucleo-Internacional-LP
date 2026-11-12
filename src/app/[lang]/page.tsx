import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS, PARTNERS, PARTNER_NETWORK, INSTAGRAM_POSTS, ABOUT_STATS, COC_SC_UNITS, INTERNATIONAL_APPROVALS } from "@/lib/content";
import { UnitsConstellation } from "@/components/site/UnitsConstellation";
import { CityCarousel } from "@/components/site/CityCarousel";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/config";
import { MediaFrame } from "@/components/site/MediaFrame";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { CtaButton, CtaBand } from "@/components/site/Cta";
import { InscricaoForm } from "@/components/site/InscricaoForm";
import { WhatsappButton } from "@/components/site/WhatsappButton";
import { InstagramIcon } from "@/components/site/icons";
import { getLpContent, getImage, getVideo, parseVideoEmbed } from "@/lib/cms";
import { getDictionary, hasLocale } from "@/lib/i18n";

// Classes compartilhadas
const WRAP = "mx-auto max-w-[1240px] px-5 sm:px-10 lg:px-14";
const SECTION_Y = "py-16 sm:py-24 lg:py-28";
const KICKER = "text-[11px] font-bold uppercase tracking-[0.2em]";
const H2 = "font-display text-[44px] leading-[0.95] sm:text-[56px] lg:text-[68px]";
const LEAD = "text-base leading-[1.75]";
const NUM = "font-display leading-none";

/** Grade de números da seção "Quem somos"; `null` aparece como "—" destacado (dado a confirmar). */
function StatGrid({
  values,
  labels,
  pending,
  dark = false,
}: {
  values: (string | null)[];
  labels: string[];
  pending: string;
  dark?: boolean;
}) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-night/10 bg-night/10">
      {labels.map((label, i) => {
        const value = values[i];
        return (
          <div key={label} className={`px-5 py-6 ${dark ? "bg-navy" : "bg-white"}`}>
            <dt
              className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-night/55"}`}
            >
              {label}
            </dt>
            <dd
              title={value ? undefined : pending}
              className={`${NUM} mt-2 text-[48px] ${value ? (dark ? "text-accent" : "text-accent-deep") : "text-night/25"}`}
            >
              {value ?? "—"}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  const items = await getLpContent();
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
              {t.hero.kicker}
            </p>
            <h1 className="font-display text-[56px] leading-[0.92] text-white sm:text-[80px] lg:text-[104px]">
              {t.hero.titleA}
              <br />
              <span className="text-accent">{t.hero.titleAccent}</span>
              <br />
              {t.hero.titleB}
            </h1>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.7] text-sand/75">
              {t.hero.lead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton label={t.cta.visit} />
              <Link
                href="#trajetoria"
                className="border-b-2 border-accent py-2 text-sm font-semibold text-white hover:text-accent"
              >
                {t.hero.secondary}
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-sand/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/60">
              {t.hero.proof.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center pb-10 md:min-h-[520px] md:items-center md:py-6">
            <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "335 / 597" }}>
              <Image
                src="/media/hero-globo.jpg"
                alt={t.hero.globeAlt}
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
                {t.hero.polaris}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section aria-label={t.pillars.label} className="border-y border-sand/10 bg-night">
        <div className={`${WRAP} grid md:grid-cols-3`}>
          {t.pillars.items.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`py-9 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === t.pillars.items.length - 1 ? "md:pr-0" : "md:border-r md:border-sand/10"} ${i > 0 ? "border-t border-sand/10 md:border-t-0" : ""}`}
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

      {/* Quem somos — de cima para baixo: COC Nacional → COC SC → Núcleo Polaris → Counseling */}
      <section id="quem-somos" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <p className={`${KICKER} text-accent-deep`}>{t.about.kicker}</p>
          <h2 className={`mt-3.5 max-w-[820px] ${H2}`}>{t.about.title}</h2>
          <p className={`mt-5 max-w-[640px] ${LEAD} text-night/70`}>{t.about.lead}</p>

          {/* 01 · COC Nacional */}
          <div className="mt-14 grid items-start gap-8 border-t border-night/10 pt-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent-deep`}>{t.about.national.tag}</p>
              <h3 className="mt-3 font-display text-[34px] leading-none text-navy sm:text-[40px]">
                {t.about.national.title}
              </h3>
              <p className={`mt-4 max-w-[520px] ${LEAD} text-night/70`}>{t.about.national.text}</p>
            </div>
            <StatGrid values={t.about.national.values} labels={t.about.national.stats} pending={t.about.pending} />
          </div>

          {/* 02 · COC Santa Catarina */}
          <div className="mt-12 grid items-start gap-8 border-t border-night/10 pt-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent-deep`}>{t.about.regional.tag}</p>
              <h3 className="mt-3 font-display text-[34px] leading-none text-navy sm:text-[40px]">
                {t.about.regional.title}
              </h3>
              <p className={`mt-4 max-w-[520px] ${LEAD} text-night/70`}>{t.about.regional.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {COC_SC_UNITS.map((u) => (
                  <li
                    key={u.city}
                    className="rounded-full border border-night/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy"
                  >
                    COC {u.city}
                    {u.units > 1 && (
                      <span className="ml-1.5 text-accent-deep">· {u.units} {t.about.regional.unitsSuffix}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StatGrid values={ABOUT_STATS.regional} labels={t.about.regional.stats} pending={t.about.pending} />
              </div>
            </div>
            <UnitsConstellation title={t.about.regional.mapTitle} caption={t.about.regional.mapCaption} />
          </div>

          {/* Linha do tempo do grupo em SC */}
          <div className="mt-10">
            <p className={`${KICKER} text-night/55`}>{t.about.regional.timelineTitle}</p>
            <ol className="mt-5 grid gap-px overflow-hidden rounded-[18px] border border-night/10 bg-night/10 sm:grid-cols-3 lg:grid-cols-4">
              {t.about.regional.timeline.map((step) => (
                <li key={step.year} className="bg-white px-5 py-5">
                  <p className={`${NUM} text-[32px] text-accent-deep`}>{step.year}</p>
                  <p className="mt-1.5 text-sm leading-snug text-night/75">{step.text}</p>
                </li>
              ))}
              {/* 12ª célula: fecha a grade (3 e 4 colunas) e aponta para os próximos passos */}
              <li className="flex items-end bg-navy px-5 py-5">
                <p className={`${KICKER} flex items-center gap-2 text-accent`}>
                  {t.about.regional.expansion.kicker}
                  <span aria-hidden="true" className="text-base">↓</span>
                </p>
              </li>
            </ol>
          </div>

          {/* Próximos passos — expansão da rede */}
          <div
            className="relative mt-6 overflow-hidden rounded-[20px] bg-deep p-7 text-white sm:p-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 55% 90% at 100% 0%, rgba(194,160,104,0.22), rgba(5,7,13,0) 65%)",
            }}
          >
            <p className={`${KICKER} text-accent`}>{t.about.regional.expansion.kicker}</p>
            <h4 className="mt-3 max-w-[720px] font-display text-[40px] leading-[0.95] sm:text-[56px]">
              {t.about.regional.expansion.title}
            </h4>
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-sand/70">
              {t.about.regional.expansion.lead}
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {t.about.regional.expansion.items.map((item, i) => (
                <li key={item.name} className="rounded-2xl border border-accent/30 bg-white/[0.04] p-6">
                  <span className={`${NUM} text-[44px] text-accent`}>0{i + 1}</span>
                  <h5 className="mt-3 text-xl font-bold leading-tight">{item.name}</h5>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/55">
                    {item.place}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-sand/80">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 03 · Núcleo Polaris */}
          <div className="mt-12 grid items-start gap-8 border-t border-night/10 pt-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent-deep`}>{t.about.nucleo.tag}</p>
              <h3 className="mt-3 font-display text-[34px] leading-none text-navy sm:text-[40px]">
                {t.about.nucleo.title}
              </h3>
              <p className={`mt-4 max-w-[560px] ${LEAD} text-night/70`}>{t.about.nucleo.text}</p>
              <p className="mt-6 max-w-[560px] border-l-2 border-accent-deep pl-4 text-sm leading-relaxed text-night/75">
                {t.about.nucleo.partnerNote}
              </p>
            </div>
            <div>
              <p className={`${KICKER} text-night/55`}>{t.about.nucleo.frontsTitle}</p>
              <ul className="mt-4 grid gap-3">
                {t.about.nucleo.fronts.map((front, i) => (
                  <li key={front.name} className="rounded-[18px] border border-night/10 bg-white p-6">
                    <span className={`${NUM} text-[36px] text-accent-deep`}>0{i + 1}</span>
                    <h4 className="mt-2 text-lg font-bold text-navy">{front.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-night/70">{front.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 04 · Counseling */}
          <div className="mt-12 grid gap-8 rounded-[20px] bg-navy p-7 text-white sm:p-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent`}>{t.about.counseling.tag}</p>
              <h3 className="mt-3 font-display text-[34px] leading-none sm:text-[40px]">
                {t.about.counseling.title}
              </h3>
              <p className={`mt-4 ${LEAD} text-white/75`}>{t.about.counseling.text}</p>
            </div>
            <ul className="border-t border-white/15">
              {t.about.counseling.items.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-white/15 py-3.5 text-[15px] text-white/85">
                  <span className="w-6 shrink-0 text-xs font-bold text-accent">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/15 pt-6 md:col-span-2">
              <p className={`${KICKER} text-accent`}>{t.about.counseling.approvalsTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {INTERNATIONAL_APPROVALS.map((u) => (
                  <li key={u} className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/85">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Abertura — carrossel com as cidades das unidades (pontos turísticos e paisagens) */}
      <CityCarousel
        slides={COC_SC_UNITS.map((u) => {
          const fallbackAlt = `${u.landmark} — ${u.city}, Santa Catarina`;
          const cms = getImage(items, `cidade-${u.slug}`, lang, fallbackAlt);
          return {
            city: u.city,
            landmark: u.landmark,
            unitsLabel: u.units > 1 ? `${u.units} ${t.about.regional.unitsSuffix}` : "",
            image: cms ?? (u.photo ? { src: u.photo, alt: fallbackAlt } : undefined),
            // Crédito só vale para a foto local; foto do CMS é responsabilidade de quem subiu.
            credit: cms ? undefined : u.credit,
          };
        })}
        labels={{ ...t.abertura }}
      />

      {/* Como funciona — etapas da parceria (âncora #trajetoria mantida) */}
      <section id="trajetoria" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <div className="grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className={`${KICKER} text-accent-deep`}>{t.trajetoria.kicker}</p>
              <h2 className={`mt-3.5 ${H2}`}>{t.trajetoria.title}</h2>
              <p className={`mt-5 max-w-[560px] ${LEAD} text-night/70`}>
                {t.trajetoria.lead}
              </p>
            </div>
            <MediaFrame
              src="/media/trajetoria.jpg"
              alt={t.trajetoria.imageAlt}
              ratio="2 / 1"
              focus="center 30%"
              className="rounded-[20px]"
            />
          </div>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.trajetoria.steps.map((step, i) => {
              const last = i === t.trajetoria.steps.length - 1;
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
      <CtaBand line={t.cta.line} label={t.cta.enroll} ariaLabel={t.cta.bandLabel} />

      {/* Frentes de parceria */}
      <section id="solucoes" className="scroll-mt-20 bg-night">
        <div className={`${WRAP} ${SECTION_Y}`}>
          <p className={`${KICKER} text-accent`}>{t.solutions.kicker}</p>
          <h2 className={`mt-3.5 max-w-[760px] ${H2} text-white`}>
            {t.solutions.title}
          </h2>
          <p className={`mt-5 max-w-[620px] ${LEAD} text-sand/70`}>
            {t.solutions.lead}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {Object.entries(SOLUTIONS).map(([id, s], i) => {
              const copy = t.solutions.items[id as keyof typeof SOLUTIONS];
              return (
              <article
                key={id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-sand/10 bg-white/[0.04]"
              >
                <MediaFrame
                  src={s.image.src}
                  alt={copy.alt}
                  focus={s.image.focus}
                  ratio="16 / 10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <span className={`${NUM} text-4xl text-accent`}>0{i + 1}</span>
                  <h3 className="mt-3.5 text-xl font-bold leading-tight text-white">{copy.name}</h3>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand/55">
                    {s.shortName}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-sand/75">{copy.tagline}</p>
                  <CtaButton label={t.cta.pricing} variant="outline" className="mt-6 self-start" />
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programas de curta duração (summer) */}
      <section id="summer" className="scroll-mt-20 bg-navy">
        <div className={`${WRAP} ${SECTION_Y} grid items-center gap-12 md:grid-cols-2`}>
          <div>
            <p className={`${KICKER} text-accent`}>{t.summer.kicker}</p>
            <h2 className={`mt-3.5 ${H2} text-white`}>{t.summer.title}</h2>
            <p className={`mt-5 max-w-[520px] ${LEAD} text-white/75`}>{t.summer.description}</p>
            <ul className="mt-8 border-t border-white/15">
              {t.summer.points.map((point, i) => (
                <li key={point} className="flex gap-4 border-b border-white/15 py-4 text-[15px] text-white/85">
                  <span className="w-6 shrink-0 text-xs font-bold text-accent">0{i + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
            <CtaButton label={t.cta.summerSpots} className="mt-9" />
          </div>
          <figure className="grid grid-cols-2 gap-3.5">
            <MediaFrame
              src="/media/summer-01.jpg"
              alt={t.summer.images[0]}
              ratio="16 / 10"
              className="col-span-2 rounded-[20px]"
            />
            <MediaFrame
              src="/media/summer-02.jpg"
              alt={t.summer.images[1]}
              ratio="4 / 3"
              focus="center 60%"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-2xl"
            />
            <MediaFrame
              src="/media/summer-03.jpg"
              alt={t.summer.images[2]}
              ratio="4 / 3"
              focus="center 55%"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-2xl"
            />
            <figcaption className="col-span-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              {t.summer.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Vídeo */}
      <section aria-labelledby="video-titulo" className="bg-night">
        <div className={`${WRAP} ${SECTION_Y} grid items-center gap-10 md:grid-cols-[1.5fr_1fr]`}>
          <VideoEmbed embed={heroVideoEmbed} t={t.video} />
          <div>
            <p className={`${KICKER} text-accent`}>{t.video.kicker}</p>
            <h2 id="video-titulo" className="mt-3.5 font-display text-[44px] leading-[0.95] text-white sm:text-[56px]">
              {t.video.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-sand/70">{t.video.lead}</p>
            <ul className="mt-7 border-t border-sand/10 text-xs font-semibold uppercase tracking-[0.14em] text-sand/60">
              {t.video.pieces.map((piece) => (
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
          <p className={`${KICKER} text-accent-deep`}>{t.partners.kicker}</p>
          <h2 className={`mt-3.5 max-w-[760px] ${H2}`}>
            {t.partners.title}
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {Object.entries(PARTNERS).map(([id, p]) => {
              const copy = t.partners.items[id as keyof typeof PARTNERS];
              return (
              <article
                key={id}
                className="flex flex-wrap items-center gap-x-7 gap-y-6 rounded-[20px] border border-night/10 bg-white p-8"
              >
                <div className="relative h-24 w-[180px] shrink-0">
                  <Image src={p.logo.src} alt={copy.alt} fill sizes="180px" className="object-contain" />
                </div>
                <div className="min-w-0 flex-[1_1_200px]">
                  <h3 className="text-[22px] font-bold text-navy">{p.name}</h3>
                  <p className={`mt-2 ${KICKER} tracking-[0.14em] text-accent-deep`}>{copy.focus}</p>
                  <p className="mt-3 text-sm leading-relaxed text-night/70">{copy.brands}</p>
                </div>
              </article>
              );
            })}
          </div>

          <div className="mt-11 border-t border-night/10 pt-7">
            <p className={`mb-5 ${KICKER} text-night/55`}>{t.partners.network}</p>
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
        aria-label={t.quote.label}
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
            {t.quote.text}{" "}
            <span className="text-accent">{t.quote.accent}</span>
          </blockquote>
          <p className={`mt-7 ${KICKER} text-white/70`}>{t.quote.author}</p>
        </div>
      </section>

      {/* Agenda + Instagram */}
      <section id="agenda" className="scroll-mt-20 bg-cream text-night">
        <div className={`${WRAP} ${SECTION_Y} grid gap-12 md:grid-cols-2`}>
          <div>
            <p className={`${KICKER} text-accent-deep`}>{t.agenda.kicker}</p>
            <h2 className={`mt-3.5 ${H2}`}>{t.agenda.title}</h2>
            <ul className="mt-8 border-t border-night/10">
              {t.agenda.events.map((e, i) => (
                <li key={e} className="flex gap-5 border-b border-night/10 py-4 font-medium text-navy">
                  <span className="w-7 shrink-0 text-xs font-bold text-accent-deep">0{i + 1}</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`mb-4 ${KICKER} text-night/55`}>{t.agenda.instagramLatest} · @{INSTAGRAM_HANDLE}</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
              {INSTAGRAM_POSTS.map((post, i) => (
                <a
                  key={post.image.src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2.5 text-navy"
                >
                  <MediaFrame
                    src={post.image.src}
                    alt={t.agenda.posts[i].alt}
                    ratio="4 / 5"
                    sizes="(max-width: 640px) 33vw, 200px"
                    className="rounded-[14px] border border-night/10 transition group-hover:border-accent-deep"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent-deep sm:text-[11px]">{t.agenda.posts[i].tag}</span>
                  <span className="text-xs font-semibold leading-snug group-hover:underline sm:text-sm">{t.agenda.posts[i].title}</span>
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
              {t.agenda.follow} @{INSTAGRAM_HANDLE}
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
            <p className={`${KICKER} text-accent`}>{t.inscricao.kicker}</p>
            <h2 className={`mt-3.5 ${H2} text-white`}>{t.inscricao.title}</h2>
            <p className={`mt-5 max-w-[480px] ${LEAD} text-sand/70`}>
              {t.inscricao.lead}
            </p>
            <div className="mt-9 border-t border-sand/10 pt-6">
              <p className={`mb-3.5 ${KICKER} tracking-[0.16em] text-sand/55`}>{t.inscricao.talkNow}</p>
              <WhatsappButton label={t.cta.whatsapp} message={t.whatsappMessage} />
            </div>
          </div>
          <InscricaoForm lang={lang} t={t.form} message={t.whatsappMessage} />
        </div>
      </section>
    </>
  );
}
