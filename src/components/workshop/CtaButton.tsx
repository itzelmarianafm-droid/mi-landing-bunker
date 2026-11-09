'use client';

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);
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
    <a href={href} onClick={() => track('cta_workshop_click')} className={`btn btn-primary ${className}`}>
      {children}
    </a>
  );
}
