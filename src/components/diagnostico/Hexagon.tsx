'use client';

import type { PillarResult } from '@/lib/diagnostico/scoring';

const MAX = 25; // puntaje máximo por pilar

export default function Hexagon({ pillars }: { pillars: PillarResult[] }) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const R = 108; // radio máximo del radar

  // Ángulo de cada eje: arranca arriba (-90°) y gira 60° por pilar.
  const angleFor = (i: number) => (-90 + i * 60) * (Math.PI / 180);
  const pointAt = (i: number, radius: number) => ({
    x: cx + radius * Math.cos(angleFor(i)),
    y: cy + radius * Math.sin(angleFor(i)),
  });

  // Rejilla: anillos a 5/10/15/20/25.
  const rings = [0.2, 0.4, 0.6, 0.8, 1];
  const ringPoints = (frac: number) =>
    pillars
      .map((_, i) => {
        const p = pointAt(i, R * frac);
        return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      })
      .join(' ');

  // Polígono de datos.
  const dataPoints = pillars
    .map((p, i) => {
      const pt = pointAt(i, R * (p.score / MAX));
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto h-auto w-full max-w-[300px]"
      role="img"
      aria-label="Hexágono de los 6 pilares"
    >
      {/* Anillos de rejilla */}
      {rings.map((frac) => (
        <polygon
          key={frac}
          points={ringPoints(frac)}
          fill="none"
          stroke="rgba(245,243,238,0.10)"
          strokeWidth={1}
        />
      ))}

      {/* Ejes */}
      {pillars.map((_, i) => {
        const end = pointAt(i, R);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="rgba(245,243,238,0.10)"
            strokeWidth={1}
          />
        );
      })}

      {/* Área de datos */}
      <polygon
        points={dataPoints}
        fill="rgba(242,92,31,0.22)"
        stroke="#F25C1F"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* Vértices coloreados por zona + etiquetas P1..P6 */}
      {pillars.map((p, i) => {
        const vertex = pointAt(i, R * (p.score / MAX));
        const label = pointAt(i, R + 22);
        return (
          <g key={p.key}>
            <circle cx={vertex.x} cy={vertex.y} r={5} fill={p.color} stroke="#0B0B0B" strokeWidth={1.5} />
            <text
              x={label.x}
              y={label.y}
              fill="#B0ABA2"
              fontSize={12}
              fontWeight={700}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {p.code}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
