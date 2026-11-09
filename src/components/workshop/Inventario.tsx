const ITEMS: { titulo: string; detalle: string; bono?: boolean }[] = [
  { titulo: 'Workshop en vivo de 5 horas', detalle: 'Con Paco y Mariana corrigiéndote en tiempo real.' },
  { titulo: 'Plantillas de guiones y mensajes por industria', detalle: 'Para conseguir prospectos adaptados a tu caso.' },
  { titulo: 'Manual de trabajo paso a paso', detalle: 'La metodología, ejercicios y ejemplos para implementarla.' },
  { titulo: 'Grabación para repasar', detalle: '20 días de acceso, o vitalicia con tu entrada VIP.' },
  {
    titulo: 'Videocurso: crea tu propia página web',
    detalle: 'Deja de depender de agencias y arma la tuya para presentar tus servicios. Valor $1,000 USD.',
    bono: true,
  },
];

const Check = () => (
  <svg className="ck" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export default function Inventario() {
  return (
    <section className="sec light">
      <div className="wrap">
        <div className="ops">Lo que aseguras si entras hoy</div>
        <h2 className="big">Todo esto, por el precio de una comida.</h2>
        <div className="inv">
          {ITEMS.map((it) => (
            <div className={`it${it.bono ? ' bonus' : ''}`} key={it.titulo}>
              <Check />
              <div className="n">
                {it.titulo}
                <small>{it.detalle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
