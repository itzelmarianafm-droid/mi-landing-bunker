import { cache } from 'react';
import {
  DEFAULT_CONFIG,
  formatFecha,
  formatHora,
  makeTier,
  resolveLotes,
  type BarraModo,
  type LoteState,
  type TierData,
  type WorkshopConfig,
  type Tier,
} from './config';

interface Row {
  event_iso?: string;
  duration?: string;
  live?: string;
  recording?: string;
  host?: string;
  tiers?: (Partial<TierData> & { id: string; endIso?: string })[];
  checkout_url?: string;
  vsl_url?: string;
  currency?: string;
  tz_offset?: string;
  tz_label?: string;
  barra_visible?: boolean | null;
  barra_modo?: string | null;
  umbral_quedan?: number | null;
  gracias_whatsapp_membresia?: string;
  gracias_whatsapp_vip?: string;
  gracias_whatsapp_psr?: string;
}

const isUrl = (v?: string) => !!v && /^https?:\/\//.test(v);

// Los lotes ya no se cierran por fecha. Lotes guardados por versiones
// anteriores pueden traer `endIso`: si esa fecha ya pasó, el lote se trata
// como cerrado (así no se reabre un precio viejo); si no, se ignora.
// Al guardar desde el panel, `endIso` desaparece de la fila.
function legacyCerrado(t: { cerrado?: boolean; endIso?: string }, now: number) {
  if (t.cerrado === true) return true;
  const end = t.endIso ? Date.parse(t.endIso) : NaN;
  return !Number.isNaN(end) && end <= now;
}

// Valor que traía la versión anterior bajo el contador; la landing nueva lo
// muestra junto a la hora ("9:00 AM hora CDMX"), así que se traduce.
const LEGACY_TZ_LABEL = 'Hora de la Ciudad de México';

function mergeRow(row: Row, now: number): WorkshopConfig {
  const eventIso = row.event_iso || DEFAULT_CONFIG.eventIso;
  const tzLabel =
    !row.tz_label || row.tz_label === LEGACY_TZ_LABEL ? DEFAULT_CONFIG.tzLabel : row.tz_label;
  const tiers: Tier[] =
    Array.isArray(row.tiers) && row.tiers.length > 0
      ? row.tiers.map((t, i) => makeTier({ ...t, cerrado: legacyCerrado(t, now) }, i))
      : DEFAULT_CONFIG.tiers;
  const barraModo: BarraModo = row.barra_modo === 'lugares' ? 'lugares' : 'porcentaje';

  return {
    eventIso,
    eventMs: Date.parse(eventIso),
    dateLabel: formatFecha(eventIso),
    timeLabel: formatHora(eventIso, tzLabel),
    duration: row.duration || DEFAULT_CONFIG.duration,
    live: row.live || DEFAULT_CONFIG.live,
    recording: row.recording || DEFAULT_CONFIG.recording,
    host: row.host || DEFAULT_CONFIG.host,
    tiers,
    checkoutUrl: isUrl(row.checkout_url) ? row.checkout_url! : DEFAULT_CONFIG.checkoutUrl,
    vslUrl: isUrl(row.vsl_url) ? row.vsl_url! : DEFAULT_CONFIG.vslUrl,
    currency: row.currency || DEFAULT_CONFIG.currency,
    tzOffset: row.tz_offset || DEFAULT_CONFIG.tzOffset,
    tzLabel,
    barraVisible: row.barra_visible === true,
    barraModo,
    umbralQuedan:
      typeof row.umbral_quedan === 'number' && row.umbral_quedan >= 0
        ? row.umbral_quedan
        : DEFAULT_CONFIG.umbralQuedan,
    graciasWhatsappMembresia: isUrl(row.gracias_whatsapp_membresia)
      ? row.gracias_whatsapp_membresia!
      : DEFAULT_CONFIG.graciasWhatsappMembresia,
    graciasWhatsappVip: isUrl(row.gracias_whatsapp_vip)
      ? row.gracias_whatsapp_vip!
      : DEFAULT_CONFIG.graciasWhatsappVip,
    graciasWhatsappPsr: isUrl(row.gracias_whatsapp_psr)
      ? row.gracias_whatsapp_psr!
      : DEFAULT_CONFIG.graciasWhatsappPsr,
  };
}

/**
 * Lee la configuración del workshop desde Supabase (tabla workshop_config, id=1).
 * Si no hay Supabase o falla, devuelve los valores por defecto (nunca rompe).
 * Memoizada por request: la página y su metadata comparten una sola lectura.
 */
export const getWorkshopConfig = cache(async (): Promise<WorkshopConfig> => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return DEFAULT_CONFIG;

  try {
    const res = await fetch(`${url}/rest/v1/workshop_config?id=eq.1&select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store', // siempre fresco: los cambios del admin se ven de inmediato
    });
    if (!res.ok) return DEFAULT_CONFIG;
    const rows = (await res.json()) as Row[];
    if (!Array.isArray(rows) || rows.length === 0) return DEFAULT_CONFIG;
    return mergeRow(rows[0], Date.now());
  } catch {
    return DEFAULT_CONFIG;
  }
});

/**
 * Estado de los lotes en este request (lote activo, siguiente, barra).
 * Memoizado: la página y su metadata ven exactamente el mismo estado.
 */
export const getLotes = cache(async (): Promise<LoteState> =>
  resolveLotes(await getWorkshopConfig(), Date.now())
);
