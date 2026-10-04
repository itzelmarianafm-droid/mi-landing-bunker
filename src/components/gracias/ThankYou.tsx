import Image from 'next/image';
import { WHATSAPP_SOPORTE, CORREO_SOPORTE } from '@/config/gracias';

export type ThankYouProps = {
  /** Título grande (h1). */
  title: string;
  /** Bajada bajo el título. */
  subtitle: string;
  /** Título del Paso 1 (grupo de WhatsApp). */
  step1Title: string;
  /** Texto del Paso 1. */
  step1Text: string;
  /** Texto del botón de WhatsApp. */
  step1Button: string;
  /** URL del grupo de WhatsApp al que lleva el botón. */
  groupUrl: string;
  /** Mensaje prellenado al escribir a soporte. */
  soporteMsg?: string;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L4 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.6c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.6 4.6-10.1 10.3-10.1 5.6 0 10.2 4.5 10.2 10.1S21.6 25.6 16 25.6zm5.8-7.6c-.3-.2-1.9-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
    </svg>
  );
}

/**
 * Página de gracias post-compra, reutilizable. El Paso 2 (correo de Hotmart),
 * el soporte y el pie son iguales en todas; lo específico de cada producto
 * (título, bajada, Paso 1 y el grupo de WhatsApp) llega por props.
 */
export default function ThankYou({
  title,
  subtitle,
  step1Title,
  step1Text,
  step1Button,
  groupUrl,
  soporteMsg = 'Hola, acabo de comprar en El Búnker y tengo una duda.',
}: ThankYouProps) {
  const soporteHref = `https://wa.me/${WHATSAPP_SOPORTE}?text=${encodeURIComponent(
    soporteMsg
  )}`;

  return (
    <main className="gwrap">
      <p className="eyebrow">El Búnker del Vendedor</p>

      <Image
        className="photo"
        src="/membresia/mariana-paco.png"
        alt="Paco Anguiano y Mariana Franco te dan la bienvenida"
        width={620}
        height={754}
        priority
        sizes="190px"
      />

      <div className="check" aria-hidden>
        ✓
      </div>

      <h1>{title}</h1>
      <p className="sub">{subtitle}</p>

      {/* Paso 1 — acción principal */}
      <section className="card step1">
        <p className="steplabel">Paso 1 · El más importante</p>
        <h2>{step1Title}</h2>
        <p>{step1Text}</p>
        <a
          className="btn-wa"
          href={groupUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {step1Button}
        </a>
      </section>

      {/* Paso 2 */}
      <section className="card step2">
        <p className="steplabel">Paso 2 · Revisa tu correo</p>
        <h2>Te llegó un correo de Hotmart.</h2>
        <p>
          Contiene tus datos de acceso al producto. Si no lo ves en tu bandeja
          de entrada, revisa las carpetas de <b>spam</b> o <b>promociones</b>.
        </p>
      </section>

      {/* Soporte */}
      <div className="support">
        <p className="t">¿Dudas o algún problema?</p>
        <div className="row">
          WhatsApp:{' '}
          <a href={soporteHref} target="_blank" rel="noopener noreferrer">
            +52 55 3901 3930
          </a>
        </div>
        <div className="row">
          Correo: <a href={`mailto:${CORREO_SOPORTE}`}>{CORREO_SOPORTE}</a>
        </div>
      </div>

      <p className="foot">Vender no se improvisa. Se entrena.</p>
    </main>
  );
}
