import Reveal from './Reveal';

const CHAIN = ['Contactos', 'Exposición', 'Visualizaciones', 'Respuestas', 'Interesados', 'Siguiente paso'];

const FEATURES = [
  {
    tag: '01 · La cadena completa',
    title: 'No un tip suelto.',
    desc: 'Activas los seis eslabones que llevan de "hablar con gente" a "generar interesados".',
    win: 'Ves con precisión en qué punto se te cae la operación.',
  },
  {
    tag: '02 · Mensaje y seguimiento',
    title: 'Qué decir, sin perseguir.',
    desc: 'Estructura de mensaje en 5 piezas, justificadores por industria y guiones de seguimiento según cómo te responden.',
    win: 'Dejas de improvisar y de sonar urgido o desesperado.',
  },
  {
    tag: '03 · Tus números',
    title: 'Tu fuga #1, clara.',
    desc: 'Registras tu actividad de los últimos 30 días y de la semana, con tu métrica reina: interesados generados.',
    win: 'Sales de las sensaciones y sabes qué corregir.',
  },
  {
    tag: '04 · Accountability',
    title: 'Lo sostienes de verdad.',
    desc: 'Cada día registras tu evidencia con un formato simple: número clave, aprendizaje y siguiente corrección.',
    win: 'Conviertes cada día en un dato y sostienes la actividad los 7 días.',
  },
];

export default function Solution() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">La solución</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            7 días para ver tu operación en números y activarla.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed reto-muted">
            El Reto 7D no es un curso para acumular información. Es una herramienta de operación: cada
            día haces una acción concreta, la registras y ves qué produce movimiento. En una sola
            semana pasas de vender por impulso a mover una cadena comercial medible.
          </p>
        </Reveal>

        {/* Cadena comercial */}
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {CHAIN.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className="reto-pill"
                  style={step === 'Interesados' ? { borderColor: '#F25C1F', color: '#F25C1F' } : undefined}
                >
                  {step}
                </span>
                {i < CHAIN.length - 1 && <span className="text-[var(--combat)]">→</span>}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <Reveal key={f.tag}>
              <div className="reto-panel h-full p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--combat)]">
                  {f.tag}
                </p>
                <p className="mt-1 font-extrabold uppercase tracking-tight">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed reto-muted">{f.desc}</p>
                <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm">
                  <span className="font-bold text-[var(--text)]">Qué ganas:</span>{' '}
                  <span className="reto-muted">{f.win}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs reto-muted">
          El Reto 7D es un reto autónomo: se vive por tu cuenta, a tu ritmo.
        </p>
      </div>
    </section>
  );
}
