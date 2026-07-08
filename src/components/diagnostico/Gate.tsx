'use client';

import { useState } from 'react';
import { COUNTRIES } from '@/lib/diagnostico/data';

export interface LeadData {
  name: string;
  email: string;
  whatsapp: string;      // combinado: "+52 5512345678"
  countryCode: string;   // "+52"
  countryName: string;   // "México"
  industry: string;
  goal: string;
}

interface Props {
  onSubmit: (lead: LeadData) => void;
  submitting: boolean;
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Gate({ onSubmit, submitting }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryIdx, setCountryIdx] = useState(0); // México por default
  const [number, setNumber] = useState('');
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [error, setError] = useState('');

  const country = COUNTRIES[countryIdx];

  const handleNumber = (raw: string) => {
    // Solo dígitos, en tiempo real.
    setNumber(raw.replace(/\D/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !emailOk(email) || number.length < 7) {
      setError('Completa nombre, email y tu WhatsApp con lada de país para ver tu resultado.');
      return;
    }
    setError('');
    onSubmit({
      name: name.trim(),
      email: email.trim(),
      whatsapp: `${country.code} ${number}`,
      countryCode: country.code,
      countryName: country.name,
      industry: industry.trim(),
      goal: goal.trim(),
    });
  };

  const inputCls =
    'w-full rounded-md border border-[var(--line-strong)] bg-[var(--panel-2)] px-4 py-3 text-[15px] text-[var(--text)] placeholder:text-[var(--dim)] focus:border-[var(--combat)] focus:outline-none';

  return (
    <section className="diag-screen mx-auto max-w-lg px-4 pb-24 pt-10 sm:px-6">
      <p className="diag-eyebrow mb-3">Diagnóstico procesado · 100%</p>
      <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
        Tu resultado está listo.
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
        Dinos a dónde enviarlo. Recibirás tu perfil completo, tus 2 fugas prioritarias y tu plan de
        primera acción.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Nombre *
          </label>
          <input
            className={inputCls}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Email *
          </label>
          <input
            className={inputCls}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        {/* WhatsApp con lada */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            WhatsApp *
          </label>
          <div className="flex gap-2">
            <select
              aria-label="Código de país"
              className="w-28 shrink-0 appearance-none rounded-md border border-[var(--line-strong)] bg-[var(--panel-2)] px-3 py-3 text-[15px] text-[var(--text)] focus:border-[var(--combat)] focus:outline-none sm:w-32"
              value={countryIdx}
              onChange={(e) => setCountryIdx(Number(e.target.value))}
            >
              {COUNTRIES.map((c, i) => (
                <option key={i} value={i}>
                  {c.code} {c.name}
                </option>
              ))}
            </select>
            <input
              className={`${inputCls} min-w-0 flex-1`}
              value={number}
              onChange={(e) => handleNumber(e.target.value)}
              placeholder="Número (solo dígitos)"
              inputMode="numeric"
              autoComplete="tel-national"
            />
          </div>
          <p className="mt-1 text-[11px] text-[var(--dim)]">Incluye tu lada de país. Mínimo 7 dígitos.</p>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Industria / oferta
          </label>
          <input
            className={inputCls}
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Qué vendes"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Meta comercial actual
          </label>
          <input
            className={inputCls}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Qué quieres lograr"
          />
        </div>

        {error && <p className="text-sm font-semibold text-[#E0A62A]">{error}</p>}

        <button type="submit" disabled={submitting} className="diag-cta w-full px-8 py-4 text-base">
          {submitting ? 'Procesando…' : 'Ver mi resultado →'}
        </button>

        <p className="text-[11px] leading-snug text-[var(--dim)]">
          Usamos tus datos solo para entregarte el diagnóstico y tu ruta. Sin spam.
        </p>
      </form>
    </section>
  );
}
