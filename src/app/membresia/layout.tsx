import type { Metadata } from 'next';
import { Anton, Barlow, Barlow_Condensed } from 'next/font/google';
import './membresia.css';

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

const TITLE = 'Membresía El Búnker del Vendedor';
const DESCRIPTION =
  'Un sistema de ventas que sí sostienes, acompañamiento en vivo cada semana y la mentalidad para vender sin miedo ni rogar. Vender no se improvisa: se entrena.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/membresia' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/membresia',
    type: 'website',
    images: [{ url: '/membresia/mariana-paco.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/membresia/mariana-paco.png'],
  },
};

export default function MembresiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${anton.variable} ${barlowCondensed.variable} ${barlow.variable} membresia`}
    >
      {children}
    </div>
  );
}
