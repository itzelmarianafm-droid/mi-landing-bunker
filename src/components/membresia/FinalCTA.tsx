import CtaButton from './CtaButton';
import { TODAY_GIFTS_MXN, mxn, usd } from '@/config/offer';

export default function FinalCTA() {
  return (
    <section className="sec final">
      <div className="wrap">
        <div className="eyebrow" style={{ color: 'var(--accent)' }}>
          Decisión de hoy
        </div>
        <h2 className="disp">
          El único riesgo real es seguir otra semana improvisando, perdiendo
          ventas y viendo caer tus ingresos.
        </h2>
        <div className="urg">
          Solo hoy · los primeros 6 del anual se llevan su Página Imán hecha por
          nosotros
        </div>
        <div className="more">
          Solo los regalos de hoy valen {mxn(TODAY_GIFTS_MXN)} MXN (≈ $
          {usd(TODAY_GIFTS_MXN)} USD): más de 4 veces lo que cuesta el anual.
        </div>
        <div style={{ marginTop: 16 }}>
          <CtaButton action="scroll" className="lg">
            Entrar a la membresía
          </CtaButton>
        </div>
        <p className="guar">
          Garantía del Búnker del Vendedor: aplica el sistema; si no te llevas
          algo de valor, hablamos. Entras con precio de fundador de por vida y
          lo conservas aunque el precio suba.
        </p>
      </div>
    </section>
  );
}
