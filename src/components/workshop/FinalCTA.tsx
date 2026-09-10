import Reveal from './Reveal';
import CtaButton from './CtaButton';
import Countdown from './Countdown';
import PriceTiers from './PriceTiers';
import type { WorkshopConfig } from '@/lib/workshop/config';

export default function FinalCTA({ cfg }: { cfg: WorkshopConfig }) {
  return (
    <section id="registro" className="border-t-2 border-[var(--combat)] bg-[var(--panel)] scroll-mt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">Reserva tu lugar</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Un solo día. Un solo mensaje. El que cambia cómo prospectas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed ws-muted">
            El workshop es en vivo el {cfg.dateLabel.toLowerCase()} y no se repite. El precio sube por
            lotes: entre antes y paga menos.
          </p>

          <div className="mt-7 flex justify-center">
            <Countdown variant="full" />
          </div>

          <div className="mt-6 flex justify-center">
            <PriceTiers />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed ws-muted">
            Te llevas {cfg.duration} en vivo, tu mensaje de apertura listo, una rutina para prospectar
            todos los días y acceso a la grabación por 15 días. Y vas con garantía: si no sales con
            algo de valor, te devolvemos tu dinero.{' '}
            <strong className="font-bold text-[var(--text)]">
              El único riesgo real es seguir otra semana viendo el cursor parpadear.
            </strong>
          </p>

          {/* Garantía */}
          <div className="mx-auto mt-8 max-w-lg rounded-xl border border-[var(--combat)]/50 bg-[var(--panel-2)] p-6 text-left">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--combat)]">
              <span aria-hidden>🛡</span> Garantía de reembolso
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
              Haz el workshop completo. Si no sales con algo de valor —tu mensaje, tu rutina, tu
              claridad para prospectar— te devolvemos tu dinero. Sin letra chica.
            </p>
          </div>

          <CtaButton withPrice className="mt-8 w-full px-8 py-5 text-base sm:w-auto sm:text-lg">
            Reservar mi lugar
          </CtaButton>
          <p className="mt-3 text-xs ws-muted">
            Acceso inmediato por correo · Grabación disponible 15 días · {cfg.dateLabel}, {cfg.timeLabel}.
          </p>
          <p className="mt-2 text-[11px] text-[var(--dim)]">
            Cuando el reloj llegue a cero se cierra el registro. Antes de eso, el precio sube por lotes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
