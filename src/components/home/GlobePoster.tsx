import type { MapPoint } from "@/components/map/types";

/**
 * Server-rendered orthographic globe: the hero's static poster and its
 * no-JS / no-WebGL / reduced-motion / mobile fallback. Every visible
 * discovery is a real, crawlable link — the 3D globe is an enhancement
 * painted over this, never a replacement for it.
 */

const R = 264; // globe radius in viewBox units
const CX = 320;
const CY = 320;
const VIEW_LNG = -30; // center the Atlantic so both hemispheres show points
const DEG = Math.PI / 180;

function project(lat: number, lng: number) {
  const phi = lat * DEG;
  const lam = (lng - VIEW_LNG) * DEG;
  const x = Math.cos(phi) * Math.sin(lam);
  const y = Math.sin(phi);
  const z = Math.cos(phi) * Math.cos(lam);
  return { sx: CX + x * R, sy: CY - y * R, z };
}

/** Evenly distributed background dots that read as the sphere's surface. */
function surfaceDots(count: number) {
  const dots: Array<{ sx: number; sy: number; z: number }> = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    if (z <= 0.02) continue; // back hemisphere
    dots.push({ sx: CX + x * R, sy: CY - y * R, z });
  }
  return dots;
}

export function GlobePoster({ points }: { points: MapPoint[] }) {
  const dots = surfaceDots(560);
  const front = points
    .map((p) => ({ p, pos: project(p.lat, p.lng) }))
    .filter(({ pos }) => pos.z > 0.05);

  return (
    <svg
      viewBox="0 0 640 640"
      role="img"
      aria-label={`Globe of ${points.length} discovery locations; visible points link to their entries`}
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="globe-sphere" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#16264a" />
          <stop offset="55%" stopColor="#0d1b34" />
          <stop offset="100%" stopColor="#060d1e" />
        </radialGradient>
        <radialGradient id="globe-halo" cx="50%" cy="50%" r="50%">
          <stop offset="72%" stopColor="rgba(56,225,255,0)" />
          <stop offset="88%" stopColor="rgba(56,225,255,0.14)" />
          <stop offset="100%" stopColor="rgba(56,225,255,0)" />
        </radialGradient>
        <clipPath id="globe-clip">
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>
      </defs>

      {/* atmosphere halo */}
      <circle cx={CX} cy={CY} r={R * 1.18} fill="url(#globe-halo)" />
      {/* sphere */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="url(#globe-sphere)"
        stroke="rgba(56,225,255,0.25)"
        strokeWidth="1"
      />

      {/* graticule */}
      <g
        clipPath="url(#globe-clip)"
        fill="none"
        stroke="rgba(148,196,232,0.12)"
        strokeWidth="1"
      >
        {[-60, -30, 0, 30, 60].map((lat) => {
          const y = CY - R * Math.sin(lat * DEG);
          const half = R * Math.cos(lat * DEG);
          return <line key={`p${lat}`} x1={CX - half} y1={y} x2={CX + half} y2={y} />;
        })}
        {[30, 60, 90, 120, 150].map((offset) => (
          <ellipse
            key={`m${offset}`}
            cx={CX}
            cy={CY}
            rx={Math.abs(R * Math.sin(offset * DEG))}
            ry={R}
          />
        ))}
      </g>

      {/* surface texture dots */}
      <g fill="#9ac4e4">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.sx.toFixed(1)}
            cy={d.sy.toFixed(1)}
            r={1.4}
            opacity={(0.06 + d.z * 0.2).toFixed(2)}
          />
        ))}
      </g>

      {/* discovery points — real links, crawlable without any JS */}
      <g>
        {front.map(({ p, pos }) => (
          <a key={p.slug} href={`/discoveries/${p.slug}`}>
            <title>{`${p.title} (${p.year})`}</title>
            <circle
              cx={pos.sx.toFixed(1)}
              cy={pos.sy.toFixed(1)}
              r={8}
              fill="transparent"
            />
            <circle
              cx={pos.sx.toFixed(1)}
              cy={pos.sy.toFixed(1)}
              r={3.4}
              fill={p.color}
              opacity={0.35}
            />
            <circle
              cx={pos.sx.toFixed(1)}
              cy={pos.sy.toFixed(1)}
              r={1.9}
              fill={p.color}
            />
          </a>
        ))}
      </g>
    </svg>
  );
}
