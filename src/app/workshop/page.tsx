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

export default function WorkshopPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Authority />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
