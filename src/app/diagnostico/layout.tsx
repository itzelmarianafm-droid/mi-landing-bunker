import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './diagnostico.css';

// Montserrat es la tipografía oficial de marca para el diagnóstico.
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Diagnóstico de los 6 Pilares — El Búnker del Vendedor',
  description:
    'En 4 minutos descubre en cuál de tus 6 pilares comerciales se está fugando tu operación y qué entrenar primero. No vendemos motivación. Construimos vendedores.',
  robots: { index: true, follow: true },
};

export default function DiagnosticoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${montserrat.variable} diag diag-grid`}>{children}</div>;
}
