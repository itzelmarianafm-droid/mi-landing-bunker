'use client';

function track(event: string) {
  const w = window as unknown as {
    dataLayer?: unknown[];
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
  };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);

  if (typeof w.fbq === 'function') {
    w.fbq('track', 'InitiateCheckout', { value: 9.0, currency: 'USD' });
  }
}

/** Botón que lleva al pago del lote activo (o "Registro cerrado" si no hay). */
export default function CtaButton({
  href,
  children,
  className = '',
}: {
  href: string | null;
  children: React.ReactNode;
  className?: string;
}) {
  if (!href) {
    return (
      <span className={`btn ${className}`} aria-disabled="true">
        Registro cerrado
      </span>
    );
  }
  return (
    <a
      id="btn-comprar"
      href={href}
      onClick={() => track('cta_workshop_click')}
      className={`btn btn-primary ${className}`}
    >
      {children}
    </a>
  );
}
