import { cookies } from 'next/headers';
import { isValidToken, COOKIE_NAME } from '@/lib/workshop/auth';
import { formatFecha, formatHora } from '@/lib/workshop/config';

export const runtime = 'nodejs';

interface TierIn {
  id?: string;
  price?: number | string;
  cupo?: number | string;
  vendidos?: number | string;
  cerrado?: boolean;
  checkoutUrl?: string;
}

const toInt = (v: unknown) => Math.max(0, Math.floor(Number(v) || 0));

export async function POST(req: Request) {
  // Autenticación
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    return Response.json({ ok: false, error: 'no autorizado' }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Normaliza los lotes (se guardan en la columna jsonb `tiers`). Sin fechas:
  // cambian por cupo o a mano. El nombre sale del orden ("Lote 1", "Lote 2"…).
  const tiersIn = Array.isArray(body.tiers) ? (body.tiers as TierIn[]) : [];
  const tiers = tiersIn
    .filter((t) => t && typeof t === 'object')
    .map((t, i) => ({
      id: t.id || `lote-${i + 1}`,
      label: `Lote ${i + 1}`,
      price: Number(t.price) || 0,
      cupo: toInt(t.cupo),
      vendidos: toInt(t.vendidos),
      cerrado: t.cerrado === true,
      checkoutUrl: String(t.checkoutUrl || ''),
    }));

  const eventIso = String(body.eventIso || '');
  const tzLabel = String(body.tzLabel || '');

  const row = {
    id: 1,
    event_iso: eventIso,
    // Textos derivados de event_iso: se guardan para que la fila sea legible,
    // pero la landing siempre los recalcula desde event_iso.
    date_label: formatFecha(eventIso),
    time_label: formatHora(eventIso, tzLabel),
    duration: String(body.duration || ''),
    live: String(body.live || 'En vivo'),
    recording: String(body.recording || ''),
    host: String(body.host || ''),
    tiers,
    checkout_url: String(body.checkoutUrl || ''),
    vsl_url: String(body.vslUrl || ''),
    currency: String(body.currency || 'USD'),
    tz_offset: String(body.tzOffset || '-06:00'),
    tz_label: tzLabel,
    updated_at: new Date().toISOString(),
  };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: 'Supabase no configurado' }, { status: 500 });
  }

  // Guarda columnas opcionales por separado y de forma tolerante: si aún no
  // existen en Supabase, NO rompe el guardado del workshop; solo se informa.
  const patchOptional = async (patch: Record<string, unknown>) => {
    if (Object.keys(patch).length === 0) return true;
    try {
      const r = await fetch(`${url}/rest/v1/workshop_config?id=eq.1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: key,
          Authorization: `Bearer ${key}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(patch),
      });
      return r.ok;
    } catch {
      return false;
    }
  };

  try {
    // Upsert (inserta o actualiza la fila id=1)
    const res = await fetch(`${url}/rest/v1/workshop_config?on_conflict=id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      const detail = await res.text();
      return Response.json({ ok: false, error: detail }, { status: 502 });
    }

    // Links de los grupos de WhatsApp de las páginas de gracias
    // (columnas gracias_whatsapp_*).
    const graciasPatch: Record<string, string> = {};
    if (typeof body.graciasWhatsappMembresia === 'string')
      graciasPatch.gracias_whatsapp_membresia = String(body.graciasWhatsappMembresia);
    if (typeof body.graciasWhatsappVip === 'string')
      graciasPatch.gracias_whatsapp_vip = String(body.graciasWhatsappVip);
    if (typeof body.graciasWhatsappPsr === 'string')
      graciasPatch.gracias_whatsapp_psr = String(body.graciasWhatsappPsr);
    const graciasSaved = await patchOptional(graciasPatch);

    // Presentación de la barra de avance del lote (columnas barra_* / umbral_quedan).
    const barraSaved = await patchOptional({
      barra_visible: body.barraVisible === true,
      barra_modo: body.barraModo === 'lugares' ? 'lugares' : 'porcentaje',
      umbral_quedan: toInt(body.umbralQuedan),
    });

    return Response.json({ ok: true, graciasSaved, barraSaved });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
