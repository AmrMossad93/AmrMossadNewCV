import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebAppProjectsComponent} from "./web-app-projects/web-app-projects.component";
import {MobileAppProjectsComponent} from "./mobile-app-projects/mobile-app-projects.component";
import { WebAppProjectDetailComponent } from './web-app-projects/web-app-project-detail/web-app-project-detail.component';
import {MobileAppProjectDetailComponent} from "./mobile-app-projects/mobile-app-project-detail/mobile-app-project-detail.component";

const routes: Routes = [
  {path: 'web-applications', component: WebAppProjectsComponent},
  {path: 'web-applications/:projectId', component: WebAppProjectDetailComponent},
  {path: 'mobile-applications', component: MobileAppProjectsComponent},
  {path: 'mobile-applications/:projectId', component: MobileAppProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsPageRoutingModule {
}
