import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/Home-Page/home-page.module').then(
        m => m.HomePageModule
      )
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./Pages/About-Me-Page/about-me-page.module').then(
        m => m.AboutMePageModule
      )
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./Pages/Resume-Page/resume-page.module').then(
        m => m.ResumePageModule
      )
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./Pages/Projects-Page/projects-page.module').then(
        m => m.ProjectsPageModule
      )
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./Pages/Services-Page/services-page.module').then(
        m => m.ServicesPageModule
      )
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./Pages/Events-Page/events-page.module').then(
        m => m.EventsPageModule
      )
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./Pages/Contact-Page/contact.module').then(
        m => m.ContactModule
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
