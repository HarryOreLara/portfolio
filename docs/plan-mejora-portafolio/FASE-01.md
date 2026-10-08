# Fase 1 — Posicionamiento y portada

## Hipótesis

El principal problema no era la falta de experiencia, sino que la portada no la
priorizaba. Un reclutador debía leer un párrafo largo para descubrir el foco del
perfil y después interpretar por su cuenta una cuadrícula de capturas.

## Cambios realizados

1. Propuesta de valor enfocada en Frontend Angular desde el primer encabezado.
2. CTAs primarios para explorar proyectos y descargar el CV.
3. Accesos visibles a GitHub, LinkedIn y ubicación/modalidad.
4. Resumen técnico visual con arquitectura, componentes, APIs, CI/CD y testing.
5. Proyectos generados desde `CPROJECTS_CONSTANT`, con contexto, stack y enlace
   semántico a cada caso.
6. Stack reducido en portada a las herramientas que refuerzan el posicionamiento;
   se evitó presentar todas las tecnologías con el mismo peso.
7. Navegación sticky, responsive, con marca personal, ruta activa, menú móvil y
   contacto directo.
8. Tokens visuales globales, foco de teclado, idioma, descripción SEO y color del
   navegador.

## Decisiones de contenido

- Se evitaron años de experiencia porque las fechas del repositorio no permiten
  respaldar todavía un número exacto sin ambigüedad.
- Se usaron únicamente tres cifras verificables desde el contenido actual: tres
  proyectos y tres industrias. Antes de publicar, Harry debe confirmar que desea
  conservar el estado «Disponible para conversar».
- La frase «Frontend Developer» domina la narrativa, mientras backend, cloud y
  DevOps aparecen como capacidades complementarias.

## Validación de esta fase

- [x] Build de producción antes y después de los cambios.
- [x] Comprobación de TypeScript con `tsc --noEmit`.
- [x] Componentes construidos con Angular 16 y los datos existentes.
- [x] Diseño adaptable para escritorio, tablet y móvil.
- [x] Elementos interactivos principales con semántica de enlace/botón y foco.
- [ ] Suite heredada: se ejecutó, pero 14 de 19 pruebas fallan porque sus
  `TestBed` no importan Router, HttpClient, componentes hijos, pipes o servicios.
  Se corregirá como parte de la fase 4; no son errores del build de producción.
- [ ] Revisión visual final en los navegadores objetivo.
- [ ] Confirmación del propietario sobre disponibilidad, textos y métricas.

## Próxima acción recomendada

Comenzar la fase 2 por Andeskar, el caso con mayor evidencia técnica. Convertir
su detalle en una narrativa breve: contexto, responsabilidad personal, flujo
principal, tres decisiones frontend, resultado verificable y aprendizajes. Ese
caso servirá como plantilla para Emtrafesa y Dicta.
