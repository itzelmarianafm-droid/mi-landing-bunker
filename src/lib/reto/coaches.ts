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
    photo: '/reto/mariana.png',
    bio: 'Más de 10 años en marketing, ventas y desarrollo comercial, con formación en corporativos como Nissan, Mercedes-Benz, IBM y Microsoft. Reconocida en el "40 en 7" de Jeff Walker (Product Launch Formula). Sus estrategias y lanzamientos han generado más de 8 millones de dólares para sus clientes.',
  },
  {
    name: 'Paco Anguiano',
    role: 'Entrenador · Ventas',
    photo: '/reto/paco.png',
    bio: '19 años formando equipos comerciales y líderes en México, Estados Unidos, Centroamérica y España. Autor del libro "Por supuesto que puedes vender". Especialista en comportamiento humano, comunicación persuasiva e IA aplicada a procesos comerciales. Ha acompañado a equipos a crecimientos superiores al 20%.',
  },
];
