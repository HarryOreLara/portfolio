import { TypeSkillEnum } from "src/app/shared/utils/enum/type-skill.enum";

export interface ISkill {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    type: TypeSkillEnum
}