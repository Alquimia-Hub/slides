# opbnb-slides

Repositorio **open source** con un deck de presentación en la web: slides a pantalla completa, pensado para workshops o charlas técnicas. El contenido de ejemplo está orientado a **opBNB, cripto y agentes de IA en Argentina**; la base sirve para reutilizar la misma mecánica con otros temas.

## Qué incluye

- **Next.js** (App Router) y **React** para la app.
- **Tailwind CSS** para estilos y tokens de color.
- **Framer Motion** para transiciones entre diapositivas.
- **Paper Shaders** (`MeshGradient`) como fondo animado.
- Navegación por **teclado** (flechas, espacio, inicio, fin, números) y **puntos** en la barra inferior.
- Enfoque en **accesibilidad** básica: salto al contenido, roles, foco visible, respeto a `prefers-reduced-motion`.

## Requisitos

- Node.js reciente (idealmente LTS).
- [pnpm](https://pnpm.io/) (el proyecto está pensado para `pnpm`; también podés usar `npm` o `yarn` adaptando los comandos).

## Cómo levantar el proyecto

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts útiles

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `pnpm dev`     | Servidor de desarrollo.                         |
| `pnpm build`   | Build de producción.                            |
| `pnpm start`   | Servir el build (después de `pnpm build`).      |
| `pnpm lint`    | ESLint.                                         |
| `pnpm contrast`| Chequeo de contraste de tokens (script propio). |

## Estructura (resumen)

- `app/`: layout, estilos globales y la página principal.
- `components/`: deck, fondo con shader, navegación, slide genérico y piezas de UI.
- `slides/`: una carpeta por diapositiva y `index.ts` que arma el orden del deck.
- `lib/`: tema, motion, utilidades compartidas.

Para cambiar el orden o sumar slides, editá `slides/index.ts` y los módulos en `slides/`.

## Licencia y uso

Este proyecto se comparte en espíritu **open source**: podés forkear, adaptar el contenido y la estética a tus presentaciones. Si publicás un derivado, conviene aclarar que no está afiliado a Binance ni a ninguna marca mencionada en las slides de ejemplo, salvo que tengas una relación formal con esa marca.

Si querés que el paquete figure como público en npm o en el manifiesto del repo, revisá el campo `"private"` en `package.json` y agregá una licencia explícita (por ejemplo MIT) con un archivo `LICENSE` en la raíz.

## Contribuciones

Los issues y pull requests son bienvenidos: mejoras de accesibilidad, performance, documentación o plantillas de slides reutilizables ayudan a que otros puedan armar decks propios sin partir de cero.
