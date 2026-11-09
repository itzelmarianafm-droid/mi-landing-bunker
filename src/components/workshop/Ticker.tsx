import { Fragment } from 'react';

const ITEMS = [
  'Prospecta sin rogar',
  '5 a 10 prospectos al día',
  'sin perseguir',
  'sin que te dejen en visto',
  'sin gastar en publicidad',
  'vender se entrena',
];

export default function Ticker() {
  // Dos copias seguidas para que el desplazamiento infinito no tenga saltos.
  const run = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="run">
        {run.map((t, i) => (
          <Fragment key={i}>
            {t}
            <span>✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
