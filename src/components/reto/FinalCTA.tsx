import Reveal from './Reveal';
import CtaButton from './CtaButton';

export default function FinalCTA() {
  return (
    <section id="pago" className="border-t-2 border-[var(--combat)] bg-[var(--panel)] scroll-mt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <p className="reto-eyebrow mb-3">Tu siguiente paso</p>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
            La exposición no espera. Tus prospectos tampoco.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed reto-muted">
            No hay fecha de corte: puedes empezar hoy o dentro de tres meses. Pero cada semana que
            sigues vendiendo a ciegas es una semana de prospectos que no se enteraron de lo que
            vendes.{' '}
            <strong className="font-bold text-[var(--text)]">
              El costo real no es el precio del reto: es lo que dejas de vender mientras "esperas el
              momento".
            </strong>
          </p>

          <CtaButton action="checkout" className="reto-cta mt-8 w-full px-8 py-5 text-base sm:w-auto sm:text-lg">
            Entrar al Reto 7D — $24 USD
          </CtaButton>
          <p className="mt-3 text-xs reto-muted">
            Acceso inmediato · Empiezas hoy mismo con tu diagnóstico gratis.
          </p>

          {/* Garantía */}
          <div className="mx-auto mt-10 max-w-lg rounded-xl border border-[var(--line-strong)] bg-[var(--panel-2)] p-6 text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--combat)]">
              Garantía
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
              Haz los 7 días completos. Si no terminas con claridad total sobre tu fuga principal y tu
              plan de acción, te devolvemos tus $24 USD.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
