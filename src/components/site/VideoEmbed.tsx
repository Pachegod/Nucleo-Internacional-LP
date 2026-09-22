"use client";

import { useState } from "react";
import { MediaFrame } from "./MediaFrame";

type Embed = { kind: "iframe" | "video"; src: string };

const PLACEHOLDER = "Still do vídeo institucional (1920×1080)";

/** Still com botão de play; troca pelo embed real só quando clicado (evita carregar o vídeo à toa). */
export function VideoEmbed({ embed }: { embed?: Embed }) {
  const [playing, setPlaying] = useState(false);

  if (!embed) {
    return <MediaFrame placeholder={PLACEHOLDER} ratio="16 / 9" />;
  }

  if (playing) {
    return (
      <div className="relative overflow-hidden border border-line bg-surface" style={{ aspectRatio: "16 / 9" }}>
        {embed.kind === "iframe" ? (
          <iframe
            src={`${embed.src}?autoplay=1`}
            title="Vídeo institucional"
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
    <button type="button" onClick={() => setPlaying(true)} className="relative block w-full text-left">
      <MediaFrame placeholder={PLACEHOLDER} ratio="16 / 9" />
      <span className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 bg-accent px-4.5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
        <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
          <path d="M0 0l10 6-10 6z" fill="currentColor" />
        </svg>
        Play
      </span>
    </button>
  );
}
