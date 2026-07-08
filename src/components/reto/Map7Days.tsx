import Reveal from './Reveal';

const DAYS = [
  ['Día 0', 'Tu herramienta de introducción:', 'eliges o creas el "tráiler" que baja la presión antes de presentar.'],
  ['Día 1', 'Deja de vender a ciegas:', 'revisas tus números reales de los últimos 30 días.'],
  ['Día 2', 'Amplía tu lista:', 'registras 50 nombres sin autofiltrarte por miedo.'],
  ['Día 3', 'Mensaje + exposición:', 'armas tu mensaje con estructura y lo envías a 10 personas.'],
  ['Día 4', 'Seguimiento sin perseguir:', 'clasificas respuestas y retomas mínimo 5 conversaciones.'],
  ['Día 5', 'Publica para abrir conversaciones:', 'creas contenido que provoca señales, no likes vacíos.'],
  ['Día 6', 'Segunda ronda de exposición:', 'repites con criterio para dejar de depender de unos pocos.'],
  ['Día 7', 'Revisión final:', 'conviertes la semana en datos, tu fuga principal y tu plan para la siguiente.'],
];

export default function Map7Days() {
  return (
    <section className="reto-light border-b border-black/10">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Qué haces cada día</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#141414] sm:text-3xl">
            Un mapa claro, no una lista de tareas sueltas.
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-black/10">
          {DAYS.map(([day, title, rest]) => (
            <Reveal key={day}>
              <div className="flex gap-4 py-4">
                <span className="w-14 shrink-0 text-sm font-black uppercase tracking-wide text-[var(--combat)]">
                  {day}
                </span>
                <p className="text-[15px] leading-snug text-[#141414]">
                  <strong className="font-bold">{title}</strong>{' '}
                  <span className="text-[#56514A]">{rest}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-lg border border-black/15 bg-white/60 p-4 text-sm font-semibold text-[#141414]">
            Formato diario: <span className="text-[var(--combat)]">5 min</span> de activación ·{' '}
            <span className="text-[var(--combat)]">20 min</span> de ejecución ·{' '}
            <span className="text-[var(--combat)]">5 min</span> de registro.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
