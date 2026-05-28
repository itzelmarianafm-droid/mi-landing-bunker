import FadeIn from './FadeIn';
import { SKOOL_URL_MONTHLY, SKOOL_URL_ANNUAL } from '@/lib/config';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-carbon bg-grid">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
            Tienes dos opciones.
          </h2>
          <p className="text-bone/65 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Seguir como hasta ahora, empezando de cero cada mes. O entrar al Búnker hoy: hacer tu
            Rayos-X esta tarde, empezar la Activación 7D mañana, y estar en tu primera Operación En Vivo
            esta semana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={SKOOL_URL_MONTHLY}
              target="_blank"
              rel="noopener"
              className="inline-block bg-combat text-bone font-heading font-bold text-base uppercase tracking-wider px-10 py-4 rounded hover:bg-combat/85 transition-colors"
            >
              Entrar al Búnker por $5/mes
            </a>
            <a
              href={SKOOL_URL_ANNUAL}
              target="_blank"
              rel="noopener"
              className="inline-block bg-transparent text-bone font-heading font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded border border-bone/20 hover:border-combat hover:text-combat transition-colors"
            >
              Quiero el plan anual — $50/año
            </a>
          </div>

          <p className="text-bone/35 text-sm italic">
            No vendemos motivación. Construimos vendedores.
            <br />
            — Paco Anguiano y Mariana Franco
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
