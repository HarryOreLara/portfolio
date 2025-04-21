import { ISkill } from "./ISkill.interface";

export interface IProjects{
    id:number;
    name:string;
    description:string;
    valoraciones?:number;
    imgUrl:string;
    imgs?:string[];
    createdAt:string;
    lenguaje:string;
    tecnologia:ISkill;
    database?:string;
    lenguajes?:string[];
    tecnologias?:string[];
    icon?:string;
    impacto?:string[];
    retosSuperados?:string[];
    link?:string;
}