import FadeIn from './FadeIn';

export default function Mission() {
  return (
    <section className="py-16 md:py-20 bg-steel border-l-4 border-l-combat">
      <div className="max-w-3xl mx-auto px-5">
        <FadeIn>
          <p className="text-bone/80 text-base sm:text-lg md:text-xl leading-relaxed italic">
            &ldquo;Lo pusimos ridículamente accesible a propósito. Queremos construir la comunidad número uno
            de vendedores de élite en habla hispana, y eso no se logra dejando gente afuera por dinero.
            Te damos las clases, el método, las herramientas y nuestro feedback directo. Tú haces tu parte:
            te estiras, haces el esfuerzo y entrenas como si esto te costara mil dólares. Porque el que entra
            con la mentalidad de &lsquo;fueron solo cinco dólares&rsquo; no aprovecha nada. El que entra a sacarle
            todo el jugo… ese es el que cambia.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
