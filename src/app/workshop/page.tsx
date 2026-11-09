import type { Metadata } from 'next';
import Header from '@/components/workshop/Header';
import Hero from '@/components/workshop/Hero';
import Ticker from '@/components/workshop/Ticker';
import Diagnostico from '@/components/workshop/Diagnostico';
import Problem from '@/components/workshop/Problem';
import SantoGrial from '@/components/workshop/SantoGrial';
import Modulos from '@/components/workshop/Modulos';
import Ejemplos from '@/components/workshop/Ejemplos';
import Credenciales from '@/components/workshop/Credenciales';
import Entrenadores from '@/components/workshop/Entrenadores';
import Testimonios from '@/components/workshop/Testimonios';
import Inventario from '@/components/workshop/Inventario';
import Lotes from '@/components/workshop/Lotes';
import FAQ from '@/components/workshop/FAQ';
import FinalCTA from '@/components/workshop/FinalCTA';
import Footer from '@/components/workshop/Footer';
import StickyMobileCTA from '@/components/workshop/StickyMobileCTA';
import { getLotes, getWorkshopConfig } from '@/lib/workshop/getConfig';
import { getVslPoster } from '@/lib/workshop/poster';
import { formatPrecio } from '@/lib/workshop/config';
import './landing.css';

// Renderiza en cada request para reflejar de inmediato los cambios del panel admin.
export const dynamic = 'force-dynamic';

const TITLE = 'Prospecta sin Rogar — Workshop en vivo | El Búnker del Vendedor';

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getWorkshopConfig();
  const { actual } = await getLotes();
  const description =
    'Workshop en vivo con Paco Anguiano y Mariana Franco. Consigue de 5 a 10 prospectos al día, sin rogar y sin que te dejen en visto.' +
    (actual ? ` ${actual.label} desde $${formatPrecio(actual.price)} ${cfg.currency}.` : '');

  return {
    title: TITLE,
    description,
    alternates: { canonical: '/workshop' },
    openGraph: { title: TITLE, description, url: '/workshop', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Prospecta sin Rogar — Workshop en vivo', description },
  };
}

export default async function WorkshopPage() {
  const cfg = await getWorkshopConfig();
  const lotes = await getLotes();
  const vslPoster = await getVslPoster(cfg.vslUrl);

  return (
    <div className="psr">
      <Header cfg={cfg} lotes={lotes} />
      <main>
        <Hero cfg={cfg} lotes={lotes} vslPoster={vslPoster} />
        <Ticker />
        <Diagnostico />
        <Problem />
        <SantoGrial />
        <Modulos />
        <Ejemplos />
        <Credenciales />
        <Entrenadores />
        <Testimonios />
        <Inventario />
        <Lotes cfg={cfg} lotes={lotes} />
        <FAQ cfg={cfg} />
        <FinalCTA cfg={cfg} lotes={lotes} />
      </main>
      <Footer />
      <StickyMobileCTA cfg={cfg} lotes={lotes} />
    </div>
  );
}
