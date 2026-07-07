'use client';

import { useState } from 'react';
import { SCALE, type Pillar } from '@/lib/diagnostico/data';

interface Props {
  pillar: Pillar;
  values: number[];               // 5 valores (0 = sin responder)
  onChange: (itemIndex: number, value: number) => void;
  onBack: () => void;
  onNext: () => void;
  isLast: boolean;
}

export default function PillarScreen({ pillar, values, onChange, onBack, onNext, isLast }: Props) {
  const [showWarning, setShowWarning] = useState(false);
  const answered = values.filter((v) => v > 0).length;
  const complete = answered === 5;
  const progress = Math.round(((pillar.n - 1) / 6) * 100);

  const handleNext = () => {
    if (!complete) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    onNext();
  };

  return (
    <section className="diag-screen mx-auto max-w-2xl px-4 pb-28 pt-6 sm:px-6">
      {/* Progreso */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>
            Pilar {pillar.n} de 6 · {pillar.code}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="diag-bar-track">
          <div
            className="diag-bar-fill bg-[var(--combat)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Título del pilar */}
      <p className="diag-eyebrow mb-2">Pilar {pillar.n}</p>
      <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
        {pillar.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{pillar.sub}</p>

      {/* Afirmaciones */}
      <div className="mt-8 space-y-4">
        {pillar.items.map((item, i) => (
          <fieldset key={i} className="diag-panel p-4 sm:p-5">
            <legend className="sr-only">Afirmación {i + 1}</legend>
            <p className="mb-4 flex gap-2.5 text-[15px] leading-snug text-[var(--text)]">
              <span aria-hidden className="font-bold text-[var(--dim)]">
                {String((pillar.n - 1) * 5 + i + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </p>
            <div className="diag-scale" role="group" aria-label={`Respuesta del ítem ${i + 1}, escala 1 a 5`}>
              {SCALE.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  className="diag-scale-btn"
                  aria-pressed={values[i] === s.value}
                  aria-label={`${s.value}: ${s.label}`}
                  onClick={() => {
                    onChange(i, s.value);
                    setShowWarning(false);
                  }}
                >
                  {s.value}
                </button>
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] uppercase tracking-wider text-[var(--dim)]">
              <span>{SCALE[0].label}</span>
              <span className="hidden sm:inline">{SCALE[4].label}</span>
            </div>
          </fieldset>
        ))}
      </div>

      {/* Aviso */}
      {showWarning && (
        <p className="mt-5 text-sm font-semibold text-[#E0A62A]">
          Responde las 5 afirmaciones para avanzar.
        </p>
      )}

      {/* Navegación */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} className="diag-btn px-6 py-3 text-sm">
          ← Atrás
        </button>
        <span className="text-xs text-[var(--dim)]">{answered}/5 respondidas</span>
        <button type="button" onClick={handleNext} className="diag-cta px-6 py-3 text-sm">
          {isLast ? 'Ver mi resultado →' : 'Siguiente →'}
        </button>
      </div>
    </section>
  );
}
