import Image from 'next/image';

export default function Mentors() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="mentors">
          <Image
            src="/membresia/mariana-paco.png"
            alt="Paco Anguiano y Mariana Franco"
            width={620}
            height={754}
            sizes="(max-width: 820px) 100vw, 400px"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="tx">
            <div className="eyebrow">Tus mentores</div>
            <h2 className="disp" style={{ fontSize: 'clamp(24px,4vw,34px)' }}>
              Paco Anguiano y Mariana Franco
            </h2>
            <p>
              Paco lleva más de 20 años formando vendedores y es autor de “Por
              supuesto que puedes vender”. Mariana es estratega de ventas y
              monetización; sus clientes han generado millones de dólares con
              sus estrategias, y muchos de ellos, como tú, no eran expertos en
              vender: simplemente se dejaron guiar y siguieron un sistema.
              Juntos te dan la técnica y la estrategia en el mismo lugar.
            </p>
            <p>
              Su misión con el Búnker del Vendedor es darte un espacio seguro
              para entrenarte: donde te puedas equivocar, implementar y, sobre
              todo, tener claridad en la estrategia de ventas de tu negocio. No
              todos están en el mismo nivel ni venden con la misma estrategia;
              el Búnker del Vendedor te da la ruta según dónde estás hoy, un
              sistema, una comunidad de apoyo y los hábitos y la mentalidad para
              volverte profesional.
            </p>
            <p>
              Y lo más importante: pusieron todo esto a un precio al alcance de
              cualquiera. Haz cuentas: son <b>menos de $20 pesos al día</b> (≈
              $1 USD). Menos de lo que te cuesta un café o unas papitas. Si no
              estás dispuesto a invertir ni eso en tu capacitación y tu negocio,
              quizá valga la pena preguntarte qué tan en serio te lo estás
              tomando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
