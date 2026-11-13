"use client";

import { useState } from "react";
import { MediaFrame } from "./MediaFrame";
import { PlayIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/pt";

type Embed = { kind: "iframe" | "video"; src: string };

const POSTER_SRC = "/media/video-poster.jpg";

/** Capa com botão de play; troca pelo embed real só quando clicado (evita carregar o vídeo à toa). */
export function VideoEmbed({ embed, t }: { embed?: Embed; t: Dictionary["video"] }) {
  const [playing, setPlaying] = useState(false);

  if (embed && playing) {
    return (
      <div className="relative overflow-hidden rounded-[22px] border border-sand/10 bg-deep" style={{ aspectRatio: "16 / 9" }}>
        {embed.kind === "iframe" ? (
          <iframe
            src={`${embed.src}${embed.src.includes("?") ? "&" : "?"}autoplay=1`}
            title={t.iframeTitle}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={embed.src} controls autoPlay className="h-full w-full object-cover" />
        )}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-sand/10">
      <MediaFrame src={POSTER_SRC} alt={t.posterAlt} ratio="16 / 9" sizes="(max-width: 768px) 100vw, 60vw" imgClassName="brightness-[0.7]" />
      {embed && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={t.play}
          className="absolute left-1/2 top-1/2 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_0_0_10px_var(--accent-soft)] transition hover:scale-105"
        >
          <PlayIcon />
        </button>
      )}
    </div>
  );
}
