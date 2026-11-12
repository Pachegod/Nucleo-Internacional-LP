import Link from "next/link";
import { CTA, CTA_LINE } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

const VARIANTS = {
  /** Dourado sólido — CTA principal. */
  solid: "bg-accent text-accent-ink hover:brightness-110 min-h-[52px] px-7",
  /** Contorno dourado — CTA secundário sobre fundo escuro. */
  outline: "border border-accent text-accent hover:bg-accent hover:text-accent-ink min-h-11 px-5 text-[11px]",
  /** Sólido escuro — sobre a faixa dourada. */
  dark: "bg-night text-white hover:bg-navy min-h-[52px] px-7",
} as const;

/** Botão de CTA — sempre aponta para o formulário de inscrição (#inscrever). */
export function CtaButton({
  label = CTA.visit,
  variant = "solid",
  arrow = variant !== "outline",
  className = "",
}: {
  label?: string;
  variant?: keyof typeof VARIANTS;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="#inscrever"
      className={`inline-flex items-center justify-center gap-3 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition ${VARIANTS[variant]} ${className}`}
    >
      {label}
      {arrow && <ArrowRightIcon />}
    </Link>
  );
}

/** Faixa dourada de largura total que pontua a rolagem entre as seções. */
export function CtaBand({ line = CTA_LINE, label = CTA.enroll }: { line?: string; label?: string }) {
  return (
    <section aria-label="Matrículas abertas" className="bg-accent text-accent-ink">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-7 sm:px-10 lg:px-14">
        <p className="font-display text-[26px] leading-[1.05] sm:text-[34px]">{line}</p>
        <CtaButton label={label} variant="dark" />
      </div>
    </section>
  );
}
