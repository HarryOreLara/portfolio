import { TypeSkillEnum } from 'src/app/shared/utils/enum/type-skill.enum';
import { ISkill } from '../interfaces/ISkill.interface';

export const CSKILLS_CONSTANT: ISkill[] = [
  {
    id: 1,
    name: 'Angular',
    description:
      'Framework para construir aplicaciones web dinámicas y de una sola página.',
    imgUrl: 'assets/skills/angular.svg',
    type: TypeSkillEnum.FRONTEND
  },
  {
    id: 2,
    name: 'NestJs',
    description:
      'Framework para construir aplicaciones del lado del servidor con TypeScript.',
    imgUrl: 'assets/skills/nestjs.svg',
    type: TypeSkillEnum.BACKEND
  },
  {
    id: 3,
    name: 'EspressJs',
    description:
      'Framework minimalista para construir aplicaciones web y API en Node.js.',
    imgUrl: 'assets/skills/expressjs.svg',
    type: TypeSkillEnum.BACKEND
  },
  {
    id: 4,
    name: 'Flutter',
    description:
      'Framework de UI para crear aplicaciones nativas de alta calidad para iOS y Android desde una única base de código.',
    imgUrl: 'assets/skills/flutter.svg',
    type: TypeSkillEnum.MOBILE
  },
  {
    id: 5,
    name: 'JavaScript',
    description:
      'Lenguaje de programación versátil y ampliamente utilizado para el desarrollo web.',
    imgUrl: 'assets/skills/javascript.svg',
    type: TypeSkillEnum.LENGUAJE
  },
  {
    id: 6,
    name: 'TypeScript',
    description:
      'Un superconjunto de JavaScript que agrega tipado estático y características avanzadas.',
    imgUrl: 'assets/skills/typescript.svg',
    type: TypeSkillEnum.LENGUAJE
  },
  {
    id: 7,
    name: '.Net Core',
    description:
      'Framework de desarrollo de aplicaciones multiplataforma de Microsoft.',
    imgUrl: 'assets/skills/net.svg',
    type: TypeSkillEnum.BACKEND
  },
  {
    id: 8,
    name: 'SQL Server',
    description:
      'Sistema de gestión de bases de datos relacional desarrollado por Microsoft.',
    imgUrl: 'assets/skills/sqlserver.svg',
    type: TypeSkillEnum.DATABASE
  },
  {
    id: 9,
    name: 'PostgreSQL',
    description:
      'Sistema de gestión de bases de datos relacional y objeto altamente extensible.',
    imgUrl: 'assets/skills/postgresql.svg',
    type: TypeSkillEnum.DATABASE
  },
  {
    id: 10,
    name: 'MongoDB',
    description: 'Base de datos NoSQL orientada a documentos.',
    imgUrl: 'assets/skills/mongodb.svg',
    type: TypeSkillEnum.DATABASE
  },
  {
    id: 11,
    name: 'Docker',
    description:
      'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.',
    imgUrl: 'assets/skills/docker.svg',
    type: TypeSkillEnum.DEVOPS
  },
  {
    id: 12,
    name: 'Git',
    description:
      'Sistema de control de versiones distribuido para rastrear cambios en el código fuente.',
    imgUrl: 'assets/skills/git.svg',
    type: TypeSkillEnum.OTHER
  },
  {
    id: 13,
    name: 'GraphQL',
    description:
      'Lenguaje de consulta para APIs y un entorno de ejecución para cumplir esas consultas con tus datos existentes.',
    imgUrl: 'assets/skills/graphql.svg',
    type: TypeSkillEnum.OTHER
  },
  {
    id: 14,
    name: 'Google Cloud',
    description:
      'Plataforma de computación en la nube que ofrece una variedad de servicios de computación, almacenamiento y análisis.',
    imgUrl: 'assets/skills/google_cloud.svg',
    type: TypeSkillEnum.DEVOPS
  },
  {
    id: 15,
    name: 'Microsoft Azure',
    description:
      'Plataforma de computación en la nube de Microsoft que ofrece servicios de computación, almacenamiento y análisis.',
    imgUrl: 'assets/skills/microsoft_azure.svg',
    type: TypeSkillEnum.DEVOPS
  },
  {
    id: 16,
    name: 'StencilJs',
    description:
      'Librería para crear componentes web reutilizables y compatibles con múltiples frameworks.',
    imgUrl: 'assets/skills/stenciljs.svg',
    type: TypeSkillEnum.LIBRERIA
  },
  {
    id: 17,
    name: 'Tailwind CSS',
    description:
      'Framework CSS de utilidad primero para crear diseños personalizados sin salir del HTML.',
    imgUrl: 'assets/skills/tailwindcss.svg',
    type: TypeSkillEnum.LIBRERIA
  },
];
