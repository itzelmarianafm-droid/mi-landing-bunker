'use client';

import { SKOOL_URL_MONTHLY, VSL_URL } from '@/lib/config';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-carbon bg-grid">
      <div className="max-w-4xl mx-auto px-5 text-center">
        {/* Chip */}
        <span className="inline-block bg-combat/15 text-combat text-[11px] font-heading font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm border border-combat/25 mb-6">
          Centro de Entrenamiento Comercial
        </span>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] tracking-wide mb-6">
          Vender no se improvisa.{' '}
          <span className="text-combat">Se entrena.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-bone/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          El centro de entrenamiento para vendedores independientes que ya se cansaron de improvisar,
          perseguir prospectos y depender de la suerte. En vivo, cada semana, con Paco Anguiano y Mariana Franco.
        </p>

        {/* VSL */}
        <div className="relative w-full aspect-video bg-steel/50 rounded-sm overflow-hidden border border-bone/5 mb-8">
          {VSL_URL ? (
            <iframe
              src={VSL_URL}
              title="VSL El Búnker del Vendedor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            /* TODO: insertar URL del VSL */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-combat/20 border-2 border-combat flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="#F25C1F" />
                </svg>
              </div>
              <span className="text-bone/40 text-sm font-heading uppercase tracking-wider">VSL próximamente</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <a
          href={SKOOL_URL_MONTHLY}
          target="_blank"
          rel="noopener"
          className="inline-block bg-combat text-bone font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-10 py-4 rounded hover:bg-combat/85 transition-colors"
        >
          Entrar al Búnker por $5/mes
        </a>
        <p className="text-bone/40 text-xs mt-3 tracking-wide">
          Acceso inmediato · Sin permanencia · Cancela cuando quieras
        </p>

        {/* Trust bar */}
        <div className="mt-12 pt-8 border-t border-bone/10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-bone/35 text-xs font-heading uppercase tracking-[0.15em]">
          <span>+8 MDD generados para clientes</span>
          <span className="hidden sm:inline">·</span>
          <span>19 años formando vendedores</span>
          <span className="hidden sm:inline">·</span>
          <span>Método de los 5 pilares</span>
        </div>
      </div>
    </section>
  );
}
