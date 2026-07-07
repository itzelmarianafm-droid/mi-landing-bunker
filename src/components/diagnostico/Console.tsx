'use client';

import Image from 'next/image';

type Status = 'STANDBY' | 'EN CURSO' | 'RESULTADO LISTO';

const STATUS_COLOR: Record<Status, string> = {
  STANDBY: '#726D64',
  'EN CURSO': '#E0A62A',
  'RESULTADO LISTO': '#2E9C5A',
};

export default function Console({ status }: { status: Status }) {
  return (
    <div className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Logo oficial horizontal (blanco negativo) */}
        <div className="flex items-center gap-3">
          <Image
            src="/diagnostico/logo-horizontal-blanco.png"
            alt="El Búnker del Vendedor"
            width={3600}
            height={1692}
            priority
            className="h-6 w-auto sm:h-7"
          />
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--dim)] sm:inline">
            · Sala de Mando
          </span>
        </div>

        {/* Estado de la consola */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: STATUS_COLOR[status] }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
