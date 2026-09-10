import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './workshop.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prospecta sin Rogar — Workshop en vivo | El Búnker del Vendedor',
  description:
    'Sábado 3 de octubre, 9 AM CDMX. 5 horas en vivo con Paco Anguiano. Abre conversaciones de venta sin rogar y genera 5 a 10 prospectos al día. Desde $9 USD en preventa.',
  alternates: { canonical: '/workshop' },
  openGraph: {
    title: 'Prospecta sin Rogar — Workshop en vivo | El Búnker del Vendedor',
    description:
      'Sábado 3 de octubre, 9 AM CDMX. 5 horas en vivo con Paco Anguiano. Genera 5 a 10 prospectos al día. Desde $9 USD en preventa.',
    url: '/workshop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospecta sin Rogar — Workshop en vivo',
    description: 'Sábado 3 de octubre, 9 AM CDMX. 5 horas con Paco Anguiano. Desde $9 USD.',
  },
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${montserrat.variable} ws`}>{children}</div>;
}
