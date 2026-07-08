'use client';

// URLs desde variables de entorno (con fallbacks seguros).
const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '';
const DIAGNOSTICO_URL = process.env.NEXT_PUBLIC_DIAGNOSTICO_URL || '/diagnostico';

type Action = 'checkout' | 'anchor' | 'diagnostico';

interface Props {
  action: Action;
  children: React.ReactNode;
  className?: string;
}

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'reto-7d' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[reto]', payload);
}

export default function CtaButton({ action, children, className = '' }: Props) {
  let href = '#pago';
  const attrs: Record<string, string> = {};

  if (action === 'checkout') {
    href = CHECKOUT_URL || '#pago'; // si no hay checkout aún, lleva a la sección de pago
  } else if (action === 'diagnostico') {
    href = DIAGNOSTICO_URL;
  }

  const handleClick = () => {
    if (action === 'checkout') track('cta_checkout_click');
    else if (action === 'diagnostico') track('cta_diagnostico_click');
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...attrs}>
      {children}
    </a>
  );
}
