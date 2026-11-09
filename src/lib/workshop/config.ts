// =====================================================================
// Configuración del Workshop "Prospecta sin Rogar"
// DEFAULT_CONFIG = valores por defecto (fallback si no hay Supabase).
// El panel de admin guarda cambios en Supabase; getConfig() los lee.
// =====================================================================

import {
  GRUPO_WHATSAPP,
  GRUPO_WHATSAPP_VIPWORKSHOP,
  GRUPO_WHATSAPP_PSR,
} from '@/config/gracias';

/**
 * Lo que se guarda de cada lote en la columna `tiers` (jsonb) de Supabase.
 * Los lotes no tienen fecha: cambian cuando se llena el cupo o cuando se
 * cierran a mano desde el panel.
 */
export interface TierData {
  id: string;
  label: string; // siempre "Lote N" según su orden (lo pone makeTier)
  price: number;
  cupo: number; // lugares reales del lote; 0 = sin límite (sin barra de avance)
  vendidos: number; // capturado a mano en el panel (inscripciones reales)
  cerrado: boolean; // cerrado a mano desde el panel ("cerrar lote y abrir el siguiente")
  checkoutUrl: string; // opcional: link de pago de este lote ('' = usa el link global)
}

export type Tier = TierData;

export type BarraModo = 'porcentaje' | 'lugares';

export interface WorkshopConfig {
  eventIso: string; // fecha/hora del evento con offset, ej. "2026-11-28T09:00:00-06:00"
  eventMs: number; // derivado
  dateLabel: string; // derivado de eventIso: "Sábado 28 de noviembre"
  timeLabel: string; // derivado de eventIso + tzLabel: "9:00 AM hora CDMX"
  duration: string;
  live: string;
  recording: string;
  host: string;
  tiers: Tier[];
  checkoutUrl: string;
  vslUrl: string;
  currency: string; // "USD", "MXN", etc.
  tzOffset: string; // offset ISO, ej. "-06:00" (CDMX), "-05:00" (Colombia)
  tzLabel: string; // zona junto a la hora, ej. "hora CDMX"
  // Barra de avance del lote (presentación; los números salen de cupo/vendidos).
  barraVisible: boolean;
  barraModo: BarraModo;
  umbralQuedan: number; // "¡Solo quedan X!" solo cuando quedan <= este número
  // Grupos de WhatsApp de las páginas de gracias (editables cada sesión).
  graciasWhatsappMembresia: string; // /graciasmembresia
  graciasWhatsappVip: string; // /graciasvipworkshop
  graciasWhatsappPsr: string; // /graciasworkshoppsr
}

/** `index` = posición del lote en la lista; define su nombre ("Lote 1", "Lote 2"…). */
export function makeTier(t: Partial<TierData> & { id: string }, index: number): Tier {
  return {
    id: t.id,
    label: `Lote ${index + 1}`,
    price: Number(t.price) || 0,
    cupo: Math.max(0, Math.floor(Number(t.cupo) || 0)),
    vendidos: Math.max(0, Math.floor(Number(t.vendidos) || 0)),
    cerrado: t.cerrado === true,
    checkoutUrl: t.checkoutUrl || '',
  };
}

// ---------------------------------------------------------------------
// Fecha y hora visibles: salen de un solo campo (eventIso).
// Se leen tal cual del texto ISO (hora local del evento), sin convertir
// a la zona del servidor ni del visitante.
// ---------------------------------------------------------------------

/** "2026-11-28T09:00:00-06:00" → "Sábado 28 de noviembre" */
export function formatFecha(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  if (!y || !m || !d) return '';
  const s = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  })
    .format(new Date(Date.UTC(y, m - 1, d)))
    .replace(',', '');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** "2026-11-28T09:00:00-06:00", "hora CDMX" → "9:00 AM hora CDMX" */
export function formatHora(iso: string, zona: string): string {
  const [h, min] = iso.slice(11, 16).split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(min)) return '';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const hora = `${h12}:${String(min).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
  return zona ? `${hora} ${zona}` : hora;
}

/** 9 → "9", 9.5 → "9.50" */
export function formatPrecio(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

// México no usa horario de verano → CDMX es UTC-6 todo el año (offset -06:00).
const DEFAULT_EVENT_ISO = '2026-11-28T09:00:00-06:00';
const DEFAULT_TZ_LABEL = 'hora CDMX';

export const DEFAULT_CONFIG: WorkshopConfig = {
  eventIso: DEFAULT_EVENT_ISO,
  eventMs: Date.parse(DEFAULT_EVENT_ISO),
  dateLabel: formatFecha(DEFAULT_EVENT_ISO),
  timeLabel: formatHora(DEFAULT_EVENT_ISO, DEFAULT_TZ_LABEL),
  duration: '5 horas',
  live: 'En vivo',
  recording: 'Grabación 20 días',
  host: 'Paco Anguiano y Mariana Franco',
  tiers: [
    makeTier({ id: 'lote1', price: 9 }, 0),
    makeTier({ id: 'lote2', price: 17 }, 1),
  ],
  checkoutUrl: 'https://pay.hotmart.com/A107551806Y?checkoutMode=10',
  vslUrl: 'https://player.vimeo.com/video/1225523227',
  currency: 'USD',
  tzOffset: '-06:00',
  tzLabel: DEFAULT_TZ_LABEL,
  barraVisible: false,
  barraModo: 'porcentaje',
  umbralQuedan: 10,
  graciasWhatsappMembresia: GRUPO_WHATSAPP,
  graciasWhatsappVip: GRUPO_WHATSAPP_VIPWORKSHOP,
  graciasWhatsappPsr: GRUPO_WHATSAPP_PSR,
};

// ---------------------------------------------------------------------
// Lotes: cuál está activo y por qué los demás no.
// ---------------------------------------------------------------------

export type MotivoCierre = 'cerrado' | 'lleno';

/** Por qué un lote ya no se vende, o null si sigue abierto. */
export function motivoCierre(t: Tier): MotivoCierre | null {
  if (t.cerrado) return 'cerrado';
  if (t.cupo > 0 && t.vendidos >= t.cupo) return 'lleno';
  return null;
}

/** El lote activo es el primero, en orden, que sigue abierto. */
export function getActiveTier(tiers: Tier[]): Tier | null {
  return tiers.find((t) => motivoCierre(t) === null) ?? null;
}

export interface Barra {
  pct: number; // % vendido real del lote activo
  quedan: number; // lugares reales que quedan
}

export interface LoteState {
  cerrado: boolean; // registro cerrado (sin lote abierto o evento ya pasado)
  actual: Tier | null;
  siguiente: Tier | null;
  ahorro: number | null; // diferencia con el siguiente lote, si sube de precio
  checkoutUrl: string;
  barra: Barra | null; // null = no se muestra
}

export function resolveLotes(cfg: WorkshopConfig, now: number): LoteState {
  const actual = cfg.eventMs > now ? getActiveTier(cfg.tiers) : null;
  if (!actual) {
    return { cerrado: true, actual: null, siguiente: null, ahorro: null, checkoutUrl: cfg.checkoutUrl, barra: null };
  }
  const idx = cfg.tiers.indexOf(actual);
  const siguiente = cfg.tiers.slice(idx + 1).find((t) => motivoCierre(t) === null) ?? null;
  const ahorro = siguiente && siguiente.price > actual.price ? siguiente.price - actual.price : null;
  const barra =
    cfg.barraVisible && actual.cupo > 0
      ? {
          pct: Math.min(100, Math.round((actual.vendidos / actual.cupo) * 100)),
          quedan: Math.max(0, actual.cupo - actual.vendidos),
        }
      : null;
  return {
    cerrado: false,
    actual,
    siguiente,
    ahorro,
    checkoutUrl: actual.checkoutUrl || cfg.checkoutUrl,
    barra,
  };
}
