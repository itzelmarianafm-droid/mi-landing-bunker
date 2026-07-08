import Reveal from './Reveal';

const ITEMS = [
  {
    quote: 'En la primera semana pasé de 0 a 20 prospectos y empecé a agendar mis primeras citas. Por fin dejé de improvisar.',
    name: 'Juan Montúfar',
    industry: 'Bienes raíces',
  },
  {
    quote: 'Me dejaban en visto y ya había agotado mi lista de contactos. En la primera semana volví a generar interés y cerré mis 2 primeros afiliados.',
    name: 'María Cristina González',
    industry: 'Multinivel',
  },
  {
    quote: 'Reactivé conversaciones y seguimientos que tenía abandonados. De ahí salieron 45 mil pesos en ventas de servicios en la primera semana.',
    name: 'Juan Carlos Ramírez',
    industry: 'Servicios',
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Prueba social</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Lo que cambia en una semana.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ITEMS.map((t) => (
            <Reveal key={t.name}>
              <figure className="reto-panel h-full p-5">
                <blockquote className="text-[15px] italic leading-relaxed text-[var(--text)]">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-[var(--text)]">{t.name}</span>{' '}
                  <span className="reto-muted">· {t.industry}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--dim)]">
          Resultados de clientes reales del Reto 7D. Los resultados varían según la actividad, la
          industria y el mercado de cada persona.
        </p>
      </div>
    </section>
  );
}
