# Diagnóstico de los 6 Pilares — El Búnker del Vendedor

App de diagnóstico (autoevaluación de 30 ítems / 6 pilares) montada como una **ruta aislada**
dentro de esta landing.

- **Ruta:** [`/diagnostico`](http://localhost:3000/diagnostico)
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Tipografía **Montserrat**.
- **Diseño:** scoped bajo `.diag` (no afecta la landing, que usa Oswald/Inter).

## Estructura

```
src/app/diagnostico/
  layout.tsx        → carga Montserrat + estilos, wrapper .diag
  page.tsx          → orquestador del flujo (intro → test → gate → result)
  diagnostico.css   → paleta y estilos scoped (.diag)
src/app/api/lead/route.ts   → endpoint de captura (Supabase + modo demo)
src/lib/diagnostico/
  data.ts           → pilares, ítems, escala, zonas, perfiles, países
  scoring.ts        → cálculo de puntajes, zonas, perfil y fugas
src/components/diagnostico/
  Console, Intro, PillarScreen, Gate, Hexagon, Result
public/diagnostico/isotipo-blanco.svg   → isotipo oficial (blanco negativo)
```

## Variables de entorno

Copia `.env.local.example` a `.env.local` y llena:

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_RETO_URL` | URL de la landing del Reto 7D (CTA del resultado). |
| `SUPABASE_URL` | URL del proyecto Supabase. |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (**secreto**, solo server-side). |
| `NEXT_PUBLIC_LEAD_WEBHOOK_URL` | Opcional: webhook Make/Zapier/n8n. |

> Sin `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`, el endpoint entra en **modo demo**:
> hace `console.log` del lead y no bloquea al usuario. Ideal para probar sin backend.

## Tabla de Supabase

En el SQL Editor de Supabase, ejecuta:

```sql
create table if not exists leads (
  id           bigint generated always as identity primary key,
  name         text not null,
  email        text not null,
  whatsapp     text not null,
  country_code text,
  country_name text,
  industry     text,
  goal         text,
  total        int,
  profile      text,
  pillars      jsonb,
  weakest      jsonb,
  source       text,
  created_at   timestamptz default now()
);

-- El endpoint usa el service_role key (bypassa RLS). Puedes dejar RLS
-- activado sin políticas de insert público:
alter table leads enable row level security;
```

## Deploy en Vercel

1. Sube el repo a Vercel (framework Next.js, sin config extra).
2. En **Settings → Environment Variables**, agrega las 3–4 variables de arriba.
3. Deploy. El diagnóstico queda en `https://tu-dominio/diagnostico`.

## Notas

- El **hexágono** se dibuja con SVG nativo (sin librerías de charts).
- El WhatsApp guarda el número combinado (`+52 5512345678`), la lada y el país por separado
  (importante: `+1` lo comparten EE.UU./Canadá y Rep. Dominicana).
- CTA único al Reto 7D (embudo único). El texto de "La Logia" solo aparece en perfiles altos.
- El header de consola usa el **logo horizontal blanco negativo oficial**
  (`public/diagnostico/logo-horizontal-blanco.png`, archivo `08` del brand kit),
  optimizado con `next/image`. También queda disponible el isotipo blanco oficial en
  `public/diagnostico/isotipo-blanco.png` (archivo `02`) por si se necesita una marca compacta.
```
