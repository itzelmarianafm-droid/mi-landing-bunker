export default function Solution() {
  return (
    <section
      className="sec"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <div className="eyebrow">La solución</div>
        <h2
          className="disp"
          style={{ fontSize: 'clamp(26px,4.4vw,40px)', marginTop: 8 }}
        >
          El Búnker del Vendedor: donde implementas tu sistema y te vuelves
          profesional.
        </h2>
        <p className="muted" style={{ maxWidth: '66ch', marginTop: 12 }}>
          Aquí aprendes a ejecutar tu sistema de ventas con una estructura clara
          y un paso a paso de qué hacer cada día. Eso se vuelve una rutina
          productiva que se convierte en ventas predecibles. Y lo haces en tu
          lugar seguro: donde te puedes equivocar, practicar y convertirte en un
          vendedor experto y profesional.
        </p>
        <div className="feats">
          <div className="feat">
            <div className="ic">🧭</div>
            <h3>Un sistema, no tips sueltos</h3>
            <p>
              Atraer, calificar, presentar, cerrar y debatir objeciones, con un
              paso a paso de qué hacer cada día.
            </p>
          </div>
          <div className="feat">
            <div className="ic">🎤</div>
            <h3>Acompañamiento cada semana</h3>
            <p>
              En promedio tienes 2 clases en vivo cada semana para entrenarte,
              además del espacio para resolver tu caso con Paco y Mariana.
            </p>
          </div>
          <div className="feat">
            <div className="ic">🧠</div>
            <h3>Comunidad, hábitos y mentalidad</h3>
            <p>
              Un lugar seguro para practicar, perder el miedo al rechazo y
              volverte profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
