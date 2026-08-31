import Link from "next/link";
import { CTA, CTA_LINE } from "@/lib/content";

const SHELL = "mx-auto max-w-[1240px] border-x border-line";

/** Botão de CTA — sempre aponta para o formulário de inscrição (#inscrever). */
export function CtaButton({
  label = CTA.visit,
  variant = "solid",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-accent px-[26px] py-3.5 text-accent-ink hover:bg-accent-deep"
      : "border-b-2 border-accent pb-0.5 font-medium text-ink-soft hover:text-ink";

  return (
    <Link href="#inscrever" className={`${base} ${styles} ${className}`}>
      {label}
    </Link>
  );
}

/**
 * Faixa de CTA de largura total, para pontuar a rolagem entre as seções.
 * Usada no início-meio e reforçada perto do fim da página.
 */
export function CtaBand({
  line = CTA_LINE,
  label = CTA.enroll,
}: {
  line?: string;
  label?: string;
}) {
  return (
    <section className={`${SHELL} border-b-2 border-rule bg-accent-tint`}>
      <div className="flex flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="max-w-[620px] text-[19px] font-medium leading-snug -tracking-[0.01em] text-ink">
          {line}
        </p>
        <CtaButton label={label} className="shrink-0 self-start sm:self-auto" />
      </div>
    </section>
  );
}
