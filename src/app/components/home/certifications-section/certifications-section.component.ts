import { Component } from '@angular/core';

interface Certification {
  title: string;
  provider: string;
  shortName: string;
  platform: string;
  description: string;
  topics: string[];
  imageUrl: string;
  credentialUrl: string;
  accent: 'microsoft' | 'aws' | 'openai' | 'gcp';
}

@Component({
  selector: 'app-certifications-section',
  templateUrl: './certifications-section.component.html',
  styleUrls: ['./certifications-section.component.css'],
})
export class CertificationsSectionComponent {
  /**
   * Para añadir o actualizar una credencial:
   * 1. Guarda su imagen en src/assets/certifications.
   * 2. Cambia imageUrl por la ruta del archivo o por una URL pública HTTPS.
   * 3. Reemplaza credentialUrl por el enlace verificable de Microsoft Learn o Credly.
   */
  readonly certifications: Certification[] = [
    {
      title: 'GitHub Copilot',
      provider: 'Microsoft',
      shortName: 'MS',
      platform: 'Microsoft Learn',
      description:
        'Uso responsable de GitHub Copilot, Uso de las características de GitHub Copilot, Características de GitHub Copilot, Descripción de los datos y la arquitectura de Copilot de GitHub ,Aplicación de la ingeniería de solicitudes y creación de contexto, Mejora de la productividad del desarrollador con GitHub Copilot, Configuración de privacidad, exclusiones de contenido y medidas de seguridad',
      topics: ['Azure', 'IA', 'GitHub Copilot', 'Skills', 'Agents'],
      imageUrl: 'assets/certifications/copilot.jpg',
      credentialUrl:
        'https://learn.microsoft.com/api/credentials/share/es-es/HarryOreLara-9388/3A2C7EBB0DED82AD?sharingId=4994EE86E5146D35',
      accent: 'microsoft',
    },
    {
      title: 'AI-900',
      provider: 'Microsoft',
      shortName: 'MS',
      platform: 'Microsoft Learn',
      description:
        'Identificación de conceptos y funcionalidades de inteligencia artificial, Implementación de soluciones de inteligencia artificial con Microsoft Foundry',
      topics: ['Azure', 'Foundry', 'GenAI', 'Vision'],
      imageUrl: 'assets/certifications/ai-900.jpg',
      credentialUrl:
        'https://learn.microsoft.com/api/credentials/share/es-es/HarryOreLara-9388/FF7FF8D83D8DB354?sharingId=4994EE86E5146D35',
      accent: 'microsoft',
    },
    // {
    //   title: 'AI-900',
    //   provider: 'Microsoft',
    //   shortName: 'MS',
    //   platform: 'Microsoft Learn',
    //   description:
    //     'Identificación de conceptos y funcionalidades de inteligencia artificial, Implementación de soluciones de inteligencia artificial con Microsoft Foundry',
    //   topics: ['Azure', 'Foundry', 'GenAI', 'Vision'],
    //   imageUrl: 'assets/certifications/ai-900.jpg',
    //   credentialUrl:
    //     'https://learn.microsoft.com/api/credentials/share/es-es/HarryOreLara-9388/FF7FF8D83D8DB354?sharingId=4994EE86E5146D35',
    //   accent: 'openai',
    // },
    // {
    //   title: 'AI-900',
    //   provider: 'Microsoft',
    //   shortName: 'MS',
    //   platform: 'Microsoft Learn',
    //   description:
    //     'Identificación de conceptos y funcionalidades de inteligencia artificial, Implementación de soluciones de inteligencia artificial con Microsoft Foundry',
    //   topics: ['Azure', 'Foundry', 'GenAI', 'Vision'],
    //   imageUrl: 'assets/certifications/ai-900.jpg',
    //   credentialUrl:
    //     'https://learn.microsoft.com/api/credentials/share/es-es/HarryOreLara-9388/FF7FF8D83D8DB354?sharingId=4994EE86E5146D35',
    //   accent: 'openai',
    // },
    // {
    //   title: 'AI-900',
    //   provider: 'Microsoft',
    //   shortName: 'MS',
    //   platform: 'Microsoft Learn',
    //   description:
    //     'Identificación de conceptos y funcionalidades de inteligencia artificial, Implementación de soluciones de inteligencia artificial con Microsoft Foundry',
    //   topics: ['Azure', 'Foundry', 'GenAI', 'Vision'],
    //   imageUrl: 'assets/certifications/ai-900.jpg',
    //   credentialUrl:
    //     'https://learn.microsoft.com/api/credentials/share/es-es/HarryOreLara-9388/FF7FF8D83D8DB354?sharingId=4994EE86E5146D35',
    //   accent: 'openai',
    // },
  ];
}
