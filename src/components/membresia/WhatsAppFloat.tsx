import { WHATSAPP_SOPORTE } from '@/config/offer';

const MSG = 'Hola, tengo una duda sobre la membresía del Búnker';

/** Botón flotante de soporte (dudas y problemas de pago, incluye sin tarjeta). */
export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_SOPORTE}?text=${encodeURIComponent(MSG)}`;
  return (
    <a className="wafloat" href={href} target="_blank" rel="noopener">
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L4 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.6 4.6-10.1 10.3-10.1 5.6 0 10.2 4.5 10.2 10.1S21.6 25.6 16 25.6zm5.8-7.6c-.3-.2-1.9-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
      </svg>
      <span>¿Dudas o problemas con tu pago?</span>
    </a>
  );
}
