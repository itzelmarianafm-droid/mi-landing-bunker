# El Búnker del Vendedor — Landing Page

Landing page de ventas para la membresía "El Búnker del Vendedor" en Skool.

## Setup rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo personalizar

### URLs de compra (Skool)

Edita `src/lib/config.ts`:

```ts
export const SKOOL_URL_MONTHLY = 'https://www.skool.com/el-bunker-de-las-ventas-7798';
export const SKOOL_URL_ANNUAL = 'https://www.skool.com/el-bunker-de-las-ventas-7798';
```

### Video VSL

En el mismo archivo `src/lib/config.ts`, pega la URL embed del video:

```ts
export const VSL_URL = 'https://www.youtube.com/embed/TU_VIDEO_ID';
```

### Imágenes

Sube estas imágenes a la carpeta `/public`:

| Archivo | Uso |
|---------|-----|
| `logo-bunker.png` | Logo horizontal (blanco sobre fondo oscuro) |
| `logo-bunker-icono.png` | Isotipo para favicon |
| `banner-coaches.png` | Banner de Paco y Mariana juntos |
| `foto-mariana.png` | Foto individual de Mariana Franco |
| `foto-paco.png` | Foto individual de Paco Anguiano |

## Deploy en Vercel

```bash
vercel deploy
```

O conecta el repo en [vercel.com](https://vercel.com) para deploy automático.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Google Fonts: Oswald (títulos) + Inter (cuerpo)
