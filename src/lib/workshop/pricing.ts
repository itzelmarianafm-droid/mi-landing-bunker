// =====================================================================
// Venta por lotes (precio sube según la fecha). Zona horaria CDMX (-06:00).
//   • Preventa: $9 USD — hasta el 20 de septiembre
//   • Lote 2:   $19 USD — del 20 al 30 de septiembre
//   • Lote 3:   $29 USD — del 1 al 2 de octubre
//   • Evento:   sábado 3 de octubre → registro cerrado
// Cada lote está activo mientras now < endMs.
// =====================================================================

export interface Tier {
  id: string;
  label: string;   // rango de fechas legible
  price: number;   // USD
  endMs: number;   // instante en que deja de estar activo (CDMX)
}

export const TIERS: Tier[] = [
  {
    id: 'preventa',
    label: 'Preventa · hasta el 20 de septiembre',
    price: 9,
    endMs: Date.parse('2026-09-21T00:00:00-06:00'),
  },
  {
    id: 'lote2',
    label: '20 al 30 de septiembre',
    price: 19,
    endMs: Date.parse('2026-10-01T00:00:00-06:00'),
  },
  {
    id: 'lote3',
    label: '1 y 2 de octubre',
    price: 29,
    endMs: Date.parse('2026-10-03T00:00:00-06:00'),
  },
];

/** Devuelve el lote activo según el momento dado, o null si el registro cerró. */
export function getActiveTier(now: number): Tier | null {
  for (const t of TIERS) {
    if (now < t.endMs) return t;
  }
  return null;
}
