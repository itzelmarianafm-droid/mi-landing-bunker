import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';

export default function FinalCTA({ cfg, lotes }: { cfg: WorkshopConfig; lotes: LoteState }) {
  const { actual, siguiente, ahorro } = lotes;
  // "el precio sube" solo es cierto si hay un lote siguiente más caro.
  const sube = actual && siguiente && ahorro !== null;

  return (
    <section className="sec dark">
      <div className="wrap final-card">
        <div className="ops">Última llamada</div>
        <h2 className="big">Un solo día. Un solo mensaje. El que cambia cómo prospectas.</h2>
        <p className="lead">
          Puedes seguir viendo cómo otros consiguen clientes todos los días, o pasar una mañana montando tu forma de
          prospectar.
          {sube && ` El ${actual.label} tiene cupo y, cuando se llene, el precio sube.`}
        </p>
        {actual && (
          <div className="hoyluego">
            <div className="now">
              <div className="lab">Hoy · {actual.label}</div>
              <div className="amt">${formatPrecio(actual.price)}</div>
            </div>
            {siguiente && (
              <div>
                <div className="lab">Luego · {siguiente.label}</div>
                <div className="amt">${formatPrecio(siguiente.price)}</div>
              </div>
            )}
          </div>
        )}
        <div style={{ marginTop: 28 }}>
          {actual ? (
            <a className="btn btn-primary btn-lg" href="#reservar">
              Asegurar mi lugar · {actual.label}
            </a>
          ) : (
            <span className="btn btn-lg" aria-disabled="true">
              Registro cerrado
            </span>
          )}
        </div>
        <p className="micro" style={{ marginTop: 14 }}>
          Acceso inmediato por correo · Grabación 20 días · {cfg.dateLabel}, {cfg.timeLabel}.
        </p>
      </div>
    </section>
  );
}
