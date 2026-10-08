import { Component } from '@angular/core';
import { CSKILLS_CONSTANT } from 'src/app/core/constants/CSkills.constant';
import { ISkill } from 'src/app/core/interfaces/ISkill.interface';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent {
  readonly featuredSkillNames = [
    'Angular',
    'TypeScript',
    'NestJs',
    'Spring Boot',
    'Docker',
    'Kubernetes',
    'Azure DevOps',
    'Microsoft Azure',
  ];

  skills: ISkill[] = this.featuredSkillNames
    .map((name) => CSKILLS_CONSTANT.find((skill) => skill.name === name))
    .filter((skill): skill is ISkill => Boolean(skill));
}
