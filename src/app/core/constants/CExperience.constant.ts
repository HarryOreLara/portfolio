import { IExperience } from '../interfaces/IExperience.interface';

export const CEXPERIENCE_CONSTANT: IExperience[] = [
  {
    id: 1,
    empresa: 'Dicta Colombia',
    rubro: 'Educacion Digital',
    descripcion:
      'Empresa dedicada a las tendencias digitales y la educacion digital.',
    puesto: 'Desarrollador y supervisor de Proyectos',
    fechaInicio: new Date('2022-01-01'),
    fechaFin: new Date('2023-01-01'),
    imgUrl:
      'https://dictacolombia.com/wp-content/uploads/2022/10/logo-yellow.webp',
    actividades: [
      'Diseño y desarrollo de un sistema de administración de recursos utilizando Angular 15, PrimeNG y PrimeFlex.',
      'Integración de una API REST personalizada desarrollada en NestJs para la gestión eficiente de servicios tanto en el sistema de ventas como en el sistema 3D interactivo',
      'Implementación de almacenamiento en la nube mediante Azure Blob Storage para la gestión de imágenes y texturas utilizadas en la renderización 3D. Optimización de la entrega de estos recursos mediante Azure Content Delivery Network (CDN), asegurando una carga rápida y eficiente desde cualquier ubicación.',
      'Desarrollo de prototipos 3D interactivos con Angular y Three.js, creando componentes personalizados para la construcción del universo Dictariano.',
      'Personalización de componentes reutilizables utilizando StencilJS y estilos con CSS nativo, manteniendo coherencia visual y adaptabilidad en diferentes vistas.',
      'Participación activa en reuniones interdiarias, presentando avances semanales y colaborando estrechamente con el equipo para la planificación, revisión y mejora continua del producto',
    ],
    tecnologias: [
      'Angular',
      'Node.js',
      'NestJS',
      'JavaScript',
      'TypeScript',
      'HTML',
    ],
  },
  {
    id: 2,
    empresa: 'Emtrafesa S.A.C',
    rubro: 'Transporte',
    descripcion:
      'Empresa dedicada al transporte de pasajeros y encomiendas en todo el pais.',
    puesto: 'Desarrollador Junior',
    fechaInicio: new Date('2021-01-01'),
    fechaFin: new Date('2022-01-01'),
    imgUrl:
      'https://www.emtrafesa.com/portal/wp-content/uploads/2022/02/Logos-2.0-para-web-5.png',
    actividades: [
      'Diseño, desarrollo y despliegue en producción de la nueva página web de ventas con Angular 16, usando PrimeNg 16, Primeflex y Bootstrap 5 para su customización de componentes. Además, fue integrada con un backend en NestJS basado en microservicios',
      'Implementación y configuración de microservicios en Windows Server, conectados a MongoDB y gestionados a través de un balanceador de carga NATS, permitiendo la integración con el sistema de pagos de Niubiz.',
      'Despliegue en IIS para la versión web en Windows Server.',
      'Creación de API REST con .NET Framework y SQL Server para la integración con las aplicaciones móviles.',
      'Desarrollo de aplicaciones móviles con Flutter para satisfacer los requerimientos de distintas áreas de la empresa.',
      'Implementación de un sistema de mensajería en colas utilizando RabbitMQ, Node.js y Docker para optimizar la comunicación entre servicios.',
      'Implementación de pruebas unitarias con Karma y Jasmine, y análisis de calidad de código estático con SonarQube',
    ],
    tecnologias: [
      'Angular',
      '.NET Core',
      'JavaScript',
      'TypeScript',
      'NestJS',
      'IIS',
    ],
  },
  {
    id: 3,
    empresa: 'Andeskar S.A.C',
    rubro: 'Transporte de Encomiendas',
    descripcion:
      'Empresa dedicada al transporte de encomiendas y carga en todo el pais.',
    fechaInicio: new Date('2020-01-01'),
    fechaFin: new Date('2021-01-01'),
    imgUrl:
      'https://ii.ct-stc.com/3/logos/empresas/2021/08/04/27d6edddbaa04391b12c170147004thumbnail.png',
    puesto: 'Desarrollador Frontend',
    actividades: [
      'Desarrollo e implementación del sistema principal de la empresa dedicada al rubro de cargas y encomiendas, utilizando Angular 16, PrimeNG y PrimeFlex.',
      'Personalización y modularización de componentes reutilizables mediante StencilJS, mejorando la consistencia visual y la escalabilidad del sistema.',
      'Consumo de servicios mediante API REST y  GraphQL para una gestión eficiente de datos',
      'Uso intensivo de RxJS para manejar flujos de datos asincrónicos, combinaciones de streams, y lógica reactiva compleja en servicios y componentes.',
      'Integración con Bizlink para emisión de comprobantes electrónicos, guías electrónicas y gestión de órdenes de servicio.',
      'Conexión con RENIEC para validación de identidad de cliente',
      'Despliegue en Google Cloud con Docker y Kubernetes, aplicando prácticas de CI/CD para automatización de pruebas y despliegues',
      'Aplicación de la metodología ágil Scrum, presentando avances periódicos al cliente y ajustando funcionalidades de forma iterativa.',
      'Participación en la planificación y desarrollo inicial de un sistema de reportería distribuida basado en microfrontends federados, diseñado para gestionar tiketeras y mostrar PDFs dinámicos.',
      'Amplio uso de formularios reactivos para el manejo estructurado y validado de datos complejos en formularios de clientes, agencias, embarques, ordenes de servicio, pagos, etc.',
      'Implementación de pruebas unitarias con Karma y Jasmine, y análisis de calidad de código estático con SonarQube para mantener altos estándares de mantenibilidad y cobertura de pruebas',
    ],
    tecnologias: [
      'Angular',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'CI/CD',
    ],
  },
];
