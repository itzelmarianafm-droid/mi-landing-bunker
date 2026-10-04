import ThankYou from '@/components/gracias/ThankYou';
import { getWorkshopConfig } from '@/lib/workshop/getConfig';

// Lee el grupo de WhatsApp vigente desde Supabase (sin caché) para poder
// cambiarlo desde el panel de admin sin redesplegar.
export const dynamic = 'force-dynamic';

export default async function GraciasVipWorkshopPage() {
  const cfg = await getWorkshopConfig();

  return (
    <ThankYou
      title="Acceso VIP · Workshop «Prospecta sin Rogar»"
      subtitle="¡Pago confirmado! Ya tienes tu acceso VIP. Haz estos dos pasos para empezar."
      step1Title="Entra al grupo de WhatsApp del workshop."
      step1Text="Ahí recibirás los avisos, los enlaces de las sesiones en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo del workshop"
      groupUrl={cfg.graciasWhatsappVip}
      soporteMsg="Hola, acabo de comprar el Workshop VIP del Búnker y tengo una duda."
    />
  );
}
