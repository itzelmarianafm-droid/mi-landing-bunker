export default function FAQ() {
  return (
    <section
      className="sec"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <div className="eyebrow">Dudas que quizá tienes</div>
        <h2
          className="disp"
          style={{ fontSize: 'clamp(26px,4.4vw,40px)', marginTop: 8 }}
        >
          Antes de entrar
        </h2>
        <div className="faq">
          <details open>
            <summary>No me considero “vendedor”. ¿Esto es para mí?</summary>
            <p>
              Justo por eso. Buena parte de la comunidad llegó diciendo “soy
              terapeuta/profesionista, no vendedora”. El trabajo de mentalidad y
              el sistema están pensados para que vendas con método, sin sentir
              que ruegas.
            </p>
          </details>
          <details>
            <summary>¿Y si no tengo tiempo?</summary>
            <p>
              El método está grabado para aplicarlo a tu ritmo, y las clases en
              vivo de cada semana quedan grabadas para que las consultes cuando
              quieras. La rutina de prospección está diseñada para 30 minutos al
              día.
            </p>
          </details>
          <details>
            <summary>
              Vendo un producto o servicio distinto, ¿funciona igual?
            </summary>
            <p>
              Sí. El sistema es el mismo para multinivel, seguros, salud, bienes
              raíces, consultoría o productos, y tienes la biblioteca de guiones
              por industria. Además, cada semana hay sesiones de preguntas y
              respuestas en vivo con Paco y Mariana donde puedes plantear tu
              caso o tu industria en particular.
            </p>
          </details>
          <details>
            <summary>¿Mensual o anual?</summary>
            <p>
              El anual, sin duda. Pagas 10 meses y recibes 12 (te ahorras $1,094
              MXN, ~$60 USD), y además sumas bonos que el mensual no incluye
              —diagnóstico Rayos X con mentoría 1 a 1, herramienta de contenido
              con IA, clase de tráfico pago, pase al evento y 15% de descuento
              de por vida—, que por separado valen más de $30,000 MXN. De hecho,
              uno solo de los regalos de hoy, tu Página Imán hecha por nosotros
              ($9,900 MXN), ya vale más que la membresía anual completa ($5,470
              MXN). Si vas en serio con tu salto de ingresos, el anual se paga
              solo.
            </p>
          </details>
          <details>
            <summary>¿Puedo pagar en dólares o desde otro país?</summary>
            <p>
              Sí. El pago se hace principalmente por Hotmart, y la plataforma
              convierte el monto al equivalente en la moneda de tu país. Hoy
              ronda los $30 USD al mes o $300 USD al año.
            </p>
          </details>
          <details>
            <summary>No tengo tarjeta de crédito o débito, ¿qué hago?</summary>
            <p>
              Escríbenos por el botón flotante de WhatsApp, o directamente al
              +52 55 3901 3930, y nuestro equipo de soporte te da otras opciones
              de pago. No te quedes fuera por eso.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
