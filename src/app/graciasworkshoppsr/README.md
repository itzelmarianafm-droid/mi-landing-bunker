# Página de gracias post-compra — `/graciasworkshoppsr`

Página de agradecimiento del **Workshop «Prospecta sin Rogar»**. Comparte diseño
y el componente [`ThankYou`](../../components/gracias/ThankYou.tsx) con las otras
páginas de gracias.

URL final: **https://elbunkerdelvendedor.com/graciasworkshoppsr**

## El grupo de WhatsApp cambia cada sesión — se edita desde el panel

El botón "Unirme al grupo del workshop" apunta al grupo de la **sesión vigente**.
Para cambiarlo cada sesión **no hace falta reprogramar ni volver a publicar**:

1. Entra al panel: **https://elbunkerdelvendedor.com/workshop/admin** (con tu contraseña).
2. En la sección **Enlaces**, campo **"Grupo de WhatsApp — página de gracias"**,
   pega el link del grupo de la nueva sesión.
3. **Guardar.** La página `/graciasworkshoppsr` queda actualizada al instante.

El valor se lee desde Supabase en cada visita (sin caché). Si Supabase no
responde, usa como respaldo `GRUPO_WHATSAPP_PSR` de
[`src/config/gracias.ts`](../../config/gracias.ts).

## Ajuste de una sola vez en la base de datos (Supabase)

Para que el panel pueda guardar los links de las páginas de gracias, la tabla
`workshop_config` necesita tres columnas nuevas. Se hace **una sola vez** en
Supabase → **SQL Editor**:

```sql
alter table workshop_config add column if not exists gracias_whatsapp_membresia text;
alter table workshop_config add column if not exists gracias_whatsapp_vip text;
alter table workshop_config add column if not exists gracias_whatsapp_psr text;
```

Con esto quedan editables desde el panel las tres páginas: `/graciasmembresia`,
`/graciasvipworkshop` y `/graciasworkshoppsr`.

Mientras esa columna no exista, el workshop sigue funcionando normal y la página
de gracias usa el link de respaldo; el panel avisa si el campo no se pudo guardar.

## Conectarla en Hotmart

Pega `https://elbunkerdelvendedor.com/graciasworkshoppsr` en:
**Hotmart → el Producto de Prospecta Sin Rogar → configuración de la página de
gracias / URL de agradecimiento**.
