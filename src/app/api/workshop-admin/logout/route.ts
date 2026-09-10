import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/lib/workshop/auth';

export const runtime = 'nodejs';

export async function POST() {
  const c = await cookies();
  c.delete(COOKIE_NAME);
  return Response.json({ ok: true });
}
