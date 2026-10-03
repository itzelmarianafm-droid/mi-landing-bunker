/**
 * Fuente de verdad de la oferta de la Membresía El Búnker del Vendedor.
 *
 * El copy reproduce EXACTAMENTE el diseño aprobado en
 * BUNKER-LANDING/landing-oferta-membresia.html. No lo cambies sin aprobación.
 *
 * El USD mostrado se calcula desde el MXN con EXCHANGE_RATE; el valor por
 * defecto (18.23) reproduce al pie de la letra los USD del HTML aprobado.
 */

// Tipo de cambio del día (MXN por USD). El USD mostrado flota con este valor.
export const EXCHANGE_RATE = Number(
  process.env.NEXT_PUBLIC_MXN_USD || 18.23
);

/** Convierte MXN a USD aproximado (redondeado). */
export function usd(mxn: number, rate: number = EXCHANGE_RATE): number {
  return Math.round(mxn / rate);
}

/** Formatea pesos: 3900 -> "$3,900". */
export function mxn(n: number): string {
  return "$" + n.toLocaleString("es-MX", { maximumFractionDigits: 0 });
}

/** URLs de checkout de Hotmart. */
export const CHECKOUT = {
  mensual: (
    process.env.NEXT_PUBLIC_CHECKOUT_MENSUAL ||
    "https://pay.hotmart.com/A107873521M?off=5zqdmea5"
  ).trim(),
  anual: (
    process.env.NEXT_PUBLIC_CHECKOUT_ANUAL ||
    "https://pay.hotmart.com/A107873521M?off=hpoza352"
  ).trim(),
};

/** WhatsApp de soporte (dudas y problemas de pago, incluye sin tarjeta). */
export const WHATSAPP_SOPORTE =
  (process.env.NEXT_PUBLIC_WHATSAPP_SOPORTE || "525539013930").trim();

/** IDs de analítica (opcionales). */
export const ANALYTICS = {
  metaPixelId: (process.env.NEXT_PUBLIC_META_PIXEL_ID || "").trim(),
  gaId: (process.env.NEXT_PUBLIC_GA_ID || "").trim(),
};

export type ValueItem = {
  name: string;
  /** Una línea de qué es y su formato real (.desc). */
  benefit: string;
  /** Valor sugerido en MXN; null = beneficio permanente (sin cifra). */
  valueMXN: number | null;
  /** Copy del popover (.pop). */
  tooltip: string;
  /** Letra chica opcional (.fine) debajo del beneficio. */
  smallprint?: string;
};

export type ValueGroup = {
  key: "nucleo" | "anual" | "accion";
  title: string;
  /** Nota acumulativa que se muestra arriba del grupo (.gsub). */
  cumulativeNote?: string;
  /** Badge por ítem en el stack de valor (ej. "Solo anual"). */
  stackBadge?: string;
  /** Etiqueta pequeña por ítem en las tarjetas de plan (ej. "solo anual"). */
  planNote?: string;
  items: ValueItem[];
};

export const VALUE_STACK: ValueGroup[] = [
  {
    key: "nucleo",
    title: "Núcleo — para todo miembro",
    items: [
      {
        name: "El Arsenal «Prospecta sin Rogar»",
        benefit: "Curso grabado paso a paso, a tu ritmo.",
        valueMXN: 3900,
        tooltip:
          "El método completo —atraer, calificar, presentar, cerrar y debatir objeciones— grabado para que lo veas las veces que quieras. Deja de improvisar y de sentir que cada venta empieza de cero: ten el camino claro frente a ti cada vez que te sientas a prospectar.",
      },
      {
        name: "Mastermind grupal en vivo",
        benefit: "Sesión en vivo al mes para resolver tu caso.",
        valueMXN: 6000,
        tooltip:
          "Una cosa es aprender la teoría y otra aplicarla a tu negocio. Aquí llevas eso que se te atoró y sales con la respuesta, en vivo, de quien ya lo resolvió mil veces. Nunca más le das vueltas solo, sin avanzar.",
      },
      {
        name: "Play Role de cierre",
        benefit: "Sesión en vivo al mes para ensayar el cierre.",
        valueMXN: 3600,
        tooltip:
          "El cierre se traba cuando lo improvisas. Aquí practicas presentar, rebatir objeciones y pedir la venta en un entorno seguro, hasta que te salga natural y te paguen sin que te tiemble la voz. La próxima vez que alguien dude, vas a saber exactamente qué decir.",
      },
      {
        name: "Reprograma tu mente de vendedor",
        benefit: "Clase en vivo al mes de mentalidad.",
        valueMXN: 4800,
        tooltip:
          "El miedo al rechazo y esa voz que dice “yo no sirvo para esto” frenan más ventas que cualquier técnica. Aquí entrenas tu cabeza para vender desde la seguridad, sin sentir que ruegas y sin que un “no” te tumbe el día. Cuando cambias por dentro, tus números cambian por fuera.",
      },
      {
        name: "Tu «herramienta de introducción»",
        benefit: "Curso grabado para construirla paso a paso.",
        valueMXN: 1900,
        tooltip:
          "Imagina dejar de perseguir y que te lleguen personas ya interesadas, listas para escucharte. Esta herramienta filtra por ti: menos “vistos”, menos objeciones, menos tiempo rogando. Conviertes prospectar en frío en atraer en caliente.",
      },
      {
        name: "Biblioteca de guiones por industria",
        benefit: "Guías y plantillas descargables por nicho.",
        valueMXN: 1900,
        tooltip:
          "Se acabó quedarte viendo el cursor sin saber qué escribir. Tienes el primer mensaje, el seguimiento y la forma de presentar tu oferta ya redactados para tu industria. Copias, adaptas y envías con seguridad en minutos.",
      },
      {
        name: "Masterclass mensual en vivo",
        benefit: "Clase en vivo al mes para subir de nivel.",
        valueMXN: 6000,
        tooltip:
          "Cada mes, un tema que mueve la aguja: ofertas irresistibles, ventas de alto valor, subir tus precios, tu marca personal. No es información que envejece; es entrenamiento fresco para que no te quedes estancado haciendo siempre lo mismo.",
      },
      {
        name: "Aceleradora de tus ventas",
        benefit: "Un fin de semana en vivo al mes para implementar.",
        valueMXN: 4800,
        tooltip:
          "Saber no basta: lo que paga es implementar. Un fin de semana al mes nos sentamos contigo a montar tu sistema en vivo, para que salgas con cosas hechas y no con más apuntes. De la intención a la acción, acompañado.",
      },
      {
        name: "Contenido que vende",
        benefit: "Clase en vivo al mes de contenido.",
        valueMXN: 3600,
        tooltip:
          "Publicas y publicas, pero no se convierte en clientes. Aquí aprendes a crear contenido que atrae y filtra, a perder el miedo a la cámara y a que tu marca hable por ti mientras duermes. Que cada video trabaje para tu bolsillo.",
      },
      {
        name: "IA aplicada a tus ventas",
        benefit: "Clase en vivo al mes de IA práctica.",
        valueMXN: 3600,
        tooltip:
          "La inteligencia artificial puede escribir tus mensajes, tus guiones y tu seguimiento en minutos. Aquí la pones a trabajar para ti: ahorras horas, dejas de pelear con la página en blanco y le ganas tiempo a tu competencia.",
      },
      {
        name: "Master Class secreta",
        benefit: "Clases en vivo ocasionales con invitados.",
        valueMXN: 2900,
        tooltip:
          "De vez en cuando se sienta con nosotros alguien que ha vendido millones en su industria, a contarte sin filtro lo que de verdad funciona: los atajos, los errores que no tienes que cometer y la forma de pensar de los mejores, a tu alcance.",
      },
    ],
  },
  {
    key: "anual",
    title: "Solo plan anual",
    cumulativeNote: "Todo lo anterior del mensual, más:",
    stackBadge: "Solo anual",
    planNote: "solo anual",
    items: [
      {
        name: "Diagnóstico «Rayos X» + 1.5 h de mentoría 1 a 1",
        benefit: "Diagnóstico + 1.5 h en vivo, uno a uno.",
        valueMXN: 4997,
        tooltip:
          "Nos sentamos contigo, a solas, a ver tu negocio con lupa: qué te está frenando, qué pieza te falta y por dónde empezar. Sales con una hoja de ruta hecha para ti, no genérica. Es la diferencia entre adivinar por meses y saber exactamente qué hacer mañana.",
      },
      {
        name: "3 meses de la herramienta de contenido con IA",
        benefit: "Acceso 3 meses a la herramienta de contenido.",
        valueMXN: 2400,
        tooltip:
          "Anuncios, reels y mensajes listos con unos clics, redactados como si tuvieras un estratega publicitario al lado. Dejas de depender de la inspiración y produces aunque ese día no te sientas creativo.",
      },
      {
        name: "Clase especial de tráfico pago",
        benefit: "Clase en vivo de publicidad pagada.",
        valueMXN: 1900,
        tooltip:
          "Cuando tu libreta de contactos se acaba, los anuncios abren la llave. Aprendes a atraer prospectos nuevos de forma constante, para no volver a depender solo de a quién ya conoces.",
      },
      {
        name: "15% de descuento de por vida en servicios",
        benefit: "Descuento permanente en servicios de la agencia.",
        valueMXN: null,
        tooltip:
          "Cuando no quieras —o no tengas tiempo de— hacerlo tú, tu equipo lo hace: edición, redes, anuncios, embudos. Y siempre con 15% menos por ser de la casa. Creces sin cargar tú con todo.",
      },
    ],
  },
  {
    key: "accion",
    title: "Regalos para los primeros 6 que paguen el anual hoy",
    cumulativeNote:
      "Todo lo anterior, más (solo para los primeros 6 que paguen el anual hoy):",
    stackBadge: "Hoy · primeros 6",
    planNote: "hoy · primeros 6",
    items: [
      {
        name: "Tu Página Imán, hecha por nosotros",
        benefit: "Nosotros te la creamos y construimos. Tuya por 1 año.",
        smallprint:
          "*La edición del video y el dominio personalizado no se incluyen; corren por cuenta del alumno si quiere la página con esas características.",
        valueMXN: 9900,
        tooltip:
          "El activo que casi nadie tiene y todos necesitan: una página que atrae, educa y filtra por ti, trabajando las 24 horas. Nosotros la pensamos, la escribimos y la construimos; tú solo la usas para que te lleguen prospectos mientras haces tu vida.",
      },
      {
        name: "Mentoría 1 a 1 bimestral + «WhatsApp 911»",
        benefit: "2 h uno a uno cada bimestre + WhatsApp directo L–V.",
        valueMXN: 7900,
        tooltip:
          "Imagina tener a tus mentores a un mensaje de distancia. Cada dos meses te sientas dos horas, uno a uno, a trabajar tu caso a fondo con Paco y Mariana. Y en el día a día, tu «WhatsApp 911» de lunes a viernes en horario hábil para resolver las dudas menores al instante. Dejas de resolver a ciegas lo que alguien con experiencia te contesta en minutos.",
      },
      {
        name: "Pase al evento La Logia Mastermind",
        benefit:
          "Entrada al evento presencial anual. Para los primeros 6 que pagan el anual hoy.",
        valueMXN: 4997,
        tooltip:
          "Un día al año, en persona, rodeado de gente que va para el mismo lado. Conferencias de los mejores, conexiones que valen oro y la energía que te recarga para los siguientes doce meses. Lo que pasa en esa sala no se consigue detrás de una pantalla.",
      },
    ],
  },
];

/** Ancla: valor real sumado. Se muestra tachado frente al precio. */
export const ANCHOR_TOTAL_MXN = 75094;

/** Regalos de hoy (para el CTA final): su valor sumado. */
export const TODAY_GIFTS_MXN = 22797;

export type Plan = {
  key: "mensual" | "anual";
  /** Primera línea del encabezado (.tier). */
  tier: string;
  /** Nombre grande (.pname). */
  pname: string;
  priceMXN: number;
  /** Precio de lista/referencia tachado (.was). */
  listMXN: number;
  /** Sufijo junto al precio (ej. "MXN / mes"). */
  priceSuffix: string;
  /** Línea USD (.usd) completa, ej. "≈ $30 USD / mes · ...". */
  usdLine: string;
  /** Badge verde de ahorro (.save). */
  save: string;
  recommended?: boolean;
  /** CTA de arriba. */
  ctaTop: string;
  /** CTA de abajo. */
  ctaBottom: string;
  checkoutKey: "mensual" | "anual";
};

export const PLANS: Plan[] = [
  {
    key: "mensual",
    tier: "Plan Mensual · Recluta",
    pname: "Básico",
    priceMXN: 547,
    listMXN: 997,
    priceSuffix: "MXN / mes",
    usdLine: "≈ $30 USD / mes · precio de fundador de por vida",
    save: "Ahorras $450 cada mes",
    ctaTop: "Suscribirme al mensual",
    ctaBottom: "Quiero entrar al mensual",
    checkoutKey: "mensual",
  },
  {
    key: "anual",
    tier: "Plan Anual · Élite",
    pname: "Experto",
    priceMXN: 5470,
    listMXN: 6564,
    priceSuffix: "MXN / año",
    usdLine: "≈ $300 USD / año · 2 meses gratis + regalos exclusivos",
    save: "Ahorras $1,094 + bonos solo anual",
    recommended: true,
    ctaTop: "Quiero el anual con todos los bonos",
    ctaBottom: "Quiero entrar a la membresía",
    checkoutKey: "anual",
  },
];

/**
 * Qué incluye cada plan por grupo (para las tarjetas comparativas).
 * mensual = solo núcleo. anual = todo.
 */
export function planIncludesGroup(
  planKey: Plan["key"],
  groupKey: ValueGroup["key"]
): boolean {
  if (planKey === "anual") return true;
  return groupKey === "nucleo"; // mensual solo núcleo
}

export const EXCHANGE_NOTE =
  "El cobro se realiza en Hotmart; puede haber pequeñas variaciones por el tipo de cambio de la plataforma.";
