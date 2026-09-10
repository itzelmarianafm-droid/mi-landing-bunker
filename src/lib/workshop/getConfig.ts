import { DEFAULT_CONFIG, makeTier, type WorkshopConfig, type Tier } from './config';

interface Row {
  event_iso?: string;
  date_label?: string;
  time_label?: string;
  duration?: string;
  live?: string;
  recording?: string;
  host?: string;
  tiers?: { id: string; label: string; price: number; endIso: string }[];
  checkout_url?: string;
  vsl_url?: string;
}

const isUrl = (v?: string) => !!v && /^https?:\/\//.test(v);

function mergeRow(row: Row): WorkshopConfig {
  const eventIso = row.event_iso || DEFAULT_CONFIG.eventIso;
  const tiers: Tier[] =
    Array.isArray(row.tiers) && row.tiers.length > 0
      ? row.tiers.map((t) => makeTier(t.id, t.label, Number(t.price), t.endIso))
      : DEFAULT_CONFIG.tiers;

  return {
    eventIso,
    eventMs: Date.parse(eventIso),
    dateLabel: row.date_label || DEFAULT_CONFIG.dateLabel,
    timeLabel: row.time_label || DEFAULT_CONFIG.timeLabel,
    duration: row.duration || DEFAULT_CONFIG.duration,
    live: row.live || DEFAULT_CONFIG.live,
    recording: row.recording || DEFAULT_CONFIG.recording,
    host: row.host || DEFAULT_CONFIG.host,
    tiers,
    checkoutUrl: isUrl(row.checkout_url) ? row.checkout_url! : DEFAULT_CONFIG.checkoutUrl,
    vslUrl: isUrl(row.vsl_url) ? row.vsl_url! : DEFAULT_CONFIG.vslUrl,
  };
}

/**
 * Lee la configuración del workshop desde Supabase (tabla workshop_config, id=1).
 * Si no hay Supabase o falla, devuelve los valores por defecto (nunca rompe).
 */
export async function getWorkshopConfig(): Promise<WorkshopConfig> {
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
    return mergeRow(rows[0]);
  } catch {
    return DEFAULT_CONFIG;
  }
}
