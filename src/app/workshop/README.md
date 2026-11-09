# /workshop — Prospecta sin Rogar

Landing del workshop. El copy y el orden de secciones salen de
`Referencia/landing-v2.html`; si un texto difiere, gana ese archivo.

Todo lo que cambia por sesión se edita en **/workshop/admin** y vive en la
fila `id=1` de `workshop_config` (Supabase, proyecto `bunker-diagnostico`).

## Fecha de la sesión — un solo campo

`event_iso` (ej. `2026-11-28T09:00:00-06:00`) genera "Sábado 28 de noviembre"
y "9:00 AM" en toda la landing (anuncio, tarjeta del lote, lista de lo que
incluye, FAQ y última llamada). La zona que va junto a la hora es `tz_label`
(ej. "hora CDMX").

## Lotes

Cada lote vive en la columna jsonb `tiers`:

| campo | qué es |
|---|---|
| `label` | etiqueta visible ("Lote 1") |
| `price` | precio |
| `cupo` | lugares reales; 0 = sin límite (sin barra) |
| `vendidos` | inscripciones pagadas, capturadas a mano desde Hotmart |
| `cerrado` | cerrado a mano ("Cerrar lote y abrir el siguiente") |
| `endIso` | opcional: el lote se cierra solo en esa fecha |
| `checkoutUrl` | opcional: link de pago del lote (si no, el general) |

Se vende el **primer lote, en orden, que no esté cerrado, lleno ni vencido**.
El estado (activo / próximo / agotado) se deriva de ahí; no se guarda aparte.

## Barra de avance — requiere SQL una sola vez

Correr en Supabase → SQL Editor:

```sql
alter table workshop_config add column if not exists barra_visible boolean default false;
alter table workshop_config add column if not exists barra_modo text default 'porcentaje';
alter table workshop_config add column if not exists umbral_quedan int default 10;
```

Mientras no existan, la barra queda apagada y el panel avisa al guardar; el
resto se guarda normal.

La barra siempre usa `vendidos / cupo` reales del lote activo. Nunca se
infla: si el avance es bajo, se apaga.
