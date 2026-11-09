import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isValidToken, COOKIE_NAME } from '@/lib/workshop/auth';
import { getWorkshopConfig } from '@/lib/workshop/getConfig';
import AdminForm from '@/components/workshop/AdminForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Panel · Workshop Prospecta sin Rogar',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const c = await cookies();
  if (!isValidToken(c.get(COOKIE_NAME)?.value)) {
    redirect('/workshop/admin/login');
  }

  const cfg = await getWorkshopConfig();
  return <AdminForm initial={cfg} />;
}
