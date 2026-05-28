import FadeIn from './FadeIn';

const STEPS = [
  {
    num: '01',
    text: 'Entras al Búnker y haces tu Rayos-X del Vendedor. En 15 minutos sabes dónde se está rompiendo tu operación.',
  },
  {
    num: '02',
    text: 'Arrancas la Activación 7D. Treinta minutos al día durante una semana para dejar de vender a ciegas.',
  },
  {
    num: '03',
    text: 'Entras a tu primera Operación En Vivo y empiezas a entrenar con nosotros y la comunidad, cada semana.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-carbon border-t border-bone/5">
      <div className="max-w-4xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-14 text-center">
            Cómo empiezas hoy
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {STEPS.map((step) => (
            <FadeIn key={step.num}>
              <div className="flex gap-6 items-start">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-combat/30 leading-none shrink-0">
                  {step.num}
                </span>
                <p className="text-bone/75 text-base sm:text-lg leading-relaxed pt-1">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
