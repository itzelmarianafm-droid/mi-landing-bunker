import FadeIn from './FadeIn';
import { SKOOL_URL_MONTHLY, SKOOL_URL_ANNUAL } from '@/lib/config';

const FEATURES = ['Acceso completo', 'Clases en vivo', 'Hot seats', 'Biblioteca', 'Plantillas'];

export default function Pricing() {
  return (
    <section id="precios" className="py-16 md:py-24 bg-carbon">
      <div className="max-w-4xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-14 text-center">
            Elige cómo quieres entrenar
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Monthly */}
          <FadeIn>
            <div className="bg-steel/40 border border-bone/10 rounded-sm p-8 h-full flex flex-col">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-bone/50 mb-4">
                Mensual
              </span>
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-3">
                $5 <span className="text-lg font-medium text-bone/50">USD / mes</span>
              </div>
              <p className="text-bone/55 text-sm leading-relaxed mb-6">
                Por menos de lo que cuesta un par de cafés al mes, entras al Búnker y empiezas a operar con estructura.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-bone/65 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-combat shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-bone/35 text-xs mb-4">Cancela cuando quieras.</p>
              <a
                href={SKOOL_URL_MONTHLY}
                target="_blank"
                rel="noopener"
                className="block text-center bg-bone/10 text-bone font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded hover:bg-bone/15 transition-colors border border-bone/10"
              >
                Entrar al Búnker
              </a>
            </div>
          </FadeIn>

          {/* Annual */}
          <FadeIn>
            <div className="bg-steel/40 border-2 border-combat rounded-sm p-8 h-full flex flex-col relative">
              <span className="absolute -top-3.5 left-6 bg-combat text-bone text-[10px] font-heading font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm">
                Anual · 2 meses gratis
              </span>
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-combat mb-4">
                Anual
              </span>
              <div className="font-heading text-4xl sm:text-5xl font-bold mb-3">
                $50 <span className="text-lg font-medium text-bone/50">USD / año</span>
              </div>
              <p className="text-bone/55 text-sm leading-relaxed mb-6">
                Para el que ya entendió que esto se hace en serio. Pagas 10 meses, entrenas 12.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                <li className="flex items-center gap-2 text-bone/65 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-combat shrink-0" />
                  Todo lo del plan mensual, los 12 meses
                </li>
                <li className="flex items-center gap-2 text-bone/65 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-combat shrink-0" />
                  Tu lugar asegurado en cada clase
                </li>
              </ul>
              <p className="text-bone/35 text-xs mb-4">Sin pensar en renovaciones.</p>
              <a
                href={SKOOL_URL_ANNUAL}
                target="_blank"
                rel="noopener"
                className="block text-center bg-combat text-bone font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded hover:bg-combat/85 transition-colors"
              >
                Entrenar todo el año
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
