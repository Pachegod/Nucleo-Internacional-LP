"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type CitySlide = {
  city: string;
  /** Ponto turístico ou paisagem natural retratada no slide. */
  landmark: string;
  /** Ex.: "4 unidades" — vazio quando a cidade tem uma unidade só. */
  unitsLabel: string;
  /** Foto do mini-CMS (chave cidade-<slug>). Sem foto, o slide usa a arte Polaris. */
  image?: { src: string; alt: string };
  /** Atribuição exigida pela licença da foto. */
  credit?: { author: string; license: string; url: string };
};

type Labels = {
  carouselLabel: string;
  prev: string;
  next: string;
  goTo: string;
  pause: string;
  play: string;
  figLabel: string;
  caption: string;
  photoBy: string;
};

const INTERVAL_MS = 5000;

/**
 * Carrossel de abertura com uma cidade por slide. Avança sozinho (exceto com
 * prefers-reduced-motion), pausa no hover/foco e tem setas, pontos e botão
 * de pausa acessíveis.
 */
export function CityCarousel({ slides, labels }: { slides: CitySlide[]; labels: Labels }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, hovered, count, go]);

    return (
    <figure
      className="bg-night"
      aria-roledescription="carousel"
      aria-label={labels.carouselLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: "clamp(300px, 38vw, 540px)" }}>
        {slides.map((slide, i) => (
          <div
            key={slide.city}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${count} · ${slide.city}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            {slide.image ? (
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                sizes="100vw"
                preload={i === 0}
                className="object-cover"
              />
            ) : (
              <PolarisArt seed={i} />
            )}
            {/* Véu para o nome da cidade ficar legível sobre qualquer foto */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,7,13,0.25) 0%, rgba(5,7,13,0) 28%, rgba(5,7,13,0.35) 55%, rgba(5,7,13,0.92) 100%), linear-gradient(90deg, rgba(5,7,13,0.55) 0%, rgba(5,7,13,0) 55%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1240px] px-5 pb-8 sm:px-10 sm:pb-10 lg:px-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                COC{slide.unitsLabel ? ` · ${slide.unitsLabel}` : ""}
              </p>
              <p className="mt-2 font-display text-[52px] leading-[0.9] text-white sm:text-[80px] lg:text-[96px]">
                {slide.city}
              </p>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">{slide.landmark}</p>
            </div>
            {slide.image && slide.credit && (
              <a
                href={slide.credit.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={i === index ? 0 : -1}
                className="absolute bottom-2 right-3 text-[10px] text-white/55 hover:text-white sm:right-5"
              >
                {labels.photoBy} {slide.credit.author} · {slide.credit.license}
              </a>
            )}
          </div>
        ))}

        {count > 1 && (
          <div className="absolute right-5 top-5 flex gap-2 sm:right-10 lg:right-14">
            <CarouselButton label={labels.prev} onClick={() => go(index - 1)}>
              <path d="M10 3L5 8l5 5" />
            </CarouselButton>
            <CarouselButton label={paused ? labels.play : labels.pause} onClick={() => setPaused((p) => !p)}>
              {paused ? <path d="M5 3l8 5-8 5z" /> : <path d="M5 3v10M11 3v10" />}
            </CarouselButton>
            <CarouselButton label={labels.next} onClick={() => go(index + 1)}>
              <path d="M6 3l5 5-5 5" />
            </CarouselButton>
          </div>
        )}
      </div>

      <figcaption className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand/55 sm:px-10 lg:px-14">
        <span>{labels.figLabel}</span>
        <span className="flex items-center gap-2" aria-label={labels.carouselLabel}>
          {slides.map((slide, i) => (
            <button
              key={slide.city}
              type="button"
              onClick={() => go(i)}
              aria-label={`${labels.goTo} ${slide.city}`}
              aria-current={i === index}
              className="flex h-6 items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all ${i === index ? "w-7 bg-accent" : "w-3 bg-sand/30 hover:bg-sand/60"}`}
              />
            </button>
          ))}
        </span>
        <span>{labels.caption}</span>
      </figcaption>
    </figure>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-deep/50 text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}

/** Arte de reserva enquanto a cidade não tem foto no mini-CMS: céu noturno com a estrela Polaris. */
function PolarisArt({ seed }: { seed: number }) {
  // Varia a posição do brilho por slide para os fundos não ficarem idênticos.
  const x = 55 + ((seed * 17) % 35);
  const y = 18 + ((seed * 11) % 25);
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-deep"
      style={{
        backgroundImage: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.9) 0 2px, rgba(157,187,255,0.25) 3px, rgba(5,7,13,0) 90px), radial-gradient(ellipse 70% 70% at ${x}% 100%, rgba(35,50,100,0.6), rgba(5,7,13,0) 70%), radial-gradient(ellipse 50% 60% at 0% 0%, rgba(194,160,104,0.16), rgba(5,7,13,0) 70%)`,
      }}
    />
  );
}
