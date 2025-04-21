import { Pipe, PipeTransform } from '@angular/core';
import { TypeSkillEnum } from '../enum/type-skill.enum';
import { ISkill } from 'src/app/core/interfaces/ISkill.interface';

@Pipe({
  name: 'filterTypeSkill',
})
export class FilterTypeSkillPipe implements PipeTransform {
  transform(menu: ISkill[]): ISkill[] {
    if (!menu) return [];

    const newMenu = menu.filter((item) => {
      switch (item.type) {
        case TypeSkillEnum.BACKEND:
        case TypeSkillEnum.FRONTEND:
        case TypeSkillEnum.MOBILE:
        case TypeSkillEnum.FRAMEWORK:
        case TypeSkillEnum.DEVOPS:
          return true;
        default:
          return false;
      }
    });

    return newMenu;
  }
}
