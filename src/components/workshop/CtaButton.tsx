'use client';

import { useEffect, useState } from 'react';
import { getActiveTier } from '@/lib/workshop/config';
import { useWorkshopConfig } from './WorkshopProvider';

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
  const { tiers, eventMs, checkoutUrl } = useWorkshopConfig();
  const [closed, setClosed] = useState(false);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const tier = getActiveTier(tiers, Date.now());
    if (!tier || eventMs - Date.now() <= 0) {
      setClosed(true);
    } else {
      setPrice(tier.price);
    }
  }, [tiers, eventMs]);

  if (closed) {
    return (
      <span className={`ws-cta ${className}`} aria-disabled="true">
        Registro cerrado
      </span>
    );
  }

  const href = checkoutUrl || '#registro';
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
