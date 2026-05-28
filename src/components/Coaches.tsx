import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Coaches() {
  return (
    <section className="py-16 md:py-24 bg-steel">
      <div className="max-w-5xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-center">
            Quiénes te van a entrenar
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] rounded-sm overflow-hidden border border-bone/5 mb-12">
            <Image
              src="/banner-coaches.png"
              alt="Paco Anguiano y Mariana Franco — Coaches del Búnker del Vendedor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-carbon/60 border border-bone/5 rounded-sm p-7 h-full border-l-2 border-l-combat">
              <div className="relative w-20 h-20 rounded-sm overflow-hidden mb-5 border border-bone/10">
                <Image
                  src="/foto-mariana.png"
                  alt="Mariana Franco"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3">Mariana Franco</h3>
              <p className="text-bone/60 text-sm leading-relaxed">
                Estratega de monetización con más de 10 años en ventas y marketing. Trayectoria en IBM,
                Microsoft, Nissan y Mercedes-Benz. Sus clientes han generado más de 8 millones de dólares
                con sus estrategias.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-carbon/60 border border-bone/5 rounded-sm p-7 h-full border-l-2 border-l-combat">
              <div className="relative w-20 h-20 rounded-sm overflow-hidden mb-5 border border-bone/10">
                <Image
                  src="/foto-paco.png"
                  alt="Paco Anguiano"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3">Paco Anguiano</h3>
              <p className="text-bone/60 text-sm leading-relaxed">
                Conferencista y autor de &ldquo;Por supuesto que puedes vender&rdquo;. 19 años formando
                vendedores y equipos comerciales en México, Estados Unidos, Centroamérica y España.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
