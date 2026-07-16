# Yomtal — Sitio web

Landing page de una sola página para **Yomtal**, construida con Vite + React +
TypeScript, Tailwind CSS y shadcn/ui. Desplegada en Cloudflare Workers.

🌐 **Sitio en vivo:** https://yomtal-sitio-c.rostenmexico.workers.dev

## Requisitos

- Node.js (recomendado v22+; el build de la app funciona con v20, pero el
  CLI de Wrangler para deploy requiere v22+)
- npm

## Desarrollo

```bash
npm install        # instalar dependencias
npm run dev        # arranca el servidor -> http://localhost:8080/
```

## Scripts

| Comando              | Descripción                                  |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | Servidor de desarrollo en `localhost:8080`   |
| `npm run build`      | Build de producción a `./dist`               |
| `npm run build:dev`  | Build en modo development                    |
| `npm run preview`    | Sirve el build de `./dist`                   |
| `npm run lint`       | Ejecuta ESLint                               |
| `npm run test`       | Corre los tests con Vitest                   |
| `npm run test:watch` | Tests en modo watch                          |

## Estructura

- `src/pages/Index.tsx` — página principal que orquesta las secciones.
- `src/components/` — secciones de la landing (Hero, About, Services,
  WhyYomtal, Partners, Contact), navegación y fondo animado (`NetworkCanvas`).
- `src/components/ui/` — componentes de shadcn/ui.
- `public/` — imágenes de las secciones.

## Deploy

El sitio se despliega en **Cloudflare Workers** (`yomtal-sitio-c`), sirviendo los
assets estáticos de `./dist`. El repositorio está sincronizado con GitHub, y
Cloudflare compila y publica desde ahí.

**Sitio en producción:** https://yomtal-sitio-c.rostenmexico.workers.dev

(Se usa el subdominio `.workers.dev` de Cloudflare; no hay dominio propio configurado.)

## Documentación adicional

Ver [`CLAUDE.md`](./CLAUDE.md) para detalles del stack, estructura y flujo de deploy.
