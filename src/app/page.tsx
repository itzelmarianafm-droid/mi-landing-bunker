import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Pillars from '@/components/Pillars';
import ValueStack from '@/components/ValueStack';
import HowItWorks from '@/components/HowItWorks';
import Coaches from '@/components/Coaches';
import ForWhom from '@/components/ForWhom';
import Pricing from '@/components/Pricing';
import Mission from '@/components/Mission';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Pillars />
        <ValueStack />
        <HowItWorks />
        <Coaches />
        <ForWhom />
        <Pricing />
        <Mission />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
