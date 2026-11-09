const TESTIMONIOS = [
  {
    dato: '20 prospectos',
    texto: '“En la primera semana pasé de 0 a 20 prospectos y empecé a agendar mis primeras citas. Por fin dejé de improvisar.”',
    nombre: 'Juan Montúfar',
    giro: 'Bienes raíces',
  },
  {
    dato: '2 afiliados',
    texto: '“Me dejaban en visto y ya había agotado mi lista de contactos. En la primera semana volví a generar interés y cerré mis 2 primeros afiliados.”',
    nombre: 'María Cristina González',
    giro: 'Multinivel',
  },
  {
    dato: '$45,000',
    texto: '“Reactivé conversaciones y seguimientos que tenía abandonados. De ahí salieron 45 mil pesos en ventas de servicios en la primera semana.”',
    nombre: 'Juan Carlos Ramírez',
    giro: 'Servicios',
  },
];

export default function Testimonios() {
  return (
    <section className="sec cream">
      <div className="wrap">
        <div className="ops">Resultados reales</div>
        <h2 className="big">Lo que pasó cuando dejaron de improvisar.</h2>
        <div className="quotes">
          {TESTIMONIOS.map((t) => (
            <div className="quote" key={t.nombre}>
              <div className="amt">{t.dato}</div>
              <p>{t.texto}</p>
              <div className="who">
                {t.nombre}
                <span>{t.giro}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="disc">
          Resultados de clientes reales. Los resultados varían según la actividad, la industria y el mercado de cada
          persona.
        </p>
      </div>
    </section>
  );
}
