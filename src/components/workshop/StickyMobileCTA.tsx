import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';
import { textoLugares, textoUrgencia } from '@/lib/workshop/barraCopy';

/** Barra fija inferior (solo móvil). */
export default function StickyMobileCTA({ cfg, lotes }: { cfg: WorkshopConfig; lotes: LoteState }) {
  const { actual, siguiente, ahorro, barra } = lotes;

  if (!actual) {
    return (
      <div className="stickybar">
        <div className="st">Registro cerrado</div>
      </div>
    );
  }

  const urgencia = barra ? textoUrgencia(barra, cfg.umbralQuedan) : null;
  let estado: React.ReactNode = actual.label;
  if (barra && urgencia) {
    estado = (
      <>
        <b>{urgencia}</b> {actual.label}
      </>
    );
  } else if (barra && cfg.barraModo === 'lugares') {
    estado = textoLugares(barra, actual.label);
  } else if (barra) {
    estado = (
      <>
        Solo queda el <b>{100 - barra.pct}</b>% del {actual.label}
      </>
    );
  }

  return (
    <div className="stickybar">
      <div className="st">
        {estado} · $<b>{formatPrecio(actual.price)}</b>
        {siguiente && ahorro !== null && `, luego $${formatPrecio(siguiente.price)}`}
      </div>
      <a className="btn btn-primary" href="#reservar">
        Reservar
      </a>
    </div>
  );
}
