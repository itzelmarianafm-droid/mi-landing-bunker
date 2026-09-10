import crypto from 'crypto';

// Sesión del panel de admin: cookie firmada con HMAC (no falsificable sin el
// secreto). Requiere las variables de entorno ADMIN_EMAIL, ADMIN_PASSWORD y
// ADMIN_SESSION_SECRET (todas secretas, solo del lado del servidor).

export const COOKIE_NAME = 'ws_admin';

const SECRET = process.env.ADMIN_SESSION_SECRET || '';

export function makeToken(): string {
  return crypto.createHmac('sha256', SECRET).update('ws-admin-v1').digest('hex');
}

export function isValidToken(token?: string | null): boolean {
  if (!SECRET || !token) return false;
  const expected = makeToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function checkCredentials(email: string, password: string): boolean {
  const e = process.env.ADMIN_EMAIL || '';
  const p = process.env.ADMIN_PASSWORD || '';
  return !!e && !!p && email.trim().toLowerCase() === e.trim().toLowerCase() && password === p;
}
