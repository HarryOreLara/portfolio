import { Component, OnInit } from '@angular/core';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit{

  projects:IProjects[] = CPROJECTS_CONSTANT;

  constructor(){}

  ngOnInit(): void {
      
  }
}
