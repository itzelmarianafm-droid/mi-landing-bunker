import type { CSSProperties } from 'react';
import type { LoteState, WorkshopConfig } from '@/lib/workshop/config';
import { textoLugares, textoUrgencia } from '@/lib/workshop/barraCopy';

/**
 * Barra de avance del lote activo. Solo aparece si está encendida en el panel
 * y el lote tiene cupo; los números salen de cupo/vendidos reales.
 * `variant` respeta las dos redacciones de la referencia:
 * hero → "solo queda el X%", card → "queda el X%".
 */
export default function BarraLote({
  cfg,
  lotes,
  variant,
}: {
  cfg: WorkshopConfig;
  lotes: LoteState;
  variant: 'hero' | 'card';
}) {
  const { barra, actual } = lotes;
  if (!barra || !actual) return null;

  const urgencia = textoUrgencia(barra, cfg.umbralQuedan);
  const fill = { '--pct': `${barra.pct}%` } as CSSProperties;

  return (
    <>
      <div className="bar" style={variant === 'card' ? { marginTop: 14 } : undefined}>
        <i style={fill} />
      </div>
      <div className="barlabel">
        {cfg.barraModo === 'lugares' ? (
          <span>{urgencia ? <b>{urgencia}</b> : textoLugares(barra, actual.label)}</span>
        ) : (
          <>
            <span>
              <b>{barra.pct}</b>% vendido
            </span>
            {urgencia ? (
              <b>{urgencia}</b>
            ) : (
              <span>
                {variant === 'hero' ? 'solo queda el ' : 'queda el '}
                <b>{100 - barra.pct}</b>%
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}
