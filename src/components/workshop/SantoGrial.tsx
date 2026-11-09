const NODOS: [string, string][] = [
  ['Captar sus datos, educar y filtrar', 'Presentar rápido para quedarte con los interesados y soltar a los que no.'],
  ['Presentar en la cita', 'Postura, preguntas correctas y ligar lo que le duele con lo que vendes.'],
  ['Hacer la oferta y pedir el dinero', 'La transición al cierre, que se vuelve sencilla cuando lo anterior está bien hecho.'],
  ['Resolver objeciones y retomar el cierre', 'Qué decir cuando hay dudas y cómo volver a encaminar la venta.'],
];

export default function SantoGrial() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <div className="ops">La idea que lo cambia todo</div>
        <h2 className="big">Estás confundiendo un canal de venta con el proceso de la venta.</h2>
        <p className="lead" style={{ marginTop: 22 }}>
          Vender por WhatsApp es un canal. Armar un sistema de ventas o embudo por internet es un canal. Ninguno es el
          proceso. El proceso completo (el que llamamos el Santo Grial) tiene piezas en orden, y si te falta una, da
          igual el canal que elijas: los anuncios pagados te traen gente, pero si no sabes qué hacer con ella, el
          dinero se va al caño. Esto empieza por prospectar. Ahí vamos a trabajar.
        </p>
        <div className="grail">
          <div className="node live">
            <div className="idx">1</div>
            <div>
              <div className="nt">
                Encontrar prospectos y llamar su atención<span className="here">Aquí entrenamos</span>
              </div>
              <div className="nd">
                Vas a descubrir que tienes una fuente de prospectos que no se te acaba, a la que entras aunque hoy no
                tengas un peso para publicidad. Aprendes dónde buscar (online y fuera de línea), a qué grupos de
                clientes venderle y cómo escribir un mensaje que la gente sí responde.
              </div>
            </div>
          </div>
          {NODOS.map(([titulo, desc], i) => (
            <div className="node" key={titulo}>
              <div className="idx">{i + 2}</div>
              <div>
                <div className="nt">{titulo}</div>
                <div className="nd">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="micro" style={{ marginTop: 18 }}>
          El workshop entrena la pieza 1 a fondo. Es por donde se empieza y donde más gente se queda atorada.
        </p>
      </div>
    </section>
  );
}
