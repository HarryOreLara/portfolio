import { Component, OnInit } from '@angular/core';
import { CMENU_PROJECT_CONSTANT } from 'src/app/core/constants/CMenuProjects.constant';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { IMenuProject } from 'src/app/core/interfaces/IMenuProjects.interface';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';

@Component({
  selector: 'app-filtro-card',
  templateUrl: './filtro-card.component.html',
  styleUrls: ['./filtro-card.component.css'],
})
export class FiltroCardComponent implements OnInit {
  projects: IProjects[] = CPROJECTS_CONSTANT;
  menuItems: IMenuProject[] = CMENU_PROJECT_CONSTANT;


  first = 0;

  rows = 10;
  constructor() {}

  ngOnInit(): void {}

  showProjects(id: any) {
    console.log(id);
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}
}
