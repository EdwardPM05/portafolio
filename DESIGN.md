---
name: Edward Pittman — Portafolio
description: Portafolio de ingeniero full-stack con proyectos reales en producción
colors:
  primary: "#007bff"
  secondary: "#00bbff"
  bg: "#0a0a0a"
  surface: "#1a1a1a"
  text: "#ffffff"
  text-muted: "#b0b0b0"
  success: "#2ecc71"
  danger: "#ff9da0"
  danger-bg: "rgba(229, 72, 77, 0.1)"
  danger-border: "rgba(229, 72, 77, 0.35)"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "normal"
  caption:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "5px"
  md: "10px"
  lg: "20px"
  pill: "50px"
  full: "50%"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "2.5rem"
  section-y: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.5rem"
  card-project:
    backgroundColor: "rgba(255,255,255,0.03)"
    rounded: "{rounded.lg}"
    padding: "2rem"
  chip-tech:
    backgroundColor: "rgba(0,123,255,0.1)"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.8rem"
---

# Design System: Edward Pittman — Portafolio

## Overview

**Creative North Star: "Terminal Nocturna"**

El sistema es un IDE oscuro que se volvió portafolio: fondo casi negro (#0a0a0a), superficies apenas más claras que las tarjetas de un editor de código, y un único acento —el gradiente azul eléctrico a cian (#007bff → #00bbff)— que actúa como una señal de estado activo, no como decoración de marca. Nada compite con esa señal: el resto de la interfaz es deliberadamente sobrio (texto gris #b0b0b0, bordes hairline al 10% de opacidad) para que el acento azul lea como "esto está vivo/interactivo" cada vez que aparece.

La densidad es generosa, casi editorial: secciones con 6rem de aire vertical, tarjetas de proyecto con mucho padding interno. Nada se siente apretado, a pesar de que el catálogo tiene 16 proyectos con conteos de imágenes muy dispares (3 a 16 capturas).

**Key Characteristics:**
- Fondo casi negro + tarjetas ligeramente elevadas en tono, nunca blanco puro en ningún elemento.
- Un solo acento de color (gradiente azul→cian) reservado para estados interactivos y jerarquía, no para decoración ambiental.
- Radios generosos en casi todo (10-20px en tarjetas/inputs, pill en botones) — nada usa esquinas rectas salvo el propio carrusel de imágenes.
- Reposo plano, hover con elevación + glow azul difuso — la profundidad es una respuesta al gesto del usuario, no un estado permanente.

## Colors

Paleta de un solo acento sobre una base casi monocroma: todo el color vivo del sistema vive en el par azul→cian, y su trabajo es señalar interactividad.

### Primary
- **Azul Eléctrico** (`#007bff`): ancla del gradiente de acento; aparece en bordes de hover, sombras de glow, y como primer stop de `--accent-gradient`.
- **Cian Señal** (`#00bbff`): segundo stop del gradiente; también el color de texto de botones secundarios, links de código y badges de tecnología — es el tono que se usa cuando el azul necesita leerse sobre fondo oscuro sin gradiente.

### Neutral
- **Negro Terminal** (`#0a0a0a`): fondo base de toda la página (`--dark-bg`).
- **Gris Carbón** (`#1a1a1a`): superficie de tarjetas, secciones alternas y el contenedor del formulario de contacto (`--dark-card`).
- **Blanco Cálido** (`#ffffff`): texto principal, títulos, iconografía activa (`--text-light`).
- **Gris Plomo** (`#b0b0b0`): texto secundario/descriptivo — subtítulos, párrafos, copy de proyectos (`--text-gray`).

### Semantic (estado de formulario)
- **Verde Confirmación** (`#2ecc71`): ícono de éxito del formulario de contacto tras un envío correcto — único uso de verde en todo el sistema, reservado exclusivamente a esta confirmación.
- **Rojo Error** (`rgba(229, 72, 77, 0.1)` fondo / `#ff9da0` texto): caja de error del formulario de contacto cuando falla el envío.

### Named Rules
**The One Accent Rule.** El gradiente azul→cian solo aparece en elementos interactivos o su estado de hover (botones, links, bordes de tarjeta al pasar el mouse, indicador de sección activa). Nunca se usa como fondo decorativo de una sección completa. Los colores semánticos de éxito/error del formulario son la única excepción documentada — señalan estado del sistema, no marca.

## Typography

**Display/Body Font:** Poppins (con fallback `sans-serif`), pesos 300 a 800 cargados.

**Character:** Una sola familia geométrica y redondeada para todo el sitio — sin mezcla de fuentes serif/mono. La jerarquía se construye por tamaño y peso, no por cambio de tipografía.

### Hierarchy
- **Display** (700, 3.5rem, line-height 1.2): el `<h1>` del hero, "Hola, soy Edward Pittman".
- **Headline** (700, 2.5rem, line-height 1.2): títulos de sección ("Mis Habilidades", "Proyectos Destacados", "¡Hablemos!").
- **Title** (700, 1.5rem): título de cada tarjeta de proyecto (`<h3>`).
- **Body** (400, 1.1rem, line-height 1.8): párrafos descriptivos del hero y de "about"; line-height alto intencional para bloques largos de texto.
- **Label** (600, 0.8rem): `tech-badge` — nombres de tecnología dentro de cada tarjeta de proyecto.
- **Caption** (400, 0.9rem): texto auxiliar de menor jerarquía — descripción de grupo de proyectos (`projects-group-title p`), nota de proyecto privado (`project-private-note`) y mensaje de error del formulario (`form-error`). Antes de esta pasada de pulido existían tres variantes sueltas (0.85rem/0.95rem) para el mismo rol; se consolidaron en un único tamaño.

## Layout

Contenedor máximo de 1400px centrado, con padding lateral de `5%` en casi todas las secciones (en vez de un valor fijo en px), y `6rem` de padding vertical por sección — el ritmo vertical es consistente entre Hero, Skills, Projects y Contact.

- **Hero:** grid de 2 columnas (`1fr 1fr`) que colapsa a 1 columna centrada en ≤1024px.
- **Skills:** grid único `auto-fit, minmax(150px, 1fr)` con los 31 íconos juntos (sin agrupar por categoría — decisión explícita del usuario) — se reacomoda solo, sin breakpoints manuales hasta 768px donde el mínimo baja a 120px.
- **Projects:** grid `auto-fit, minmax(350px, 1fr)` — de 3-4 columnas en desktop a 1 columna en móvil (≤768px).
- **Header:** fijo (`position: fixed`), fondo negro semitransparente con `backdrop-filter: blur(10px)`; gana una sombra azul sutil (`header.abajo`) después de 50px de scroll.
- **Menú móvil:** por debajo de 768px, el nav colapsa a un panel fullscreen deslizante (`left: -100%` → `left: 0`) en vez de un dropdown.

## Elevation & Depth

Sistema plano en reposo, con elevación como respuesta al gesto (**The Flat-by-Default Rule**: nada tiene sombra hasta que el usuario interactúa con ello). El hover combina dos señales a la vez: un `translateY(-10px)` que levanta físicamente el elemento, y un glow difuso coloreado con el acento primario — nunca una sombra gris neutra.

### Shadow Vocabulary
- **Glow de tarjeta** (`box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2)`): hover de `.project-card` y `.cards--habilidades`.
- **Glow de botón primario** (`box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3)`, sube a `0 15px 40px rgba(0, 123, 255, 0.4)` en hover): siempre presente en reposo para el botón primario (es la única sombra "en reposo" del sistema — marca el CTA principal).
- **Glow de avatar/imagen de perfil** (`box-shadow: 0 20px 60px rgba(0, 123, 255, 0.3)`): la foto de perfil del hero, más un halo `blur(40px)` animado detrás (`@keyframes pulse`).
- **Glow de foco de formulario** (`box-shadow: 0 0 20px rgba(0, 123, 255, 0.2)`): inputs/textarea al enfocar, junto con borde azul.

### Named Rules
**The Interaction-Only Glow Rule.** El glow azul difuso se reserva para hover/focus (con la única excepción del botón primario, que lo mantiene en reposo para destacarlo como CTA). Ningún elemento estático de layout usa glow.

## Shapes

Radios generosos y consistentes: `5px` para chips pequeños (`tech-badge`), `10px` para botones de acción de tarjeta y campos de formulario, `20px` para tarjetas/contenedores grandes, `50px`/pill para botones de llamada a la acción, y `50%` para todo lo circular (avatar, botones de carrusel, indicadores, el botón flotante de scroll-top). Bordes: hairline de 1px en `rgba(255,255,255,0.1)` sobre casi toda superficie con borde — nunca un borde sólido de color salvo en botones secundarios/outline.

## Components

### Buttons
- **Shape:** pill completo (`border-radius: 50px`).
- **Primary:** gradiente de acento de fondo, texto blanco, glow azul permanente en reposo que se intensifica y el botón sube `-3px` en hover.
- **Secondary/Ghost:** fondo transparente, borde de 2px en cian, texto cian; en hover se invierte a fondo cian sólido con texto casi negro (`--dark-bg`).

### Chips (`tech-badge`)
- **Style:** fondo azul al 10% de opacidad, borde azul al 30%, texto cian, radio 5px, tipografía label (0.8rem/600).
- **State:** estático, no interactivo — es información, no un control.

### Cards / Containers (`project-card`, `cards--habilidades`)
- **Corner Style:** 20px.
- **Background:** `rgba(255,255,255,0.03)` (project-card) o `--dark-card` sólido (skill card) — ambas casi indistinguibles del fondo en reposo.
- **Shadow Strategy:** plano en reposo; glow azul + elevación -10px en hover (ver Elevation & Depth).
- **Border:** hairline 1px, se vuelve azul primario sólido en hover.
- **Internal Padding:** 2rem (project-content) / `2rem 1.5rem` (skill card).

### Inputs / Fields
- **Style:** fondo `rgba(255,255,255,0.05)`, borde hairline, radio 10px.
- **Focus:** borde azul + glow (`0 0 20px rgba(0,123,255,0.2)`), sin cambio de fondo.

### Navigation
- Links de texto blanco con un subrayado de acento que crece de 0 a 100% de ancho en hover/activo (`::after` con `transform: scaleX()` animado, no `width`, para evitar reflow), en vez de un fondo o pill de selección.
- Mobile: colapsa a panel fullscreen deslizante, no dropdown.

### Carousel de proyecto (signature component)
Cada tarjeta de proyecto contiene un carrusel propio (no una librería externa): fondo degradado oscuro de respaldo, slides con `opacity` cruzado (no slide físico), botones circulares prev/next semitransparentes que se iluminan en hover, e indicadores de punto (10px, crecen a 12px cuando están activos). Para proyectos móviles (`mobile-view`), el slide centra la captura en su propio degradado azul tenue con `max-width: 50%` y una sombra dura por debajo, simulando una pantalla de teléfono flotando sobre el fondo de la tarjeta — distinto del tratamiento a pantalla completa que usan los proyectos web.

## Do's and Don'ts

### Do:
- **Do** reservar el gradiente azul→cian exclusivamente para estados interactivos y CTAs — es la única señal de color del sistema y pierde fuerza si se usa como decoración.
- **Do** mantener el patrón reposo-plano/hover-con-glow en cualquier tarjeta o botón nuevo (`The Interaction-Only Glow Rule`).
- **Do** usar radios grandes (`10-20px`) y pill en botones — es consistente en las 16 tarjetas existentes y en cada sección.
- **Do** dejar `6rem` de aire vertical entre secciones y `2rem` de padding interno en tarjetas; la densidad generosa es parte de la identidad, no un descuido.

### Don't:
- **Don't** introducir un segundo color de acento (verde, morado, naranja) — el sistema depende de tener un único acento reconocible.
- **Don't** usar blanco puro como fondo de ninguna superficie, ni siquiera tarjetas "elevadas"; el sistema es oscuro de punta a punta.
- **Don't** usar sombras grises neutras — toda sombra con propósito de profundidad lleva tinte azul (`rgba(0,123,255,...)`).
- **Don't** rellenar con un placeholder genérico los proyectos sin demo pública (Nova Smart, SIMATV, ERP Goyo) — su ausencia de link es intencional y está documentada en PRODUCT.md.
