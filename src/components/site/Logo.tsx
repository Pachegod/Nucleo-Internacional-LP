/* eslint-disable @next/next/no-img-element -- logo de largura variável (local ou do mini-CMS); altura fixa, largura automática. */

const DEFAULT_LOGO = { src: "/media/logo-nucleo.webp", alt: "Núcleo de Internacionalização" };

/** Logo horizontal do Núcleo. Se o admin cadastrar um logo no mini-CMS, ele substitui o padrão. */
export function Logo({
  logo,
  className = "h-10",
}: {
  logo?: { src: string; alt: string };
  className?: string;
}) {
  const { src, alt } = logo ?? DEFAULT_LOGO;
  return <img src={src} alt={alt || DEFAULT_LOGO.alt} className={`block w-auto ${className}`} />;
}
