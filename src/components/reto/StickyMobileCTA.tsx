import CtaButton from './CtaButton';

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--bg)]/95 p-3 backdrop-blur-md sm:hidden">
      <CtaButton action="anchor" className="reto-cta w-full px-6 py-3.5 text-sm">
        Entrar al Reto 7D — $24 USD
      </CtaButton>
    </div>
  );
}
