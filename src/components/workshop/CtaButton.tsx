'use client';

import { useEffect, useState } from 'react';
import { CHECKOUT_URL, EVENT_TARGET_MS } from '@/lib/workshop/config';
import { getActiveTier } from '@/lib/workshop/pricing';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Si es true, agrega el precio del lote actual al final (ej. "— $9 USD"). */
  withPrice?: boolean;
}

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);
}

export default function CtaButton({ children, className = '', withPrice = false }: Props) {
  const [closed, setClosed] = useState(false);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const tier = getActiveTier(Date.now());
    // Registro cerrado si ya pasó el evento o ya no hay lote activo.
    if (!tier || EVENT_TARGET_MS - Date.now() <= 0) {
      setClosed(true);
    } else {
      setPrice(tier.price);
    }
  }, []);

  if (closed) {
    return (
      <span className={`ws-cta ${className}`} aria-disabled="true">
        Registro cerrado
      </span>
    );
  }

  // Sin checkout aún → lleva a la sección de registro.
  const href = CHECKOUT_URL || '#registro';
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      onClick={() => track('cta_workshop_click')}
      className={`ws-cta ${className}`}
      {...(external ? { target: '_self', rel: 'noopener' } : {})}
    >
      {children}
      {withPrice && price !== null ? ` — $${price} USD` : ''}
    </a>
  );
}
