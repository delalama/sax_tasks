# Registro de saxo (Astro + Pages CMS)

Sitio estatico para llevar un registro de deberes y practicas de saxo:
- Entradas tipo blog en Markdown
- Fotos subidas al repositorio
- Buscador full-text con Pagefind
- Deploy automatico a GitHub Pages
- Edicion desde movil con Pages CMS

## Requisitos

- Node.js 20+ recomendado
- Repositorio en GitHub

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El comando genera `dist/` y el indice de busqueda en `dist/pagefind/`.

## Publicar en GitHub Pages

1. Haz push a `main`.
2. En GitHub, activa Pages en `Settings > Pages` y selecciona `GitHub Actions` como source.
3. El workflow `.github/workflows/deploy.yml` publicara automaticamente.

## CMS desde movil (Pages CMS)

1. Entra en https://pagescms.org/.
2. Inicia sesion con GitHub y selecciona este repo.
3. Pages CMS detectara `.pages.yml`.
4. Crea entradas en la coleccion `Entradas de saxo`.
5. Las imagenes, PDF y audios se guardan en `public/media`.

## Estructura de contenido

- Entradas: `src/content/blog/*.md`
- Config CMS: `.pages.yml`
- Media (foto/PDF/audio): `public/media`

## Adjuntar PDF a una entrada

1. En el CMS, abre una entrada.
2. En `Adjuntos (PDF/audio)`, sube tu PDF.
3. Publica: el post mostrara enlaces en la seccion `Adjuntos`.

Tambien puedes enlazar un archivo manualmente si ya existe en el repo: usa una ruta como `/media/tu-archivo.pdf`.

## Notas

- Si tu repo es `usuario.github.io`, el sitio se publica en la raiz.
- Si tu repo es `mi-repo`, se publica en `https://usuario.github.io/mi-repo/`.
