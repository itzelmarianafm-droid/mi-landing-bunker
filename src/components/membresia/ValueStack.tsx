import {
  VALUE_STACK,
  ANCHOR_TOTAL_MXN,
  PLANS,
  mxn,
  usd,
  EXCHANGE_NOTE,
  type ValueGroup,
} from '@/config/offer';

function Group({ group }: { group: ValueGroup }) {
  return (
    <div className="group">
      <h3>{group.title}</h3>
      {group.cumulativeNote && <div className="gsub">{group.cumulativeNote}</div>}
      {group.items.map((item) => (
        <div className="item" key={item.name}>
          <div className="chk">✓</div>
          <div className="body">
            <div className="name">
              {item.name}
              {group.stackBadge && <span className="badge">{group.stackBadge}</span>}{' '}
              <span className="i">ⓘ</span>
            </div>
            <div className="desc">
              {item.benefit}
              {item.smallprint && <span className="fine">{item.smallprint}</span>}
            </div>
            <div className="pop">{item.tooltip}</div>
          </div>
          <div className="val">
            {item.valueMXN === null ? (
              <>
                Permanente<span className="vr">beneficio incluido</span>
              </>
            ) : (
              <>
                {mxn(item.valueMXN)} MXN
                <span className="vu">≈ ${usd(item.valueMXN)} USD</span>
                <span className="vr">valor real · ya incluido</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ValueStack() {
  const mensual = PLANS.find((p) => p.key === 'mensual')!;
  const anual = PLANS.find((p) => p.key === 'anual')!;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="eyebrow" style={{ textAlign: 'center' }}>
          Todo lo que recibes
        </div>
        <h2
          className="disp"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(26px,4.4vw,40px)',
            marginTop: 8,
          }}
        >
          El arsenal completo del Búnker del Vendedor
        </h2>
        <p
          className="muted"
          style={{ textAlign: 'center', maxWidth: '58ch', margin: '10px auto 0' }}
        >
          Pasa el cursor (o toca) cada punto para ver qué resuelve. Cada precio
          es su valor real de referencia, pero tú no pagas eso: ya viene
          incluido en el precio de tu membresía.
        </p>

        {VALUE_STACK.map((group) => (
          <Group group={group} key={group.key} />
        ))}

        <div className="anchor">
          <div className="lbl">Valor real de todo lo que te llevas</div>
          <div className="big">
            <span className="strike">
              {mxn(ANCHOR_TOTAL_MXN)} MXN (≈ ${usd(ANCHOR_TOTAL_MXN)} USD)
            </span>
          </div>
          <div className="big">
            Hoy desde {mxn(mensual.priceMXN)} MXN / mes{' '}
            <span className="sm">(≈ ${usd(mensual.priceMXN)} USD)</span>
          </div>
          <div className="sm">
            El plan anual cuesta {mxn(anual.priceMXN)} MXN (≈ $
            {usd(anual.priceMXN)} USD) al año. Más de ${usd(ANCHOR_TOTAL_MXN)}{' '}
            USD de valor, por una fracción.
          </div>
          <p className="fx">{EXCHANGE_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
