import CtaButton from './CtaButton';
import Coach from './Coach';
import { COACHES } from '@/lib/reto/coaches';

export default function Hero() {
  return (
    <section className="reto-grid border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        {/* Columna copy */}
        <div>
          <p className="reto-eyebrow mb-4">Reto 7D · Activación Comercial</p>
          <h1 className="text-4xl font-black uppercase leading-[1.04] tracking-tight sm:text-5xl">
            En 7 días dejas de vender <span className="text-[var(--combat)]">a ciegas.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed reto-muted sm:text-base">
            El Reto de Activación Comercial del Búnker:{' '}
            <strong className="font-bold text-[var(--text)]">35 minutos al día</strong> para ordenar
            tu operación, abrir conversaciones reales y ver —por fin— por qué no te están llegando
            interesados. No es un reto para motivarte. Es una semana para operar como profesional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton action="anchor" className="reto-cta px-7 py-4 text-sm sm:text-base">
              Quiero activar mi operación
            </CtaButton>
            <CtaButton action="diagnostico" className="reto-link text-sm">
              Primero quiero mi diagnóstico gratis →
            </CtaButton>
          </div>

          <p className="mt-5 text-sm font-semibold text-[var(--text)]">
            $24 USD · <span className="reto-muted font-medium">Acceso inmediato · Empiezas hoy mismo.</span>
          </p>

          <div className="mt-8 border-t border-[var(--line)] pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--dim)]">
            Creado por El Búnker del Vendedor · No vendemos motivación. Construimos vendedores.
          </div>
        </div>

        {/* Columna visual coaches */}
        <div className="reto-brackets reto-panel bg-[var(--panel-2)] p-5 sm:p-6">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--dim)]">
            Quiénes te entrenan
          </p>
          <div className="grid grid-cols-2 gap-4">
            {COACHES.map((c) => (
              <Coach key={c.name} name={c.name} role={c.role} photo={c.photo} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
