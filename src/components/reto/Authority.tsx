import Reveal from './Reveal';
import Coach from './Coach';
import { COACHES } from '@/lib/reto/coaches';

export default function Authority() {
  return (
    <section className="reto-light border-b border-black/10">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Quiénes te entrenan</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#141414] sm:text-3xl">
            Dos trayectorias, una premisa: vender no se improvisa, se entrena.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {COACHES.map((c) => (
            <Reveal key={c.name}>
              <div className="h-full overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e6e2da]">
                  {c.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={c.photo} alt={c.name} className="reto-coach-photo h-full w-full" />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[#9a948a]">
                      <span className="text-5xl font-black tracking-widest">
                        {c.name.split(' ').map((w) => w[0]).join('').toUpperCase()}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em]">Foto próximamente</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-1 h-0.5 w-8 bg-[var(--combat)]" />
                  <p className="font-extrabold uppercase leading-tight tracking-wide text-[#141414]">
                    {c.name}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--combat)]">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#56514A]">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
