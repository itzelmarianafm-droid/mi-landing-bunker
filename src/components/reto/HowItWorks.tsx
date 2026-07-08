import Reveal from './Reveal';
import CtaButton from './CtaButton';

export default function HowItWorks() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Cómo funciona</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Empiezas en 3 pasos.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="reto-panel h-full p-6">
              <span className="text-3xl font-black text-[var(--combat)]">1</span>
              <p className="mt-2 font-extrabold uppercase tracking-tight">Haz tu diagnóstico gratis.</p>
              <p className="mt-2 text-sm leading-relaxed reto-muted">
                En 2 minutos descubres tus 2 pilares más débiles antes de empezar.
              </p>
              <CtaButton action="diagnostico" className="reto-link mt-3 inline-block text-sm">
                Hacer diagnóstico →
              </CtaButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="reto-panel h-full p-6">
              <span className="text-3xl font-black text-[var(--combat)]">2</span>
              <p className="mt-2 font-extrabold uppercase tracking-tight">Activa 7 días, 35 min al día.</p>
              <p className="mt-2 text-sm leading-relaxed reto-muted">
                Una acción concreta cada día: lista, mensaje, exposición, seguimiento, contenido y
                revisión.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="reto-panel h-full p-6">
              <span className="text-3xl font-black text-[var(--combat)]">3</span>
              <p className="mt-2 font-extrabold uppercase tracking-tight">Cierra con tus números.</p>
              <p className="mt-2 text-sm leading-relaxed reto-muted">
                Sales del reto sabiendo tu fuga principal y tu compromiso medible para la próxima
                semana.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
