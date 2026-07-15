import CtaButton from './CtaButton';
import Countdown from './Countdown';
import SeatBadge from './SeatBadge';
import Vsl from './Vsl';
import { EVENT } from '@/lib/workshop/config';

const EVENT_DATA = [
  ['📅', EVENT.dateLabel],
  ['🕘', EVENT.timeLabel],
  ['⏱', EVENT.duration],
  ['🔴', EVENT.live],
  ['🎥', EVENT.recording],
];

export default function Hero() {
  return (
    <section className="ws-grid border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 md:py-16">
        <p className="ws-eyebrow mb-4">
          Workshop en vivo · Sábado 9 de agosto · 9:00 AM (CDMX)
        </p>
        <h1 className="text-3xl font-black uppercase leading-[1.06] tracking-tight sm:text-4xl md:text-5xl">
          Prospecta sin rogar: de{' '}
          <span className="text-[var(--combat)]">5 a 10 prospectos</span> al día.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed ws-muted sm:text-base">
          El método para abrir conversaciones de venta que la gente sí responde —sin sonar
          desesperado, sin perseguir y sin que te dejen en visto. En 4 horas en vivo con Paco
          Anguiano, sales con tu mensaje de apertura escrito y listo para mandar hoy.
        </p>

        {/* VSL */}
        <div className="mx-auto mt-8 max-w-2xl">
          <Vsl />
        </div>

        {/* CTA + precio */}
        <div className="mt-7 flex flex-col items-center gap-3">
          <CtaButton className="w-full px-8 py-4 text-base sm:w-auto sm:text-lg">
            Quiero mi lugar — $9 USD
          </CtaButton>
          <SeatBadge />
        </div>

        {/* Contador */}
        <div className="mt-8 flex justify-center">
          <Countdown variant="full" />
        </div>

        {/* Datos del evento */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-[var(--muted)]">
          {EVENT_DATA.map(([icon, label]) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <span aria-hidden>{icon}</span> {label}
            </span>
          ))}
        </div>

        {/* Trust bar */}
        <p className="mx-auto mt-8 max-w-xl border-t border-[var(--line)] pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dim)]">
          Imparte Paco Anguiano · 19 años formando vendedores · Autor de "Por supuesto que puedes
          vender".
        </p>
      </div>
    </section>
  );
}
