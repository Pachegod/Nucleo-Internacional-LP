import Link from "next/link";
import { ADMIN_URL } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1240px] border-x border-line px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold">Núcleo Internacional</p>
          <p className="mt-2 max-w-[330px] text-sm leading-relaxed text-ink-soft">
            Formação global, dupla diplomação e consultoria de admissão
            internacional — Colégio COC Santa Catarina.
          </p>
        </div>
        <div className="flex gap-14 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Núcleo
            </span>
            <Link href="#solucoes" className="text-ink-soft hover:text-accent">
              Soluções
            </Link>
            <Link href="#parceiros" className="text-ink-soft hover:text-accent">
              Parceiros
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Time
            </span>
            <a href={ADMIN_URL} className="text-ink-soft hover:text-accent">
              Painel interno
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 font-mono text-[11px] tracking-[0.08em] text-ink-faint">
        Protótipo de apresentação — dados de demonstração.
      </p>
    </footer>
  );
}
