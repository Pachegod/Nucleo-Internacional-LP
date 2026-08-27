import Image from "next/image";

type Props = {
  /** Caminho em /public, ex. "/media/hero.jpg". Sem src, mostra o placeholder. */
  src?: string;
  alt?: string;
  /** Texto do placeholder — descreva a imagem esperada e o tamanho ideal. */
  placeholder: string;
  /** Proporção do quadro, ex. "16 / 9" ou "3 / 4". */
  ratio?: string;
  /** Altura fixa em px, quando a proporção não serve. */
  height?: number;
  className?: string;
};

/**
 * Quadro de mídia do Núcleo: borda de 1px, canto reto, imagem sempre em P&B.
 * Sem src, renderiza o placeholder rotulado usado nos mocks.
 */
export function MediaFrame({
  src,
  alt = "",
  placeholder,
  ratio,
  height,
  className = "",
}: Props) {
  const style = height ? { height } : { aspectRatio: ratio ?? "16 / 9" };

  return (
    <div
      className={`relative overflow-hidden border border-line bg-surface ${className}`}
      style={style}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center p-4 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
          {placeholder}
        </span>
      )}
    </div>
  );
}
