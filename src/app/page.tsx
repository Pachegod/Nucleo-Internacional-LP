import Link from "next/link";
import { SOLUTIONS, PARTNERS } from "@/lib/content";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
              Núcleo de Internacionalização · Colégio COC
            </p>
            <h1 className="text-balance font-display text-[2.75rem] leading-[1.05] text-ink md:text-6xl">
              Formação global, desde os primeiros anos da vida escolar.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-soft">
              Do Fundamental II ao Ensino Médio, construímos uma trajetória
              internacional real — dupla diplomação e imersão em inglês desde
              cedo. Para quem já mira o próximo passo, também orientamos a
              admissão em universidades no exterior.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#solucoes"
                className="rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-navy-ink transition hover:opacity-90"
              >
                Ver as soluções
              </Link>
              <Link
                href="#parceiros"
                className="text-sm font-medium text-ink-soft underline decoration-line-strong underline-offset-4 hover:text-ink"
              >
                Conhecer os parceiros
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
              {PROOF.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-sm text-ink-soft">
                  <span className="text-teal">✔</span> {p}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(23,31,48,0.04)]"
              >
                <h3 className="font-display text-lg text-ink">{pillar.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-tag-bg px-3 py-1 text-xs text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal">
            Três soluções estratégicas
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl text-ink md:text-4xl">
            Cada aluno tem um caminho — não adivinhamos, calculamos.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            A partir do perfil acadêmico, do momento escolar e do objetivo da
            família, nossa equipe indica qual das três soluções combina
            melhor com cada aluno.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {(Object.entries(SOLUTIONS) as [keyof typeof SOLUTIONS, (typeof SOLUTIONS)[keyof typeof SOLUTIONS]][]).map(
              ([id, s], i) => (
                <div
                  key={id}
                  className="flex flex-col rounded-2xl border border-line bg-surface p-7"
                >
                  <span className="font-mono text-xs text-ink-faint">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">{s.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-teal">
                    {s.shortName}
                  </p>
                  <p className="mt-4 text-sm text-ink-soft">{s.tagline}</p>
                  <p className="mt-5 border-t border-line pt-4 text-xs text-ink-faint">
                    {s.investment}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal">
            Ecossistema de parceiros
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl text-ink md:text-4xl">
            Cada estudante conectado ao parceiro certo para o seu destino.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {(Object.entries(PARTNERS) as [keyof typeof PARTNERS, (typeof PARTNERS)[keyof typeof PARTNERS]][]).map(
              ([id, p]) => (
                <div key={id} className="rounded-2xl border border-line bg-surface p-7">
                  <h3 className="font-display text-xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-gold">{p.focus}</p>
                  <p className="mt-4 text-sm text-ink-soft">{p.brands}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Cases / prova social */}
      <section id="cases" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-balance font-display text-2xl leading-snug text-ink md:text-3xl">
            &ldquo;Educação não transforma o mundo. Educação muda as pessoas.
            Pessoas transformam o mundo.&rdquo;
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
            — Anísio Teixeira
          </p>
        </div>
      </section>

      {/* Eventos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal">
          Agenda
        </p>
        <h2 className="mt-3 font-display text-2xl text-ink">Próximos eventos</h2>
        <ul className="mt-5 flex flex-col gap-2 text-sm text-ink-soft">
          {EVENTS.map((e) => (
            <li key={e} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-ink-faint" /> {e}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
