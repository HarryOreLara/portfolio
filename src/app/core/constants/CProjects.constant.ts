import { TypeSkillEnum } from 'src/app/shared/utils/enum/type-skill.enum';
import { IProjects } from '../interfaces/IProjects.interface';

export const CPROJECTS_CONSTANT: IProjects[] = [
  {
    id: 1,
    name: 'Sistema de Venta de Pasajes Online - Emtrafesa',
    description:
      'Sistema de venta de pasajes online para la empresa Emtrafesa, que permite a los usuarios comprar boletos de manera rápida y sencilla.',
    valoraciones: 4.5,
    imgUrl: 'assets/projects/emtrafesa/emtrafesa_home.webp',
    imgs: [
      'assets/projects/emtrafesa/emtrafesa_home.webp',
      'assets/projects/emtrafesa/emtrafesa_about.webp',
      'assets/projects/emtrafesa/emtrafesa_flota.webp',
      'assets/projects/emtrafesa/emtrafesa_sucursales.webp',
    ],
    createdAt: '2023-01-15',
    lenguaje: 'TypeScript',
    tecnologia: {
      id: 1,
      name: 'Angular',
      description:
        'Framework para construir aplicaciones web de una sola página.',
      imgUrl: 'https://example.com/angular.webp',
      type: TypeSkillEnum.FRONTEND,
    },
    database: 'SQL Server',
    lenguajes: ['TypeScript', 'JavaScript'],
    tecnologias: ['Angular', 'SQL Server', 'Bootstrap'],
    icon: 'https://example.com/task-manager-icon.webp',
  },
  {
    id: 2,
    name: 'Sistema de Gestion Administrativa - Andeskar',
    description:
      'Sistema de gestión administrativa para la empresa Andeskar, que permite a los usuarios gestionar sus operaciones diarias de manera eficiente.',
    valoraciones: 4.8,
    imgUrl: 'assets/projects/andeskar/andeskar_bizlink.webp',
    imgs: [
      'https://example.com/e-commerce1.jpg',
      'https://example.com/e-commerce2.jpg',
    ],
    createdAt: '2022-11-10',
    lenguaje: 'TypeScript',
    tecnologia: {
      id: 1,
      name: 'Angular',
      description:
        'Framework para construir aplicaciones web de una sola página.',
      imgUrl: 'https://example.com/angular.webp',
      type: TypeSkillEnum.FRONTEND,
    },
    database: 'Sql Server',
    lenguajes: ['TypeScript', 'JavaScript'],
    tecnologias: ['Angular', 'SQL Server', 'PrimeNg'],
    icon: 'https://example.com/e-commerce-icon.webp',
  },
  {
    id: 3,
    name: 'Dicta Colombia - Students',
    description:
      'Sistema de gestión de estudiantes para la plataforma Dicta Colombia, que permite a los usuarios gestionar sus cursos y estudiantes de manera eficiente.',
    valoraciones: 4.7,
    imgUrl: 'assets/projects/dicta/dicta_home.webp',
    imgs: [
      'https://example.com/social-network1.jpg',
      'https://example.com/social-network2.jpg',
    ],
    createdAt: '2023-03-22',
    lenguaje: 'JavaScript',
    tecnologia: {
      id: 1,
      name: 'Angular',
      description:
        'Framework para construir aplicaciones web de una sola página.',
      imgUrl: 'https://example.com/angular.webp',
      type: TypeSkillEnum.FRONTEND,
    },
    database: 'MongoDB',
    lenguajes: ['JavaScript', 'HTML', 'CSS'],
    tecnologias: ['Express', 'Node.js', 'MongoDB'],
    icon: 'https://example.com/social-network-icon.webp',
  },
  {
    id: 4,
    name: 'Sistema de Gestión Escolar',
    description: 'Construyendo el futuro a través del desarrollo de software.',
    valoraciones: 4.6,
    imgUrl:
      'https://chayxe.vn/wp-content/uploads/2023/02/yamaha-yzf-r7-2023-ra-mat-voi-mau-trang-cuc-ngau-chayxe-vn-3.jpg',
    imgs: [
      'https://example.com/school-management1.jpg',
      'https://example.com/school-management2.jpg',
    ],
    createdAt: '2023-05-15',
    lenguaje: 'TypeScript',
    tecnologia: {
      id: 2,
      name: 'NestJs',
      description:
        'Framework para construir aplicaciones del lado del servidor con TypeScript.',
      imgUrl: 'assets/skills/nestjs.svg',
      type: TypeSkillEnum.BACKEND,
    },
    database: 'PostgreSQL',
    lenguajes: ['TypeScript', 'JavaScript'],
    tecnologias: ['NestJS', 'PostgreSQL', 'TypeORM'],
    icon: 'https://example.com/school-management-icon.webp',
  },
  {
    id: 5,
    name: 'Aplicación de Gestión de Inventarios',
    description:
      'Proyectos que reflejan mi dedicación al detalle y la excelencia técnica.',
    valoraciones: 4.9,
    imgUrl: 'https://lucero.com.pe/wp-content/uploads/2023/03/3-11.webp',
    imgs: [
      'https://example.com/inventory-management1.jpg',
      'https://example.com/inventory-management2.jpg',
    ],
    createdAt: '2022-08-21',
    lenguaje: 'C#',
    tecnologia: {
      id: 7,
      name: '.Net Core',
      description:
        'Framework de desarrollo de aplicaciones multiplataforma de Microsoft.',
      imgUrl: 'assets/skills/net.svg',
      type: TypeSkillEnum.BACKEND,
    },
    database: 'SQL Server',
    lenguajes: ['C#', 'JavaScript'],
    tecnologias: ['ASP.NET', 'SQL Server', 'Entity Framework'],
    icon: 'https://example.com/inventory-management-icon.webp',
  },
];
