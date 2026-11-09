import { formatPrecio, type LoteState, type WorkshopConfig } from '@/lib/workshop/config';

export default function Header({ cfg, lotes }: { cfg: WorkshopConfig; lotes: LoteState }) {
  const { actual } = lotes;
  return (
    <>
      <div className="ann">
        Workshop en vivo · {cfg.dateLabel} · {cfg.timeLabel}
        {actual && ` · ${actual.label} a $${formatPrecio(actual.price)} ${cfg.currency}`}
      </div>

      <header className="nav">
        <div className="wrap nav-in">
          <div className="logo">
            <span className="dot" />
            El Búnker del Vendedor
          </div>
          <a className="btn btn-primary" href="#reservar">
            Reservar mi lugar
          </a>
        </div>
      </header>
    </>
  );
}
