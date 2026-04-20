# Cordova Property Services — SvelteKit

## Estructura del proyecto

```
src/
  lib/
    assets/
      img/            ← imágenes procesadas por Vite (logo, etc.)
    components/
      layout/         ← Header, Footer, ScrollTop, SiteShell
      sections/       ← una sección por componente (Hero, CTA, Services…)
      ui/             ← componentes atómicos reutilizables (futuro)
    index.js          ← re-exports centralizados de todos los componentes
  routes/
    +layout.svelte    ← carga de vendors (AOS, PureCounter) y CSS global
    +page.svelte      ← home: ensambla secciones importando de $lib
    blog/
      +page.svelte
    blog-details/
      +page.svelte
    portfolio-details/
      +page.svelte
    services-details/
      +page.svelte
    starter-page/
      +page.svelte
static/
  assets/             ← vendor libs, CSS compilado, imágenes públicas
```

## Cambios respecto al original

| Problema | Solución |
|---|---|
| `assets/` en raíz (carpeta huérfana) | Eliminada; imágenes movidas a `static/assets/img/` |
| `src/lib/raw/*.html` con `{@html content}` | Convertidos a componentes `.svelte` reales con datos en arrays |
| `components/pages/` (capa sin valor) | Eliminada; las rutas consumen las secciones directamente |
| `lib/index.js` vacío | Re-exports de todos los componentes para imports limpios |
| Rutas estáticas `blog-details/` etc. | Mantenidas compatibles; preparadas para `[slug]/` cuando haya datos reales |

## Desarrollo

```bash
npm install
npm run dev
```
