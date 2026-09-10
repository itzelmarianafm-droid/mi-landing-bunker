import Header from '@/components/workshop/Header';
import Hero from '@/components/workshop/Hero';
import Problem from '@/components/workshop/Problem';
import Solution from '@/components/workshop/Solution';
import HowItWorks from '@/components/workshop/HowItWorks';
import Authority from '@/components/workshop/Authority';
import FAQ from '@/components/workshop/FAQ';
import FinalCTA from '@/components/workshop/FinalCTA';
import Footer from '@/components/workshop/Footer';
import StickyMobileCTA from '@/components/workshop/StickyMobileCTA';
import WorkshopProvider from '@/components/workshop/WorkshopProvider';
import { getWorkshopConfig } from '@/lib/workshop/getConfig';

// Renderiza en cada request para reflejar de inmediato los cambios del panel admin.
export const dynamic = 'force-dynamic';

export default async function WorkshopPage() {
  const cfg = await getWorkshopConfig();

  return (
    <WorkshopProvider
      config={{
        tiers: cfg.tiers,
        eventMs: cfg.eventMs,
        checkoutUrl: cfg.checkoutUrl,
        vslUrl: cfg.vslUrl,
      }}
    >
      <Header />
      <main>
        <Hero cfg={cfg} />
        <Problem />
        <Solution />
        <HowItWorks cfg={cfg} />
        <Authority />
        <FAQ cfg={cfg} />
        <FinalCTA cfg={cfg} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </WorkshopProvider>
  );
}
