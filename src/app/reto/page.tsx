import Header from '@/components/reto/Header';
import Hero from '@/components/reto/Hero';
import Problem from '@/components/reto/Problem';
import Solution from '@/components/reto/Solution';
import Map7Days from '@/components/reto/Map7Days';
import HowItWorks from '@/components/reto/HowItWorks';
import Authority from '@/components/reto/Authority';
import Testimonials from '@/components/reto/Testimonials';
import FAQ from '@/components/reto/FAQ';
import FinalCTA from '@/components/reto/FinalCTA';
import Footer from '@/components/reto/Footer';
import StickyMobileCTA from '@/components/reto/StickyMobileCTA';

export default function RetoPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Map7Days />
        <HowItWorks />
        <Authority />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
