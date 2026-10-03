# Página de gracias post-compra — `/graciasmembresia`

Se muestra **después de que Hotmart aprueba el pago**. Vive en el mismo
proyecto/dominio del Búnker del Vendedor y comparte su diseño y fuentes.

URL final: **https://elbunkerdelvendedor.com/graciasmembresia**

## Editar los enlaces (un solo lugar)

Abre [`src/config/gracias.ts`](../../config/gracias.ts) y cambia estas 3
constantes (o define las variables de entorno equivalentes):

| Constante          | Para qué sirve                               | Variable de entorno           |
| ------------------ | -------------------------------------------- | ----------------------------- |
| `GRUPO_WHATSAPP`   | Enlace de invitación al grupo de alumnos     | `NEXT_PUBLIC_GRUPO_WHATSAPP`  |
| `WHATSAPP_SOPORTE` | Número de soporte (solo dígitos, con lada)   | `NEXT_PUBLIC_WHATSAPP_SOPORTE`|
| `CORREO_SOPORTE`   | Correo de soporte                            | `NEXT_PUBLIC_CORREO_SOPORTE`  |

No hace falta tocar el diseño para cambiarlos.

## Conectarla en Hotmart

Pega `https://elbunkerdelvendedor.com/graciasmembresia` en:
**Hotmart → tu Producto → configuración de la página de gracias / URL de
agradecimiento**, para que se muestre al comprador tras aprobar el pago.
