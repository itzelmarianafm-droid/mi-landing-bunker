import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './workshop.css';

// Tipografía de la landing v2 (Referencia/landing-v2.html). El panel de admin
// también la usa. La metadata de /workshop se genera en page.tsx con los datos
// reales de la sesión (lote y precio).
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  variable: '--font-plex',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable} ws`}>{children}</div>
  );
}
