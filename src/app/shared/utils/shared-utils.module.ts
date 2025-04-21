import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTypeSkillPipe } from './pipes/filter-type-skill.pipe';



@NgModule({
  declarations: [
    FilterTypeSkillPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterTypeSkillPipe
  ],
})
export class SharedUtilsModule { }
