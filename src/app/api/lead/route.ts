// =====================================================================
// POST /api/lead — captura de leads del diagnóstico.
// Inserta en Supabase (tabla `leads`). Si no hay credenciales,
// entra en "modo demo" (console.log) sin bloquear al usuario.
// Opcionalmente reenvía a un webhook (Make/Zapier/n8n) si está definido.
// =====================================================================

export const runtime = 'nodejs';

interface LeadPayload {
  name: string;
  email: string;
  whatsapp: string;
  countryCode: string;
  countryName: string;
  industry?: string;
  goal?: string;
  total: number;
  profile: string;
  pillars: { key: string; score: number; zone: string }[];
  weakest: string[];
  timestamp: string;
  source: string;
}

/** Mapea el payload al row de la tabla `leads` (snake_case). */
function toRow(p: LeadPayload) {
  return {
    name: p.name,
    email: p.email,
    whatsapp: p.whatsapp,
    country_code: p.countryCode,
    country_name: p.countryName,
    industry: p.industry ?? null,
    goal: p.goal ?? null,
    total: p.total,
    profile: p.profile,
    pillars: p.pillars,
    weakest: p.weakest,
    source: p.source,
    created_at: p.timestamp,
  };
}

export async function POST(req: Request) {
  let payload: LeadPayload;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Validación mínima de servidor.
  if (!payload?.name || !payload?.email || !payload?.whatsapp) {
    return Response.json({ ok: false, error: 'missing_fields' }, { status: 422 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  // Reenvío opcional a webhook (no bloquea la respuesta principal).
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((e) => console.error('[diagnostico] webhook error:', e));
  }

  // Sin Supabase configurado → modo demo (no bloquea al usuario).
  if (!supabaseUrl || !supabaseKey) {
    console.log('[diagnostico] LEAD (modo demo, sin Supabase):', JSON.stringify(payload));
    return Response.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(toRow(payload)),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[diagnostico] Supabase error:', res.status, detail);
      // No bloqueamos al usuario: el diagnóstico igual se muestra.
      return Response.json({ ok: false, error: 'insert_failed' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error('[diagnostico] Supabase fetch error:', e);
    return Response.json({ ok: false, error: 'network' }, { status: 500 });
  }
}
