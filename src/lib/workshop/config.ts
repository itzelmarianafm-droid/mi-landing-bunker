// =====================================================================
// Configuración del Workshop "Prospecta sin Rogar"
// DEFAULT_CONFIG = valores por defecto (fallback si no hay Supabase).
// El panel de admin guarda cambios en Supabase; getConfig() los lee.
// =====================================================================

export interface Tier {
  id: string;
  label: string; // rango de fechas legible
  price: number; // USD
  endIso: string; // instante en que deja de estar activo (CDMX, offset -06:00)
  endMs: number; // derivado de endIso
}

export interface WorkshopConfig {
  eventIso: string; // fecha/hora del evento (CDMX)
  eventMs: number; // derivado
  dateLabel: string;
  timeLabel: string;
  duration: string;
  live: string;
  recording: string;
  host: string;
  tiers: Tier[];
  checkoutUrl: string;
  vslUrl: string;
}

export function makeTier(id: string, label: string, price: number, endIso: string): Tier {
  return { id, label, price, endIso, endMs: Date.parse(endIso) };
}

// México no usa horario de verano → CDMX es UTC-6 todo el año (offset -06:00).
export const DEFAULT_CONFIG: WorkshopConfig = {
  eventIso: '2026-10-03T09:00:00-06:00',
  eventMs: Date.parse('2026-10-03T09:00:00-06:00'),
  dateLabel: 'Sábado 3 de octubre',
  timeLabel: '9:00 AM hora CDMX',
  duration: '5 horas',
  live: 'En vivo',
  recording: 'Grabación disponible 15 días',
  host: 'Paco Anguiano',
  tiers: [
    makeTier('preventa', 'Preventa · hasta el 20 de septiembre', 9, '2026-09-21T00:00:00-06:00'),
    makeTier('lote2', '20 al 30 de septiembre', 19, '2026-10-01T00:00:00-06:00'),
    makeTier('lote3', '1 y 2 de octubre', 29, '2026-10-03T00:00:00-06:00'),
  ],
  checkoutUrl: 'https://pay.hotmart.com/A107551806Y?off=epkjgtlu',
  vslUrl: 'https://player.vimeo.com/video/1225523227',
};

/** Devuelve el lote activo según el momento dado, o null si el registro cerró. */
export function getActiveTier(tiers: Tier[], now: number): Tier | null {
  for (const t of tiers) {
    if (now < t.endMs) return t;
  }
  return null;
}
