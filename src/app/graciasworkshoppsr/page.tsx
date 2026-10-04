import ThankYou from '@/components/gracias/ThankYou';
import { getWorkshopConfig } from '@/lib/workshop/getConfig';

// Lee siempre el grupo de WhatsApp vigente desde Supabase (sin caché), para que
// el cambio hecho en el panel de admin se vea al instante, sin redesplegar.
export const dynamic = 'force-dynamic';

export default async function GraciasWorkshopPsrPage() {
  const cfg = await getWorkshopConfig();

  return (
    <ThankYou
      title="Workshop «Prospecta sin Rogar»"
      subtitle="¡Pago confirmado! Ya tienes tu lugar. Haz estos dos pasos para empezar."
      step1Title="Entra al grupo de WhatsApp del workshop."
      step1Text="Ahí recibirás los avisos, los enlaces de las sesiones en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo del workshop"
      groupUrl={cfg.graciasWhatsappPsr}
      soporteMsg="Hola, acabo de comprar el Workshop Prospecta sin Rogar y tengo una duda."
    />
  );
}
