import Link from "next/link";
import { SOLUTIONS, PARTNERS } from "@/lib/content";
import { MediaFrame } from "@/components/site/MediaFrame";

const PILLARS = [
  {
    title: "Formação Internacional",
    items: ["Dupla Diplomação", "Certificações", "Currículo Internacional"],
  },
  {
    title: "Desenvolvimento do Estudante",
    items: ["Planejamento", "Extracurriculares", "Summer Programs", "Mentorias"],
  },
  {
    title: "Universidade Internacional",
    items: ["Admissions", "Essays", "SAT, TOEFL, IELTS", "Applications"],
  },
];

const PROOF = ["Inglês", "Competências Globais", "Experiências Internacionais", "Planejamento", "Projeto de Vida"];

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={`${SHELL} grid border-b-2 border-rule md:grid-cols-[1.15fr_0.85fr]`}>
        <div className="px-6 py-16 sm:px-10 md:border-r-2 md:border-rule md:py-[72px]">
          <p className={`mb-6 ${KICKER}`}>Núcleo de Internacionalização · Colégio COC</p>
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] -tracking-[0.03em] md:text-[58px]">
            Formação global, desde os primeiros anos da vida escolar.
          </h1>
          <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-ink-soft">
            Do Fundamental II ao Ensino Médio, construímos uma trajetória
            internacional real — dupla diplomação e imersão em inglês desde
            cedo. Para quem já mira o próximo passo, também orientamos a
            admissão em universidades no exterior.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#solucoes"
              className="bg-accent px-[26px] py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-deep"
            >
              Ver as soluções
            </Link>
            <Link
              href="#parceiros"
              className="border-b-2 border-accent pb-0.5 text-sm font-medium text-ink-soft hover:text-ink"
            >
              Conhecer os parceiros
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
          placeholder="Imagem de abertura — alunos do Núcleo (paisagem, 2400×900)"
          height={460}
          className="border-0"
        />
        <div className="flex justify-between gap-6 border-t border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:px-10">
          <span>Fig. 01 — Abertura</span>
          <span>Legenda da foto entra aqui</span>
        </div>
      </section>

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
                <p className="mt-6 border-t border-line pt-3.5 text-xs text-ink-faint">
                  {s.investment}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Vídeo */}
      <section className={`${SHELL} grid border-b-2 border-rule md:grid-cols-[1.5fr_1fr]`}>
        <div className="p-6 sm:p-10 md:border-r-2 md:border-rule">
          <div className="relative">
            <MediaFrame placeholder="Still do vídeo institucional (1920×1080)" ratio="16 / 9" />
            <span className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 bg-accent px-4.5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
              <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
                <path d="M0 0l10 6-10 6z" fill="currentColor" />
              </svg>
              Play
            </span>
          </div>
        </div>
        <div className="border-t border-line p-6 sm:p-10 md:border-t-0">
          <p className={KICKER}>Vídeo</p>
          <h2 className="mt-3.5 text-[28px] font-semibold leading-tight -tracking-[0.02em]">
            O Núcleo em movimento
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Espaço reservado para o vídeo institucional. Substitua o still pelo
            embed (YouTube, Vimeo ou arquivo) na implementação.
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
    </>
  );
}
