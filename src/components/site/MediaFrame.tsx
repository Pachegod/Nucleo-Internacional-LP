import Image from "next/image";

type Props = {
  /** Caminho em /public (ex. "/media/abertura.jpg") ou URL do mini-CMS. */
  src: string;
  alt: string;
  /** Proporção do quadro, ex. "16 / 9" ou "3 / 4". */
  ratio?: string;
  /** Altura fixa (qualquer valor CSS), quando a proporção não serve. */
  height?: string;
  /** Ponto focal da foto (object-position). */
  focus?: string;
  /** Tamanhos para o srcset do next/image. */
  sizes?: string;
  preload?: boolean;
  className?: string;
  imgClassName?: string;
};

/** Quadro de foto do Núcleo: recorte por proporção (ou altura fixa), foto colorida em object-cover. */
export function MediaFrame({
  src,
  alt,
  ratio = "16 / 9",
  height,
  focus = "center",
  sizes = "(max-width: 768px) 100vw, 50vw",
  preload = false,
  className = "",
  imgClassName = "",
}: Props) {
  const style = height ? { height } : { aspectRatio: ratio };

  return (
    <div className={`relative overflow-hidden bg-night ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${imgClassName}`}
        style={{ objectPosition: focus }}
      />
    </div>
  );
}
