import ThankYou from '@/components/gracias/ThankYou';
import { GRUPO_WHATSAPP_PSR } from '@/config/gracias';

export default function GraciasWorkshopPsrPage() {
  return (
    <ThankYou
      title="Workshop «Prospecta sin Rogar»"
      subtitle="¡Pago confirmado! Ya tienes tu lugar. Haz estos dos pasos para empezar."
      step1Title="Entra al grupo de WhatsApp del workshop."
      step1Text="Ahí recibirás los avisos, los enlaces de las sesiones en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo del workshop"
      groupUrl={GRUPO_WHATSAPP_PSR}
      soporteMsg="Hola, acabo de comprar el Workshop Prospecta sin Rogar y tengo una duda."
    />
  );
}
