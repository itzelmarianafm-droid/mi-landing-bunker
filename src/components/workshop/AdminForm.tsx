'use client';

import { useState } from 'react';
import type { WorkshopConfig } from '@/lib/workshop/config';

// CDMX es UTC-6 fijo. Convertimos entre ISO (con offset) y datetime-local.
const isoToLocal = (iso: string) => (iso ? iso.slice(0, 16) : ''); // 'YYYY-MM-DDTHH:MM'
const localToIso = (local: string) => (local ? `${local}:00-06:00` : '');

interface TierState {
  id: string;
  label: string;
  price: string;
  endLocal: string;
}

export default function AdminForm({ initial }: { initial: WorkshopConfig }) {
  const [eventLocal, setEventLocal] = useState(isoToLocal(initial.eventIso));
  const [dateLabel, setDateLabel] = useState(initial.dateLabel);
  const [timeLabel, setTimeLabel] = useState(initial.timeLabel);
  const [duration, setDuration] = useState(initial.duration);
  const [live, setLive] = useState(initial.live);
  const [recording, setRecording] = useState(initial.recording);
  const [host, setHost] = useState(initial.host);
  const [checkoutUrl, setCheckoutUrl] = useState(initial.checkoutUrl);
  const [vslUrl, setVslUrl] = useState(initial.vslUrl);
  const [tiers, setTiers] = useState<TierState[]>(
    initial.tiers.map((t) => ({
      id: t.id,
      label: t.label,
      price: String(t.price),
      endLocal: isoToLocal(t.endIso),
    }))
  );

  const [status, setStatus] = useState<null | 'saving' | 'ok' | 'error'>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const updateTier = (i: number, field: keyof TierState, value: string) => {
    setTiers((prev) => prev.map((t, idx) => (idx === i ? { ...t, [field]: value } : t)));
  };
  const addTier = () =>
    setTiers((prev) => [...prev, { id: `lote-${prev.length + 1}`, label: '', price: '', endLocal: '' }]);
  const removeTier = (i: number) => setTiers((prev) => prev.filter((_, idx) => idx !== i));

  const save = async () => {
    setStatus('saving');
    setErrorMsg('');
    const payload = {
      eventIso: localToIso(eventLocal),
      dateLabel,
      timeLabel,
      duration,
      live,
      recording,
      host,
      checkoutUrl,
      vslUrl,
      tiers: tiers.map((t) => ({
        id: t.id,
        label: t.label,
        price: Number(t.price) || 0,
        endIso: localToIso(t.endLocal),
      })),
    };
    try {
      const res = await fetch('/api/workshop-admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
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
            <label className={label}>Fecha y hora del evento (CDMX)</label>
            <input type="datetime-local" className={input} value={eventLocal} onChange={(e) => setEventLocal(e.target.value)} />
            <p className="mt-1 text-[11px] text-[var(--dim)]">Controla el contador regresivo. Se interpreta en hora de la Ciudad de México.</p>
          </div>
          <div>
            <label className={label}>Fecha (texto visible)</label>
            <input className={input} value={dateLabel} onChange={(e) => setDateLabel(e.target.value)} placeholder="Sábado 3 de octubre" />
          </div>
          <div>
            <label className={label}>Hora (texto visible)</label>
            <input className={input} value={timeLabel} onChange={(e) => setTimeLabel(e.target.value)} placeholder="9:00 AM hora CDMX" />
          </div>
          <div>
            <label className={label}>Duración</label>
            <input className={input} value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="5 horas" />
          </div>
          <div>
            <label className={label}>Imparte</label>
            <input className={input} value={host} onChange={(e) => setHost(e.target.value)} placeholder="Paco Anguiano" />
          </div>
          <div>
            <label className={label}>Etiqueta "en vivo"</label>
            <input className={input} value={live} onChange={(e) => setLive(e.target.value)} placeholder="En vivo" />
          </div>
          <div>
            <label className={label}>Etiqueta grabación</label>
            <input className={input} value={recording} onChange={(e) => setRecording(e.target.value)} placeholder="Grabación disponible 15 días" />
          </div>
        </div>
      </section>

      {/* Lotes de precio */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Lotes de precio</h2>
        <div className="space-y-4">
          {tiers.map((t, i) => (
            <div key={i} className="rounded-lg border border-[var(--line)] bg-[var(--panel-2)] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--combat)]">Lote {i + 1}</span>
                <button onClick={() => removeTier(i)} className="text-xs text-[var(--dim)] hover:text-[#E0A62A]">
                  Eliminar
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={label}>Texto (rango de fechas)</label>
                  <input className={input} value={t.label} onChange={(e) => updateTier(i, 'label', e.target.value)} placeholder="Preventa · hasta el 20 de septiembre" />
                </div>
                <div>
                  <label className={label}>Precio (USD)</label>
                  <input type="number" min="0" className={input} value={t.price} onChange={(e) => updateTier(i, 'price', e.target.value)} placeholder="9" />
                </div>
                <div>
                  <label className={label}>Válido hasta (CDMX)</label>
                  <input type="datetime-local" className={input} value={t.endLocal} onChange={(e) => updateTier(i, 'endLocal', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={addTier} className="mt-4 text-sm font-semibold text-[var(--combat)]">
          + Agregar lote
        </button>
        <p className="mt-2 text-[11px] text-[var(--dim)]">
          El precio activo es el del primer lote cuya fecha "válido hasta" aún no ha pasado.
        </p>
      </section>

      {/* Enlaces */}
      <section className="ws-panel mb-5 p-5">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text)]">Enlaces</h2>
        <div className="space-y-4">
          <div>
            <label className={label}>Link de pago (checkout)</label>
            <input className={input} value={checkoutUrl} onChange={(e) => setCheckoutUrl(e.target.value)} placeholder="https://pay.hotmart.com/..." />
          </div>
          <div>
            <label className={label}>Video VSL (embed Vimeo/YouTube)</label>
            <input className={input} value={vslUrl} onChange={(e) => setVslUrl(e.target.value)} placeholder="https://player.vimeo.com/video/..." />
            <p className="mt-1 text-[11px] text-[var(--dim)]">Vimeo: https://player.vimeo.com/video/ID · YouTube: https://www.youtube.com/embed/ID</p>
          </div>
        </div>
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
