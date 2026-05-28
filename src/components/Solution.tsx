import FadeIn from './FadeIn';

const CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#F25C1F" strokeWidth="1.5">
        <rect x="3" y="5" width="22" height="16" rx="2" />
        <circle cx="14" cy="13" r="4" />
        <path d="M12 13l1.5 1.5L16 12" />
        <path d="M9 24h10" strokeLinecap="round" />
      </svg>
    ),
    title: 'Operaciones En Vivo cada semana',
    text: 'Dejas de aprender solo. Cada semana entras a una sesión en vivo con Paco y Mariana donde trabajamos un pilar con casos reales y resolvemos tus dudas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#F25C1F" strokeWidth="1.5">
        <path d="M14 3l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
      </svg>
    ),
    title: 'El método de los 5 pilares',
    text: 'Dejas de improvisar. Entrenas mentalidad, comunicación, proceso de venta, herramientas e IA, y atracción de prospectos, en un sistema ordenado.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#F25C1F" strokeWidth="1.5">
        <circle cx="10" cy="10" r="4" />
        <circle cx="18" cy="10" r="4" />
        <circle cx="14" cy="18" r="4" />
      </svg>
    ),
    title: 'Una comunidad de vendedores serios',
    text: 'Dejas de estar solo. Entras a la Sala de Mando, donde recibes feedback directo, no respuestas genéricas.',
  },
];

export default function Solution() {
  return (
    <section className="py-16 md:py-24 bg-steel">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Vender bien no es talento. Es una habilidad.{' '}
            <span className="text-combat">Y se entrena.</span>
          </h2>
          <p className="text-bone/60 text-base sm:text-lg max-w-2xl mx-auto">
            El Búnker del Vendedor es el lugar donde entrenas esa habilidad en vivo, cada semana,
            con dos coaches que llevan décadas haciendo esto.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <FadeIn key={card.title}>
              <div className="bg-carbon/60 border border-bone/5 rounded-sm p-7 h-full corner-brackets">
                <div className="mb-5">{card.icon}</div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-bone/60 text-sm leading-relaxed">{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
