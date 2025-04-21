
export interface IExperienceStyle {
    position: string;
    top: string;
    left: string;
    width: string;
    height: string;
}


export interface IExperience {
    id:number;
    empresa: string;
    rubro: string;
    puesto: string;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;
    actividades: string[];
    imgUrl: string;
    tecnologias?: string[];
    style?: IExperienceStyle;
}