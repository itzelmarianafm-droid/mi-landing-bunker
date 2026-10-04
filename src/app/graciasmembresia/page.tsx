import ThankYou from '@/components/gracias/ThankYou';
import { GRUPO_WHATSAPP } from '@/config/gracias';

export default function GraciasMembresiaPage() {
  return (
    <ThankYou
      title="¡Pago confirmado! Ya eres parte."
      subtitle="Bienvenido a la Membresía El Búnker del Vendedor. Haz estos dos pasos para empezar hoy mismo."
      step1Title="Entra al grupo de WhatsApp de alumnos."
      step1Text="Ahí recibirás los avisos, las clases en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo de alumnos"
      groupUrl={GRUPO_WHATSAPP}
      soporteMsg="Hola, acabo de entrar a la Membresía El Búnker y tengo una duda."
    />
  );
}
