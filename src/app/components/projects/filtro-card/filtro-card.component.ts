import { Component, OnInit } from '@angular/core';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';

@Component({
  selector: 'app-filtro-card',
  templateUrl: './filtro-card.component.html',
  styleUrls: ['./filtro-card.component.css']
})
export class FiltroCardComponent implements OnInit{

  projects:IProjects[] = CPROJECTS_CONSTANT;

  constructor(){}

  ngOnInit(): void {
      console.log(this.projects);
  }
}
