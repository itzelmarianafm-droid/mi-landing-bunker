import Reveal from './Reveal';

const SCENARIOS = [
  {
    strong: 'Si tienes un gran producto o servicio y estás convencido, pero no ves resultados contundentes',
    rest: '→ probablemente te falta estructura y claridad.',
  },
  {
    strong: 'Si además tienes talento y sabes qué hacer, pero no lo sostienes',
    rest: '→ probablemente te falta autodisciplina.',
  },
  {
    strong: 'Si ya tienes actividad disciplinada y aun así no aparecen resultados',
    rest: '→ probablemente necesitas refinar tus habilidades, sobre todo comunicación y proceso.',
  },
];

export default function Problem() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">El problema real</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Tienes un buen producto o servicio. Estás convencido. Pero los resultados no llegan.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed reto-muted">
            Publicas… y nadie responde. Tu lista de prospectos vive en tu cabeza, en capturas de
            pantalla y en conversaciones que ya se enfriaron. Un día te motivas y contactas a diez
            personas; a la semana desapareces. Confundes estar ocupado con estar vendiendo.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed reto-muted">
            Y cuando te preguntas cuántos contactos hiciste esta semana, cuántas respuestas recibiste
            o cuántos interesados generaste… no tienes el número. Tienes una sensación. Eso no es
            falta de talento: es falta de estructura. Y "echarle más ganas" no lo arregla.
          </p>
        </Reveal>

        <div className="mt-8 space-y-4">
          {SCENARIOS.map((s) => (
            <Reveal key={s.strong}>
              <div className="reto-panel border-l-2 border-[var(--combat)] p-5">
                <p className="text-[15px] leading-snug">
                  <strong className="font-bold text-[var(--text)]">{s.strong}</strong>{' '}
                  <span className="reto-muted">{s.rest}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 border-l-4 border-[var(--combat)] pl-5 text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl">
            Si no sabes tus números, no tienes diagnóstico. Tienes sensaciones.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
