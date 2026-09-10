'use client';

import { useEffect, useState } from 'react';
import { TIERS, getActiveTier } from '@/lib/workshop/pricing';

export default function PriceTiers({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const t = getActiveTier(Date.now());
    setActiveId(t ? t.id : null);
  }, []);

  return (
    <div className={compact ? 'w-full' : 'mx-auto w-full max-w-xl'}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--dim)]">
        El precio sube por lotes
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {TIERS.map((t) => {
          const isActive = activeId === t.id;
          const isPast =
            activeId !== undefined &&
            activeId !== null &&
            TIERS.findIndex((x) => x.id === activeId) > TIERS.findIndex((x) => x.id === t.id);
          const closed = activeId === null;

          return (
            <div
              key={t.id}
              className="rounded-lg border p-3 text-center transition-colors"
              style={{
                borderColor: isActive ? 'var(--combat)' : 'var(--line)',
                background: isActive ? 'rgba(242,92,31,0.10)' : 'var(--panel-2)',
                opacity: isPast || (closed && true) ? 0.45 : 1,
              }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-xl font-black"
                  style={{ color: isActive ? 'var(--combat)' : 'var(--text)' }}
                >
                  ${t.price}
                </span>
                <span className="text-[11px] text-[var(--muted)]">USD</span>
              </div>
              <p className="mt-1 text-[10px] leading-tight text-[var(--muted)]">{t.label}</p>
              {isActive && (
                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[var(--combat)]">
                  Precio actual
                </p>
              )}
              {isPast && (
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[var(--dim)]">
                  Agotado
                </p>
              )}
            </div>
          );
        })}
      </div>
      {activeId === null && (
        <p className="mt-2 text-center text-xs font-bold text-[var(--combat)]">
          Registro cerrado — el workshop es el 3 de octubre.
        </p>
      )}
    </div>
  );
}
