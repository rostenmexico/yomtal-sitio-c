# CLAUDE.md

Guía para trabajar en este repositorio. Última actualización: 2026-07-15.

## Qué es

Sitio web (landing page de una sola página) de **Yomtal**. Es una SPA construida
con Vite + React + TypeScript, estilizada con Tailwind CSS y componentes shadcn/ui.
Se despliega en **Cloudflare Workers** (assets estáticos) y el repositorio está
sincronizado con GitHub (`rostenmexico/yomtal-sitio-c`).

## Stack

- **Build:** Vite 5 (`@vitejs/plugin-react-swc`)
- **UI:** React 18, TypeScript, React Router
- **Estilos:** Tailwind CSS + shadcn/ui (Radix UI) + `tailwindcss-animate`
- **Animación:** framer-motion
- **Fondo animado:** canvas propio (`NetworkCanvas`) + tsparticles / three (`@react-three/*`)
- **Estado/datos:** `@tanstack/react-query`
- **Formularios:** react-hook-form + zod
- **Tests:** Vitest + Testing Library (jsdom); Playwright disponible en devDeps
- **Deploy:** Cloudflare Workers vía `wrangler.toml` (sirve `./dist`)

## Comandos

```bash
npm run dev        # servidor de desarrollo -> http://localhost:8080/
npm run build      # build de producción a ./dist
npm run build:dev  # build en modo development
npm run preview    # sirve el build de ./dist localmente
npm run lint       # eslint
npm run test       # vitest run (una vez)
npm run test:watch # vitest en modo watch
```

> **Nota:** Wrangler CLI requiere Node.js >= 22. El entorno de desarrollo local
> actual usa Node v20, por lo que `wrangler` no corre localmente. El deploy ocurre
> del lado de Cloudflare (integración con GitHub), no desde la máquina local.

## Estructura

```
src/
  App.tsx              # providers (React Query, Tooltip, Toasters) + rutas
  pages/
    Index.tsx          # página principal: orquesta todas las secciones
    NotFound.tsx       # catch-all 404
  components/
    NetworkCanvas.tsx  # fondo animado (optimizado para móvil)
    IntroScreen.tsx    # animación de intro al cargar
    Header.tsx         # navegación superior
    SectionDotNav.tsx  # navegación por puntos entre secciones
    HeroSection.tsx    # secciones de la landing, en orden:
    AboutSection.tsx
    ServicesSection.tsx
    WhyYomtalSection.tsx
    PartnersSection.tsx
    ContactSection.tsx
    Footer.tsx
    # helpers de sección: SectionGate, SectionDivider, NextSectionButton,
    #                     ValueStrip, NavLink
    ui/                # componentes shadcn/ui
  test/                # tests con Vitest
public/                # imágenes de secciones (Section-2..5, hero-shield, etc.)
wrangler.toml          # config de Cloudflare Workers (assets desde ./dist)
```

### Orden de secciones (en `Index.tsx`)

IntroScreen → NetworkCanvas (fondo) → Header + SectionDotNav →
Hero → About → Services → WhyYomtal → Partners → Contact → Footer

## Deploy (Cloudflare)

- Nombre del Worker: `yomtal-sitio-c`
- Sirve los assets estáticos generados en `./dist`.
- **URL pública (producción):** https://yomtal-sitio-c.rostenmexico.workers.dev
  (subdominio `.workers.dev` de Cloudflare; no hay dominio propio configurado).
- El build de producción debe ejecutar `npm run build` para regenerar `./dist`
  antes de publicar.

## Notas

- El repo comenzó como proyecto Lovable; ya se removieron el hero 3D y las
  secciones legacy (Mission/Vision, FinalCTA, YomtalHero3D).
- Entorno Windows: git puede mostrar avisos de LF→CRLF; son inofensivos.
- Archivos generados ignorados en `.gitignore`: `dist`, `.codegraph`,
  `__pycache__/`, `*.pyc`, `node_modules`.
