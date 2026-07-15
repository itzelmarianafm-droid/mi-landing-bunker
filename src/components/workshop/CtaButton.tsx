'use client';

import { useEffect, useState } from 'react';
import { CHECKOUT_URL, EVENT_TARGET_MS, SEATS_REMAINING } from '@/lib/workshop/config';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);
}

export default function CtaButton({ children, className = '' }: Props) {
  const [closedReason, setClosedReason] = useState<null | 'time' | 'full'>(null);

  useEffect(() => {
    if (SEATS_REMAINING !== null && SEATS_REMAINING <= 0) {
      setClosedReason('full');
    } else if (EVENT_TARGET_MS - Date.now() <= 0) {
      setClosedReason('time');
    }
  }, []);

  if (closedReason) {
    return (
      <span className={`ws-cta ${className}`} aria-disabled="true">
        {closedReason === 'full' ? 'Registro lleno' : 'Registro cerrado'}
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
    </a>
  );
}
