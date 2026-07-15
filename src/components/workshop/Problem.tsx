import Reveal from './Reveal';

export default function Problem() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">El problema real</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Te quedas viendo el cursor parpadear… y no sabes qué escribir.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed ws-muted">
            Abres el chat de un prospecto y no sabes cómo empezar sin sonar a vendedor desesperado.
            Cuando por fin mandas algo, te dejan en visto. Y para no "molestar", terminas persiguiendo
            a los pocos que responden o, peor, dejas de prospectar por completo.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed ws-muted">
            Mientras tanto, escuchas a los pseudoexpertos que te dicen "no prospectes, no insistas, no
            ruegues, deja que lleguen solos". Suena bonito. Pero te lo dicen porque no saben cómo
            acercarse con postura —y te dejan esperando resultados que nunca vas a alimentar.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed ws-muted">
            La verdad incómoda: no te dejan en visto porque no sirvas para vender. Te dejan en visto
            porque tu mensaje pide demasiado compromiso, demasiado pronto. Rogar no es exceso de
            ganas: es falta de método.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-10 border-l-4 border-[var(--combat)] pl-5 text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl">
            Prospectar no es rogar. Es abrir con estructura y postura.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
