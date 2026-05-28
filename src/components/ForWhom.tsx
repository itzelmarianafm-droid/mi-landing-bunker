import FadeIn from './FadeIn';

const YES = [
  'Vives de comisiones y estás cansado de improvisar',
  'Quieres una estructura semanal clara, no más motivación',
  'Buscas una comunidad de vendedores serios',
  'Estás dispuesto a entrenar, no solo a consumir contenido',
];

const NO = [
  'Buscas frases motivacionales y videos inspiradores',
  'Quieres atajos sin entrenar',
  'Esperas resultados sin aplicar nada',
];

export default function ForWhom() {
  return (
    <section className="py-16 md:py-24 bg-carbon">
      <div className="max-w-4xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-center">
            El Búnker no es para todos.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className="bg-steel/50 border border-bone/5 rounded-sm p-7 h-full">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-operative mb-6">
                Esto es para ti si…
              </h3>
              <ul className="space-y-4">
                {YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-combat" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-bone/75 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-steel/30 border border-bone/5 rounded-sm p-7 h-full">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-bone/40 mb-6">
                No es para ti si…
              </h3>
              <ul className="space-y-4">
                {NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-bone/25" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-bone/40 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
