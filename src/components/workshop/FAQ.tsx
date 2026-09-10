import Reveal from './Reveal';
import type { WorkshopConfig } from '@/lib/workshop/config';

export default function FAQ({ cfg }: { cfg: WorkshopConfig }) {
  const prices = cfg.tiers.map((t) => `$${t.price}`).join(', ');
  const fecha = `${cfg.dateLabel.toLowerCase()} a las ${cfg.timeLabel}`;

  const faqs = [
    {
      q: `¿Tan accesible por ${cfg.duration} en vivo? ¿Dónde está el truco?`,
      a: `No hay truco. Es un workshop de entrada: preferimos que nos conozcas trabajando. El precio sube por lotes (${prices}), así que entre antes, mejor. Sales con tu mensaje y tu rutina; lo que hagas con eso, depende de ti.`,
    },
    {
      q: '¿Es en vivo o grabado?',
      a: `100% en vivo el ${fecha} para que ejecutes en tiempo real y Paco te corrija. Y si no puedes conectarte o quieres repasarlo, tienes acceso a la grabación durante 15 días. Lo ideal es hacerlo en vivo: ahí recibes la retroalimentación.`,
    },
    {
      q: '¿Y si entro y no me sirve?',
      a: 'Vas cubierto. Si haces el workshop y no sales con algo de valor —tu mensaje de apertura, tu rutina y claridad para prospectar— te devolvemos tu dinero. Sin vueltas.',
    },
    {
      q: '¿Sirve para mi industria?',
      a: 'Sí. Bienes raíces, seguros, salud y belleza, servicios profesionales, oportunidad o network: cambia el producto o servicio, pero abrir conversaciones es la misma habilidad.',
    },
    {
      q: 'Apenas empiezo y no tengo audiencia grande.',
      a: 'No la necesitas. Empiezas con tu red y el método. No se trata de tener seguidores, sino de saber iniciar conversaciones.',
    },
    {
      q: '¿Es contenido motivacional?',
      a: 'No. En El Búnker no vendemos motivación, construimos vendedores. Sales con un entregable concreto, no con frases.',
    },
    {
      q: '¿Cuánto dura y qué necesito?',
      a: `${cfg.duration}. Solo tu teléfono con WhatsApp o tu lista de contactos, y disposición para trabajar en vivo.`,
    },
  ];

  return (
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">Preguntas frecuentes</p>
          <h2 className="mb-8 text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Antes de reservar.
          </h2>
        </Reveal>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="ws-faq">
              <summary>{f.q}</summary>
              <div className="ws-faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
