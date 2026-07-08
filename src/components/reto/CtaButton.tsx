'use client';

// El diagnóstico vive en el mismo dominio → ruta relativa fija (a prueba de typos).
const DIAGNOSTICO_URL = '/diagnostico';

// El checkout sí puede ser un dominio externo (Hotmart). Solo se usa si es una
// URL http(s) válida; si está mal escrita o vacía, cae a la sección de pago.
const RAW_CHECKOUT = (process.env.NEXT_PUBLIC_CHECKOUT_URL || '').trim();
const CHECKOUT_URL = /^https?:\/\//.test(RAW_CHECKOUT) ? RAW_CHECKOUT : '';

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
