const CREDS: [string, string][] = [
  ['19 años', 'formando vendedores en México, EE. UU., Centroamérica y España'],
  ['6 y 7 cifras', 'en lanzamientos digitales ejecutados'],
  ['40 en 7', 'reconocimiento de Jeff Walker por un lanzamiento de 1.3 MDD'],
  ['CORE™', 'metodología propia para convertir el talento en ofertas que venden'],
];

export default function Credenciales() {
  return (
    <section className="sec dark sec-tight">
      <div className="wrap">
        <div className="ops">Respaldo real · no teoría</div>
        <div className="creds">
          {CREDS.map(([dato, texto]) => (
            <div key={dato}>
              <b>{dato}</b>
              <span>{texto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
