/* eslint-disable @next/next/no-img-element -- logo de largura variável (local ou do mini-CMS); altura fixa, largura automática. */

const DEFAULT_LOGO_SRC = "/media/logo-nucleo.webp";

/** Logo horizontal do Núcleo. Se o admin cadastrar um logo no mini-CMS, ele substitui o padrão. */
export function Logo({
  logo,
  alt,
  className = "h-10",
}: {
  logo?: { src: string; alt: string };
  /** Alt padrão no idioma da página (usado quando o logo do CMS não tem alt traduzido). */
  alt: string;
  className?: string;
}) {
  return <img src={logo?.src ?? DEFAULT_LOGO_SRC} alt={logo?.alt || alt} className={`block w-auto ${className}`} />;
}
