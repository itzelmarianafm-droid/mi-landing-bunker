import CtaButton from './CtaButton';
import {
  VALUE_STACK,
  PLANS,
  planIncludesGroup,
  mxn,
  EXCHANGE_NOTE,
  type Plan,
} from '@/config/offer';

function PlanCard({ plan }: { plan: Plan }) {
  const best = !!plan.recommended;
  return (
    <div className={best ? 'plan best' : 'plan'}>
      {best && <div className="ribbon">Recomendado</div>}
      <div className="tier">{plan.tier}</div>
      <div className="pname disp">{plan.pname}</div>
      <div>
        <span className="was">{mxn(plan.listMXN)} MXN</span>
      </div>
      <div className="price">
        {mxn(plan.priceMXN)} <small>{plan.priceSuffix}</small>
      </div>
      <div className="usd">{plan.usdLine}</div>
      <div className="save">{plan.save}</div>
      <CtaButton action={plan.checkoutKey} className="cta">
        {plan.ctaTop}
      </CtaButton>
      <p className="fx">{EXCHANGE_NOTE}</p>

      <ul>
        {VALUE_STACK.flatMap((group) =>
          group.items.map((item) => {
            const yes = planIncludesGroup(plan.key, group.key);
            return (
              <li className={yes ? 'pli yes' : 'pli no'} key={item.name}>
                <span className="m">{yes ? '✓' : '✗'}</span>
                <span className="pl-t">
                  {item.name}{' '}
                  {group.planNote && <small>{group.planNote}</small>}{' '}
                  <span className="i">ⓘ</span>
                </span>
                <div className="pop">{item.tooltip}</div>
              </li>
            );
          })
        )}
      </ul>

      <CtaButton action={plan.checkoutKey} className="cta">
        {plan.ctaBottom}
      </CtaButton>
      <p className="fx">{EXCHANGE_NOTE}</p>
    </div>
  );
}

export default function Plans() {
  return (
    <section
      className="sec"
      id="planes"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <div className="eyebrow" style={{ textAlign: 'center' }}>
          Elige tu plan
        </div>
        <h2
          className="disp"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(26px,4.4vw,40px)',
            marginTop: 8,
          }}
        >
          Mensual para empezar. Anual para despegar.
        </h2>
        <p className="muted" style={{ textAlign: 'center', marginTop: 8 }}>
          Mismo listado en los dos, para que veas claro qué se lleva cada quien.
          Pasa el cursor por cada punto para el detalle.
        </p>
        <div className="plans">
          {PLANS.map((plan) => (
            <PlanCard plan={plan} key={plan.key} />
          ))}
        </div>
      </div>
    </section>
  );
}
