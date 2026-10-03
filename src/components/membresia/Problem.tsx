export default function Problem() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow">¿Te suena?</div>
        <h2
          className="disp"
          style={{ fontSize: 'clamp(26px,4.4vw,40px)', marginTop: 8 }}
        >
          El taller te dio estructura y claridad. El reto es sostenerla cada
          día.
        </h2>
        <p className="muted" style={{ maxWidth: '62ch', marginTop: 12 }}>
          Saliste con tu mensaje y tu rutina en claro. Pero vuelve el trabajo,
          vuelve la vida, y sin alguien que te acompañe lo aprendido se queda en
          el cuaderno. No es falta de talento: es falta de un lugar donde
          sostenerlo. Esto es lo que escribieron tus propios compañeros:
        </p>
        <div className="pains">
          <div className="pain">
            <div className="q">
              “No tengo estructura, necesito crear un sistema.”
            </div>
          </div>
          <div className="pain">
            <div className="q">
              “Me cuesta ser constante sin sentir que persigo a la gente.”
            </div>
          </div>
          <div className="pain">
            <div className="q">
              “No me sé vender, me sé terapeuta. Y me da miedo el rechazo.”
            </div>
          </div>
          <div className="pain">
            <div className="q">
              “Cierro mal: no sé qué decir cuando dudan o ponen pretextos.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
