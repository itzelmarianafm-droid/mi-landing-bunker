import Analytics from '@/components/membresia/Analytics';
import Hero from '@/components/membresia/Hero';
import Problem from '@/components/membresia/Problem';
import Solution from '@/components/membresia/Solution';
import ValueStack from '@/components/membresia/ValueStack';
import Plans from '@/components/membresia/Plans';
import HowItWorks from '@/components/membresia/HowItWorks';
import Mentors from '@/components/membresia/Mentors';
import FAQ from '@/components/membresia/FAQ';
import FinalCTA from '@/components/membresia/FinalCTA';
import Footer from '@/components/membresia/Footer';
import WhatsAppFloat from '@/components/membresia/WhatsAppFloat';
import PopoverToggle from '@/components/membresia/PopoverToggle';

export default function MembresiaPage() {
  return (
    <>
      <Analytics />
      <Hero />
      <Problem />
      <Solution />
      <ValueStack />
      <Plans />
      <HowItWorks />
      <Mentors />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <PopoverToggle />
    </>
  );
}
