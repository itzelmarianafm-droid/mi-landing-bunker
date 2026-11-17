import CtaButton from './CtaButton';

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
        <div style={{ marginTop: 24 }}>
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
