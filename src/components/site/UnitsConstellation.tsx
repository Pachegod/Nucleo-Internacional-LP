import { COC_SC_UNITS } from "@/lib/content";

// Mapa estilizado (não é um mapa geográfico fiel): as unidades viram uma
// constelação ligada por um traço — mesma linguagem visual da estrela
// Polaris do hero. Posições em COC_SC_UNITS (content.ts).
const W = 520;
const H = 270;

// Ordem do traço: interior → litoral.
const PATH_ORDER = ["Lages", "Rio do Sul", "Blumenau", "Itajaí", "Balneário Camboriú", "Porto Belo"];

export function UnitsConstellation({ title, caption }: { title: string; caption: string }) {
  const ordered = PATH_ORDER.map((c) => COC_SC_UNITS.find((u) => u.city === c)).filter(
    (u): u is (typeof COC_SC_UNITS)[number] => !!u
  );

  return (
    <figure className="rounded-[20px] bg-deep p-4 sm:p-6">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} className="h-auto w-full">
        <title>{title}</title>
        <polyline
          points={ordered.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="text-sand/35"
        />
        {COC_SC_UNITS.map((p) => {
          const anchor = p.label === "right" ? "start" : "middle";
          const dx = p.label === "right" ? 16 : 0;
          const dy = p.label === "top" ? -18 : p.label === "bottom" ? 28 : 5;
          return (
            <g key={p.city}>
              <circle cx={p.x} cy={p.y} r="14" className="fill-accent/15" />
              <circle cx={p.x} cy={p.y} r="4.5" className="fill-accent" />
              <text
                x={p.x + dx}
                y={p.y + dy}
                textAnchor={anchor}
                className="fill-sand/90 text-[14px] font-semibold uppercase tracking-[0.06em]"
              >
                {p.city}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand/55">
        {caption}
      </figcaption>
    </figure>
  );
}
