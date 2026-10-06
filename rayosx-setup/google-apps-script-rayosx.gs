/**
 * Rayos X — Google Sheet + correo
 * ---------------------------------
 * Qué hace: cada vez que alguien completa el diagnóstico, agrega una fila a tu
 * Google Sheet y te manda un correo con el resumen del prospecto.
 *
 * Cómo instalarlo:
 * 1) Crea un Google Sheet nuevo (ese será tu base de prospectos).
 * 2) En ese Sheet: menú Extensiones → Apps Script.
 * 3) Borra lo que haya y pega TODO este código.
 * 4) Cambia EMAIL_DESTINO por tu correo (abajo).
 * 5) Guarda. Luego: Implementar → Nueva implementación → tipo "Aplicación web":
 *      - Ejecutar como: Yo (tu cuenta)
 *      - Quién tiene acceso: Cualquier persona
 *    Autoriza los permisos cuando te lo pida.
 * 6) Copia la "URL de la aplicación web" que te da (termina en /exec).
 * 7) Pega esa URL en GAS_URL dentro de index.html.
 *
 * Listo: a partir de ahí, cada diagnóstico cae en el Sheet y te llega por correo.
 */

const EMAIL_DESTINO = "itzelmarianafm@gmail.com"; // <-- tu correo
const NOMBRE_HOJA   = "Leads";

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(NOMBRE_HOJA) || ss.insertSheet(NOMBRE_HOJA);

    // Encabezados la primera vez
    if (sh.getLastRow() === 0) {
      sh.appendRow([
        "Fecha", "Nombre", "Correo", "Teléfono", "Producto",
        "Factura actual", "Moneda", "Meta", "Moneda meta",
        "Nivel de implementación", "Prioridad a corregir",
        "Habilidades /5", "Sistema %", "Canal",
        "Transformación", "Nicho", "Oferta/Precio",
        "Respuestas (JSON)", "Resultado (JSON)"
      ]);
    }

    sh.appendRow([
      new Date(), d.nombre, d.correo, d.telefono, d.producto,
      d.factura_actual_monto, d.factura_actual_moneda, d.meta_monto, d.meta_moneda,
      d.nivel_implementacion, d.prioridad_sistema,
      d.promedio_habilidades, d.porcentaje_sistema, d.canal,
      d.transformacion, d.nicho, d.oferta_precio,
      JSON.stringify(d.respuestas), JSON.stringify(d.resultado)
    ]);

    // Correo con el resumen
    MailApp.sendEmail({
      to: EMAIL_DESTINO,
      subject: "Nuevo Rayos X — " + (d.nombre || "") + " · " + (d.producto || ""),
      htmlBody:
        "<b>Nuevo diagnóstico Rayos X</b><br><br>" +
        "<b>Nombre:</b> " + (d.nombre || "") + "<br>" +
        "<b>Correo:</b> " + (d.correo || "") + "<br>" +
        "<b>WhatsApp:</b> " + (d.telefono || "") + "<br>" +
        "<b>Producto:</b> " + (d.producto || "") + "<br><br>" +
        "<b>Factura hoy:</b> " + (d.factura_actual_monto || "0") + " " + (d.factura_actual_moneda || "") + "/mes<br>" +
        "<b>Meta:</b> " + (d.meta_monto || "") + " " + (d.meta_moneda || "") + "/mes<br>" +
        "<b>Nivel de implementación:</b> " + (d.nivel_implementacion || "") + "<br>" +
        "<b>Prioridad a corregir:</b> " + (d.prioridad_sistema || "") + "<br>" +
        "<b>Habilidades:</b> " + (d.promedio_habilidades || "") + "/5 &nbsp;·&nbsp; <b>Sistema:</b> " + (d.porcentaje_sistema || "") + "%<br>" +
        "<b>Canal actual:</b> " + (d.canal || "") + "<br><br>" +
        "<b>Transformación / promesa:</b> " + (d.transformacion || "") + "<br>" +
        "<b>Nicho:</b> " + (d.nicho || "") + "<br>" +
        "<b>Oferta / precio:</b> " + (d.oferta_precio || "(no la escribió)") + "<br>"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
