# Landing Reto 7D · Activación Comercial

Landing de venta long-form del **Reto 7D** ($24 USD), montada como ruta aislada.

- **Ruta:** [`/reto`](http://localhost:3000/reto) → `elbunkerdelvendedor.com/reto`
- **Stack:** Next.js (App Router) + TypeScript + Tailwind. Tipografía **Montserrat**.
- **Diseño:** scoped bajo `.reto` (no afecta la landing ni el diagnóstico).

## Estructura

```
src/app/reto/
  layout.tsx     → Montserrat + metadata/canonical, wrapper .reto
  page.tsx       → ensambla las secciones
  reto.css       → paleta y estilos scoped (incluye secciones blanco hueso)
src/components/reto/
  Header, Hero, Problem, Solution, Map7Days, HowItWorks,
  Authority, Testimonials, FAQ, FinalCTA, Footer, StickyMobileCTA,
  CtaButton (analítica), Coach, Reveal (fade on scroll)
src/lib/reto/coaches.ts   → datos y bios de los coaches
public/reto/mariana.png   → foto de Mariana (B&N por CSS)
```

## Variables de entorno

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_CHECKOUT_URL` | Checkout de pago del Reto (Hotmart u otro). Si está vacío, los botones llevan a `#pago`. |
| `NEXT_PUBLIC_DIAGNOSTICO_URL` | URL del diagnóstico (enlaces "diagnóstico gratis"). Fallback: `/diagnostico`. |

Se configuran en Vercel (Production) y en `.env.local` para desarrollo.

## Analítica

Los CTA disparan eventos a `window.dataLayer` (o `console` si no hay dataLayer):
- `cta_checkout_click` — botones de compra.
- `cta_diagnostico_click` — enlaces al diagnóstico.

Para GA4 / Meta Pixel, basta con inicializar el `dataLayer` en el layout raíz.

## Pendientes

- **Foto de Paco Anguiano:** agregar `public/reto/paco.png` y descomentar `photo` en
  `src/lib/reto/coaches.ts`. Mientras tanto se muestra un placeholder con iniciales.
- **Checkout:** definir `NEXT_PUBLIC_CHECKOUT_URL` cuando exista el link de pago.
- **Garantía:** el bloque de garantía ($24) está incluido (confirmado).
