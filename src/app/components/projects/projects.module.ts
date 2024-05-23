import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { FiltroCardComponent } from './filtro-card/filtro-card.component';
import { ListProjectComponent } from './list-project/list-project.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    ProjectsComponent,
    FiltroCardComponent,
    ListProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CarouselModule,
    PaginatorModule,
    ButtonModule
  ]
})
export class ProjectsModule { }
