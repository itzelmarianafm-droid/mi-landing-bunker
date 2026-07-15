// =====================================================================
// Configuración del Workshop "Prospecta sin Rogar" ($9)
// =====================================================================

// Fecha/hora del evento: 9 ago 2026, 9:00 AM hora Ciudad de México.
// México ya no usa horario de verano → CDMX es UTC-6 todo el año.
// El offset fijo -06:00 hace que el contador sea igual para todos, sin
// importar la zona horaria del navegador.
export const EVENT_TARGET_ISO = '2026-08-09T09:00:00-06:00';
export const EVENT_TARGET_MS = Date.parse(EVENT_TARGET_ISO);

export const EVENT = {
  dateLabel: 'Sábado 9 de agosto',
  timeLabel: '9:00 AM hora CDMX',
  duration: '4 horas',
  live: 'En vivo',
  recording: 'Grabación disponible 15 días',
  host: 'Paco Anguiano',
};

// Cupo: total y umbral para revelar "¡Solo quedan X!".
export const SEATS_TOTAL = 50;
export const SEATS_THRESHOLD = Number(process.env.NEXT_PUBLIC_WORKSHOP_SEATS_THRESHOLD || 10);

// Lugares restantes REALES. Solo se muestra el número si esta variable existe
// (la actualiza Mariana o un webhook del checkout). Si no hay dato, NO se
// inventa ningún número: solo se ve el badge estático "Cupo limitado: 50 lugares".
const RAW_REMAINING = process.env.NEXT_PUBLIC_WORKSHOP_SEATS_REMAINING;
export const SEATS_REMAINING: number | null =
  RAW_REMAINING !== undefined && RAW_REMAINING !== '' && !Number.isNaN(Number(RAW_REMAINING))
    ? Number(RAW_REMAINING)
    : null;

// Checkout del workshop ($9). Se usa solo si es una URL http(s) válida; si no,
// los botones llevan a la sección de registro (#registro) sin romperse.
const RAW_CHECKOUT = (process.env.NEXT_PUBLIC_WORKSHOP_CHECKOUT_URL || '').trim();
export const CHECKOUT_URL = /^https?:\/\//.test(RAW_CHECKOUT) ? RAW_CHECKOUT : '';

// VSL: embed de YouTube/Vimeo/Wistia. Si no está, se muestra placeholder.
export const VSL_EMBED_URL = (process.env.NEXT_PUBLIC_WORKSHOP_VSL_URL || '').trim();
