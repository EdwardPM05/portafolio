# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el mismo peso: reclutadores/equipos de contratación evaluando a Edward Pittman para un puesto de ingeniero de software, y clientes o empresas (PyMEs, negocios locales) evaluando contratarlo directamente para un proyecto freelance.

## Product Purpose

Portafolio personal de Edward Pittman, Ingeniero de Software. Su función es demostrar, con proyectos reales y funcionando (no ejercicios de práctica), que puede resolver problemas de negocio de punta a punta: desde una CLI que usa él mismo hasta sistemas en producción que operan empresas reales.

## Positioning

Full-stack con impacto de negocio real, no solo ejercicios de portafolio: varios de los proyectos mostrados (Nova Smart web/app/bandeja WhatsApp, ERP Goyo, SIMATV) son sistemas en producción que empresas reales usan hoy para operar — no clones ni tutoriales. Eso es lo que un desarrollador con años similares de experiencia normalmente no puede mostrar.

## Operating Context

- Los visitantes llegan por link directo (CV, LinkedIn, referido) y navegan solos, sin acompañamiento.
- El CV se descarga en PDF desde el hero.
- Los proyectos se agrupan por tarjeta con carrusel de capturas reales (no mockups) y, cuando aplica, link a demo en vivo o al repositorio.
- Varios proyectos son herramientas internas para empresas (Nova Smart, Goyo, SIMA) sin demo pública — solo capturas + descripción; eso es intencional y no debe leerse como "incompleto".

## Capabilities and Constraints

- Sitio estático (Vite + React), sin backend propio; el formulario de contacto envía vía Formspree.
- 16 proyectos activos en el catálogo, con conteos de capturas muy dispares (3 a 16 imágenes) — el layout debe sostenerse igual de bien con tarjetas cortas y largas.
- Algunos proyectos son privados/internos de empresas (Nova Smart, SIMATV, ERP Goyo, WhatsApp automation/bandeja) y no tienen — ni tendrán — link público a código; otros son open source con paquete npm o repo público.
- Un subconjunto de proyectos está construido para clientes/empresas de terceros bajo encargo (Nova Smart, SIMA, Goyo), y otro subconjunto son herramientas propias que Edward construyó para su propio flujo de trabajo (ControlPorts, FastData, Gracias-Edward) — esta distinción es real y vale la pena que el diseño la deje leer, no que la borre.

## Brand Commitments

- Nombre: Edward Pittman. Título: Ingeniero de Software / Desarrollador Full Stack.
- Marca personal actual: monograma "EP" como logo, sin paleta ni tipografía de marca personal definida más allá de lo ya implementado en código.
- Perfiles vinculados: GitHub (github.com/EdwardPM05) y LinkedIn, ambos enlazados desde el hero.

## Evidence on Hand

- 16 proyectos reales con capturas de pantalla auténticas (no mockups) en `public/images/projects/`, entre 3 y 16 imágenes por proyecto.
- CV descargable en PDF en `public/CV/`.
- Sin testimonios, logos de clientes ni métricas de negocio publicadas todavía — no inventar ninguno de los tres.

## Product Principles

1. Los proyectos con impacto real en negocio (sistemas en producción para empresas) son la prueba central del portafolio — deben tener la mayor prominencia visual, no quedar al mismo nivel que ejercicios de práctica.
2. Distinguir sin avergonzar: herramientas propias (CLIs, extensiones) y encargos para clientes son ambos legítimos, pero comunican cosas distintas (iniciativa propia vs. capacidad de entrega para terceros) — el diseño puede separarlos en vez de mezclarlos en una lista plana.
3. Cada proyecto vive de su evidencia (capturas reales, no íconos genéricos ni copy vacío) — cuando falta evidencia visual, decirlo es mejor que rellenar con un placeholder que parezca terminado.
4. Sirve a dos audiencias a la vez (reclutador y cliente potencial) sin fragmentar la experiencia en dos portafolios separados.

## Accessibility & Inclusion

Sin requisito específico confirmado más allá de buenas prácticas estándar de accesibilidad web.
