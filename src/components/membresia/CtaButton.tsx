'use client';

import { CHECKOUT } from '@/config/offer';
import { trackInitiateCheckout } from './track';

type Props = {
  /** 'mensual' | 'anual' abren Hotmart; 'scroll' baja a los planes. */
  action: 'mensual' | 'anual' | 'scroll';
  children: React.ReactNode;
  /** Clases extra (ej. "lg"). La base siempre es "btn". */
  className?: string;
};

/**
 * Botón de la membresía. Abre el checkout de Hotmart del plan y dispara el
 * evento de analítica; 'scroll' baja a #planes. Si no hay URL configurada,
 * nunca deja al usuario sin acción: baja a #planes.
 */
export default function CtaButton({ action, children, className = '' }: Props) {
  const isPlan = action === 'mensual' || action === 'anual';
  const url = action === 'mensual' ? CHECKOUT.mensual : action === 'anual' ? CHECKOUT.anual : '';
  const valid = isPlan && /^https?:\/\//.test(url);

  const href = valid ? url : '#planes';
  const external = valid;

  const handleClick = () => {
    if (isPlan) trackInitiateCheckout(action);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`btn ${className}`.trim()}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
