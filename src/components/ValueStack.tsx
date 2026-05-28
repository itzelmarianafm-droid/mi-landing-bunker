import FadeIn from './FadeIn';
import { SKOOL_URL_MONTHLY } from '@/lib/config';

const ITEMS = [
  'Operaciones En Vivo semanales con Paco y Mariana',
  'El Rayos-X del Vendedor (diagnóstico de tus 6 pilares en 15 minutos)',
  'Activación 7D: tu primera semana operando como pro',
  'La Sala de Mando: comunidad privada con feedback directo',
  'Kit de Mensajes de Activación (plantillas para 5 industrias)',
  'Tablero de Métricas Semanales',
  'Biblioteca de Operaciones En Vivo (todas las sesiones grabadas)',
  'Hot Seats mensuales (espacios limitados)',
  'Re-Rayos-X a los 30 días para medir tu avance',
];

export default function ValueStack() {
  return (
    <section className="py-16 md:py-24 bg-carbon">
      <div className="max-w-3xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-10 text-center">
            Esto es lo que tienes desde el primer día:
          </h2>
        </FadeIn>

        <FadeIn>
          <ul className="space-y-4 mb-12">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-combat" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-bone/80 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="text-center">
          <a
            href={SKOOL_URL_MONTHLY}
            target="_blank"
            rel="noopener"
            className="inline-block bg-combat text-bone font-heading font-bold text-base uppercase tracking-wider px-10 py-4 rounded hover:bg-combat/85 transition-colors"
          >
            Entrar al Búnker por $5/mes
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
