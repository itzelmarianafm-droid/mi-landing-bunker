import type { WorkshopConfig } from '@/lib/workshop/config';

export default function FAQ({ cfg }: { cfg: WorkshopConfig }) {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: '¿Tan accesible por 5 horas en vivo? ¿Dónde está el truco?',
      a: 'No hay truco. Es un workshop de entrada: preferimos que nos conozcas trabajando. El precio sube por lotes, así que entre antes, mejor. Sales con tu mensaje y tu rutina; lo que hagas con eso depende de ti.',
    },
    {
      q: '¿Esto es todo el proceso de venta o solo prospección?',
      a: 'Es prospección a fondo, la pieza 1 del proceso. Es a propósito: es por donde se empieza y donde casi todos se quedan atorados. Si quieres el proceso completo, de ahí sigue El Búnker del Vendedor, pero primero resolvemos que tengas prospectos todos los días.',
    },
    {
      q: '¿Sirve para mi industria?',
      a: 'Sí. Bienes raíces, seguros, afores y planes de retiro, salud y belleza, servicios profesionales, multinivel o cualquier cosa que vendas. Cambia el producto o servicio, pero conseguir clientes nuevos es la misma habilidad, y te llevas plantillas por industria.',
    },
    {
      q: 'Apenas empiezo y no tengo audiencia grande.',
      a: 'No la necesitas. Empiezas con tu red y el método, y aprendes dónde encontrar prospectos nuevos aunque hoy no tengas presupuesto para pagar publicidad. No se trata de tener seguidores, sino de saber iniciar conversaciones.',
    },
    {
      q: '¿Es en vivo o grabado?',
      a: (
        <>
          En vivo el {cfg.dateLabel}, a las {cfg.timeLabel}, para que ejecutes en tiempo real y Paco y Mariana te
          corrijan. Si no puedes conectarte o quieres repasar, tienes la grabación 20 días (o vitalicia con tu entrada
          VIP).
        </>
      ),
    },
    {
      q: '¿Y si entro y no me sirve?',
      a: 'Vas cubierto. Haz el workshop completo; si no sales con algo de valor (tu mensaje, tu rutina y claridad para prospectar), te devolvemos tu dinero.',
    },
  ];

  return (
    <section className="sec light">
      <div className="wrap">
        <div className="ops">Antes de reservar</div>
        <h2 className="big">Preguntas frecuentes.</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
