import Reveal from './Reveal';
import CtaButton from './CtaButton';
import Countdown from './Countdown';
import SeatBadge from './SeatBadge';

export default function FinalCTA() {
  return (
    <section id="registro" className="border-t-2 border-[var(--combat)] bg-[var(--panel)] scroll-mt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">Reserva tu lugar</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Un solo día. Un solo mensaje. El que cambia cómo prospectas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed ws-muted">
            El workshop es en vivo el sábado 9 de agosto y no se repite. Son solo 50 lugares, para que
            Paco pueda revisar tu trabajo.
          </p>

          <div className="mt-7 flex justify-center">
            <Countdown variant="full" />
          </div>

          <div className="mt-6 flex justify-center">
            <SeatBadge />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed ws-muted">
            Por $9 USD te llevas 4 horas en vivo, tu mensaje de apertura listo, una rutina para
            prospectar todos los días y acceso a la grabación por 15 días. Y vas con garantía: si no
            sales con algo de valor, te devolvemos tus $9.{' '}
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
              claridad para prospectar— te devolvemos tus $9. Sin letra chica.
            </p>
          </div>

          <CtaButton className="mt-8 w-full px-8 py-5 text-base sm:w-auto sm:text-lg">
            Reservar mi lugar — $9 USD
          </CtaButton>
          <p className="mt-3 text-xs ws-muted">
            Acceso inmediato por correo · Grabación disponible 15 días · Sábado 9 de agosto, 9:00 AM
            (CDMX).
          </p>
          <p className="mt-2 text-[11px] text-[var(--dim)]">
            Cuando el reloj llegue a cero —o se llenen los 50 lugares— se cierra el registro.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
