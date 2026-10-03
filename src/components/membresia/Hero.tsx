import Image from 'next/image';
import CtaButton from './CtaButton';
import { EXCHANGE_NOTE } from '@/config/offer';

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="eyebrow">El Búnker del Vendedor · Membresía</div>
            <h1 className="disp">
              Deja de vender a <span className="o">ciegas</span>. Entrena cada
              semana con Paco y Mariana.
            </h1>
            <p className="sub">
              Un sistema de ventas que sí sostienes, acompañamiento en vivo cada
              semana y la mentalidad para vender sin miedo ni rogar. Porque
              vender no se improvisa: se entrena.
            </p>
            <CtaButton action="scroll" className="lg">
              Quiero entrar a la membresía
            </CtaButton>
            <p className="fx">{EXCHANGE_NOTE}</p>
            <div className="trust">
              <span>
                🎯 Mentores: <b>Paco Anguiano</b> y <b>Mariana Franco</b>
              </span>
              <span>
                📅 <b>Clases en vivo cada semana</b>
              </span>
              <span>🔒 Precio de fundador de por vida</span>
            </div>
          </div>
          <div className="photo">
            <Image
              src="/membresia/mariana-paco.png"
              alt="Paco Anguiano y Mariana Franco"
              width={620}
              height={754}
              priority
              sizes="(max-width: 820px) 360px, 468px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
