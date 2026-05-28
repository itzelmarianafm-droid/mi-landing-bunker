import FadeIn from './FadeIn';

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-carbon">
      <div className="max-w-3xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-10 text-center">
            Si vives de comisiones, esta historia te suena.
          </h2>
        </FadeIn>

        <FadeIn className="space-y-6 text-bone/70 text-base sm:text-lg leading-relaxed">
          <p>
            Empiezas el mes con energía. Haces llamadas, mandas mensajes, te ilusionas con dos o tres
            prospectos que parecían interesados. Y de pronto pasaron tres semanas: los prospectos se enfriaron,
            no cerraste lo que esperabas, y otra vez vas a empezar de cero.
          </p>
          <p>
            Te da pena ofrecer. Sientes que persigues a la gente. Mandas el mismo mensaje a cincuenta
            personas esperando que alguien conteste. Y empiezas a creer que el problema eres tú.
          </p>
          <p>
            No lo es. <span className="text-bone font-medium">El problema es que estás operando como amateur, sin estructura y sin método.</span>{' '}
            Y nadie te enseñó a hacerlo distinto.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
