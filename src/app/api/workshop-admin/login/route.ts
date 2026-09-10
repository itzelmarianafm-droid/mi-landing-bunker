import { cookies } from 'next/headers';
import { checkCredentials, makeToken, COOKIE_NAME } from '@/lib/workshop/auth';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  let email = '';
  let password = '';
  try {
    const body = await req.json();
    email = String(body.email || '');
    password = String(body.password || '');
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!checkCredentials(email, password)) {
    return Response.json({ ok: false, error: 'credenciales inválidas' }, { status: 401 });
  }

  const c = await cookies();
  c.set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12, // 12 horas
  });

  return Response.json({ ok: true });
}
