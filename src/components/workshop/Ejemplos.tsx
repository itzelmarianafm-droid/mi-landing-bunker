function Comparacion({ antes, despues }: { antes: string; despues: string }) {
  return (
    <div className="ex">
      <div className="card bad">
        <div className="tagline">Como lo escribe casi todo el mundo</div>
        <p className="msg">{antes}</p>
      </div>
      <div className="card good">
        <div className="tagline">Hablándole a un grupo específico</div>
        <p className="msg">{despues}</p>
      </div>
    </div>
  );
}

export default function Ejemplos() {
  return (
    <section className="sec cream">
      <div className="wrap">
        <div className="ops">Por qué funciona</div>
        <h2 className="big">La misma oferta, dicha de otra forma, cambia a quién atraes.</h2>
        <p className="lead" style={{ marginTop: 20 }}>
          Imagina que eres nutriólogo y vendes planes de nutrición. El anuncio de siempre enumera todo lo que hace y
          le habla a todos, o sea a nadie. Cuando le hablas a un grupo específico de personas y le prometes el cambio
          que quiere, la persona dice “yo quiero eso”, y de paso ya sabes exactamente dónde buscarla.
        </p>
        <Comparacion
          antes="“Consulta nutricional, nutrición deportiva y suplementación. Plan personalizado, cambio de hábitos y medición completa de tu cuerpo. Agenda tu cita.”"
          despues="“¿Tienes diabetes? Aprende a bajar tus niveles de azúcar comiendo rico y a suplementarte para calmar los dolores de pies y piernas que trae la diabetes. Da clic para saber cómo.”"
        />
        <p className="lead" style={{ marginTop: 36 }}>
          Y no es solo para nutriólogos. Mira el mismo ejercicio con quien vende planes de retiro, un PPR o afores, una
          industria donde esto pega durísimo.
        </p>
        <Comparacion
          antes="“Adquiere tu plan personal para el retiro. Construye tu patrimonio y asegura tu tranquilidad futura. Agenda una cita.”"
          despues="“¿Eres freelancer o trabajas por tu cuenta y quieres retirarte con una pensión de hasta 100 mil pesos al mes? No importa lo que ganes hoy, hay una estrategia para lograrlo.”"
        />
        <p className="micro" style={{ marginTop: 18 }}>
          En los dos casos, al elegir a quién le hablas ya sabes dónde buscarlo: grupos de diabéticos y expos de bebés,
          o expos de negocios y comunidades de freelancers, diseñadores y community managers. Eso es lo que montas en
          el workshop para tu industria.
        </p>
      </div>
    </section>
  );
}
