import BarraLote from './BarraLote';
import CtaButton from './CtaButton';
import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';

export default function Lotes({ cfg, lotes }: { cfg: WorkshopConfig; lotes: LoteState }) {
  const { actual, siguiente, ahorro } = lotes;

  return (
    <section className="sec dark" id="reservar">
      <div className="wrap">
        <div className="ops">Tu lugar · lotes</div>
        <h2 className="big">Un solo acceso. El workshop completo.</h2>
        <p className="lead" style={{ marginTop: 18 }}>
          El precio sube por lotes: cada lote tiene cupo, y cuando se llena, el siguiente se activa a un precio más
          alto. Entre antes, pagas menos.
        </p>

        {actual ? (
          <>
            <div className={`pricing${siguiente ? '' : ' solo'}`}>
              <div className="pcard active">
                <div className="ptop">
                  <span className="plabel">{actual.label}</span>
                  <span className="pstat">Disponible ahora</span>
                </div>
                <div className="pprice">
                  ${formatPrecio(actual.price)}
                  <span className="cur">{cfg.currency}</span>
                </div>
                <BarraLote cfg={cfg} lotes={lotes} variant="card" />
              </div>
              {siguiente && (
                <div className="pcard next">
                  <div className="ptop">
                    <span className="plabel">{siguiente.label}</span>
                    <span className="pstat">Próximo</span>
                  </div>
                  <div className="pprice">
                    ${formatPrecio(siguiente.price)}
                    <span className="cur">{cfg.currency}</span>
                  </div>
                  <p className="pnote">
                    Se activa automáticamente cuando se llene el {actual.label}, sin previo aviso.
                  </p>
                </div>
              )}
            </div>

            {ahorro !== null && (
              <div className="save">
                Entra hoy a ${formatPrecio(actual.price)} y te ahorras ${formatPrecio(ahorro)}. No esperes a que se
                llene.
              </div>
            )}
          </>
        ) : (
          <p className="closed-note">Registro cerrado.</p>
        )}

        <ul className="inclist">
          <li>
            Workshop en vivo de 5 horas ({cfg.dateLabel}, {cfg.timeLabel})
          </li>
          <li>Plantillas de guiones y mensajes por industria</li>
          <li>Manual de trabajo paso a paso</li>
          <li>Grabación 20 días (vitalicia con VIP)</li>
          <li>Bono: videocurso para crear tu propia página (valor $1,000 USD)</li>
          <li>Acceso inmediato por correo</li>
        </ul>

        <div className="center" style={{ marginTop: 28 }}>
          <CtaButton href={actual ? lotes.checkoutUrl : null} className="btn-lg">
            {actual && (
              <>
                Asegurar mi lugar · {actual.label} · ${formatPrecio(actual.price)} {cfg.currency}
              </>
            )}
          </CtaButton>
        </div>

        <div className="guarantee">
          <svg className="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div>
            <strong>Garantía de reembolso.</strong>
            <br />
            Haz el workshop completo. Si no sales con algo de valor (tu mensaje, tu rutina, tu claridad para
            prospectar), te devolvemos tu dinero. Sin letra chica.
          </div>
        </div>
      </div>
    </section>
  );
}
