import Reveal from './Reveal';
import type { WorkshopConfig } from '@/lib/workshop/config';

export default function HowItWorks({ cfg }: { cfg: WorkshopConfig }) {
  const steps: [string, string][] = [
    ['Reserva tu lugar', 'y recibe el acceso en tu correo.'],
    [
      `Conéctate en vivo el ${cfg.dateLabel.toLowerCase()}, ${cfg.timeLabel}.`,
      'Ten tu WhatsApp o lista de contactos a la mano: vas a trabajar.',
    ],
    ['Sales con tu mensaje listo y tu rutina diaria.', 'Empiezas a prospectar ese mismo día.'],
  ];

  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">Cómo funciona</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            En 3 pasos.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map(([title, rest], i) => (
            <Reveal key={title}>
              <div className="ws-panel h-full p-6">
                <span className="text-3xl font-black text-[var(--combat)]">{i + 1}</span>
                <p className="mt-2 text-[15px] leading-snug">
                  <strong className="font-bold text-[var(--text)]">{title}</strong>{' '}
                  <span className="ws-muted">{rest}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
