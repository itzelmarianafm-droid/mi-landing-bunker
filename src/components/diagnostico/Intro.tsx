'use client';

import { SCALE } from '@/lib/diagnostico/data';

const BENEFITS = [
  ['Tu perfil comercial real', ': en qué nivel estás operando hoy, sin adornos.'],
  ['Tus 6 pilares calificados', ': dónde tienes base y dónde se está fugando tu operación.'],
  ['Tus 2 fugas prioritarias', ', cada una con tu primera acción concreta para corregirla.'],
  ['Tu siguiente paso claro', ': qué entrenar primero para dejar de depender de tus ganas.'],
];

const RULES = [
  'Responde como operaste las últimas 2 a 4 semanas, no como te gustaría operar.',
  'Si dudas entre dos números, elige el más bajo.',
  'La honestidad aquí vale más que la buena imagen.',
];

export default function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="diag-screen mx-auto max-w-2xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <p className="diag-eyebrow mb-4">Para el vendedor independiente que vive de su comisión</p>

      <h1 className="text-3xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-4xl md:text-[2.75rem]">
        ¿Por qué le echas tantas ganas y los resultados de{' '}
        <span className="text-[var(--combat)]">cierre de ventas</span> no llegan?
      </h1>

      <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
        Contactas, publicas, das seguimiento… y tu ingreso sigue dependiendo de tu ánimo.{' '}
        <strong className="font-bold text-[var(--text)]">
          No es falta de talento: es falta de estructura.
        </strong>{' '}
        En 4 minutos, este diagnóstico te muestra en cuál de tus 6 pilares comerciales se está
        fugando tu operación —mentalidad, comunicación, proceso, contenido, herramientas y
        actividad— y qué entrenar primero.
      </p>

      {/* Beneficios */}
      <div className="diag-panel mt-8 p-5 sm:p-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text)]">
          Cuando termines, tendrás:
        </h2>
        <ul className="mt-4 space-y-3">
          {BENEFITS.map(([strong, rest]) => (
            <li key={strong} className="flex gap-3 text-[15px] leading-snug text-[var(--muted)]">
              <span aria-hidden className="mt-0.5 font-bold text-[var(--combat)]">
                →
              </span>
              <span>
                <strong className="font-bold text-[var(--text)]">{strong}</strong>
                {rest}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reglas */}
      <div className="mt-6 border-l-2 border-[var(--combat)] pl-4">
        <ul className="space-y-2">
          {RULES.map((r) => (
            <li key={r} className="text-sm leading-snug text-[var(--muted)]">
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Escala */}
      <div className="mt-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--dim)]">
          Escala 1–5
        </p>
        <div className="flex flex-wrap gap-2">
          {SCALE.map((s) => (
            <span key={s.value} className="diag-chip">
              <strong className="text-[var(--text)]">{s.value}</strong> {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-9">
        <button onClick={onStart} className="diag-cta w-full px-8 py-4 text-base sm:w-auto">
          Iniciar diagnóstico gratis →
        </button>
        <p className="mt-3 text-xs tracking-wide text-[var(--dim)]">
          ≈ 4 minutos · 30 afirmaciones
        </p>
      </div>

      <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--dim)]">
        No vendemos motivación. Construimos vendedores.
      </p>
    </section>
  );
}
