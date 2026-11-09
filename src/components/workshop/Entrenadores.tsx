import Image from 'next/image';

const ENTRENADORES = [
  {
    foto: '/trainers/paco.jpg',
    nombre: 'Paco Anguiano',
    rol: 'Entrenador · Ventas',
    bio: '19 años formando equipos comerciales y líderes en México, Estados Unidos, Centroamérica y España. Autor del libro “Por supuesto que puedes vender”. Especialista en comportamiento humano, comunicación persuasiva e IA aplicada a los procesos comerciales.',
  },
  {
    foto: '/trainers/mariana.jpg',
    nombre: 'Mariana Franco',
    rol: 'Entrenadora · Ventas',
    bio: 'Estratega de marketing, ventas y desarrollo comercial con más de 10 años de experiencia y paso por corporativos como Nissan, Mercedes-Benz, IBM y Microsoft. Hoy mentora de referentes de infoproductos, figuras públicas y personalidades de la televisión, con lanzamientos que escalan a 6 y 7 cifras, incluyendo una campaña de 1.3 millones de dólares en 7 días reconocida con el “40 en 7” de Jeff Walker. Su método CORE™ convierte el talento en ofertas que sí venden.',
  },
];

export default function Entrenadores() {
  return (
    <section className="sec light">
      <div className="wrap">
        <div className="ops">Quiénes te entrenan</div>
        <h2 className="big">Dos trayectorias, una premisa: vender no se improvisa, se entrena.</h2>
        <div className="trainers">
          {ENTRENADORES.map((e) => (
            <div className="trainer" key={e.nombre}>
              <div className="tphoto">
                <Image src={e.foto} alt={e.nombre} fill sizes="(max-width: 880px) 100vw, 190px" />
              </div>
              <div className="tbody">
                <div className="role">{e.rol}</div>
                <h3>{e.nombre}</h3>
                <p>{e.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
