// =====================================================================
// Configuración del Workshop "Prospecta sin Rogar" ($9)
// =====================================================================

// Fecha/hora del evento: 3 oct 2026, 9:00 AM hora Ciudad de México.
// México ya no usa horario de verano → CDMX es UTC-6 todo el año.
// El offset fijo -06:00 hace que el contador sea igual para todos, sin
// importar la zona horaria del navegador.
export const EVENT_TARGET_ISO = '2026-10-03T09:00:00-06:00';
export const EVENT_TARGET_MS = Date.parse(EVENT_TARGET_ISO);

export const EVENT = {
  dateLabel: 'Sábado 3 de octubre',
  timeLabel: '9:00 AM hora CDMX',
  duration: '5 horas',
  live: 'En vivo',
  recording: 'Grabación disponible 15 días',
  host: 'Paco Anguiano',
};

// Nota: la escasez ahora se comunica con venta por lotes de precio
// (ver src/lib/workshop/pricing.ts), no con contador de cupo.

// Checkout del workshop. Se usa solo si es una URL http(s) válida; si no,
// los botones llevan a la sección de registro (#registro) sin romperse.
const RAW_CHECKOUT = (process.env.NEXT_PUBLIC_WORKSHOP_CHECKOUT_URL || '').trim();
export const CHECKOUT_URL = /^https?:\/\//.test(RAW_CHECKOUT) ? RAW_CHECKOUT : '';

// VSL: embed de YouTube/Vimeo/Wistia. Si no está, se muestra placeholder.
export const VSL_EMBED_URL = (process.env.NEXT_PUBLIC_WORKSHOP_VSL_URL || '').trim();
