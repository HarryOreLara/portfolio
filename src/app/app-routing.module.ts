import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'notfound',
    loadChildren: () =>
      import('./components/notfound/notfound.module').then(
        (m) => m.NotfoundModule
      ),
  },
  {
    path:'stinger/login/auth/xyz/123',
    loadChildren:()=>import('./components/login/login.module').then(m=>m.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
