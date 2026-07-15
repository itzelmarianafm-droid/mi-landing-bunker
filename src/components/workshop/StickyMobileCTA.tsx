import CtaButton from './CtaButton';
import Countdown from './Countdown';

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-[var(--dim)]">Cierra en</span>
          <Countdown variant="mini" />
        </div>
        <CtaButton className="flex-1 px-4 py-3 text-sm">Reservar — $9</CtaButton>
      </div>
    </div>
  );
}
