import Reveal from './Reveal';
import CtaButton from './CtaButton';

const CARDS = [
  {
    title: 'El método del primer mensaje (estructura de 5 piezas).',
    desc: 'Reductor de presión, justificador por industria y CTA que no espanta.',
    win: 'Sales con TU mensaje de apertura escrito, listo para mandar hoy.',
  },
  {
    title: 'La rutina para generar de 5 a 10 prospectos al día.',
    desc: 'De dónde sacar gente sin quedarte sin lista, en 30 minutos diarios.',
    win: 'Nunca más "no tengo a quién escribirle".',
  },
  {
    title: 'Seguimiento sin perseguir.',
    desc: 'Cómo clasificar y avanzar la conversación con postura cuando responden.',
    win: 'Dejas de quemar prospectos interesados.',
  },
  {
    title: 'Postura de profesional (no de rogón).',
    desc: 'Acercarte desde la seguridad, no desde la necesidad.',
    win: 'La gente te trata distinto cuando dejas de perseguir.',
  },
];

export default function Solution() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">El workshop</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            4 horas en vivo para salir con tu mensaje listo y una rutina que llena tu agenda.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed ws-muted">
            "Prospecta sin Rogar" no es una charla motivacional. Es un workshop de trabajo: durante 4
            horas construyes, en vivo y con Paco corrigiéndote, tu forma de abrir conversaciones que
            la gente sí responde. Sales con algo en la mano, no con apuntes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title}>
              <div className="ws-panel h-full p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--combat)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 font-extrabold uppercase leading-snug tracking-tight">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed ws-muted">{c.desc}</p>
                <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm">
                  <span className="font-bold text-[var(--text)]">Qué ganas:</span>{' '}
                  <span className="ws-muted">{c.win}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaButton className="px-8 py-4 text-base">Quiero mi lugar — $9 USD</CtaButton>
        </div>
      </div>
    </section>
  );
}
