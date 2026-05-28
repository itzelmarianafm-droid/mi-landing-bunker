'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const FAQS = [
  {
    q: '¿Por qué cuesta solo $5? ¿Qué tiene de malo?',
    a: 'Nada. Lo pusimos ridículamente accesible para que nadie se quede afuera de entrenarse por dinero. Lo que pedimos a cambio es que entrenes en serio.',
  },
  {
    q: 'Ya tomé cursos de ventas y no me funcionaron. ¿Por qué este sí?',
    a: 'Un curso lo ves una vez y se queda guardado. El Búnker es entrenamiento en vivo cada semana, con acompañamiento. Es la diferencia entre leer sobre boxeo y subirte al ring.',
  },
  {
    q: 'No tengo mucho tiempo. ¿Me sirve?',
    a: 'Por eso mismo. No te saturamos. Te damos lo que sí mueve resultados. La Activación 7D son 30 minutos al día.',
  },
  {
    q: '¿Sirve para mi industria?',
    a: 'Sí. El método de los 5 pilares aplica a cualquier vendedor que viva de comisiones. Además tienes plantillas específicas para varias industrias.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. El plan mensual no tiene permanencia. Cancelas cuando quieras, sin trámites.',
  },
  {
    q: '¿Diferencia entre mensual y anual?',
    a: 'El mensual son $5 al mes. El anual son $50 al año: pagas 10 meses y entrenas 12.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-carbon">
      <div className="max-w-3xl mx-auto px-5">
        <FadeIn>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-center">
            Preguntas frecuentes
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FadeIn key={i}>
              <div className="border border-bone/10 rounded-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-steel/30 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-bone/90 text-sm sm:text-base font-medium">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 shrink-0 text-combat transition-transform ${open === i ? 'rotate-45' : ''}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </button>
                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <div>
                    <p className="px-6 pb-4 text-bone/55 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
