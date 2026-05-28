import FadeIn from './FadeIn';

const PILLARS = [
  'Mentalidad',
  'Comunicación',
  'Proceso comercial',
  'Herramientas e IA',
  'Contenido y atracción',
];

export default function Pillars() {
  return (
    <section className="py-16 md:py-20 bg-carbon border-y border-bone/5">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-10">
            Los 5 pilares que entrenas en el Búnker
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="bg-steel border border-bone/10 text-bone/80 text-xs sm:text-sm font-heading font-medium uppercase tracking-[0.15em] px-5 py-2.5 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
