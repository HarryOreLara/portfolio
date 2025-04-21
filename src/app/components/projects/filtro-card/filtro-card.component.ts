import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { CSKILLS_CONSTANT } from 'src/app/core/constants/CSkills.constant';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';
import { ISkill } from 'src/app/core/interfaces/ISkill.interface';

@Component({
  selector: 'app-filtro-card',
  templateUrl: './filtro-card.component.html',
  styleUrls: ['./filtro-card.component.css'],
})
export class FiltroCardComponent implements OnInit {
  projects: IProjects[] = [];
  menuItems: ISkill[] = CSKILLS_CONSTANT;
  selectedItem: number = 1;

  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {
    this.selectAnotherProject();
  }


  selectAnotherProject(project?: ISkill) {
    const projectId = project?.id ?? 1;
    this.selectedItem = projectId;
    this.projects = CPROJECTS_CONSTANT.filter(
      (item) => item.tecnologia.id === projectId
    ).slice(0, 3);
  }

  reset() {
    this.selectedItem = 1;
    this.projects = CPROJECTS_CONSTANT.filter(
      (item) => item.tecnologia.id === this.selectedItem
    ).slice(0, 3);
  }




  goToProject(project: IProjects) {
    this.router.navigate(['projects/one-project', project.id]);
  }

}
