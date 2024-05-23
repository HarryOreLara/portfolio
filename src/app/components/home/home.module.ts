import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ButtonModule } from 'primeng/button';
import { SectionPresentationComponent } from './section-presentation/section-presentation.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';
@NgModule({
  declarations: [
    HomeComponent,
    SectionPresentationComponent,
    SectionProjectsComponent,
    SkillsCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule
  ]
})
export class HomeModule { }
