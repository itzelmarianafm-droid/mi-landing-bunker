export default function HowItWorks() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow">Cómo funciona</div>
        <h2
          className="disp"
          style={{ fontSize: 'clamp(26px,4.4vw,40px)', marginTop: 8 }}
        >
          Simple, y en vivo.
        </h2>
        <div className="steps">
          <div className="step">
            <div className="n">1</div>
            <h3>Entras hoy</h3>
            <p>Eliges tu plan y aseguras tu precio de fundador de por vida.</p>
          </div>
          <div className="step">
            <div className="n">2</div>
            <h3>Aprendes e implementas</h3>
            <p>
              Sigues el sistema a tu ritmo, practicas en las clases de cada
              semana y llevas tu caso a las sesiones en vivo.
            </p>
          </div>
          <div className="step">
            <div className="n">3</div>
            <h3>Vuelves predecible tu venta</h3>
            <p>
              Estructura, hábitos y acompañamiento, hasta que prospectar y
              cerrar la venta dejen de ser suerte y veas cómo incrementan tus
              ingresos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
