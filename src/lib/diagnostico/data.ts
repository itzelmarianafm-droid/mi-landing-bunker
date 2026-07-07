// =====================================================================
// Diagnóstico de los 6 Pilares — El Búnker del Vendedor
// Contenido y configuración (textual, según el system prompt aprobado).
// =====================================================================

export type PillarKey =
  | 'mentalidad'
  | 'comunicacion'
  | 'proceso'
  | 'contenido'
  | 'herramientas'
  | 'actividad';

export interface Pillar {
  key: PillarKey;
  n: number;        // 1..6
  code: string;     // P1..P6 (etiqueta del hexágono)
  title: string;    // título completo
  short: string;    // nombre corto para listas/leyenda
  sub: string;      // subtítulo (qué evalúa)
  items: string[];  // 5 afirmaciones
  reading: string;  // lectura de la fuga
  action: string;   // primera acción
}

export const PILLARS: Pillar[] = [
  {
    key: 'mentalidad',
    n: 1,
    code: 'P1',
    title: 'Mentalidad del vendedor independiente',
    short: 'Mentalidad',
    sub: 'Evalúa si tratas la venta como una profesión o como una actividad que haces cuando tienes ánimo.',
    items: [
      'Tengo claro que vender es una habilidad que se entrena, no algo que depende solo de carisma, suerte o entusiasmo.',
      'Puedo recibir rechazos sin desmotivarme, justificarme o desaparecer de mi actividad comercial.',
      'Entiendo que los resultados comerciales requieren volumen, práctica y consistencia, no solo ganas.',
      'Me presento como profesional, no como alguien que "anda intentando vender algo".',
      'Tengo expectativas realistas sobre el tiempo, esfuerzo y habilidad que requiere vender bien por comisión.',
    ],
    reading:
      'Tu principal fuga puede estar en cómo estás interpretando la venta. La primera corrección no es aprender otro cierre: es asumir que vender por comisión exige madurez, volumen, paciencia y entrenamiento.',
    action:
      'Escribe qué expectativa poco realista te está haciendo abandonar, frustrarte o trabajar por impulso.',
  },
  {
    key: 'comunicacion',
    n: 2,
    code: 'P2',
    title: 'Comunicación',
    short: 'Comunicación',
    sub: 'Evalúa cómo te muestras frente al prospecto: claridad, postura, preguntas, escucha y seguridad.',
    items: [
      'Puedo explicar lo que vendo de forma simple, clara y sin dar discursos largos.',
      'Hago preguntas antes de presentar mi producto, servicio u oportunidad.',
      'Escucho con atención en lugar de esperar mi turno para hablar.',
      'Cuido mi postura, tonalidad y energía para no sonar urgido, inseguro, intenso o artificial.',
      'Sé adaptar mi mensaje según el tipo de prospecto con el que estoy hablando.',
    ],
    reading:
      'Tu principal fuga puede estar en cómo te muestras frente al prospecto. La gente no solo escucha lo que dices: también percibe desde dónde lo dices.',
    action:
      'Graba un audio de 60 segundos explicando lo que vendes y revisa tres cosas: claridad, seguridad y brevedad.',
  },
  {
    key: 'proceso',
    n: 3,
    code: 'P3',
    title: 'Técnicas de ventas y proceso comercial',
    short: 'Proceso',
    sub: 'Evalúa si tienes una ruta comercial clara o si dependes de improvisar cada conversación.',
    items: [
      'Tengo una lista activa de prospectos organizada por mercado, etapa o nivel de interés.',
      'Sé cómo iniciar conversaciones comerciales sin improvisar cada vez.',
      'Tengo una ruta clara para llevar a alguien de conversación a presentación o siguiente paso.',
      'Doy seguimiento comercial con contexto, fechas y siguiente paso definido.',
      'Sé manejar objeciones comunes sin discutir, presionar o perder el control de la conversación.',
    ],
    reading:
      'Tu principal fuga puede estar en la ruta. No basta con hablar con gente: si no tienes proceso, cada prospecto se vuelve experimento.',
    action:
      'Dibuja tu ruta comercial actual en 5 pasos, desde el primer contacto hasta el cierre o siguiente decisión.',
  },
  {
    key: 'contenido',
    n: 4,
    code: 'P4',
    title: 'Contenido, copy, atracción y campañas',
    short: 'Contenido',
    sub: 'Evalúa si tu presencia digital genera confianza, contexto y conversaciones comerciales.',
    items: [
      'Publico contenido que construye confianza y no solo intenta vender.',
      'Tengo claridad sobre qué dolores, deseos o problemas aborda mi contenido.',
      'Sé crear publicaciones de conexión, curiosidad, valor y venta.',
      'Mis publicaciones abren conversaciones comerciales, aunque no siempre generen ventas inmediatas.',
      'Tengo una estrategia básica para atraer prospectos fuera de mi círculo cercano.',
    ],
    reading:
      'Tu principal fuga puede estar en tu mensaje. Publicar no es estrategia: atraer requiere intención.',
    action:
      'Revisa tus últimas 10 publicaciones y marca cuáles generan conexión, curiosidad, valor o venta. Si no puedes clasificarlas, ahí está la fuga.',
  },
  {
    key: 'herramientas',
    n: 5,
    code: 'P5',
    title: 'Herramientas, tecnología e IA',
    short: 'Herramientas',
    sub: 'Evalúa si la tecnología te ayuda a operar mejor o si tu operación vive desordenada.',
    items: [
      'Tengo ordenados mis contactos, prospectos, links, mensajes y materiales comerciales.',
      'Uso WhatsApp de forma profesional para dar seguimiento, enviar información y avanzar conversaciones.',
      'Tengo una herramienta simple para registrar prospectos y no depender de mi memoria.',
      'Uso IA o herramientas digitales para mejorar mensajes, guiones, contenido o respuestas.',
      'Cuento con materiales claros para presentar lo que vendo sin saturar al prospecto.',
    ],
    reading:
      'Tu principal fuga puede estar en el desorden operativo. La tecnología no vende por ti, pero sí puede ayudarte a dejar de operar en caos.',
    action:
      'Crea una lista simple con todos tus prospectos activos y clasifícalos en tres etapas: nuevo, interesado y seguimiento pendiente.',
  },
  {
    key: 'actividad',
    n: 6,
    code: 'P6',
    title: 'Actividad y Rutina',
    short: 'Actividad',
    sub: 'Evalúa si tu aprendizaje se convierte en ejecución semanal medible o si tu negocio depende de tus ganas.',
    items: [
      'Tengo una rutina semanal clara para prospectar, dar seguimiento, presentar, practicar y revisar mi actividad.',
      'Registro mi actividad comercial para saber cuántos contactos, seguimientos, conversaciones y presentaciones genero.',
      'Tengo horarios protegidos para trabajar mi negocio, aunque no tenga jefe que me supervise.',
      'Sé distinguir entre estar ocupado y hacer actividad comercial que realmente puede generar ventas.',
      'Reviso mis números semanalmente para saber qué corregir: volumen, seguimiento, comunicación, contenido o proceso.',
    ],
    reading:
      'Tu principal fuga puede estar en la ejecución semanal. Todo lo demás termina aquí: un negocio que depende de tus ganas no tiene estructura.',
    action:
      'Registra durante 7 días cuatro números: contactos nuevos, seguimientos, conversaciones reales y presentaciones generadas.',
  },
];

// Escala 1–5 -----------------------------------------------------------
export interface ScalePoint {
  value: number;
  label: string;
}
export const SCALE: ScalePoint[] = [
  { value: 1, label: 'Nunca / muy débil' },
  { value: 2, label: 'Rara vez / sin estructura' },
  { value: 3, label: 'A veces / inconsistente' },
  { value: 4, label: 'Casi siempre / buena base' },
  { value: 5, label: 'Siempre / integrado' },
];

// Zonas por pilar (semáforo funcional) --------------------------------
export interface Zone {
  name: 'Roja' | 'Amarilla' | 'Verde' | 'Sólida';
  color: string;
  min: number;
  max: number;
}
export const ZONES: Zone[] = [
  { name: 'Roja', color: '#D6342A', min: 5, max: 10 },
  { name: 'Amarilla', color: '#E0A62A', min: 11, max: 17 },
  { name: 'Verde', color: '#2E9C5A', min: 18, max: 22 },
  { name: 'Sólida', color: '#1F6B3A', min: 23, max: 25 },
];

// Perfil general por total --------------------------------------------
export interface Profile {
  name: string;
  min: number;
  max: number;
  paragraph: string;
  ctaTitle: string;
  ctaDesc: string;
  secondary?: string; // texto de La Logia (solo perfiles altos)
}
export const PROFILES: Profile[] = [
  {
    name: 'Vendedor improvisado',
    min: 30,
    max: 66,
    paragraph:
      'Hoy no tienes un problema de talento, tienes un problema de estructura. Estás vendiendo con ganas, intuición y esfuerzo suelto, pero sin una operación comercial clara. Tu riesgo principal es seguir confundiendo movimiento con avance.',
    ctaTitle: 'Entra al Reto 7D del Búnker',
    ctaDesc:
      'En 7 días ordenas tu actividad, corriges tu postura inicial y detectas tus errores más evidentes con acciones verificables.',
  },
  {
    name: 'Vendedor en transición',
    min: 67,
    max: 102,
    paragraph:
      'Ya entendiste que vender requiere más que motivación, pero todavía operas con demasiada inconsistencia. Tienes buenas prácticas, pero no un sistema confiable: tu avance depende de tu ánimo, tu urgencia o tu memoria.',
    ctaTitle: 'Empieza por el Reto 7D',
    ctaDesc:
      'Antes de técnicas avanzadas, usa el Reto para sostener actividad medible y fortalecer tus dos pilares más débiles.',
  },
  {
    name: 'Vendedor en construcción profesional',
    min: 103,
    max: 132,
    paragraph:
      'Ya tienes bases. El problema es que saber más no siempre significa ejecutar mejor. Tu riesgo es creer que necesitas más información cuando probablemente necesitas más implementación.',
    ctaTitle: 'Activa tu ejecución con el Reto 7D',
    ctaDesc:
      'Ordena fundamentos con el Reto y conviértelos en actividad medible antes del salto a método y corrección.',
    secondary:
      'Cuando busques implementar con método, práctica y corrección continua, La Logia de las Ventas es tu siguiente espacio.',
  },
  {
    name: 'Vendedor con base sólida',
    min: 133,
    max: 150,
    paragraph:
      'Tienes una base comercial superior al promedio. Tu reto ya no es acumular información básica, sino afinar ejecución, medir mejor y corregir detalles que te están costando oportunidades. Tu siguiente etapa no es motivarte más: es profesionalizar tu sistema.',
    ctaTitle: 'Afina tu ejecución con el Reto 7D',
    ctaDesc:
      'Úsalo como diagnóstico en acción para detectar los detalles finos que hoy te cuestan oportunidades.',
    secondary:
      'La Logia de las Ventas es el espacio natural para convertir tus bases en método, diagnóstico y mejora continua.',
  },
];

// Países para el WhatsApp (México por default) ------------------------
export interface Country {
  code: string; // lada con +
  name: string;
}
// México primero (default); el resto ordenado alfabéticamente por país.
export const COUNTRIES: Country[] = [
  { code: '+52', name: 'México' },
  { code: '+54', name: 'Argentina' },
  { code: '+591', name: 'Bolivia' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+593', name: 'Ecuador' },
  { code: '+503', name: 'El Salvador' },
  { code: '+34', name: 'España' },
  { code: '+1', name: 'EE.UU./Canadá' },
  { code: '+502', name: 'Guatemala' },
  { code: '+504', name: 'Honduras' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+507', name: 'Panamá' },
  { code: '+595', name: 'Paraguay' },
  { code: '+51', name: 'Perú' },
  { code: '+1', name: 'Rep. Dominicana' },
  { code: '+598', name: 'Uruguay' },
  { code: '+58', name: 'Venezuela' },
];
