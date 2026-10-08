# Plan de mejora del portafolio

Objetivo: lograr que un reclutador entienda en menos de 15 segundos que Harry es
Frontend Developer especializado en Angular, encuentre evidencia de trabajo real
y tenga una ruta corta para contactarlo.

## Diagnóstico resumido

### Fortalezas encontradas

- Hay tres productos reales con capturas, contexto, retos e impacto.
- El stack demuestra amplitud: Angular, TypeScript, RxJS, PrimeNG, StencilJS,
  APIs, Docker y nube.
- Existen rutas separadas para proyectos, experiencia y contacto.
- La aplicación ya usa lazy loading y genera un build de producción válido.

### Problemas que reducían el impacto

- El primer mensaje era una descripción larga y generalista; la especialidad
  frontend no se entendía de inmediato.
- La portada enumeraba tecnologías, pero no contaba qué problemas se resolvieron.
- La navegación no tenía identidad personal, estado activo ni una acción de
  contacto directa.
- Los proyectos dependían de estilos inline y repetían markup en vez de usar la
  fuente de datos existente.
- Faltaban jerarquía visual, estados de foco consistentes y metadatos básicos en
  español para buscadores y enlaces compartidos.
- Las páginas internas todavía presentan textos extensos, datos con fechas
  dinámicas y varios detalles de ortografía/consistencia.

## Fases

| Fase | Objetivo | Entregables | Estado |
| --- | --- | --- | --- |
| 1. Posicionamiento y portada | Comunicar especialidad y evidencia en segundos | Hero, navegación, proyectos destacados, stack focalizado, responsive, SEO base | Completada |
| 2. Casos de estudio | Demostrar criterio de frontend, no solo capturas | Problema, rol, decisiones, arquitectura, resultados verificables, galería accesible | Pendiente |
| 3. Experiencia y contacto | Reducir fricción para evaluar y contactar | Timeline resumido, logros medibles, formulario o CTA directo, footer profesional | Pendiente |
| 4. Calidad técnica | Hacer que el repositorio también sea evidencia | Tipado, constantes limpias, tests útiles, lint/format, accesibilidad WCAG, manejo de errores | Pendiente |
| 5. Rendimiento y visibilidad | Mejorar carga, indexación y medición | Imágenes optimizadas, budgets estrictos, Lighthouse, Open Graph, sitemap/robots y analítica | Pendiente |
| 6. Actualización tecnológica | Mostrar vigencia del stack | Plan de migración Angular, standalone components, signals donde aporten, CI de build/test | Pendiente |

## Orden recomendado

No conviene comenzar por una migración grande de Angular. Primero hay que elevar
la señal profesional del contenido; después convertir cada proyecto en evidencia
técnica y finalmente endurecer arquitectura, pruebas, rendimiento y versión del
framework. Así cada fase deja una mejora visible y publicable.

## Criterios de éxito generales

- Un visitante identifica nombre, rol, especialidad y propuesta de valor sin
  hacer scroll.
- Cada afirmación importante se respalda con un proyecto o experiencia.
- La navegación completa funciona con teclado y en móvil.
- El build, los tests y los presupuestos de tamaño se verifican en CI.
- No se publican métricas inventadas: todo número debe poder explicarse en una
  entrevista.

Ver el alcance ejecutado en [FASE-01.md](./FASE-01.md).
