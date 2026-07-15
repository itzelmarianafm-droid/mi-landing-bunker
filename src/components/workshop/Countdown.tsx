'use client';

import { useEffect, useState } from 'react';
import { EVENT_TARGET_MS } from '@/lib/workshop/config';

function parts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function Countdown({ variant = 'full' }: { variant?: 'full' | 'mini' }) {
  // Empieza en null para evitar mismatch de hidratación (server vs cliente).
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(EVENT_TARGET_MS - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) {
    // Placeholder mientras monta (mismo tamaño para no saltar el layout).
    return variant === 'mini' ? (
      <span className="font-mono text-xs text-[var(--muted)]">--:--:--</span>
    ) : (
      <div className="ws-count" aria-hidden />
    );
  }

  const closed = remaining <= 0;
  const { d, h, m, s } = parts(remaining);

  if (variant === 'mini') {
    return (
      <span className="font-mono text-xs font-bold tabular-nums text-[var(--text)]">
        {closed ? 'Cerrado' : `${d}d ${pad(h)}:${pad(m)}:${pad(s)}`}
      </span>
    );
  }

  if (closed) {
    return (
      <p className="text-sm font-bold uppercase tracking-wide text-[var(--combat)]">
        Registro cerrado
      </p>
    );
  }

  const boxes: [number, string][] = [
    [d, 'Días'],
    [h, 'Horas'],
    [m, 'Min'],
    [s, 'Seg'],
  ];

  return (
    <div>
      <div className="ws-count" role="timer" aria-label="Cuenta regresiva para el workshop">
        {boxes.map(([val, lbl]) => (
          <div key={lbl} className="ws-count-box">
            <div className="ws-count-num">{pad(val)}</div>
            <div className="ws-count-lbl">{lbl}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-[var(--dim)]">
        Hora de la Ciudad de México · convierte a tu zona horaria.
      </p>
    </div>
  );
}
