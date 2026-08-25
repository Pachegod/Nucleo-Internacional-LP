import Link from "next/link";
import { ADMIN_URL, FORM_URL } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg text-ink">Núcleo Internacional</p>
            <p className="mt-1 max-w-xs text-sm text-ink-soft">
              Formação global, dupla diplomação e consultoria de admissão
              internacional — Colégio COC Santa Catarina.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Núcleo
              </span>
              <Link href="#solucoes" className="text-ink-soft hover:text-ink">
                Soluções
              </Link>
              <Link href="#parceiros" className="text-ink-soft hover:text-ink">
                Parceiros
              </Link>
              <a href={FORM_URL} className="text-ink-soft hover:text-ink">
                Descobrir meu perfil
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Time
              </span>
              <a href={ADMIN_URL} className="text-ink-soft hover:text-ink">
                Painel interno
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 font-mono text-[11px] text-ink-faint">
          Protótipo de apresentação — dados de demonstração.
        </p>
      </div>
    </footer>
  );
}
