import { cookies } from 'next/headers';
import { isValidToken, COOKIE_NAME } from '@/lib/workshop/auth';

export const runtime = 'nodejs';

interface TierIn {
  id?: string;
  label?: string;
  price?: number | string;
  endIso?: string;
}

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

  // Normaliza los lotes
  const tiersIn = Array.isArray(body.tiers) ? (body.tiers as TierIn[]) : [];
  const tiers = tiersIn
    .filter((t) => t && t.label && t.endIso)
    .map((t, i) => ({
      id: t.id || `lote-${i + 1}`,
      label: String(t.label),
      price: Number(t.price) || 0,
      endIso: String(t.endIso),
    }));

  const row = {
    id: 1,
    event_iso: String(body.eventIso || ''),
    date_label: String(body.dateLabel || ''),
    time_label: String(body.timeLabel || ''),
    duration: String(body.duration || ''),
    live: String(body.live || 'En vivo'),
    recording: String(body.recording || ''),
    host: String(body.host || ''),
    tiers,
    checkout_url: String(body.checkoutUrl || ''),
    vsl_url: String(body.vslUrl || ''),
    updated_at: new Date().toISOString(),
  };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: 'Supabase no configurado' }, { status: 500 });
  }

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
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
