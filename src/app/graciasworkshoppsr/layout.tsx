import type { Metadata } from 'next';
import { Anton, Barlow, Barlow_Condensed } from 'next/font/google';
import '@/components/gracias/thankyou.css';

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const TITLE = 'Workshop «Prospecta sin Rogar» · El Búnker del Vendedor';
const DESCRIPTION =
  'Pago confirmado. Entra al grupo de WhatsApp del workshop y revisa tu correo para empezar.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Post-compra: no debe indexarse ni aparecer en buscadores.
  robots: { index: false, follow: false },
};

export default function GraciasWorkshopPsrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${anton.variable} ${barlowCondensed.variable} ${barlow.variable} gracias`}
    >
      {children}
    </div>
  );
}
