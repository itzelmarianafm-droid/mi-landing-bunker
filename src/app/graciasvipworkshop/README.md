# Página de gracias post-compra — `/graciasvipworkshop`

Página de agradecimiento del **Workshop VIP «Prospecta sin Rogar»**. Se muestra
después de que Hotmart aprueba el pago. Comparte diseño, fuentes y el componente
[`ThankYou`](../../components/gracias/ThankYou.tsx) con `/graciasmembresia`.

URL final: **https://elbunkerdelvendedor.com/graciasvipworkshop**

## Editar los enlaces (un solo lugar)

Abre [`src/config/gracias.ts`](../../config/gracias.ts):

| Constante                   | Para qué sirve                              | Variable de entorno                      |
| --------------------------- | ------------------------------------------- | ---------------------------------------- |
| `GRUPO_WHATSAPP_VIPWORKSHOP`| Grupo de WhatsApp del workshop              | `NEXT_PUBLIC_GRUPO_WHATSAPP_VIPWORKSHOP` |
| `WHATSAPP_SOPORTE`          | Número de soporte (compartido)              | `NEXT_PUBLIC_WHATSAPP_SOPORTE`           |
| `CORREO_SOPORTE`            | Correo de soporte (compartido)              | `NEXT_PUBLIC_CORREO_SOPORTE`             |

El texto de la página (título, bajada, pasos) se edita en
[`page.tsx`](./page.tsx).

## Conectarla en Hotmart

Pega `https://elbunkerdelvendedor.com/graciasvipworkshop` en:
**Hotmart → el Producto del Workshop VIP → configuración de la página de gracias
/ URL de agradecimiento**.
