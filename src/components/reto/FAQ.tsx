import Reveal from './Reveal';

const FAQS = [
  {
    q: 'No tengo tiempo. ¿Cuánto me va a quitar?',
    a: '35 minutos al día durante 7 días. Menos de lo que ya pasas en redes sin una estrategia detrás.',
  },
  {
    q: '¿Sirve para mi industria?',
    a: 'Sí. Bienes raíces, seguros, salud y belleza, servicios profesionales, oportunidad o network: cambia el producto o servicio, pero la cadena comercial es la misma.',
  },
  {
    q: '¿Es puro contenido motivacional?',
    a: 'No. Es operación medible. No vendemos motivación, construimos vendedores. Al terminar tendrás números, no frases.',
  },
  {
    q: 'Apenas empiezo y no tengo una audiencia grande.',
    a: 'No la necesitas. Empiezas con tu lista y tu red real, y el reto te enseña a activarla sin depender de tus ganas ni de tu memoria.',
  },
  {
    q: '¿Necesito herramientas o saber de tecnología?',
    a: 'No. Con WhatsApp y lo que ya tienes es suficiente para vivir la primera semana. Después podrás mejorar tus recursos.',
  },
  {
    q: '¿Qué pasa cuando termine el reto?',
    a: 'Te llevas el Kit de Activación Diaria y el Tablero Semanal para convertir todo en rutina. Y si quieres entrenar con profundidad —guiones, sistemas y corrección continua— sigue La Logia de las Ventas.',
  },
  {
    q: '¿Cuánto cuesta y cómo empiezo?',
    a: 'El Reto cuesta $24 USD, con acceso inmediato: entras hoy y empiezas cuando quieras (no hay fecha de inicio ni cupos). Es la puerta de entrada de menor riesgo para ver tu operación en números.',
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Preguntas frecuentes</p>
          <h2 className="mb-8 text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            Antes de entrar.
          </h2>
        </Reveal>

        <div>
          {FAQS.map((f) => (
            <details key={f.q} className="reto-faq">
              <summary>{f.q}</summary>
              <div className="reto-faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
