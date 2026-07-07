'use client';

import Hexagon from './Hexagon';
import { PILLARS } from '@/lib/diagnostico/data';
import type { DiagnosticResult } from '@/lib/diagnostico/scoring';

interface Props {
  result: DiagnosticResult;
  retoUrl: string;
  onRestart: () => void;
}

export default function Result({ result, retoUrl, onRestart }: Props) {
  const { total, profile, pillars, weakest } = result;

  const handleCtaClick = () => {
    // Evento de conversión (dataLayer si existe, si no console).
    const payload = { event: 'cta_reto_click', profile: profile.name, weakest: weakest.map((w) => w.key) };
    const w = window as unknown as { dataLayer?: unknown[] };
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
    else console.log('[diagnostico]', payload);
  };

  // Pasa las 2 fugas como query para personalizar el copy del Reto.
  const ctaHref = retoUrl
    ? `${retoUrl}${retoUrl.includes('?') ? '&' : '?'}fugas=${weakest.map((w) => w.key).join(',')}`
    : '#';

  return (
    <section className="diag-screen mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6">
      {/* Perfil + puntaje */}
      <p className="diag-eyebrow mb-2">Tu perfil comercial</p>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
          {profile.name}
        </h2>
        <span className="text-sm font-semibold text-[var(--muted)]">
          <span className="text-2xl font-extrabold text-[var(--combat)]">{total}</span> / 150
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">{profile.paragraph}</p>

      {/* Hexágono */}
      <div className="diag-panel mt-8 p-5 sm:p-7">
        <Hexagon pillars={pillars} />
      </div>

      {/* Lista de pilares */}
      <div className="mt-8 space-y-3">
        {pillars.map((p) => (
          <div key={p.key} className="diag-panel px-4 py-3.5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-[var(--text)]">
                <span className="text-[var(--dim)]">{p.code} ·</span> {p.short}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: `${p.color}22`, color: p.color }}
                >
                  {p.zone}
                </span>
                <span className="w-10 text-right text-sm font-bold text-[var(--text)]">{p.score}/25</span>
              </div>
            </div>
            <div className="diag-bar-track">
              <div
                className="diag-bar-fill"
                style={{ width: `${(p.score / 25) * 100}%`, background: p.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fugas prioritarias */}
      <div className="mt-10">
        <h3 className="text-lg font-extrabold uppercase tracking-tight text-[var(--text)]">
          <span className="text-[var(--combat)]">⚠</span> Tus 2 fugas prioritarias
        </h3>
        <div className="mt-4 space-y-4">
          {weakest.map((w) => {
            const data = PILLARS.find((p) => p.key === w.key)!;
            return (
              <div key={w.key} className="diag-panel border-l-2 border-[var(--combat)] p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-bold uppercase tracking-wide text-[var(--text)]">
                    {data.title}
                  </span>
                  <span className="text-xs font-bold" style={{ color: w.color }}>
                    {w.score}/25 · {w.zone}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{data.reading}</p>
                <div className="mt-3 rounded-md bg-[var(--panel-2)] p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--combat)]">
                    Primera acción
                  </p>
                  <p className="mt-1 text-sm leading-snug text-[var(--text)]">{data.action}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA al Reto */}
      <div className="diag-panel mt-10 border border-[var(--combat)]/40 bg-gradient-to-b from-[var(--panel)] to-[var(--panel-2)] p-6 text-center sm:p-8">
        <h3 className="text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl">
          {profile.ctaTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
          {profile.ctaDesc}
        </p>
        <a
          href={ctaHref}
          onClick={handleCtaClick}
          className="diag-cta mt-6 w-full px-8 py-4 text-base sm:w-auto"
        >
          {profile.ctaTitle} →
        </a>
        {profile.secondary && (
          <p className="mx-auto mt-4 max-w-md text-xs leading-snug text-[var(--dim)]">
            {profile.secondary}
          </p>
        )}
      </div>

      {/* Firma + repetir */}
      <div className="mt-10 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--dim)]">
          No vendemos motivación. Construimos vendedores.
        </p>
        <p className="mt-1 text-[11px] italic text-[var(--dim)]">Vender no se improvisa. Se entrena.</p>
        <button onClick={onRestart} className="diag-btn mt-6 px-6 py-2.5 text-sm">
          ↻ Repetir diagnóstico
        </button>
      </div>
    </section>
  );
}
