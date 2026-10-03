/**
 * Página de gracias post-compra (/graciasmembresia).
 * Edita aquí los 3 enlaces/datos SIN tocar el diseño.
 *
 * Recordatorio: pega la URL https://elbunkerdelvendedor.com/graciasmembresia
 * en Hotmart → Producto → configuración de la página de gracias / URL de
 * agradecimiento, para que se muestre tras aprobar el pago.
 */

/** Enlace de invitación al grupo de WhatsApp de alumnos (acción principal). */
export const GRUPO_WHATSAPP = (
  process.env.NEXT_PUBLIC_GRUPO_WHATSAPP ||
  "https://chat.whatsapp.com/Hi22sbNzv6g8z1tWunUizi"
).trim();

/** WhatsApp de soporte (dudas y problemas de pago). */
export const WHATSAPP_SOPORTE = (
  process.env.NEXT_PUBLIC_WHATSAPP_SOPORTE || "525539013930"
).trim();

/** Correo de soporte. */
export const CORREO_SOPORTE = (
  process.env.NEXT_PUBLIC_CORREO_SOPORTE || "itzelmarianafm@gmail.com"
).trim();
