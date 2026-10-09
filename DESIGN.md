---
name: Edward Pittman — Portafolio
description: Portafolio de ingeniero full-stack, como una orden de trabajo de campo ejecutada y verificada
colors:
  kraft: "#e9e0c9"
  paper: "#f4efdc"
  ink: "#20242b"
  orange: "#c3521f"
  orange-soft: "rgba(195, 82, 31, 0.1)"
  green: "#4a6b3f"
  green-soft: "rgba(74, 107, 63, 0.12)"
  line: "#b9ad8c"
  muted: "#6b6450"
  red: "#a3302a"
  wsp: "#3aa655"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.98
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 1.1
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.2
  kicker:
    fontFamily: "Special Elite, cursive"
    fontSize: "1.05rem"
    fontWeight: 400
    letterSpacing: "0.03em"
  body:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 500
    lineHeight: 1.6
  mono-label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  mono-body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 700
rounded:
  none: "0"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.6rem"
  xl: "2.4rem"
  section-y: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    border: "2px solid {colors.ink}"
    padding: "0.85rem 1.6rem"
  button-whatsapp:
    backgroundColor: "{colors.wsp}"
    textColor: "#ffffff"
    border: "2px solid {colors.wsp}"
    padding: "0.85rem 1.6rem"
  card-project:
    backgroundColor: "{colors.kraft}"
    border: "2px solid {colors.ink}"
    rounded: "none"
  chip-tech:
    backgroundColor: "{colors.orange-soft}"
    textColor: "{colors.orange}"
    border: "1px solid rgba(195,82,31,0.35)"
    rounded: "none"
---

# Design System: Edward Pittman — Portafolio

## Overview

**Creative North Star: "Orden de trabajo de campo"**

El portafolio se lee como una orden de trabajo técnica, no como una tarjeta de presentación: cada proyecto es un folio numerado, con su estado sellado "completado y verificado". El sistema reemplaza el fondo negro con gradiente azul-cian (el aspecto más genérico y reconocible de "developer portfolio hecho con IA") por papel kraft, tinta casi negra y un único acento naranja-óxido, con el verde reservado exclusivamente para "en producción" y WhatsApp.

La ficha de trabajo (`.hero-sheet`, `.contact-sheet`, cada `.project-card`) es el componente que organiza todo: doble borde o borde grueso, un kicker a máquina de escribir (Special Elite), folios y datos tabulares en monoespaciada (JetBrains Mono), y títulos en bloque condensado (Barlow Condensed). Nada tiene esquinas redondeadas ni sombra de glow — la profundidad, cuando existe, es un desplazamiento duro de 6px en el acento naranja al hacer hover sobre una tarjeta de proyecto, como si la ficha se despegara del papel debajo.

**Key Characteristics:**
- Fondo kraft con textura sutil de rayado horizontal (papel), nunca negro ni blanco puro.
- Un único acento naranja-óxido para CTA/estados activos; verde reservado solo para "en producción" y WhatsApp — nunca decorativo.
- Cero radios de borde en todo el sistema; bordes de 1-3px, dobles en los encabezados de ficha.
- Sello circular rotado (`.stamp`) como firma de "trabajo verificado"; aparece una sola vez, en el hero.
- Reposo plano; hover en tarjetas de proyecto es un desplazamiento duro con sombra sólida de color, no un glow difuso.

## Colors

### Primary
- **Naranja-óxido** (`#c3521f`): único acento del sistema — CTA primario al hover, bordes de hover en tarjetas, chips de tecnología, kicker de folio.
- **Verde** (`#4a6b3f` / botón WhatsApp `#3aa655`): exclusivo para el estado "en producción" (punto de estado) y el canal de contacto por WhatsApp. Nunca se usa como decoración.

### Neutral
- **Kraft** (`#e9e0c9`): fondo base de toda la página.
- **Papel** (`#f4efdc`): superficie de fichas (hero, tarjetas de proyecto, contacto) — más claro que el kraft de fondo.
- **Tinta** (`#20242b`): texto principal, bordes, botón primario.
- **Línea** (`#b9ad8c`) / **Apagado** (`#6b6450`): bordes internos de ficha y texto secundario/kicker mono.

### Semantic
- **Rojo** (`#a3302a`): reservado, sin uso activo en el build actual (heredado de la paleta de campo para un futuro estado de error/privado si se necesita).

### Named Rules
**The Stamp-Once Rule.** El sello circular "completado y verificado" aparece una sola vez, en el hero — no se repite en cada tarjeta de proyecto, donde el estado se comunica en cambio con un punto de color + texto (`.folio-tag .status`).

**The Production-Green Rule.** El verde está reservado exclusivamente a "en producción" y al canal de WhatsApp. Un proyecto personal usa el punto naranja ("Proyecto propio"), nunca verde.

## Typography

**Títulos:** Barlow Condensed, peso 700-800, mayúsculas, condensado — bloque de texto que se lee como un sello de goma.
**Kicker/firma:** Special Elite (máquina de escribir) — exclusivo para el renglón superior de cada ficha ("Orden de trabajo — ficha técnica").
**Datos tabulares:** JetBrains Mono — folios, estados, chips de tecnología, botones, navegación. Todo lo que es "dato" en vez de "título" vive en esta familia.

### Hierarchy
- **Display** (800, 3rem): `<h1>` del hero, "Edward Pittman".
- **Headline** (800, 2.1rem): títulos de sección ("Habilidades", "Proyectos", "¿Hablamos?").
- **Title** (800, 1.3rem): título de cada ficha de proyecto.
- **Kicker** (Special Elite, 1.05rem): logo del header y renglón superior de cada ficha.
- **Body** (500, 1.08rem): párrafos descriptivos.
- **Mono label** (700, 0.78rem, mayúsculas): kicker de folio, labels de sección, estado de proyecto.
- **Mono body** (700, 0.85rem): botones, chips de tecnología, navegación.

## Layout

Contenedor máximo de 1400px, padding lateral 5%, `5rem` de ritmo vertical entre secciones.

- **Hero:** grid 2 columnas (ficha de trabajo + foto en marco romboidal), colapsa a 1 columna en ≤1024px.
- **Skills:** grilla de celdas con borde compartido (`auto-fit, minmax(150px,1fr)`), como una tabla de inventario — sin gap, los bordes se solapan en -1px.
- **Projects:** grid `auto-fit, minmax(340px,1fr)` (destacados `minmax(460px,1fr)`), 1 columna en ≤768px.
- **Header:** fijo, fondo kraft semitransparente con blur, borde grueso inferior; sombra sutil tras 50px de scroll.
- **Menú móvil:** panel fullscreen deslizante (`left:-100%` → `left:0`) en ≤768px.

## Elevation & Depth

Sistema plano en reposo. El único gesto de profundidad es el hover de `.project-card`: desplazamiento duro `translate(-3px,-3px)` + sombra sólida sin desenfoque (`6px 6px 0 var(--orange)`) — como si la ficha de papel se levantara y proyectara su propio borde, no una sombra realista.

### Named Rules
**The Hard-Shadow Rule.** Ninguna sombra en el sistema lleva `blur`. Toda sombra es un desplazamiento sólido de color, nunca un glow difuso.

## Shapes

Cero radios en todo el sistema (`border-radius: 0` implícito, sin excepciones salvo el sello circular y los botones del carrusel/scroll-top, que son círculos por función, no decoración). Bordes de 1-3px en tinta; el header de cada ficha usa `border-bottom: 3px double`.

## Components

### Buttons
- **Shape:** rectos, sin radio, borde de 2px.
- **Primary:** fondo tinta, texto papel; hover vira a naranja sólido.
- **WhatsApp:** fondo y borde verde-wsp (`#3aa655`) de punta a punta — es el único botón con color de marca propio en reposo, porque es el canal de contacto real.

### Chips (`tech-badge`)
- Fondo naranja al 10%, borde naranja al 35%, texto naranja, mono 0.72rem, sin radio.

### Cards (`project-card`)
- Fondo kraft, borde tinta 2px, sin radio.
- Folio + estado en la cabecera de contenido (`folio-tag`): punto verde "En producción" o punto naranja "Proyecto propio".
- Hover: desplazamiento duro + sombra sólida naranja (ver Elevation & Depth).

### Carrusel de proyecto (heredado, restyleado)
Mismo mecanismo de antes (slides con cross-fade, sin librería externa): fondo de respaldo ahora es un rayado diagonal kraft/papel en vez de gradiente azul; botones prev/next circulares con borde tinta; indicadores de punto en tinta/naranja.

### Ficha de contacto
Reemplaza el formulario por correo (Formspree) por un botón único a WhatsApp (`wa.me`, con mensaje prellenado) — el canal que el usuario realmente revisa. LinkedIn queda como enlace secundario de texto, no como formulario.

## Do's and Don'ts

### Do:
- **Do** mantener el naranja-óxido como único acento interactivo/CTA — es la señal de marca del sistema.
- **Do** reservar el verde exclusivamente para "en producción" y WhatsApp.
- **Do** usar JetBrains Mono para todo dato tabular (folios, estados, botones); Barlow Condensed solo para títulos.
- **Do** mantener cero radios y sombras duras sin blur en cualquier componente nuevo.

### Don't:
- **Don't** introducir un segundo acento de color (azul, cian, morado) — rompe la identidad de ficha de trabajo.
- **Don't** usar glow difuso en ningún hover — el sistema es plano, con desplazamiento duro como único gesto de profundidad.
- **Don't** usar el verde como decoración fuera de "en producción"/WhatsApp.
- **Don't** redondear esquinas de tarjetas, botones o chips.
