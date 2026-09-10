import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote: 'En la primera semana pasé de 0 a 20 prospectos y empecé a agendar mis primeras citas. Por fin dejé de improvisar.',
    name: 'Juan Montúfar',
    industry: 'Bienes raíces',
  },
  {
    quote: 'Me dejaban en visto y ya había agotado mi lista de contactos. En la primera semana volví a generar interés y cerré mis 2 primeros afiliados.',
    name: 'María Cristina González',
    industry: 'Multinivel',
  },
  {
    quote: 'Reactivé conversaciones y seguimientos que tenía abandonados. De ahí salieron 45 mil pesos en ventas de servicios en la primera semana.',
    name: 'Juan Carlos Ramírez',
    industry: 'Servicios',
  },
];

const COACHES = [
  {
    name: 'Mariana Franco',
    role: 'Entrenadora · Ventas',
    photo: '/workshop/mariana.jpg',
    bio: 'Estratega de marketing, ventas y desarrollo comercial con más de 10 años de experiencia y paso por corporativos como Nissan, Mercedes-Benz, IBM y Microsoft. Hoy es mentora de grandes referentes de la industria de los infoproductos, figuras públicas y de gobierno, y personalidades de la televisión, cuyas ventas escalan a 6 y 7 cifras con sus estrategias y lanzamientos —incluyendo una campaña de 1.3 millones de dólares en 7 días, reconocida con el "40 en 7" de Jeff Walker—. Su método CORE™ convierte el conocimiento y el talento en ofertas que sí venden.',
  },
  {
    name: 'Paco Anguiano',
    role: 'Entrenador · Ventas',
    photo: '/reto/paco.png',
    bio: '19 años formando equipos comerciales y líderes en México, Estados Unidos, Centroamérica y España. Autor del libro "Por supuesto que puedes vender". Especialista en comportamiento humano, comunicación persuasiva e IA aplicada a los procesos comerciales.',
  },
];

export default function Authority() {
  return (
    <section className="ws-light border-b border-black/10">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="ws-eyebrow mb-3">Quiénes te entrenan</p>
          <h2 className="mb-8 text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#141414] sm:text-3xl">
            Dos trayectorias, una premisa: vender no se improvisa, se entrena.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {COACHES.map((c) => (
            <Reveal key={c.name}>
              <div className="h-full overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e2da]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.photo} alt={c.name} className="ws-coach-photo h-full w-full" />
                </div>
                <div className="p-5">
                  <div className="mb-1 h-0.5 w-8 bg-[var(--combat)]" />
                  <p className="font-extrabold uppercase tracking-wide text-[#141414]">{c.name}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--combat)]">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#56514A]">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonios */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <figure className="h-full rounded-xl border border-black/10 bg-white p-5">
                <blockquote className="text-[15px] italic leading-relaxed text-[#141414]">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-[#141414]">{t.name}</span>{' '}
                  <span className="text-[#56514A]">· {t.industry}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#8a857c]">
          Resultados de clientes reales. Los resultados varían según la actividad, la industria y el
          mercado de cada persona.
        </p>
      </div>
    </section>
  );
}
