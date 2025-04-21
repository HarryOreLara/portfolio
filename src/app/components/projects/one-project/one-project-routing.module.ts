import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneProjectComponent } from './one-project.component';

const routes: Routes = [
  {
    path: '', // Empty path for the main route of this module
    component: OneProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneProjectRoutingModule {}
