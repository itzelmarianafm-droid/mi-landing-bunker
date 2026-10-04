import ThankYou from '@/components/gracias/ThankYou';
import { getWorkshopConfig } from '@/lib/workshop/getConfig';

// Lee el grupo de WhatsApp vigente desde Supabase (sin caché) para poder
// cambiarlo desde el panel de admin sin redesplegar.
export const dynamic = 'force-dynamic';

export default async function GraciasMembresiaPage() {
  const cfg = await getWorkshopConfig();

  return (
    <ThankYou
      title="¡Pago confirmado! Ya eres parte."
      subtitle="Bienvenido a la Membresía El Búnker del Vendedor. Haz estos dos pasos para empezar hoy mismo."
      step1Title="Entra al grupo de WhatsApp de alumnos."
      step1Text="Ahí recibirás los avisos, las clases en vivo y el acompañamiento. No te quedes fuera."
      step1Button="Unirme al grupo de alumnos"
      groupUrl={cfg.graciasWhatsappMembresia}
      soporteMsg="Hola, acabo de entrar a la Membresía El Búnker y tengo una duda."
    />
  );
}
