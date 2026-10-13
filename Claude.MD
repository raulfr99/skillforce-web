# SkillForce Web — Guía para Claude Code

## Qué es
Sitio de marketing (one-page + detalle de servicios) de SkillForce: empresa
mexicana de tecnología para RH — nómina, cumplimiento fiscal/laboral y gestión
de expedientes digitales (plataforma RIGA). Público: empresas que subcontratan
nómina y cumplimiento. Objetivo del sitio: comunicar escala, precisión y
cumplimiento, y llevar al contacto.

## Stack (real, confirmado en package.json)
- React 18 + Vite 5
- Tailwind CSS v4 — la config vive en CSS (`src/index.css`, bloque `@theme`),
  NO hay `tailwind.config.js`
- react-router-dom v6 (BrowserRouter)
- Deploy: Vercel

## Estructura
- `src/main.jsx` — entrada, BrowserRouter
- `src/App.jsx` — layout + rutas (`/` y `/servicios/:id`)
- `src/pages/` — Home.jsx, ServiceDetail.jsx
- `src/components/` — Navbar, Hero, Services, Suite, Platforms, Riga, Clients,
  Footer, SectionHeading, Reveal (scroll reveal), ThemeToggle, ScrollToTop
- `src/data/services.js` — TODO el contenido (services, suite, riga, clients, company)
- `src/index.css` — tokens de color (`@theme`), fuente, animaciones, variante dark
- `src/assets/` — logos

## Sistema de diseño actual
- Color de marca: `brand` (morado, 50–950) + `accent` (cian del logo, 50–950)
- Fuente: Poppins (`--font-sans`)
- Modo oscuro: clase `.dark` en `<html>`; `@custom-variant dark` ya definida
- Animaciones en index.css: fade-in-up, float-a/b/c, marquee, `.reveal*`

## Convenciones
- Componentes funcionales con hooks.
- TODO el contenido editable vive en `src/data/services.js`, nunca hardcodeado en JSX.
- Usa los tokens `brand-*` / `accent-*` de Tailwind, no hex sueltos.
- Cada cambio debe verse bien en modo claro Y oscuro — prueba ambos.
- Tailwind v4: la config es CSS en `index.css` (`@theme`), no un `.config.js`.

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`  ·  Preview: `npm run preview`

## Reglas de trabajo
- Antes de un rediseño grande, muéstrame el plan (color / tipografía / layout) y
  espera mi OK.
- Un objetivo por commit, con mensaje claro.
- Mantén el contenido real de SkillForce; no inventes datos de la empresa.

## Intención de diseño (lo que buscamos)
- Que NO se sienta plantilla genérica. Identidad propia anclada en el mundo de
  SkillForce: escala de nómina, velocidad y cumplimiento fiscal mexicano
  (semáforos de cumplimiento, timbrado, expedientes RIGA).