import ThankYou from '@/components/gracias/ThankYou';
import { GRUPO_WHATSAPP_VIPWORKSHOP } from '@/config/gracias';

export default function GraciasVipWorkshopPage() {
  return (
    <ThankYou
      title="Acceso VIP · Workshop «Prospecta sin Rogar»"
      subtitle="¡Pago confirmado! Ya tienes tu acceso VIP. Haz estos dos pasos para empezar."
      step1Title="Entra al grupo de WhatsApp del workshop."
      step1Text="Ahí recibirás los avisos, los enlaces de las sesiones en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo del workshop"
      groupUrl={GRUPO_WHATSAPP_VIPWORKSHOP}
      soporteMsg="Hola, acabo de comprar el Workshop VIP del Búnker y tengo una duda."
    />
  );
}
