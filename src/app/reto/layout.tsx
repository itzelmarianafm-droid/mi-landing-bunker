import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './reto.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reto 7D · Activación Comercial — El Búnker del Vendedor',
  description:
    'En 7 días dejas de vender a ciegas. 35 min al día para ordenar tu operación y generar interesados reales. $24 USD, acceso inmediato.',
  alternates: { canonical: '/reto' },
  openGraph: {
    title: 'Reto 7D · Activación Comercial — El Búnker del Vendedor',
    description:
      'En 7 días dejas de vender a ciegas. 35 min al día para ordenar tu operación y generar interesados reales. $24 USD, acceso inmediato.',
    url: '/reto',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reto 7D · Activación Comercial',
    description:
      'En 7 días dejas de vender a ciegas. 35 min al día. $24 USD, acceso inmediato.',
  },
};

export default function RetoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${montserrat.variable} reto`}>{children}</div>;
}
