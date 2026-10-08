import { Component } from '@angular/core';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.css']
})
export class SectionProjectsComponent {
  readonly projects = CPROJECTS_CONSTANT.slice(0, 3);
}
