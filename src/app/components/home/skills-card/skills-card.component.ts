import { Component } from '@angular/core';
import { CSKILLS_CONSTANT } from 'src/app/core/constants/CSkills.constant';
import { ISkill } from 'src/app/core/interfaces/ISkill.interface';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent {


  skills:ISkill[] = CSKILLS_CONSTANT;

}
