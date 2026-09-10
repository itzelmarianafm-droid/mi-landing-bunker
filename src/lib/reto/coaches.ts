export interface CoachData {
  name: string;
  role: string;
  photo?: string;
  bio: string;
}

export const COACHES: CoachData[] = [
  {
    name: 'Mariana Franco',
    role: 'Entrenadora · Ventas',
    photo: '/reto/mariana.jpg',
    bio: 'Estratega de marketing, ventas y desarrollo comercial con más de 10 años de experiencia y paso por corporativos como Nissan, Mercedes-Benz, IBM y Microsoft. Hoy es mentora de grandes referentes de la industria de los infoproductos, figuras públicas y de gobierno, y personalidades de la televisión, cuyas ventas escalan a 6 y 7 cifras con sus estrategias y lanzamientos —incluyendo una campaña de 1.3 millones de dólares en 7 días, reconocida con el "40 en 7" de Jeff Walker—. Su método CORE™ convierte el conocimiento y el talento en ofertas que sí venden.',
  },
  {
    name: 'Paco Anguiano',
    role: 'Entrenador · Ventas',
    photo: '/reto/paco.png',
    bio: '19 años formando equipos comerciales y líderes en México, Estados Unidos, Centroamérica y España. Autor del libro "Por supuesto que puedes vender". Especialista en comportamiento humano, comunicación persuasiva e IA aplicada a procesos comerciales. Ha acompañado a equipos a crecimientos superiores al 20%.',
  },
];
