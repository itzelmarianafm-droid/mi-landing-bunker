'use client';

import { useEffect, useState } from 'react';
import {
  formatFecha,
  formatHora,
  formatPrecio,
  getActiveTier,
  makeTier,
  motivoCierre,
  resolveLotes,
  type BarraModo,
  type Tier,
  type WorkshopConfig,
} from '@/lib/workshop/config';
import { textoLugares, textoUrgencia } from '@/lib/workshop/barraCopy';

// Convertimos entre ISO (con offset de zona horaria) y datetime-local.
const isoToLocal = (iso: string) => (iso ? iso.slice(0, 16) : ''); // 'YYYY-MM-DDTHH:MM'
const localToIso = (local: string, offset: string) => (local ? `${local}:00${offset}` : '');

// Zonas horarias frecuentes (offset ISO + etiqueta).
const TIMEZONES = [
  { offset: '-06:00', label: 'México / Centroamérica (CDMX, UTC-6)' },
  { offset: '-05:00', label: 'Colombia / Perú / Ecuador (UTC-5)' },
  { offset: '-04:00', label: 'Bolivia / Venezuela (UTC-4)' },
  { offset: '-03:00', label: 'Argentina / Chile / Uruguay (UTC-3)' },
  { offset: '+01:00', label: 'España, horario de invierno (UTC+1)' },
  { offset: '+02:00', label: 'España, horario de verano (UTC+2)' },
];

interface TierState {
  id: string;
  label: string;
  price: string;
  cupo: string;
  vendidos: string;
  cerrado: boolean;
  endLocal: string;
  checkoutUrl: string;
}

const MOTIVO: Record<string, string> = {
  cerrado: 'Cerrado a mano',
  lleno: 'Lleno',
  vencido: 'Venció la fecha',
};

export default function AdminForm({ initial }: { initial: WorkshopConfig }) {
  const [eventLocal, setEventLocal] = useState(isoToLocal(initial.eventIso));
  const [checkoutUrl, setCheckoutUrl] = useState(initial.checkoutUrl);
  const [vslUrl, setVslUrl] = useState(initial.vslUrl);
  const [graciasWhatsappMembresia, setGraciasWhatsappMembresia] = useState(initial.graciasWhatsappMembresia);
  const [graciasWhatsappVip, setGraciasWhatsappVip] = useState(initial.graciasWhatsappVip);
  const [graciasWhatsappPsr, setGraciasWhatsappPsr] = useState(initial.graciasWhatsappPsr);
  const [currency, setCurrency] = useState(initial.currency);
  const [tzOffset, setTzOffset] = useState(initial.tzOffset);
  const [tzLabel, setTzLabel] = useState(initial.tzLabel);
  const [barraVisible, setBarraVisible] = useState(initial.barraVisible);
  const [barraModo, setBarraModo] = useState<BarraModo>(initial.barraModo);
  const [umbralQuedan, setUmbralQuedan] = useState(String(initial.umbralQuedan));
  const [tiers, setTiers] = useState<TierState[]>(
    initial.tiers.map((t) => ({
      id: t.id,
      label: t.label,
      price: String(t.price),
      cupo: t.cupo ? String(t.cupo) : '',
      vendidos: String(t.vendidos),
      cerrado: t.cerrado,
      endLocal: isoToLocal(t.endIso),
      checkoutUrl: t.checkoutUrl,
    }))
  );

  const [status, setStatus] = useState<null | 'saving' | 'ok' | 'error'>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [graciasWarn, setGraciasWarn] = useState(false);
  const [barraWarn, setBarraWarn] = useState(false);

  // "Ahora" se calcula solo en el navegador (evita desajustes de hidratación).
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const id = window.setTimeout(() => setNow(Date.now()), 0);
    return () => window.clearTimeout(id);
  }, []);

  const eventIso = localToIso(eventLocal, tzOffset);
  const toTier = (t: TierState): Tier =>
    makeTier({
      id: t.id,
      label: t.label,
      price: Number(t.price),
      cupo: Number(t.cupo),
      vendidos: Number(t.vendidos),
      cerrado: t.cerrado,
      endIso: localToIso(t.endLocal, tzOffset),
      checkoutUrl: t.checkoutUrl,
    });
  const liveTiers = tiers.map(toTier);
  const activeTier = now !== null ? getActiveTier(liveTiers, now) : null;
  const eventPast = now !== null && !!eventIso && Date.parse(eventIso) < now;
  const preview =
    now !== null
      ? resolveLotes(
          {
            ...initial,
            eventIso,
            eventMs: Date.parse(eventIso),
            tiers: liveTiers,
            checkoutUrl,
            barraVisible: true, // vista previa: muestra lo que se vería al encenderla
            barraModo,
            umbralQuedan: Number(umbralQuedan) || 0,
          },
          now
        )
      : null;

  const updateTier = <K extends keyof TierState>(i: number, field: K, value: TierState[K]) => {
    setTiers((prev) => prev.map((t, idx) => (idx === i ? { ...t, [field]: value } : t)));
  };
  const addTier = () =>
    setTiers((prev) => [
      ...prev,
      {
        id: `lote-${Date.now()}`,
        label: `Lote ${prev.length + 1}`,
        price: '',
        cupo: '',
        vendidos: '0',
        cerrado: false,
        endLocal: '',
        checkoutUrl: '',
      },
    ]);
  const removeTier = (i: number) => setTiers((prev) => prev.filter((_, idx) => idx !== i));
  const avanzarLote = () => {
    if (!activeTier) return;
    setTiers((prev) => prev.map((t) => (t.id === activeTier.id ? { ...t, cerrado: true } : t)));
  };

  const save = async () => {
    setStatus('saving');
    setErrorMsg('');
    setGraciasWarn(false);
    setBarraWarn(false);
    const payload = {
      eventIso,
      // Campos que la landing nueva ya no muestra: se conservan tal cual.
      duration: initial.duration,
      live: initial.live,
      recording: initial.recording,
      host: initial.host,
      checkoutUrl,
      vslUrl,
      graciasWhatsappMembresia,
      graciasWhatsappVip,
      graciasWhatsappPsr,
      currency,
      tzOffset,
      tzLabel,
      barraVisible,
      barraModo,
      umbralQuedan: Number(umbralQuedan) || 0,
      tiers: liveTiers.map((t) => ({
        id: t.id,
        label: t.label,
        price: t.price,
        cupo: t.cupo,
        vendidos: t.vendidos,
        cerrado: t.cerrado,
        endIso: t.endIso,
        checkoutUrl: t.checkoutUrl,
      })),
    };
    try {
      const res = await fetch('/api/workshop-admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const d = await res.json().catch(() => ({}));
        // Avisa si alguna columna opcional aún no existe en Supabase.
        if (d && d.graciasSaved === false) setGraciasWarn(true);
        if (d && d.barraSaved === false) setBarraWarn(true);
        setStatus('ok');
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(d.error || 'No se pudo guardar.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Error de conexión.');
      setStatus('error');
    }
  };

  const logout = async () => {
    await fetch('/api/workshop-admin/logout', { method: 'POST' });
    window.location.href = '/workshop/admin/login';
  };

  const input =
    'w-full rounded-md border border-[var(--line-strong)] bg-[var(--panel-2)] px-3 py-2.5 text-[15px] text-[var(--text)] placeholder:text-[var(--dim)] focus:border-[var(--combat)] focus:outline-none';
  const label = 'mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]';
  const hint = 'mt-1 text-[11px] text-[var(--dim)]';

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="ws-eyebrow mb-1">Panel de administración</p>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">Workshop</h1>
        </div>
        <button onClick={logout} className="ws-cta px-4 py-2 text-xs" style={{ background: 'var(--panel-2)', color: 'var(--text)', border: '1px solid var(--line-strong)' }}>
          Cerrar sesión
        </button>
      </div>

      <a href="/workshop" target="_blank" className="mb-6 inline-block text-sm text-[var(--combat)]">
        Ver la landing →
      </a>

      {/* Evento */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Evento</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={label}>Fecha y hora del evento</label>
            <input type="datetime-local" className={input} value={eventLocal} onChange={(e) => setEventLocal(e.target.value)} />
            <p className={hint}>
              Este único campo actualiza la fecha en toda la landing (anuncio, tarjeta del lote, lista de lo que
              incluye, preguntas frecuentes y última llamada).
            </p>
            {eventIso && (
              <p className="mt-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-3 py-2 text-[13px] text-[var(--text)]">
                Así se verá: <strong>{formatFecha(eventIso)}</strong> · <strong>{formatHora(eventIso, tzLabel)}</strong>
              </p>
            )}
          </div>
          <div>
            <label className={label}>Zona horaria del evento</label>
            <select className={input} value={tzOffset} onChange={(e) => setTzOffset(e.target.value)}>
              {TIMEZONES.map((t) => (
                <option key={t.offset} value={t.offset}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label}>Zona (texto junto a la hora)</label>
            <input className={input} value={tzLabel} onChange={(e) => setTzLabel(e.target.value)} placeholder="hora CDMX" />
          </div>
          <div>
            <label className={label}>Moneda</label>
            <input className={input} value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="USD" />
            <p className={hint}>Se muestra junto al precio, ej. &quot;$9 USD&quot;.</p>
          </div>
        </div>
      </section>

      {/* Lotes */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Lotes de precio</h2>

        {now !== null && (eventPast || !activeTier) && (
          <div className="mb-4 rounded-lg border border-[#E0564E] bg-[rgba(224,86,78,0.10)] p-3 text-[13px] font-semibold text-[#E0564E]">
            ⚠ La landing muestra <strong>&ldquo;Registro cerrado&rdquo;</strong>:{' '}
            {eventPast
              ? 'la fecha del evento ya pasó. Actualiza el evento a una fecha futura.'
              : 'ningún lote está abierto (todos están cerrados, llenos o vencidos).'}
          </div>
        )}

        {activeTier && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel-2)] p-3">
            <p className="text-[13px] text-[var(--text)]">
              Vendiendo ahora: <strong>{activeTier.label}</strong> a ${formatPrecio(activeTier.price)} {currency}
            </p>
            <button onClick={avanzarLote} className="ws-cta px-4 py-2 text-xs">
              Cerrar {activeTier.label} y abrir el siguiente
            </button>
          </div>
        )}

        <div className="space-y-4">
          {tiers.map((t, i) => {
            const tier = liveTiers[i];
            const motivo = now !== null ? motivoCierre(tier, now) : null;
            const isActive = activeTier?.id === tier.id;
            return (
              <div key={t.id} className="rounded-lg border border-[var(--line)] bg-[var(--panel-2)] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--combat)]">#{i + 1}</span>
                    {now !== null && (
                      <span
                        className="rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={
                          isActive
                            ? { background: 'var(--combat)', color: '#0B0B0B' }
                            : { border: '1px solid var(--line-strong)', color: 'var(--muted)' }
                        }
                      >
                        {isActive ? 'Activo' : motivo ? `Agotado · ${MOTIVO[motivo]}` : 'Próximo'}
                      </span>
                    )}
                  </span>
                  <button onClick={() => removeTier(i)} className="text-xs text-[var(--dim)] hover:text-[#E0A62A]">
                    Eliminar
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className={label}>Etiqueta</label>
                    <input className={input} value={t.label} onChange={(e) => updateTier(i, 'label', e.target.value)} placeholder="Lote 1" />
                  </div>
                  <div>
                    <label className={label}>Precio ({currency})</label>
                    <input type="number" min="0" className={input} value={t.price} onChange={(e) => updateTier(i, 'price', e.target.value)} placeholder="9" />
                  </div>
                  <div>
                    <label className={label}>Cupo (lugares)</label>
                    <input type="number" min="0" className={input} value={t.cupo} onChange={(e) => updateTier(i, 'cupo', e.target.value)} placeholder="Sin límite" />
                    <p className={hint}>Vacío = sin límite. Al llenarse, se abre el siguiente lote solo.</p>
                  </div>
                  <div>
                    <label className={label}>Vendidos (reales)</label>
                    <input type="number" min="0" className={input} value={t.vendidos} onChange={(e) => updateTier(i, 'vendidos', e.target.value)} />
                    <p className={hint}>Inscripciones pagadas de este lote, según Hotmart.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={label}>Link de pago de este lote (opcional)</label>
                    <input className={input} value={t.checkoutUrl} onChange={(e) => updateTier(i, 'checkoutUrl', e.target.value)} placeholder="Vacío = usa el link de pago general" />
                  </div>
                  <div>
                    <label className={label}>Cerrar automáticamente el (opcional)</label>
                    <input type="datetime-local" className={input} value={t.endLocal} onChange={(e) => updateTier(i, 'endLocal', e.target.value)} />
                    {t.endLocal && (
                      <button onClick={() => updateTier(i, 'endLocal', '')} className="mt-1 text-[11px] text-[var(--combat)]">
                        Quitar fecha
                      </button>
                    )}
                  </div>
                  <div className="flex items-end">
                    <label className="flex cursor-pointer items-center gap-2 pb-2.5 text-sm text-[var(--text)]">
                      <input type="checkbox" checked={t.cerrado} onChange={(e) => updateTier(i, 'cerrado', e.target.checked)} className="h-4 w-4 accent-[var(--combat)]" />
                      Lote cerrado
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={addTier} className="mt-4 text-sm font-semibold text-[var(--combat)]">
          + Agregar lote
        </button>
        <p className={hint}>
          Se vende el primer lote, en orden, que no esté cerrado, lleno ni vencido. La landing muestra ese lote y el
          siguiente.
        </p>
      </section>

      {/* Barra de avance */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Barra de avance del lote</h2>
        <p className="mb-4 text-[12px] text-[var(--dim)]">
          Usa el cupo y los vendidos reales del lote activo. Mientras el avance sea bajo, déjala apagada: la urgencia la
          llevan la fecha y la subida de precio.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--text)] sm:col-span-2">
            <input type="checkbox" checked={barraVisible} onChange={(e) => setBarraVisible(e.target.checked)} className="h-4 w-4 accent-[var(--combat)]" />
            Mostrar la barra en la landing
          </label>
          <div>
            <label className={label}>Mostrar como</label>
            <select className={input} value={barraModo} onChange={(e) => setBarraModo(e.target.value as BarraModo)}>
              <option value="porcentaje">% vendido</option>
              <option value="lugares">Quedan X lugares</option>
            </select>
          </div>
          <div>
            <label className={label}>&quot;¡Solo quedan X!&quot; cuando queden</label>
            <input type="number" min="0" className={input} value={umbralQuedan} onChange={(e) => setUmbralQuedan(e.target.value)} />
            <p className={hint}>Lugares o menos (regla de marca: 10).</p>
          </div>
        </div>
        {preview && (
          <p className="mt-4 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-3 py-2 text-[13px] text-[var(--text)]">
            {!preview.actual ? (
              'Sin lote activo: no se muestra barra.'
            ) : !preview.barra ? (
              `El ${preview.actual.label} no tiene cupo: la barra no se muestra.`
            ) : (
              <>
                Hoy se vería: <strong>{preview.barra.pct}% vendido</strong> ({preview.actual.vendidos} de{' '}
                {preview.actual.cupo}) ·{' '}
                <strong>
                  {textoUrgencia(preview.barra, Number(umbralQuedan) || 0) ??
                    (barraModo === 'lugares'
                      ? textoLugares(preview.barra, preview.actual.label)
                      : `solo queda el ${100 - preview.barra.pct}%`)}
                </strong>
                {!barraVisible && ' (apagada)'}
              </>
            )}
          </p>
        )}
        {barraWarn && (
          <p className="mt-3 text-[11px] font-semibold text-[#E0A62A]">
            Los ajustes de la barra no se guardaron: faltan los campos barra_visible, barra_modo y umbral_quedan en
            la base de datos (ajuste de una sola vez). Lo demás sí se guardó.
          </p>
        )}
      </section>

      {/* Enlaces */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Enlaces</h2>
        <div className="space-y-4">
          <div>
            <label className={label}>Link de pago general (checkout)</label>
            <input className={input} value={checkoutUrl} onChange={(e) => setCheckoutUrl(e.target.value)} placeholder="https://pay.hotmart.com/..." />
            <p className={hint}>Se usa en los lotes que no tienen su propio link.</p>
          </div>
          <div>
            <label className={label}>Video (embed Vimeo/YouTube)</label>
            <input className={input} value={vslUrl} onChange={(e) => setVslUrl(e.target.value)} placeholder="https://player.vimeo.com/video/..." />
            <p className={hint}>Vimeo: https://player.vimeo.com/video/ID · YouTube: https://www.youtube.com/embed/ID</p>
          </div>
        </div>
      </section>

      {/* Grupos de WhatsApp de las páginas de gracias */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Grupos de WhatsApp — páginas de gracias</h2>
        <p className="mb-4 text-[12px] text-[var(--dim)]">
          El botón de cada página de gracias lleva a estos grupos. Cámbialos cuando abras una nueva sesión y, al guardar, las páginas se actualizan al instante.
        </p>
        <div className="space-y-4">
          <div>
            <label className={label}>Membresía — /graciasmembresia</label>
            <input className={input} value={graciasWhatsappMembresia} onChange={(e) => setGraciasWhatsappMembresia(e.target.value)} placeholder="https://chat.whatsapp.com/..." />
          </div>
          <div>
            <label className={label}>Workshop VIP — /graciasvipworkshop</label>
            <input className={input} value={graciasWhatsappVip} onChange={(e) => setGraciasWhatsappVip(e.target.value)} placeholder="https://chat.whatsapp.com/..." />
          </div>
          <div>
            <label className={label}>Prospecta sin Rogar — /graciasworkshoppsr</label>
            <input className={input} value={graciasWhatsappPsr} onChange={(e) => setGraciasWhatsappPsr(e.target.value)} placeholder="https://chat.whatsapp.com/..." />
          </div>
        </div>
        {graciasWarn && (
          <p className="mt-3 text-[11px] font-semibold text-[#E0A62A]">
            Los grupos de gracias no se guardaron: faltan los campos en la base de datos (ajuste de una sola vez). Lo demás sí se guardó.
          </p>
        )}
      </section>

      {/* Guardar */}
      <div className="sticky bottom-0 -mx-4 border-t border-[var(--line)] bg-[var(--bg)]/95 p-4 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        <div className="flex items-center gap-4">
          <button onClick={save} disabled={status === 'saving'} className="ws-cta px-8 py-3 text-sm">
            {status === 'saving' ? 'Guardando…' : 'Guardar cambios'}
          </button>
          {status === 'ok' && <span className="text-sm font-semibold text-[#2E9C5A]">✓ Guardado. La landing ya está actualizada.</span>}
          {status === 'error' && <span className="text-sm font-semibold text-[#E0A62A]">Error: {errorMsg}</span>}
        </div>
      </div>
    </div>
  );
}
