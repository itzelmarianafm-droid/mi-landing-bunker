import BarraLote from './BarraLote';
import Vsl from './Vsl';
import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';

export default function Hero({
  cfg,
  lotes,
  vslPoster,
}: {
  cfg: WorkshopConfig;
  lotes: LoteState;
  vslPoster: string | null;
}) {
  const { actual, siguiente, ahorro } = lotes;

  return (
    <section className="sec dark hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="ops">El workshop</div>
            <h1>
              Prospecta sin rogar: de <span className="accent">5 a 10</span> prospectos al día.
            </h1>
            <p className="lead">
              Consigue cada día gente nueva y lista para comprarte. Sin perseguir a nadie, sin que te dejen en visto y
              aunque hoy no tengas un peso para publicidad.
            </p>
            <p className="lead lead-sm">
              Aquí aprendes el primer paso del proceso completo para vender de forma constante y que tus ingresos
              dejen de ser una montaña rusa. Es la primera pieza que te falta entender de tu sistema de ventas, y con
              ella todo lo que ya intentaste —vender por WhatsApp, los cursos de contenido, los de marca personal— por
              fin te va a hacer sentido. En 5 horas en vivo, Paco Anguiano y Mariana Franco te enseñan a escribir los
              mensajes que atraen a tu cliente ideal un día sí y otro también, listos para mandar y darle la vuelta a
              tus ventas.
            </p>
            <div className="hero-cta">
              {actual ? (
                <a className="btn btn-primary btn-lg" href="#reservar">
                  Asegurar mi lugar · {actual.label}
                </a>
              ) : (
                <span className="btn btn-lg" aria-disabled="true">
                  Registro cerrado
                </span>
              )}
              <a className="btn btn-ghost" href="#video">
                Ver el video
              </a>
            </div>
          </div>

          <div>
            <div className="frame" id="video">
              <Vsl url={cfg.vslUrl} poster={vslPoster} />
            </div>
            <div className="vplay">Dale play antes de decidir</div>

            <div className="frame lote">
              <div className="lrow">
                {actual ? (
                  <>
                    <span className="badge">{actual.label} · Disponible</span>
                    <div className="price">
                      ${formatPrecio(actual.price)}
                      <span className="cur">{cfg.currency}</span>
                    </div>
                  </>
                ) : (
                  <span className="badge">Registro cerrado</span>
                )}
              </div>
              <div className="when">
                {cfg.dateLabel} · {cfg.timeLabel}
              </div>
              <BarraLote cfg={cfg} lotes={lotes} variant="hero" />
              {actual && siguiente && ahorro !== null && (
                <div className="next">
                  Cuando se llene el {actual.label}, el precio sube a{' '}
                  <b>
                    ${formatPrecio(siguiente.price)} {cfg.currency}
                  </b>
                  . Entrando hoy te ahorras <b>${formatPrecio(ahorro)}</b>.
                </div>
              )}
              <a className="btn btn-primary btn-block" style={{ marginTop: 16 }} href="#reservar">
                Reservar mi lugar
              </a>
              <div className="specline">
                <span>En vivo por Zoom</span>
                <span>5 horas</span>
                <span>Grabación 20 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
