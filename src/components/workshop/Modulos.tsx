const MODULOS: { titulo: string; texto: string; logro: string }[] = [
  {
    titulo: 'Mentalidad y postura para vender sin rogar',
    texto:
      'Quítate el miedo a acercarte y la idea de que vender es presionar o timar. Trabajas la postura para proyectar seguridad en lugar de necesidad.',
    logro: 'dejas de verte desesperado y la gente te trata distinto.',
  },
  {
    titulo: 'Dónde buscar prospectos (con inversión cero en publicidad)',
    texto:
      'Lugares online y fuera de redes sociales que ni habías considerado, y cómo descubrir a qué grupos de clientes puedes venderle: grupos de Facebook, expos, cámaras de comercio, comunidades. Aunque hoy no tengas un peso para publicidad.',
    logro: 'nunca más “ya no tengo a quién escribirle”.',
  },
  {
    titulo: 'El primer mensaje que sí te contestan',
    texto:
      'Vas a saber exactamente qué escribirle a alguien que no te conoce para que te conteste, sin sonar desesperado y sin que te deje en visto. En vez de soltarle de golpe todo lo que vendes, aprendes a hablarle de lo que esa persona quiere resolver. Y te llevas ejemplos ya escritos para tu tipo de negocio, listos para copiar y ajustar a lo tuyo.',
    logro: 'tu primer mensaje escrito, listo para mandar hoy.',
  },
  {
    titulo: 'Seguimiento sin rogar',
    texto:
      'Cómo clasificar y avanzar la conversación cuando responden, con la técnica para que sean ellos los que insistan en una cita, en lugar de que tú ruegues.',
    logro: 'dejas de quemar prospectos interesados.',
  },
  {
    titulo: 'Tu herramienta de presentación y tu rutina diaria',
    texto:
      'Una forma rápida de presentar y filtrar sin perseguir a quien no está interesado, más la rutina con el paso a paso de qué hacer cada día y cómo medirlo.',
    logro: 'una rutina medible para 5 a 10 prospectos diarios.',
  },
];

export default function Modulos() {
  return (
    <section className="sec light">
      <div className="wrap">
        <div className="ops">El workshop</div>
        <h2 className="big">5 horas de trabajo en vivo para salir con tu rutina de prospección montada.</h2>
        <p className="lead" style={{ marginTop: 20 }}>
          Paco y Mariana te corrigen en vivo mientras armas, paso a paso, tu forma de conseguir clientes nuevos. En
          lugar de llenar un cuaderno de apuntes, terminas la sesión con tu mensaje ya escrito y con el plan de qué
          hacer cada día para no quedarte sin prospectos.
        </p>
        <div className="mods">
          {MODULOS.map((m, i) => (
            <div className="mod" key={m.titulo}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
                <span className="win">
                  <b>Lo que logras:</b> {m.logro}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
