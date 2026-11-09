import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';
import { textoLugares, textoUrgencia } from '@/lib/workshop/barraCopy';

/** Barra fija inferior, visible siempre (computadora y celular). */
export default function StickyCTA({ cfg, lotes }: { cfg: WorkshopConfig; lotes: LoteState }) {
  const { actual, siguiente, ahorro, barra } = lotes;

  if (!actual) {
    return (
      <div className="stickybar">
        <div className="st">Registro cerrado</div>
      </div>
    );
  }

  // Cupos que quedan: solo si la barra de avance está encendida en el panel.
  let cupos: React.ReactNode = null;
  if (barra) {
    const urgencia = textoUrgencia(barra, cfg.umbralQuedan);
    if (urgencia) cupos = <b>{urgencia}</b>;
    else if (cfg.barraModo === 'lugares') cupos = textoLugares(barra, actual.label);
    else
      cupos = (
        <>
          Solo queda el <b>{100 - barra.pct}%</b> de los cupos
        </>
      );
  }

  return (
    <div className="stickybar">
      <div className="st">
        <span className="live">Workshop en vivo</span>
        <span className="live-sep"> · </span>
        {cupos && <>{cupos} · </>}
        {actual.label} a <b>${formatPrecio(actual.price)}</b>
        {siguiente && ahorro !== null && (
          <>
            {' '}
            · luego sube a <b>${formatPrecio(siguiente.price)}</b>
          </>
        )}
      </div>
      <a className="btn btn-primary" href="#reservar">
        Reservar
      </a>
    </div>
  );
}
